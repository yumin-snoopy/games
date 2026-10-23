(() => {
  "use strict";

  const TEMPLATES = {
    easy: [
      { tokens: [0,"＋",1,"−",2], tree: ["−",["＋",0,1],2] },
      { tokens: [0,"−",1,"＋",2], tree: ["＋",["−",0,1],2] },
      { tokens: [0,"−",1,"−",2], tree: ["−",["−",0,1],2] }
    ],
    normal: [
      { tokens: [0,"×",1,"−",2], tree: ["−",["×",0,1],2] },
      { tokens: [0,"×",1,"＋",2], tree: ["＋",["×",0,1],2] },
      { tokens: [0,"＋",1,"×",2], tree: ["＋",0,["×",1,2]] },
      { tokens: [0,"−",1,"×",2], tree: ["−",0,["×",1,2]] }
    ],
    hard: [
      { tokens: ["(",0,"＋",1,")","×",2,"−",3], tree: ["−",["×",["＋",0,1],2],3] },
      { tokens: ["(",0,"−",1,")","×",2,"＋",3], tree: ["＋",["×",["−",0,1],2],3] },
      { tokens: [0,"×",1,"−","(",2,"＋",3,")"], tree: ["−",["×",0,1],["＋",2,3]] },
      { tokens: ["(",0,"＋",1,")","×","(",2,"−",3,")"], tree: ["×",["＋",0,1],["−",2,3]] },
      { tokens: [0,"＋","(",1,"×",2,")","−",3], tree: ["−",["＋",0,["×",1,2]],3] }
    ]
  };
  const LABELS = { easy: "やさしい", normal: "ふつう", hard: "難しい" };
  const $ = (id) => document.getElementById(id);
  const screens = { start: $("start-screen"), game: $("game-screen"), result: $("result-screen") };
  let level = null, question = null, round = 0, counts = null;
  let placements = [], locked = [], selected = null, hintUsed = false, finished = false;
  const recent = new Set();

  function shuffle(list) {
    const result = [...list];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function evaluate(tree, values) {
    if (typeof tree === "number") return values[tree];
    const left = evaluate(tree[1], values), right = evaluate(tree[2], values);
    if (left === null || right === null) return null;
    const result = tree[0] === "＋" ? left + right : tree[0] === "−" ? left - right : left * right;
    return result >= 0 && result <= 100 ? result : null;
  }

  function permutations(ids) {
    if (ids.length === 0) return [[]];
    return ids.flatMap((id, index) =>
      permutations(ids.filter((_, i) => i !== index)).map((rest) => [id, ...rest])
    );
  }

  function solve(template, tiles, target) {
    return permutations(tiles.map((tile) => tile.id)).filter((order) =>
      evaluate(template.tree, order.map((id) => tiles[id].value)) === target
    );
  }

  function makeQuestion(chosenLevel) {
    const templates = TEMPLATES[chosenLevel];
    const size = chosenLevel === "hard" ? 4 : 3;
    for (let attempt = 0; attempt < 5000; attempt++) {
      const templateIndex = Math.floor(Math.random() * templates.length);
      const template = templates[templateIndex];
      const values = Array.from({ length: size }, () => 1 + Math.floor(Math.random() * 9));
      const target = evaluate(template.tree, values);
      if (target === null || target > 100) continue;
      const tiles = shuffle(values).map((value, id) => ({ id, value }));
      const solutions = solve(template, tiles, target);
      const uniqueOrders = new Set(permutations(tiles.map((tile) => tile.id))
        .map((order) => order.map((id) => tiles[id].value).join(",")));
      const distinctSolutions = new Set(solutions.map((order) =>
        order.map((id) => tiles[id].value).join(",")));
      if (!solutions.length || distinctSolutions.size === uniqueOrders.size) continue;
      const key = templateIndex + "|" + [...values].sort().join(",") + "|" + target;
      if (recent.has(key)) continue;
      recent.add(key);
      return { template, tiles, target, solutions };
    }
    throw new Error("問題を作成できませんでした");
  }

  function showScreen(name) {
    for (const [key, element] of Object.entries(screens)) element.hidden = key !== name;
  }

  function setMessage(text, success = false) {
    $("message").textContent = text;
    $("message").classList.toggle("success", success);
  }

  function expression(order) {
    return question.template.tokens.map((token) =>
      typeof token === "number" ? question.tiles[order[token]].value : token
    ).join(" ") + " ＝ " + question.target;
  }

  function render() {
    $("level-name").textContent = LABELS[level];
    $("progress").textContent = round + " / 10問";
    const formula = $("formula");
    formula.replaceChildren();
    question.template.tokens.forEach((token) => {
      if (typeof token !== "number") {
        const symbol = document.createElement("span");
        symbol.className = "symbol";
        symbol.textContent = token;
        formula.append(symbol);
        return;
      }
      const button = document.createElement("button");
      button.type = "button";
      button.className = "slot" + (placements[token] === null ? " empty" : "") +
        (locked[token] ? " locked" : "");
      const id = placements[token];
      button.textContent = id === null ? "" : question.tiles[id].value;
      button.setAttribute("aria-label", token + 1 + "番目の空欄、" +
        (id === null ? "空いています" : question.tiles[id].value + (locked[token] ? "、ヒントで固定" : "、押すと札に戻す")));
      button.disabled = finished || locked[token];
      button.addEventListener("click", () => place(token));
      formula.append(button);
    });
    const equals = document.createElement("span");
    equals.className = "target";
    equals.textContent = "＝ " + question.target;
    formula.append(equals);

    const tiles = $("tiles");
    tiles.replaceChildren();
    question.tiles.forEach((tile) => {
      const usedAt = placements.indexOf(tile.id);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "tile" + (selected === tile.id ? " selected" : "") +
        (usedAt !== -1 ? " used" : "");
      button.textContent = tile.value;
      if (usedAt !== -1) {
        const label = document.createElement("span");
        label.className = "use-label";
        label.textContent = locked[usedAt] ? "ヒントで使用中" : "使用中";
        button.append(label);
      }
      button.setAttribute("aria-label", tile.value + "の札、" +
        (usedAt === -1 ? selected === tile.id ? "選択中" : "未使用" : "使用中"));
      button.setAttribute("aria-pressed", selected === tile.id ? "true" : "false");
      button.disabled = finished || usedAt !== -1;
      button.addEventListener("click", () => {
        selected = selected === tile.id ? null : tile.id;
        render();
      });
      tiles.append(button);
    });
    $("selection-status").textContent = selected === null
      ? "選択中の札：なし"
      : "選択中の札：" + question.tiles[selected].value + "（空欄を押してください）";
    $("check-button").disabled = finished || placements.some((id) => id === null);
    $("hint-button").disabled = finished;
    $("reset-button").disabled = finished;
    $("answer-button").disabled = finished;
    $("next-button").hidden = !finished;
  }

  function place(slot) {
    if (finished || locked[slot]) return;
    if (selected === null) {
      if (placements[slot] !== null) {
        placements[slot] = null;
        setMessage("札を置き場に戻しました。");
      }
    } else {
      const previous = placements.indexOf(selected);
      if (previous !== -1) placements[previous] = null;
      placements[slot] = selected;
      selected = null;
      setMessage("数字を置きました。");
    }
    render();
  }

  function start(chosenLevel) {
    level = chosenLevel;
    round = 1;
    counts = { solo: 0, hint: 0, answer: 0 };
    recent.clear();
    showScreen("game");
    nextQuestion();
  }

  function nextQuestion() {
    question = makeQuestion(level);
    placements = Array(question.tiles.length).fill(null);
    locked = Array(question.tiles.length).fill(false);
    selected = null;
    hintUsed = false;
    finished = false;
    setMessage("数字の札を選んで、空欄を埋めましょう。");
    render();
  }

  function check() {
    if (finished || placements.some((id) => id === null)) return;
    const values = placements.map((id) => question.tiles[id].value);
    if (evaluate(question.template.tree, values) === question.target) {
      counts[hintUsed ? "hint" : "solo"]++;
      finished = true;
      setMessage("正解です！　" + expression(placements), true);
    } else {
      setMessage("まだ答えと合いません。数字を押して戻し、並べ直してみましょう。");
    }
    render();
  }

  function hint() {
    if (finished) return;
    hintUsed = true;
    let compatible = question.solutions.filter((order) =>
      order.every((id, slot) => placements[slot] === null || placements[slot] === id));
    if (!compatible.length) {
      placements = placements.map((id, slot) => locked[slot] ? id : null);
      compatible = question.solutions.filter((order) =>
        order.every((id, slot) => !locked[slot] || placements[slot] === id));
      setMessage("今の並びでは答えに合わないため、ヒント以外の札を置き場に戻しました。");
    } else {
      setMessage("数字を1枚、正しい場所に置きました。");
    }
    const solution = compatible[0];
    if (!solution) throw new Error("ヒントに使う正解がありません");
    const emptySlot = placements.findIndex((id) => id === null);
    if (emptySlot === -1) {
      setMessage("式はすべて埋まっています。答え合わせを押してください。");
    } else {
      const tileId = solution[emptySlot];
      const oldSlot = placements.indexOf(tileId);
      if (oldSlot !== -1) placements[oldSlot] = null;
      placements[emptySlot] = tileId;
      locked[emptySlot] = true;
    }
    selected = null;
    render();
  }

  function reset() {
    if (finished) return;
    placements.fill(null);
    locked.fill(false);
    selected = null;
    setMessage("配置を最初に戻しました。使ったヒントは結果に記録されます。");
    render();
  }

  function showAnswer() {
    if (finished) return;
    counts.answer++;
    placements = [...question.solutions[0]];
    locked.fill(false);
    selected = null;
    finished = true;
    setMessage("正解例： " + expression(placements) + "。次の問題へ進めます。", true);
    render();
  }

  function advance() {
    if (!finished) return;
    if (round === 10) {
      $("solo-count").textContent = counts.solo + "問";
      $("hint-count").textContent = counts.hint + "問";
      $("answer-count").textContent = counts.answer + "問";
      showScreen("result");
    } else {
      round++;
      nextQuestion();
    }
  }

  document.querySelectorAll("[data-level]").forEach((button) =>
    button.addEventListener("click", () => start(button.dataset.level)));
  $("check-button").addEventListener("click", check);
  $("hint-button").addEventListener("click", hint);
  $("reset-button").addEventListener("click", reset);
  $("answer-button").addEventListener("click", showAnswer);
  $("next-button").addEventListener("click", advance);
  $("leave-button").addEventListener("click", () => showScreen("start"));
  $("again-button").addEventListener("click", () => start(level));
  $("choose-button").addEventListener("click", () => showScreen("start"));
})();
