(() => {
  "use strict";

  // Each digit is a color-area ID. Every board has one solution under the
  // row, column, area, and eight-neighbor non-touching rules.
  const PUZZLES = {
    1: ["3311333303020000", "1333111311020002", "0002001230121111"],
    2: ["3300333011001222", "3300130012001222", "2211222123303330"],
    3: ["4444444443222032220312222", "1111111400144023330033000", "0001100411000310223322223"],
    4: ["3333033311233112444424444", "2224422144333443333433304", "4111144001442002220032200"],
    5: ["333322333322333334533334511000111111", "055555555555511544112222222222222223", "555333115333033333000342000044000444"],
    6: ["001111001133033333033355332355444355", "444200442223442223442223111233511133", "221100221100211100511111555333555443"],
    7: ["4443335444455544446114441111441111100111110221111", "3000006400000641000064144666444456644445664444562", "1014444111144411116661111366133336623333652236666"],
    8: ["5555333555566655566665552664522226602222660221266", "6644122444412204441120444442044444400544440555534", "4446666466666622661552211111111111311111131110111"],
    9: ["0011166600166655204655552445557722447777223377722333777222222222", "4661100046616600456666005526600055555000555557705555533055555333", "4444444344000033440030334463333344666667241667772216657722115557"],
    10: ["3666611166661155666666552266665526666644266674440007744400000044", "2222277700002777000447770000777700036335100333350033333533333333", "4661660046616600556666005526600055565000555557705555533055555333"]
  };
  const COLORS = ["#f9e5e2", "#e7f0dc", "#e3edf8", "#f8ebcc", "#eee5f5", "#dff0ec", "#fae7d4", "#e6e7f7"];
  const STORAGE_LEVEL = "shimaenaga-color-v2-level";
  const STORAGE_BEST = "shimaenaga-color-v2-best-";
  const board = document.getElementById("board");
  const levelSelect = document.getElementById("level-select");
  const countEl = document.getElementById("count");
  const statusEl = document.getElementById("status");
  const puzzleNumberEl = document.getElementById("puzzle-number");
  const timerEl = document.getElementById("timer");
  const bestEl = document.getElementById("best");
  const clearPanel = document.getElementById("clear-panel");
  const clearTimeEl = document.getElementById("clear-time");
  const nextLevelButton = document.getElementById("next-level");

  let level = 1;
  let puzzleIndex = -1;
  let areas = [];
  let solution = [];
  let cells = [];
  let states = [];
  let startedAt = 0;
  let elapsed = 0;
  let tickHandle = 0;
  let cleared = false;
  let hintIndex = -1;

  function boardSize() { return 4 + Math.floor((level - 1) / 2); }

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  }
  function safeSet(key, value) {
    try { localStorage.setItem(key, String(value)); } catch { /* Private browsing can block storage. */ }
  }
  function timeText(seconds) {
    return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  }
  function updateTime() {
    if (startedAt && !cleared) elapsed = Math.floor((Date.now() - startedAt) / 1000);
    timerEl.textContent = timeText(elapsed);
  }
  function stopTimer() {
    if (tickHandle) clearInterval(tickHandle);
    tickHandle = 0;
    updateTime();
  }
  function startTimer() {
    if (startedAt) return;
    startedAt = Date.now();
    tickHandle = setInterval(updateTime, 1000);
  }
  function findSolution(areaList, size) {
    const picks = [];
    let found = null;
    let total = 0;
    function search(row, usedColumns, usedAreas) {
      if (total > 1) return;
      if (row === size) {
        total++;
        found = picks.slice();
        return;
      }
      for (let col = 0; col < size; col++) {
        const area = areaList[row * size + col];
        if (usedColumns & (1 << col) || usedAreas & (1 << area) ||
            (row > 0 && Math.abs(col - picks[row - 1]) <= 1)) continue;
        picks[row] = col;
        search(row + 1, usedColumns | (1 << col), usedAreas | (1 << area));
      }
    }
    search(0, 0, 0);
    if (total !== 1) throw new Error("Puzzle data must have exactly one solution.");
    return found;
  }
  function setStatus(message, conflict = false) {
    statusEl.textContent = message;
    statusEl.classList.toggle("has-conflict", conflict);
  }
  function updateBest() {
    const best = Number(safeGet(STORAGE_BEST + level));
    bestEl.textContent = best > 0 ? `レベル${level}のベストタイム：${timeText(best)}` : "このレベルのベストタイムはまだありません。";
  }
  function renderCell(index) {
    const cell = cells[index];
    const state = states[index];
    const row = Math.floor(index / boardSize()) + 1;
    const col = index % boardSize() + 1;
    cell.innerHTML = state === 1 ? '<span class="bird" aria-hidden="true"></span>' : state === 2 ? '<span class="mark" aria-hidden="true">×</span>' : "";
    cell.setAttribute("aria-label", `${row}行${col}列、${areas[index] + 1}番目の色エリア、${state === 1 ? "シマエナガ" : state === 2 ? "×" : "空白"}`);
    cell.setAttribute("aria-pressed", state === 1 ? "true" : "false");
    cell.classList.toggle("is-hint", index === hintIndex);
  }
  function renderBoard() {
    const size = boardSize();
    board.replaceChildren();
    board.style.gridTemplateColumns = `repeat(${size}, minmax(0, 1fr))`;
    board.style.gridTemplateRows = `repeat(${size}, minmax(0, 1fr))`;
    board.setAttribute("aria-label", `${size}行${size}列のパズル盤面`);
    cells = [];
    for (let index = 0; index < areas.length; index++) {
      const row = Math.floor(index / size);
      const col = index % size;
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "cell";
      cell.style.setProperty("--area-color", COLORS[areas[index]]);
      if (col === size - 1) cell.classList.add("last-column");
      else if (areas[index] !== areas[index + 1]) cell.classList.add("edge-right");
      if (row === size - 1) cell.classList.add("last-row");
      else if (areas[index] !== areas[index + size]) cell.classList.add("edge-bottom");
      cell.addEventListener("click", () => cycleCell(index));
      cells.push(cell);
      board.append(cell);
      renderCell(index);
    }
  }
  function clearConflicts() {
    cells.forEach(cell => cell.classList.remove("is-conflict"));
  }
  function assess() {
    const size = boardSize();
    const rows = Array(size).fill(0);
    const columns = Array(size).fill(0);
    const regions = Array(size).fill(0);
    const birds = [];
    clearConflicts();
    states.forEach((state, index) => {
      if (state !== 1) return;
      const row = Math.floor(index / size);
      const col = index % size;
      rows[row]++;
      columns[col]++;
      regions[areas[index]]++;
      birds.push(index);
    });
    countEl.textContent = `${birds.length} / ${size} 羽`;
    let conflict = false;
    let touching = false;
    birds.forEach(index => {
      const row = Math.floor(index / size);
      const col = index % size;
      const duplicate = rows[row] > 1 || columns[col] > 1 || regions[areas[index]] > 1;
      const adjacent = birds.some(other => other !== index &&
        Math.abs(Math.floor(other / size) - row) <= 1 &&
        Math.abs(other % size - col) <= 1);
      cells[index].classList.toggle("is-conflict", duplicate || adjacent);
      if (duplicate || adjacent) conflict = true;
      if (adjacent) touching = true;
    });
    if (!conflict && birds.length === size && rows.every(x => x === 1) && columns.every(x => x === 1) && regions.every(x => x === 1)) {
      updateTime();
      cleared = true;
      stopTimer();
      clearPanel.hidden = false;
      clearTimeEl.textContent = `タイム ${timeText(elapsed)}`;
      nextLevelButton.hidden = level === 10;
      setStatus("クリア！ 行・列・色エリアに1羽ずつ、シマエナガ同士も接していません。");
      const previous = Number(safeGet(STORAGE_BEST + level));
      if (!previous || elapsed < previous) safeSet(STORAGE_BEST + level, elapsed || 1);
      updateBest();
    } else if (conflict) {
      setStatus(touching ? "シマエナガ同士が接しています。上下左右・斜めの赤い枠を見直しましょう。" :
        "同じ行・列・色エリアに2羽以上います。赤い枠の場所を見直しましょう。", true);
    } else if (birds.length === 0) {
      setStatus("行・列・色エリアを見ながら、接しないように置いてみましょう。");
    } else {
      setStatus("各行・各列・各色に1羽ずつ、互いに接しない配置を目指しましょう。");
    }
  }
  function cycleCell(index) {
    if (cleared) {
      cleared = false;
      clearPanel.hidden = true;
      startedAt = Date.now() - elapsed * 1000;
      tickHandle = setInterval(updateTime, 1000);
    } else {
      startTimer();
    }
    states[index] = (states[index] + 1) % 3;
    hintIndex = -1;
    cells.forEach((_, i) => renderCell(i));
    assess();
  }
  function resetPuzzle() {
    stopTimer();
    startedAt = 0;
    elapsed = 0;
    cleared = false;
    hintIndex = -1;
    clearPanel.hidden = true;
    states = Array(areas.length).fill(0);
    timerEl.textContent = "00:00";
    cells.forEach((_, i) => renderCell(i));
    assess();
  }
  function loadPuzzle(chooseDifferent = true) {
    const list = PUZZLES[level];
    const old = puzzleIndex;
    if (chooseDifferent && old >= 0 && list.length > 1) {
      puzzleIndex = (old + 1 + Math.floor(Math.random() * (list.length - 1))) % list.length;
    } else {
      puzzleIndex = Math.floor(Math.random() * list.length);
    }
    areas = Array.from(list[puzzleIndex], Number);
    solution = findSolution(areas, boardSize());
    states = Array(areas.length).fill(0);
    cleared = false;
    hintIndex = -1;
    stopTimer();
    startedAt = 0;
    elapsed = 0;
    timerEl.textContent = "00:00";
    clearPanel.hidden = true;
    puzzleNumberEl.textContent = `問題 ${puzzleIndex + 1} / ${list.length}`;
    renderBoard();
    assess();
    updateBest();
  }
  function setLevel(nextLevel) {
    level = nextLevel;
    levelSelect.value = String(level);
    safeSet(STORAGE_LEVEL, level);
    puzzleIndex = -1;
    loadPuzzle(false);
  }
  function showHint() {
    if (cleared) return;
    const size = boardSize();
    const row = solution.findIndex((col, r) => states[r * size + col] !== 1);
    if (row < 0) return;
    hintIndex = row * size + solution[row];
    cells.forEach((_, i) => renderCell(i));
    setStatus(`${row + 1}行${solution[row] + 1}列にシマエナガを置けます。赤い枠のマスを確認してください。`);
    cells[hintIndex].focus();
  }

  levelSelect.addEventListener("change", () => setLevel(Number(levelSelect.value)));
  document.getElementById("reset").addEventListener("click", resetPuzzle);
  document.getElementById("new-puzzle").addEventListener("click", () => loadPuzzle(true));
  document.getElementById("hint").addEventListener("click", showHint);
  nextLevelButton.addEventListener("click", () => setLevel(level + 1));
  const savedLevel = Number(safeGet(STORAGE_LEVEL));
  setLevel(savedLevel >= 1 && savedLevel <= 10 ? savedLevel : 1);
})();
