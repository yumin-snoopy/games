"use strict";

const SIZE = 4;
const BEST_KEY = "games-2048-best";
const boardElement = document.getElementById("board");
const scoreElement = document.getElementById("score");
const bestElement = document.getElementById("best");
const statusElement = document.getElementById("status");
const overlay = document.getElementById("overlay");
const continueButton = document.getElementById("continue-game");
let board = [];
let score = 0;
let best = readBest();
let won = false;
let gameOver = false;
let paused = false;
let touchStart = null;

function readBest() {
  try {
    const value = Number(localStorage.getItem(BEST_KEY));
    return Number.isFinite(value) && value >= 0 ? Math.floor(value) : 0;
  } catch {
    return 0;
  }
}

function saveBest() {
  if (score <= best) return;
  best = score;
  try { localStorage.setItem(BEST_KEY, String(best)); } catch {
    // 保存が制限されるブラウザでも、ゲームは続けられる。
  }
}

function addRandomTile() {
  const empty = [];
  board.forEach((row, r) => row.forEach((value, c) => {
    if (value === 0) empty.push([r, c]);
  }));
  if (!empty.length) return null;
  const [r, c] = empty[Math.floor(Math.random() * empty.length)];
  board[r][c] = Math.random() < 0.9 ? 2 : 4;
  return r * SIZE + c;
}

// 0を取り除いてから、移動先側の隣り合う数字を1回だけ合体する。
function mergeLine(line) {
  const values = line.filter(value => value !== 0);
  const result = [];
  const merged = [];
  let gained = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] === values[i + 1]) {
      const value = values[i] * 2;
      merged.push(result.length);
      result.push(value);
      gained += value;
      i++;
    } else {
      result.push(values[i]);
    }
  }
  while (result.length < SIZE) result.push(0);
  return { line: result, gained, merged };
}

function coordinates(direction, lane, offset) {
  if (direction === "left") return [lane, offset];
  if (direction === "right") return [lane, SIZE - 1 - offset];
  if (direction === "up") return [offset, lane];
  return [SIZE - 1 - offset, lane];
}

function canMove() {
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      const value = board[r][c];
      if (value === 0) return true;
      if (c + 1 < SIZE && value === board[r][c + 1]) return true;
      if (r + 1 < SIZE && value === board[r + 1][c]) return true;
    }
  }
  return false;
}

function move(direction) {
  if (paused || gameOver || !["left", "right", "up", "down"].includes(direction)) return;
  let changed = false;
  let gained = 0;
  const mergedCells = [];
  for (let lane = 0; lane < SIZE; lane++) {
    const positions = Array.from({ length: SIZE }, (_, i) => coordinates(direction, lane, i));
    const line = positions.map(([r, c]) => board[r][c]);
    const result = mergeLine(line);
    gained += result.gained;
    result.merged.forEach(i => {
      const [r, c] = positions[i];
      mergedCells.push(r * SIZE + c);
    });
    positions.forEach(([r, c], i) => {
      if (board[r][c] !== result.line[i]) changed = true;
      board[r][c] = result.line[i];
    });
  }
  if (!changed) {
    if (!canMove()) endGame();
    else statusElement.textContent = "その方向には動かせません。別の方向を試そう！";
    return;
  }
  score += gained;
  saveBest();
  const spawned = addRandomTile();
  render(spawned, mergedCells);
  statusElement.textContent = gained ? "合体！ ＋" + gained + "点" : "いい調子！同じ数字を集めよう。";
  gameOver = !canMove();
  if (!won && board.some(row => row.some(value => value >= 2048))) {
    won = true;
    showResult(true);
  } else if (gameOver) {
    endGame();
  }
}

function render(spawned = null, mergedCells = []) {
  boardElement.replaceChildren();
  board.forEach((row, r) => {
    const rowElement = document.createElement("div");
    rowElement.setAttribute("role", "row");
    // 行の意味を保ちながら4×4のCSSグリッドを使う。
    rowElement.style.display = "contents";
    row.forEach((value, c) => {
      const cell = document.createElement("div");
      const index = r * SIZE + c;
      cell.className = "cell";
      cell.setAttribute("role", "gridcell");
      cell.setAttribute("aria-label", (r + 1) + "行" + (c + 1) + "列：" + (value || "空き"));
      cell.dataset.value = value;
      if (value) {
        cell.textContent = value;
        cell.classList.add(value <= 2048 ? "tile-" + value : "tile-super");
      }
      if (index === spawned) cell.classList.add("spawn");
      if (mergedCells.includes(index)) cell.classList.add("merge");
      rowElement.append(cell);
    });
    boardElement.append(rowElement);
  });
  scoreElement.textContent = score;
  bestElement.textContent = best;
}

function showResult(achieved) {
  paused = true;
  document.getElementById("result-title").textContent = achieved ? "2048達成！" : "ゲームオーバー";
  document.getElementById("result-description").textContent = achieved
    ? (gameOver ? "おめでとう！もう一度、新しい記録に挑戦しよう。" : "おめでとう！さらに大きな数字にも挑戦できます。")
    : "動かせる場所がなくなりました。もう一度挑戦しよう！";
  statusElement.textContent = achieved ? "2048達成！" : "ゲームオーバー";
  continueButton.hidden = !achieved || gameOver;
  overlay.hidden = false;
  (continueButton.hidden ? document.getElementById("restart-game") : continueButton).focus();
}

function endGame() {
  gameOver = true;
  showResult(false);
}

function newGame() {
  board = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
  score = 0;
  won = false;
  gameOver = false;
  paused = false;
  touchStart = null;
  overlay.hidden = true;
  best = Math.max(best, readBest());
  addRandomTile();
  addRandomTile();
  render();
  statusElement.textContent = "同じ数字をくっつけてみよう！";
}

document.getElementById("new-game").addEventListener("click", () => {
  newGame();
  boardElement.focus({ preventScroll: true });
});
document.getElementById("restart-game").addEventListener("click", () => {
  newGame();
  boardElement.focus({ preventScroll: true });
});
continueButton.addEventListener("click", () => {
  paused = false;
  overlay.hidden = true;
  statusElement.textContent = "2048達成！さらに大きな数字を目指そう。";
  boardElement.focus({ preventScroll: true });
});
document.querySelectorAll("[data-direction]").forEach(button => {
  button.addEventListener("click", () => move(button.dataset.direction));
});
document.addEventListener("keydown", event => {
  const directions = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right" };
  if (!directions[event.key] || event.ctrlKey || event.metaKey || event.altKey) return;
  if (event.target.matches("input, textarea, select, [contenteditable='true']")) return;
  event.preventDefault();
  move(directions[event.key]);
});

// タッチ／ペンのスワイプ。盤面以外は通常どおりスクロールできる。
boardElement.addEventListener("pointerdown", event => {
  if (event.pointerType === "mouse" || !event.isPrimary || paused) return;
  touchStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
  boardElement.setPointerCapture(event.pointerId);
});
boardElement.addEventListener("pointerup", event => {
  if (!touchStart || touchStart.id !== event.pointerId) return;
  const dx = event.clientX - touchStart.x;
  const dy = event.clientY - touchStart.y;
  touchStart = null;
  if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return;
  move(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : (dy > 0 ? "down" : "up"));
});
boardElement.addEventListener("pointercancel", () => { touchStart = null; });
newGame();
