(() => {
  "use strict";

  // Each digit is a color-area ID. Boards have one valid, non-linear solution.
  const PUZZLES = {
    1: ["3111332100211111", "1100311032200000", "2330230011001000"],
    2: ["3333332334322443124411000", "4411124000233022333222222", "3333333223331230114300144"],
    3: ["555444553444233444223344003144001114", "400011420331422333425553455444444444", "144400154000155000350000355202332222"],
    4: ["2666666221144621114460133446003334605336660553333", "4400000244406022440665500000550003055511331111333", "0000000066333000666306666530455551044552114445221"],
    5: ["0011166600166655204655552445557722447777223377722333777222222222", "4777755547666655446666556466665566655552133322221133320011132200", "4444444344000033440030334463333344666667241667772216657722115557"]
  };
  const COLORS = ["#f9e5e2", "#e7f0dc", "#e3edf8", "#f8ebcc", "#eee5f5", "#dff0ec", "#fae7d4", "#e6e7f7"];
  const STORAGE_LEVEL = "shimaenaga-color-level";
  const STORAGE_BEST = "shimaenaga-color-best-";
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
        if (usedColumns & (1 << col) || usedAreas & (1 << area)) continue;
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
    const row = Math.floor(index / (level + 3)) + 1;
    const col = index % (level + 3) + 1;
    cell.innerHTML = state === 1 ? '<span class="bird" aria-hidden="true"></span>' : state === 2 ? '<span class="mark" aria-hidden="true">×</span>' : "";
    cell.setAttribute("aria-label", `${row}行${col}列、${areas[index] + 1}番目の色エリア、${state === 1 ? "シマエナガ" : state === 2 ? "×" : "空白"}`);
    cell.setAttribute("aria-pressed", state === 1 ? "true" : "false");
    cell.classList.toggle("is-hint", index === hintIndex);
  }
  function renderBoard() {
    const size = level + 3;
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
    const size = level + 3;
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
    birds.forEach(index => {
      const row = Math.floor(index / size);
      const col = index % size;
      const duplicate = rows[row] > 1 || columns[col] > 1 || regions[areas[index]] > 1;
      cells[index].classList.toggle("is-conflict", duplicate);
      if (duplicate) conflict = true;
    });
    if (birds.length === size && rows.every(x => x === 1) && columns.every(x => x === 1) && regions.every(x => x === 1)) {
      updateTime();
      cleared = true;
      stopTimer();
      clearPanel.hidden = false;
      clearTimeEl.textContent = `タイム ${timeText(elapsed)}`;
      nextLevelButton.hidden = level === 5;
      setStatus("クリア！ すべての行・列・色エリアに1羽ずついます。 ");
      const previous = Number(safeGet(STORAGE_BEST + level));
      if (!previous || elapsed < previous) safeSet(STORAGE_BEST + level, elapsed || 1);
      updateBest();
    } else if (conflict) {
      setStatus("同じ行・列・色エリアに2羽以上います。赤い枠の場所を見直しましょう。", true);
    } else if (birds.length === 0) {
      setStatus("行・列・色エリアを見ながら、置いてみましょう。 ");
    } else {
      setStatus("いい感じです。各行・各列・各色に1羽ずつを目指しましょう。 ");
    }
  }
  function cycleCell(index) {
    if (cleared) return;
    startTimer();
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
    solution = findSolution(areas, level + 3);
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
    const size = level + 3;
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
  setLevel(savedLevel >= 1 && savedLevel <= 5 ? savedLevel : 1);
})();

