"use strict";
(() => {
  const SIZE = 8, DURATION = 60, SPECIAL = -1, SWIPE_MIN = 18;
  const BIRDS = ["🐦", "🐤", "🐧", "🦉", "🦜", "🦩"];
  const NAMES = ["小鳥", "ひよこ", "ペンギン", "フクロウ", "オウム", "フラミンゴ"];
  const $ = id => document.getElementById(id);
  const boardElement = $("board"), countElement = $("bird-count"), resultElement = $("result");
  let board = [], birdCount = 4, selected = null, busy = false, expired = false;
  let score = 0, combo = 0, maxCombo = 0, cleared = 0, gameId = 0, deadline = 0, timer;
  let pointerStart = null, suppressClick = false;
  const randomBird = () => Math.floor(Math.random() * birdCount);
  const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
  const position = (row, col) => row * SIZE + col;
  const adjacent = (a, b) => Math.abs(Math.floor(a / SIZE) - Math.floor(b / SIZE)) + Math.abs(a % SIZE - b % SIZE) === 1;
  const swap = (cells, a, b) => { [cells[a], cells[b]] = [cells[b], cells[a]]; };

  function findMatches(cells) {
    const matched = new Set(), runs = [];
    for (let direction = 0; direction < 2; direction++) {
      for (let line = 0; line < SIZE; line++) {
        let start = 0;
        while (start < SIZE) {
          const at = index => direction === 0 ? position(line, index) : position(index, line);
          const bird = cells[at(start)];
          let end = start + 1;
          while (end < SIZE && bird !== null && bird !== SPECIAL && cells[at(end)] === bird) end++;
          if (bird !== null && bird !== SPECIAL && end - start >= 3) {
            runs.push(end - start);
            for (let index = start; index < end; index++) matched.add(at(index));
          }
          start = end;
        }
      }
    }
    return { matched, runs };
  }
  function hasMove(cells) {
    for (let row = 0; row < SIZE; row++) for (let col = 0; col < SIZE; col++) {
      const a = position(row, col);
      for (const b of [col < SIZE - 1 ? a + 1 : -1, row < SIZE - 1 ? a + SIZE : -1]) {
        if (b < 0 || cells[a] === cells[b]) continue;
        if (cells[a] === SPECIAL || cells[b] === SPECIAL) return true;
        swap(cells, a, b);
        const valid = findMatches(cells).matched.size > 0;
        swap(cells, a, b);
        if (valid) return true;
      }
    }
    return false;
  }
  function makeBoard() {
    for (let attempt = 0; attempt < 1000; attempt++) {
      const cells = Array(SIZE * SIZE);
      for (let row = 0; row < SIZE; row++) for (let col = 0; col < SIZE; col++) {
        const forbidden = new Set();
        if (col >= 2 && cells[position(row, col - 1)] === cells[position(row, col - 2)]) forbidden.add(cells[position(row, col - 1)]);
        if (row >= 2 && cells[position(row - 1, col)] === cells[position(row - 2, col)]) forbidden.add(cells[position(row - 1, col)]);
        const choices = Array.from({ length: birdCount }, (_, index) => index).filter(value => !forbidden.has(value));
        cells[position(row, col)] = choices[Math.floor(Math.random() * choices.length)];
      }
      if (hasMove(cells)) return cells;
    }
    throw new Error("盤面を作成できませんでした。");
  }
  const setMessage = text => { $("message").textContent = text; };
  function updateStats() {
    $("score").textContent = score.toLocaleString("ja-JP");
    $("combo").textContent = combo > 1 ? `${combo}x` : "—";
  }
  function render(classes = {}) {
    boardElement.replaceChildren();
    boardElement.classList.toggle("locked", busy || expired);
    const fragment = document.createDocumentFragment();
    board.forEach((bird, index) => {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = `tile ${classes[index] || ""}${selected === index ? " selected" : ""}${bird === SPECIAL ? " special" : ""}`.trim();
      cell.dataset.index = String(index);
      cell.disabled = expired || busy;
      const place = `${Math.floor(index / SIZE) + 1}行${index % SIZE + 1}列`;
      if (bird !== null) {
        cell.dataset.bird = String(bird);
        cell.setAttribute("aria-label", `${place} ${bird === SPECIAL ? "レインボー鳥" : NAMES[bird]}${selected === index ? " 選択中" : ""}`);
        const icon = document.createElement("span");
        icon.className = "bird";
        icon.textContent = bird === SPECIAL ? "🌈🐦" : BIRDS[bird];
        icon.setAttribute("aria-hidden", "true");
        cell.append(icon);
      } else cell.setAttribute("aria-label", `${place} 空き`);
      fragment.append(cell);
    });
    boardElement.append(fragment);
  }
  function pointsFor(run) { return run === 3 ? 300 : run === 4 ? 500 : 500 + (run - 4) * 300; }
  function addClearScore(count, base, chain) {
    const bonus = (chain - 1) * count * 50;
    score += base + bonus;
    cleared += count;
    combo = chain;
    maxCombo = Math.max(maxCombo, chain);
    updateStats();
    return bonus;
  }
  function collapseAndRefill() {
    const classes = {};
    for (let col = 0; col < SIZE; col++) {
      const survivors = [];
      for (let row = SIZE - 1; row >= 0; row--) {
        const value = board[position(row, col)];
        if (value !== null) survivors.push(value);
      }
      for (let row = SIZE - 1; row >= 0; row--) {
        const index = position(row, col), survivorIndex = SIZE - 1 - row;
        board[index] = survivorIndex < survivors.length ? survivors[survivorIndex] : randomBird();
        classes[index] = survivorIndex < survivors.length ? "falling" : "new";
      }
    }
    render(classes);
  }
  async function shuffleIfStuck(currentGame) {
    if (hasMove(board) || expired) return false;
    setMessage("動かせる場所がないのでシャッフルします！");
    await pause(650);
    if (currentGame !== gameId || expired) return false;
    const original = board.slice();
    let candidate = null;
    for (let attempt = 0; attempt < 3000; attempt++) {
      candidate = original.slice();
      for (let i = candidate.length - 1; i > 0; i--) swap(candidate, i, Math.floor(Math.random() * (i + 1)));
      if (!findMatches(candidate).matched.size && hasMove(candidate)) break;
      candidate = null;
    }
    board = candidate || makeBoard();
    render();
    setMessage("シャッフルしました。続きをどうぞ！");
    return true;
  }
  async function resolveMatches(currentGame, initialChain = 0) {
    let chain = initialChain, madeSpecial = false, chainBonus = 0;
    while (currentGame === gameId) {
      const { matched, runs } = findMatches(board);
      if (!matched.size) break;
      chain++;
      const bonus = addClearScore(matched.size, runs.reduce((sum, run) => sum + pointsFor(run), 0), chain);
      chainBonus += bonus;
      const specialIndex = chain === 3 && !madeSpecial ? [...matched][Math.floor(Math.random() * matched.size)] : null;
      setMessage(chain >= 3 ? `${chain} COMBO！ SPECIAL BIRD！ ボーナス +${bonus}` : chain > 1 ? `${chain} COMBO！ ボーナス +${bonus}` : `${matched.size}羽そろいました！`);
      render(Object.fromEntries([...matched].map(index => [index, "clearing"])));
      await pause(220);
      if (currentGame !== gameId) return;
      for (const index of matched) board[index] = null;
      collapseAndRefill();
      if (specialIndex !== null) {
        board[specialIndex] = SPECIAL;
        madeSpecial = true;
        render({ [specialIndex]: "special-born" });
      }
      await pause(specialIndex !== null ? 650 : 300);
    }
    if (currentGame !== gameId) return;
    render();
    if (expired) { finishGame(); return; }
    const shuffled = await shuffleIfStuck(currentGame);
    if (currentGame !== gameId || expired) { if (expired) finishGame(); return; }
    if (!shuffled) setMessage(chain > 1 ? `${chain}連鎖！ コンボボーナス +${chainBonus}点。次の組み合わせを探しましょう。` : "次の組み合わせを探しましょう！");
  }
  async function trySwap(a, b) {
    if (busy || expired || !adjacent(a, b)) return;
    busy = true;
    selected = null;
    const currentGame = gameId, aCell = boardElement.children[a], bCell = boardElement.children[b];
    const dx = bCell.getBoundingClientRect().left - aCell.getBoundingClientRect().left;
    const dy = bCell.getBoundingClientRect().top - aCell.getBoundingClientRect().top;
    aCell.querySelector(".bird").style.transform = `translate(${dx}px, ${dy}px)`;
    bCell.querySelector(".bird").style.transform = `translate(${-dx}px, ${-dy}px)`;
    await pause(230);
    if (currentGame !== gameId) return;
    const target = board[a] === SPECIAL ? board[b] : board[b] === SPECIAL ? board[a] : null;
    swap(board, a, b);
    const valid = (target !== null && target !== SPECIAL) || findMatches(board).matched.size > 0;
    if (!valid) {
      swap(board, a, b);
      render({ [a]: "invalid", [b]: "invalid" });
      setMessage("3羽以上そろわなかったので、元に戻しました。");
      await pause(300);
      if (currentGame !== gameId) return;
    } else if (target !== null && target !== SPECIAL) {
      const matched = new Set(board.flatMap((bird, index) => bird === target ? [index] : []));
      addClearScore(matched.size, matched.size * 100, 1);
      setMessage(`レインボー鳥！ ${NAMES[target]}を${matched.size}羽消去！`);
      render(Object.fromEntries([...matched].map(index => [index, "clearing"])));
      await pause(260);
      if (currentGame !== gameId) return;
      for (const index of matched) board[index] = null;
      collapseAndRefill();
      await pause(300);
      if (currentGame !== gameId) return;
      await resolveMatches(currentGame, 1);
    } else {
      render();
      await resolveMatches(currentGame);
    }
    if (currentGame === gameId) {
      busy = false;
      render();
      if (expired) finishGame();
    }
  }
  function onBoardClick(event) {
    if (suppressClick) { suppressClick = false; event.preventDefault(); return; }
    const cell = event.target.closest(".tile");
    if (!cell || busy || expired) return;
    const index = Number(cell.dataset.index);
    if (selected === null) {
      selected = index;
      setMessage("上下左右の隣の鳥を選んでください。");
      render();
    } else if (selected === index) {
      selected = null;
      setMessage("選択を解除しました。");
      render();
    } else if (adjacent(selected, index)) void trySwap(selected, index);
    else {
      selected = index;
      setMessage("隣の鳥を選んでください。選択を変更しました。");
      render();
    }
  }
  function onPointerDown(event) {
    suppressClick = false;
    const cell = event.target.closest(".tile");
    if (!cell || busy || expired || event.button > 0) return;
    pointerStart = { id: event.pointerId, index: Number(cell.dataset.index), x: event.clientX, y: event.clientY };
  }
  function onPointerUp(event) {
    if (!pointerStart || pointerStart.id !== event.pointerId) return;
    const { index, x, y } = pointerStart;
    pointerStart = null;
    const dx = event.clientX - x, dy = event.clientY - y;
    const distance = Math.hypot(dx, dy);
    if (distance < 4) return;
    suppressClick = true;
    if (distance < SWIPE_MIN) return;
    if (busy || expired || Math.max(Math.abs(dx), Math.abs(dy)) < Math.min(Math.abs(dx), Math.abs(dy)) * 1.25) return;
    const b = Math.abs(dx) > Math.abs(dy) ? index + Math.sign(dx) : index + Math.sign(dy) * SIZE;
    if (b >= 0 && b < SIZE * SIZE && adjacent(index, b)) void trySwap(index, b);
  }
  function updateTime() {
    const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    $("time").textContent = String(remaining);
    $("time").parentElement.classList.toggle("urgent", remaining <= 10);
    if (remaining === 0 && !expired) {
      expired = true;
      clearInterval(timer);
      pointerStart = null;
      selected = null;
      render();
      if (!busy) finishGame();
    }
  }
  function finishGame() {
    if (!expired || !resultElement.hidden) return;
    $("final-score").textContent = score.toLocaleString("ja-JP");
    $("final-combo").textContent = String(maxCombo);
    $("final-cleared").textContent = String(cleared);
    resultElement.hidden = false;
    $("play-again").focus();
  }
  function startGame() {
    gameId++;
    clearInterval(timer);
    birdCount = Number(countElement.value);
    board = makeBoard();
    selected = pointerStart = null;
    suppressClick = busy = expired = false;
    score = combo = maxCombo = cleared = 0;
    resultElement.hidden = true;
    updateStats();
    deadline = Date.now() + DURATION * 1000;
    updateTime();
    timer = setInterval(updateTime, 100);
    render();
    setMessage("鳥を1羽選ぶか、上下左右にドラッグ・スワイプしてください。");
  }
  boardElement.addEventListener("click", onBoardClick);
  boardElement.addEventListener("pointerdown", onPointerDown);
  document.addEventListener("pointerup", onPointerUp);
  document.addEventListener("pointercancel", () => { pointerStart = null; });
  $("new-game").addEventListener("click", startGame);
  $("play-again").addEventListener("click", startGame);
  countElement.addEventListener("change", startGame);
  document.addEventListener("contextmenu", event => event.preventDefault());
  document.addEventListener("keydown", event => {
    const key = event.key.toLowerCase();
    if (key === "f12" || (event.ctrlKey && key === "u") || (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key))) event.preventDefault();
  });
  startGame();
  window.BirdMatchRules = Object.freeze({ findMatches, hasMove, makeBoard, pointsFor, adjacent });
})();
