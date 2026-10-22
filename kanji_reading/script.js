(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const KEY = 'kanji-reading-v1';
  const difficultySelect = $('difficulty');
  const categorySelect = $('category');
  let saved = { bestScore: 0, bestStreak: 0, missed: [] };
  try {
    const read = JSON.parse(localStorage.getItem(KEY));
    if (read && typeof read === 'object') saved = { ...saved, ...read };
  } catch (_) { /* 保存を使えない環境でもゲームは続けられます。 */ }
  if (!Array.isArray(saved.missed)) saved.missed = [];
  // 出題対象から外した旧問題は復習一覧からも取り除きます。
  const activeIds = new Set(QUESTIONS.map(q => q.id));
  saved.missed = [...new Set(saved.missed.filter(id => activeIds.has(id)))];
  const persist = () => { try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (_) {} };
  let state = null;

  // Fisher–Yates 法で出題と選択肢を独立に並べ替えます。
  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
  function show(section) {
    for (const id of ['setup', 'play', 'result']) $(id).hidden = id !== section;
    window.scrollTo(0, 0);
  }
  function available() {
    return QUESTIONS.filter(q => (difficultySelect.value === 'おまかせ' || q.difficulty === difficultySelect.value)
      && (categorySelect.value === 'すべて' || q.category === categorySelect.value));
  }
  function updateSetup() {
    const count = available().length;
    $('available').textContent = `この条件の問題：${count}問`;
    $('start').disabled = count === 0;
    $('review-count').textContent = `復習用に記録した問題：${saved.missed.length}問`;
    $('review-start').disabled = saved.missed.length === 0;
    $('records').textContent = `過去最高得点 ${saved.bestScore}点 ／ 最多連続正解 ${saved.bestStreak}問`;
  }
  function start(review = false) {
    const pool = review ? QUESTIONS.filter(q => saved.missed.includes(q.id)) : available();
    if (!pool.length) { updateSetup(); return; }
    state = { review, pool, queue: shuffle(pool), score: 0, correct: 0, wrong: 0, streak: 0, maxStreak: 0, answered: false, current: null, seen: 0 };
    document.querySelector('.status').classList.toggle('review', review);
    $('miss-label').hidden = review;
    show('play');
    nextQuestion();
  }
  function nextQuestion() {
    if (!state) return;
    if (!state.review && state.wrong >= 3) return finish('3問間違えたため終了しました。');
    if (state.queue.length === 0) {
      if (!state.review) return finish('この条件の問題をすべて解きました。クリアです！');
      state.queue = shuffle(state.pool);
    }
    state.current = state.queue.pop();
    state.seen++;
    state.answered = false;
    const q = state.current;
    $('score').textContent = state.score;
    $('streak').textContent = state.streak;
    $('remaining').textContent = 3 - state.wrong;
    $('question-number').textContent = state.review ? `復習 ${state.seen}問目` : `${state.seen}問目 ／ 全${state.pool.length}問`;
    $('question-kind').textContent = `${q.category}・${q.difficulty}`;
    $('kanji').textContent = q.kanji;
    $('choices').replaceChildren();
    for (const choice of shuffle(q.choices)) {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'choice'; button.textContent = choice;
      button.addEventListener('click', () => answer(choice));
      $('choices').append(button);
    }
    $('feedback').hidden = true;
    $('feedback').className = 'feedback';
    $('source-wrap').hidden = true;
    $('next').hidden = true;
    $('next').textContent = '次の問題';
  }
  function answer(choice) {
    // 先にフラグを立て、連続タップの二重採点を防ぎます。
    if (!state || state.answered) return;
    state.answered = true;
    const q = state.current;
    const correct = choice === q.reading;
    if (correct) {
      state.correct++; state.streak++; state.maxStreak = Math.max(state.maxStreak, state.streak);
      if (!state.review) state.score += 10 + (state.streak % 5 === 0 ? 20 : 0);
    } else {
      state.wrong++; state.streak = 0;
      if (!saved.missed.includes(q.id)) { saved.missed.push(q.id); persist(); }
    }
    for (const button of $('choices').children) {
      button.disabled = true;
      if (button.textContent === q.reading) button.classList.add('correct');
      else if (button.textContent === choice) button.classList.add('wrong');
    }
    $('score').textContent = state.score;
    $('streak').textContent = state.streak;
    $('remaining').textContent = 3 - state.wrong;
    $('judgment').textContent = correct ? '正解です！' : '不正解です。';
    $('correct-reading').textContent = `正しい読み方：${q.reading}`;
    $('explanation').textContent = q.explanation;
    $('source-wrap').hidden = !q.source;
    if (q.source) $('source').href = q.source;
    $('feedback').className = correct ? 'feedback' : 'feedback wrong';
    $('feedback').hidden = false;
    $('next').hidden = false;
    if (!state.review && state.wrong >= 3) $('next').textContent = '結果を見る';
    else if (!state.review && state.queue.length === 0) $('next').textContent = '結果を見る';
  }
  function finish(reason) {
    if (!state) return;
    const total = state.correct + state.wrong;
    if (!state.review) {
      saved.bestScore = Math.max(saved.bestScore, state.score);
      saved.bestStreak = Math.max(saved.bestStreak, state.maxStreak);
      persist();
    }
    $('result-title').textContent = state.review ? '復習の成績' : '今回の成績';
    $('result-reason').textContent = reason;
    $('final-score').textContent = `${state.score}点`;
    $('final-correct').textContent = `${state.correct}問`;
    $('final-wrong').textContent = `${state.wrong}問`;
    $('final-rate').textContent = `${total ? Math.round(state.correct / total * 100) : 0}%`;
    $('final-streak').textContent = `${state.maxStreak}問`;
    $('final-best').textContent = `${saved.bestScore}点`;
    $('final-best-streak').textContent = `${saved.bestStreak}問`;
    $('review-result').disabled = saved.missed.length === 0;
    state = null;
    show('result');
  }
  difficultySelect.addEventListener('change', updateSetup);
  categorySelect.addEventListener('change', updateSetup);
  $('start').addEventListener('click', () => start(false));
  $('review-start').addEventListener('click', () => start(true));
  $('next').addEventListener('click', nextQuestion);
  $('stop').addEventListener('click', () => finish('ここまでの成績です。'));
  $('retry').addEventListener('click', () => { show('setup'); updateSetup(); });
  $('review-result').addEventListener('click', () => start(true));
  updateSetup();
})();

