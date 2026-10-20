(() => {
  "use strict";
  const $ = id => document.getElementById(id);
  const DATA = IDIOM_DATA;
  const TYPES = ["blank", "meaning", "reading"];
  const LABELS = ["A", "B", "C", "D"];
  const QUESTIONS = DATA.flatMap(item => TYPES.map(type => ({ id: `${item.id}:${type}`, item, type })));
  const storage = {
    get(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
    set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }
  };
  const BEST_KEY = "yojijukugo-best-v1";
  const HISTORY_KEY = "yojijukugo-history-v1";
  const SIZE_KEY = "yojijukugo-size-v1";
  let best = Number(storage.get(BEST_KEY, 0)) || 0;
  let history = new Set(storage.get(HISTORY_KEY, []));
  let state = null;

  function shuffle(source) {
    const a = [...source];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function pick(source) { return source[Math.floor(Math.random() * source.length)]; }
  function distance(a, b) {
    const row = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      let previous = row[0];
      row[0] = i;
      for (let j = 1; j <= b.length; j++) {
        const old = row[j];
        row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + (a[i - 1] === b[j - 1] ? 0 : 1));
        previous = old;
      }
    }
    return row[b.length];
  }
  function show(screen) {
    for (const id of ["start-screen", "quiz-screen", "end-screen", "review-screen"]) $(id).hidden = id !== screen;
    window.scrollTo({ top: 0, behavior: "instant" });
  }
  function setSize(large) {
    document.documentElement.style.setProperty("--font-scale", large ? "1.2" : "1");
    $("size-normal").setAttribute("aria-pressed", String(!large));
    $("size-large").setAttribute("aria-pressed", String(large));
    storage.set(SIZE_KEY, large);
  }
  function desiredTier() {
    const progress = state.correct;
    return Math.max(state.startTier, progress < 20 ? 1 : progress < 40 ? 2 : 3);
  }
  function nextQuestion() {
    const used = state.used;
    const remaining = QUESTIONS.filter(q => !used.has(q.id));
    if (!remaining.length) return endGame(true);
    if (history.size >= QUESTIONS.length) history = new Set();
    const fresh = remaining.filter(q => !history.has(q.id));
    let choices = fresh.length ? fresh : remaining;
    const differentWord = choices.filter(q => q.item.id !== state.lastWord);
    if (differentWord.length) choices = differentWord;
    const wantedType = state.typeOrder[state.used.size % TYPES.length];
    const sameType = choices.filter(q => q.type === wantedType);
    if (sameType.length) choices = sameType;
    const tier = desiredTier();
    // 70%は目標の難易度。残りは前後の級を混ぜる。
    const wanted = state.used.size === 0 || Math.random() < .7 ? tier : pick([1, 2, 3]);
    const sameTier = choices.filter(q => q.item.tier === wanted);
    if (sameTier.length) choices = sameTier;
    else {
      const nearest = Math.min(...choices.map(q => Math.abs(q.item.tier - tier)));
      choices = choices.filter(q => Math.abs(q.item.tier - tier) === nearest);
    }
    state.question = pick(choices);
    state.used.add(state.question.id);
    state.lastWord = state.question.item.id;
    history.add(state.question.id);
    storage.set(HISTORY_KEY, [...history]);
    renderQuestion();
  }
  function distractors(question) {
    const { item, type } = question;
    if (type === "blank") {
      const correct = item.word.slice(2);
      const possible = [...new Set(DATA.map(row => row.word.slice(2)))]
        .filter(s => s !== correct && s.length === 2 && !DATA.some(row => row.word === item.word.slice(0, 2) + s));
      return shuffle(possible).sort((a, b) =>
        [...b].filter((char, i) => char === correct[i]).length -
        [...a].filter((char, i) => char === correct[i]).length).slice(0, 3);
    }
    if (type === "reading") {
      return [...new Set(shuffle(DATA.filter(row => row.id !== item.id)).map(row => row.reading))]
        .filter(s => s !== item.reading)
        .sort((a, b) => distance(a, item.reading) - distance(b, item.reading)).slice(0, 3);
    }
    const meaningGroups = [
      ["一石二鳥", "一挙両得"],
      ["試行錯誤", "暗中模索", "五里霧中"],
      ["七転八起", "不撓不屈", "勇往邁進"],
      ["四苦八苦", "七転八倒", "満身創痍"],
      ["泰然自若", "明鏡止水"],
      ["順風満帆", "前途洋洋"],
      ["支離滅裂", "荒唐無稽"],
      ["我田引水", "傍若無人", "夜郎自大"]
    ];
    const blocked = meaningGroups.find(group => group.includes(item.word)) || [];
    return shuffle(DATA.filter(row => row.id !== item.id && !blocked.includes(row.word)))
      .slice(0, 3).map(row => row.word);
  }
  function makeChoices(question) {
    const answer = question.type === "blank" ? question.item.word.slice(2)
      : question.type === "reading" ? question.item.reading : question.item.word;
    const values = shuffle([answer, ...distractors(question)]);
    if (values.length !== 4 || new Set(values).size !== 4) throw Error("選択肢の生成に失敗しました");
    return { answer, values };
  }
  function renderQuestion() {
    const q = state.question;
    const { answer, values } = makeChoices(q);
    state.answer = answer;
    $("question-number").textContent = `第${state.used.size}問`;
    $("correct-count").textContent = `現在の正解数 ${state.correct}`;
    $("lives").textContent = `ライフ ${"♥".repeat(state.lives)}${"♡".repeat(3 - state.lives)}`;
    $("lives").setAttribute("aria-label", `ライフ残り${state.lives}個`);
    $("question-kind").textContent = { blank: "穴埋め問題", meaning: "意味から選ぶ問題", reading: "読み方問題" }[q.type];
    $("question-text").textContent = q.type === "blank"
      ? `「${q.item.word.slice(0, 2)}□□」の空欄に入る二文字は？`
      : q.type === "reading"
        ? `「${q.item.word}」の正しい読み方は？`
        : `「${q.item.meaning}」を表す四字熟語は？`;
    const choices = $("choices");
    choices.replaceChildren();
    values.forEach((value, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice";
      const letter = document.createElement("span");
      letter.className = "letter";
      letter.textContent = LABELS[index];
      letter.setAttribute("aria-hidden", "true");
      button.append(letter, document.createTextNode(value));
      button.addEventListener("click", () => answerQuestion(value, button));
      choices.append(button);
    });
    $("feedback").hidden = true;
    $("best-update").hidden = true;
    show("quiz-screen");
  }
  function answerQuestion(value, clicked) {
    if (!state || state.answered) return;
    state.answered = true;
    const q = state.question;
    const right = value === state.answer;
    if (right) {
      state.correct++;
      state.streak++;
      state.topStreak = Math.max(state.topStreak, state.streak);
      $("result-heading").textContent = "正解！すばらしい！";
      if (state.correct > best) {
        best = state.correct;
        storage.set(BEST_KEY, best);
        $("best-update").hidden = false;
      }
    } else {
      state.lives--;
      state.streak = 0;
      state.wrong.push(q);
      $("result-heading").textContent = `残念！正解は『${q.item.word}』です`;
      clicked.classList.add("wrong");
    }
    [...$("choices").children].forEach(button => {
      button.disabled = true;
      if (button.textContent.slice(1) === state.answer) button.classList.add("correct");
    });
    $("correct-count").textContent = `現在の正解数 ${state.correct}`;
    $("lives").textContent = `ライフ ${"♥".repeat(state.lives)}${"♡".repeat(3 - state.lives)}`;
    $("lives").setAttribute("aria-label", `ライフ残り${state.lives}個`);
    $("answer-word").textContent = `${q.item.word}（${q.item.reading}）`;
    $("answer-meaning").textContent = q.item.meaning;
    $("next-button").textContent = state.lives === 0 || state.used.size === QUESTIONS.length ? "結果を見る" : "次の問題へ";
    $("feedback").hidden = false;
    $("feedback").scrollIntoView({ block: "nearest" });
  }
  function endGame(cleared) {
    $("end-title").textContent = cleared ? "全問クリア！" : "ゲームオーバー";
    $("end-message").textContent = cleared ? "すべての問題に答えました。見事です！" : "挑戦お疲れさまでした。何度でも新しい問題に挑戦できます。";
    const answered = state.used.size;
    const rows = [
      ["正解数", state.correct], ["回答数", answered],
      ["正答率", `${Math.round(state.correct / answered * 100)}％`],
      ["最高連続正解数", state.topStreak]
    ];
    $("summary").replaceChildren();
    rows.forEach(([label, value]) => {
      const box = document.createElement("div");
      const name = document.createElement("span");
      const number = document.createElement("strong");
      name.textContent = label;
      number.textContent = value;
      box.append(name, number);
      $("summary").append(box);
    });
    $("best-end").textContent = `過去の最高正解数：${best}問`;
    $("review-button").hidden = state.wrong.length === 0;
    show("end-screen");
  }
  function startGame() {
    const checked = document.querySelector('input[name="start-level"]:checked');
    state = {
      startTier: Number(checked.value), lives: 3, correct: 0,
      streak: 0, topStreak: 0, used: new Set(), wrong: [],
      question: null, answer: "", answered: false, lastWord: -1,
      typeOrder: shuffle(TYPES)
    };
    nextQuestion();
  }
  function review() {
    const list = $("review-list");
    list.replaceChildren();
    for (const q of state.wrong) {
      const li = document.createElement("li");
      const asked = document.createElement("p");
      const word = document.createElement("strong");
      const meaning = document.createElement("p");
      asked.textContent = q.type === "blank" ? `出題：${q.item.word.slice(0, 2)}□□`
        : q.type === "reading" ? `出題：「${q.item.word}」の読み方`
          : `出題：${q.item.meaning}`;
      word.textContent = `${q.item.word}（${q.item.reading}）`;
      meaning.textContent = q.item.meaning;
      li.append(asked, word, meaning);
      list.append(li);
    }
    show("review-screen");
  }
  $("bank-count").textContent = `収録：${DATA.length}語・${QUESTIONS.length}問`;
  $("best-start").textContent = `過去の最高正解数：${best}問`;
  setSize(Boolean(storage.get(SIZE_KEY, false)));
  $("size-normal").addEventListener("click", () => setSize(false));
  $("size-large").addEventListener("click", () => setSize(true));
  $("start-button").addEventListener("click", startGame);
  $("next-button").addEventListener("click", () => {
    if (state.lives === 0 || state.used.size === QUESTIONS.length) endGame(state.lives > 0);
    else { state.answered = false; nextQuestion(); }
  });
  $("retry-button").addEventListener("click", () => {
    $("best-start").textContent = `過去の最高正解数：${best}問`;
    show("start-screen");
  });
  $("review-button").addEventListener("click", review);
  $("review-back").addEventListener("click", () => show("end-screen"));
})();

