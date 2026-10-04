"use strict";

const SIZE = 5;
const CELL_COUNT = SIZE * SIZE;

const boardElement = document.getElementById("board");
const moveCountElement = document.getElementById("move-count");
const elapsedTimeElement = document.getElementById("elapsed-time");
const announcementElement = document.getElementById("announcement");
const clearOverlay = document.getElementById("clear-overlay");
const finalMovesElement = document.getElementById("final-moves");
const finalTimeElement = document.getElementById("final-time");
const playAgainButton = document.getElementById("play-again-button");

let startingBoard = [];
let board = [];
let moves = 0;
let startedAt = null;
let elapsedBeforePause = 0;
let timerId = null;
let cleared = false;

function affectedCells(index) {
  const row = Math.floor(index / SIZE);
  const column = index % SIZE;
  const cells = [index];
  if (row > 0) cells.push(index - SIZE);
  if (row < SIZE - 1) cells.push(index + SIZE);
  if (column > 0) cells.push(index - 1);
  if (column < SIZE - 1) cells.push(index + 1);
  return cells;
}

function toggleAt(state, index) {
  for (const cell of affectedCells(index)) state[cell] = !state[cell];
}

function makePuzzle() {
  let puzzle;
  do {
    puzzle = Array(CELL_COUNT).fill(false);
    const presses = Array.from({ length: CELL_COUNT }, (_, index) => index);
    // Distinct presses avoid cancelling the same move during generation.
    for (let i = presses.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [presses[i], presses[j]] = [presses[j], presses[i]];
    }
    const pressCount = 9 + Math.floor(Math.random() * 7);
    for (const index of presses.slice(0, pressCount)) toggleAt(puzzle, index);
  } while (!puzzle.some(Boolean));
  return puzzle;
}

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function elapsedMilliseconds() {
  return elapsedBeforePause + (startedAt === null ? 0 : performance.now() - startedAt);
}

function updateTime() {
  elapsedTimeElement.textContent = formatTime(elapsedMilliseconds());
}

function stopTimer() {
  if (startedAt !== null) {
    elapsedBeforePause += performance.now() - startedAt;
    startedAt = null;
  }
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
  updateTime();
}

function startTimer() {
  if (startedAt !== null) return;
  startedAt = performance.now();
  timerId = setInterval(updateTime, 250);
}

function renderBoard() {
  for (let index = 0; index < CELL_COUNT; index++) {
    const button = boardElement.children[index];
    button.classList.toggle("is-on", board[index]);
    button.setAttribute("aria-pressed", String(board[index]));
    button.setAttribute("aria-label", `${Math.floor(index / SIZE) + 1}行${index % SIZE + 1}列、${board[index] ? "点灯" : "消灯"}`);
    button.disabled = cleared;
  }
  moveCountElement.textContent = String(moves);
}

function showClear() {
  cleared = true;
  stopTimer();
  renderBoard();
  finalMovesElement.textContent = String(moves);
  finalTimeElement.textContent = elapsedTimeElement.textContent;
  clearOverlay.hidden = false;
  announcementElement.textContent = `クリア！ ${moves}手、${elapsedTimeElement.textContent}。`;
  playAgainButton.focus();
}

function pressCell(index) {
  if (cleared) return;
  startTimer();
  toggleAt(board, index);
  moves++;
  renderBoard();
  if (board.every(light => !light)) showClear();
}

function resetGame(useNewBoard) {
  stopTimer();
  if (useNewBoard) {
    let nextBoard;
    do {
      nextBoard = makePuzzle();
    } while (startingBoard.length && nextBoard.every((light, index) => light === startingBoard[index]));
    startingBoard = nextBoard;
  }
  board = startingBoard.slice();
  moves = 0;
  elapsedBeforePause = 0;
  cleared = false;
  clearOverlay.hidden = true;
  announcementElement.textContent = useNewBoard ? "新しいゲームを始めました。" : "最初の盤面に戻しました。";
  updateTime();
  renderBoard();
}

function buildBoard() {
  for (let index = 0; index < CELL_COUNT; index++) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "light";
    button.addEventListener("click", () => pressCell(index));
    boardElement.appendChild(button);
  }
}

function protectSourceShortcuts() {
  document.addEventListener("contextmenu", event => event.preventDefault());
  document.addEventListener("keydown", event => {
    const key = event.key.toLowerCase();
    const inspectShortcut = event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key);
    if (event.key === "F12" || inspectShortcut || (event.ctrlKey && key === "u")) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);
}

buildBoard();
protectSourceShortcuts();
document.getElementById("restart-button").addEventListener("click", () => resetGame(false));
document.getElementById("new-button").addEventListener("click", () => resetGame(true));
playAgainButton.addEventListener("click", () => resetGame(true));
resetGame(true);
