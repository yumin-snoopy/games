"use strict";

(() => {
  const SIZE = 8;
  const BIRDS = ["🐦", "🐤", "🐧", "🦉", "🦜", "🦩"];
  const NAMES = ["小鳥", "ひよこ", "ペンギン", "フクロウ", "オウム", "フラミンゴ"];
  const boardElement = document.getElementById("board");
  const scoreElement = document.getElementById("score");
  const comboElement = document.getElementById("combo");
  const messageElement = document.getElementById("message");
  const newGameButton = document.getElementById("new-game");

  let board = [];
  let selected = null;
  let busy = false;
  let score = 0;
  let combo = 0;
  let gameId = 0;

  const randomBird = () => Math.floor(Math.random() * BIRDS.length);
  const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const position = (row, col) => row * SIZE + col;
  const adjacent = (a, b) => Math.abs(Math.floor(a / SIZE) - Math.floor(b / SIZE)) + Math.abs(a % SIZE - b % SIZE) === 1;
  const swap = (cells, a, b) => { [cells[a], cells[b]] = [cells[b], cells[a]]; };

  function findMatches(cells) {
    const matched = new Set();
    const runs = [];
    for (let direction = 0; direction < 2; direction++) {
      for (let line = 0; line < SIZE; line++) {
        let start = 0;
        while (start < SIZE) {
          const at = (index) => direction === 0 ? position(line, index) : position(index, line);
          const bird = cells[at(start)];
          let end = start + 1;
          while (end < SIZE && bird !== null && cells[at(end)] === bird) end++;
          if (bird !== null && end - start >= 3) {
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
    for (let row = 0; row < SIZE; row++) {
      for (let col = 0; col < SIZE; col++) {
        const a = position(row, col);
        for (const b of [col < SIZE - 1 ? a + 1 : -1, row < SIZE - 1 ? a + SIZE : -1]) {
          if (b < 0 || cells[a] === cells[b]) continue;
          swap(cells, a, b);
          const valid = findMatches(cells).matched.size > 0;
          swap(cells, a, b);
          if (valid) return true;
        }
      }
    }
    return false;
  }

  function makeBoard() {
    for (let attempt = 0; attempt < 1000; attempt++) {
      const cells = Array(SIZE * SIZE);
      for (let row = 0; row < SIZE; row++) {
        for (let col = 0; col < SIZE; col++) {
          const forbidden = new Set();
          if (col >= 2 && cells[position(row, col - 1)] === cells[position(row, col - 2)]) forbidden.add(cells[position(row, col - 1)]);
          if (row >= 2 && cells[position(row - 1, col)] === cells[position(row - 2, col)]) forbidden.add(cells[position(row - 1, col)]);
          const choices = BIRDS.map((_, index) => index).filter((value) => !forbidden.has(value));
          cells[position(row, col)] = choices[Math.floor(Math.random() * choices.length)];
        }
      }
      if (hasMove(cells)) return cells;
    }
    throw new Error("盤面を作成できませんでした。");
  }

  function setMessage(text) { messageElement.textContent = text; }
  function updateStats() {
    scoreElement.textContent = score.toLocaleString("ja-JP");
    comboElement.textContent = combo > 1 ? `${combo}x` : "—";
  }

  function render(classes = {}) {
    boardElement.replaceChildren();
    const fragment = document.createDocumentFragment();
    board.forEach((bird, index) => {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = `tile ${classes[index] || ""}${selected === index ? " selected" : ""}`.trim();
      cell.dataset.index = String(index);
      if (bird !== null) {
        cell.dataset.bird = String(bird);
        cell.setAttribute("aria-label", `${Math.floor(index / SIZE) + 1}行${index % SIZE + 1}列 ${NAMES[bird]}${selected === index ? " 選択中" : ""}`);
        const icon = document.createElement("span");
        icon.className = "bird";
        icon.textContent = BIRDS[bird];
        icon.setAttribute("aria-hidden", "true");
        cell.append(icon);
      } else {
        cell.setAttribute("aria-label", `${Math.floor(index / SIZE) + 1}行${index % SIZE + 1}列 空き`);
      }
      fragment.append(cell);
    });
    boardElement.append(fragment);
  }

  function pointsFor(run) {
    return run === 3 ? 300 : run === 4 ? 500 : 500 + (run - 4) * 300;
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
        const index = position(row, col);
        const survivorIndex = SIZE - 1 - row;
        board[index] = survivorIndex < survivors.length ? survivors[survivorIndex] : randomBird();
        classes[index] = survivorIndex < survivors.length ? "falling" : "new";
      }
    }
    render(classes);
  }

  async function resolveMatches(currentGame) {
    let chain = 0;
    while (currentGame === gameId) {
      const { matched, runs } = findMatches(board);
      if (!matched.size) break;
      chain++;
      combo = chain;
      score += runs.reduce((total, run) => total + pointsFor(run), 0) + (chain - 1) * matched.size * 50;
      updateStats();
      setMessage(chain > 1 ? `${chain} COMBO! ${matched.size}羽そろいました！` : `${matched.size}羽そろいました！`);
      render(Object.fromEntries([...matched].map((index) => [index, "clearing"])));
      await pause(220);
      if (currentGame !== gameId) return;
      for (const index of matched) board[index] = null;
      collapseAndRefill();
      await pause(300);
    }
    if (currentGame !== gameId) return;
    render();
    if (!hasMove(board)) {
      board = makeBoard();
      render();
      setMessage("動かせる場所がなくなったので、盤面を新しくしました。スコアはそのままです。");
    } else if (chain === 1) {
      setMessage("次の組み合わせを探しましょう！");
    } else if (chain > 1) {
      setMessage(`${chain}連鎖！ 次の組み合わせを探しましょう！`);
    }
  }

  async function trySwap(a, b) {
    busy = true;
    selected = null;
    const currentGame = gameId;
    const aCell = boardElement.children[a];
    const bCell = boardElement.children[b];
    const dx = (bCell.getBoundingClientRect().left - aCell.getBoundingClientRect().left);
    const dy = (bCell.getBoundingClientRect().top - aCell.getBoundingClientRect().top);
    aCell.querySelector(".bird").style.transform = `translate(${dx}px, ${dy}px)`;
    bCell.querySelector(".bird").style.transform = `translate(${-dx}px, ${-dy}px)`;
    await pause(230);
    if (currentGame !== gameId) return;
    swap(board, a, b);
    const valid = findMatches(board).matched.size > 0;
    if (!valid) {
      swap(board, a, b);
      render({ [a]: "invalid", [b]: "invalid" });
      setMessage("3羽以上そろわなかったので、元に戻しました。");
      await pause(300);
      if (currentGame !== gameId) return;
      render();
    } else {
      render();
      await resolveMatches(currentGame);
    }
    if (currentGame === gameId) busy = false;
  }

  function onBoardClick(event) {
    const cell = event.target.closest(".tile");
    if (!cell || busy) return;
    const index = Number(cell.dataset.index);
    if (selected === null) {
      selected = index;
      setMessage("上下左右の隣の鳥を選んでください。");
      render();
    } else if (selected === index) {
      selected = null;
      setMessage("選択を解除しました。");
      render();
    } else if (adjacent(selected, index)) {
      void trySwap(selected, index);
    } else {
      selected = index;
      setMessage("隣の鳥を選んでください。選択を変更しました。");
      render();
    }
  }

  function startGame() {
    gameId++;
    board = makeBoard();
    selected = null;
    busy = false;
    score = 0;
    combo = 0;
    updateStats();
    render();
    setMessage("鳥を1羽選んで、隣の鳥をタップしてください。");
  }

  boardElement.addEventListener("click", onBoardClick);
  newGameButton.addEventListener("click", startGame);
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if (key === "f12" || (event.ctrlKey && key === "u") ||
        (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key))) {
      event.preventDefault();
    }
  });
  startGame();

  // Pure rules exposed for lightweight regression checks without changing play state.
  window.BirdMatchRules = Object.freeze({ findMatches, hasMove, makeBoard, pointsFor, adjacent });
})();
