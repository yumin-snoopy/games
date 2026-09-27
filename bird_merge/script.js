'use strict';

// 順番・見た目・半径・進化得点はここで編集。dropWeight=0 の鳥はマージ専用。
const BIRDS = [
  {
    name: 'ひよこ',
    radius: 19,
    color: '#ffe58b',
    wing: '#efc55f',
    mark: 'chick',
    points: 0,
    dropWeight: 4,
  },
  {
    name: 'スズメ',
    radius: 25,
    color: '#cda580',
    wing: '#9d7158',
    mark: 'sparrow',
    points: 10,
    dropWeight: 3,
  },
  {
    name: 'シマエナガ',
    radius: 31,
    color: '#fffaf7',
    wing: '#e6d9e4',
    mark: 'shima',
    points: 20,
    dropWeight: 2,
  },
  {
    name: '文鳥',
    radius: 37,
    color: '#e7e5ed',
    wing: '#aaa5b8',
    mark: 'java',
    points: 40,
    dropWeight: 1,
  },
  {
    name: 'セキセイインコ',
    radius: 44,
    color: '#bfe5a6',
    wing: '#7fbd93',
    mark: 'budgie',
    points: 80,
    dropWeight: 0,
  },
  {
    name: 'オカメインコ',
    radius: 51,
    color: '#fff0ad',
    wing: '#c3c9d0',
    mark: 'cockatiel',
    points: 160,
    dropWeight: 0,
  },
  {
    name: 'ハト',
    radius: 58,
    color: '#c5d6e5',
    wing: '#91a7c0',
    mark: 'pigeon',
    points: 320,
    dropWeight: 0,
  },
  {
    name: 'フクロウ',
    radius: 66,
    color: '#d1b59d',
    wing: '#a2826c',
    mark: 'owl',
    points: 640,
    dropWeight: 0,
  },
  {
    name: 'ペンギン',
    radius: 74,
    color: '#536f82',
    wing: '#38576d',
    mark: 'penguin',
    points: 1280,
    dropWeight: 0,
  },
  {
    name: 'ワシ',
    radius: 83,
    color: '#b18d6d',
    wing: '#7c604e',
    mark: 'eagle',
    points: 2560,
    dropWeight: 0,
  },
];

(() => {
  const canvas = document.querySelector('#game');
  const ctx = canvas.getContext('2d');
  const $ = (id) => document.getElementById(id);
  if (!window.Matter) {
    $('status').textContent =
      '物理エンジンを読み込めません。通信を確認して再読み込みしてください。';
    return;
  }
  const { Engine, Bodies, Body, Composite, Events } = Matter;
  const W = 440,
    H = 610,
    WALL = 12,
    LINE = 116,
    DROP_Y = 46,
    STEP = 1000 / 60;
  const DROP_DELAY = 650,
    DROP_GRACE = 1800,
    OVER_TIME = 3000,
    BEST_KEY = 'kotori-merge-best-v1';
  const engine = Engine.create({ positionIterations: 8, velocityIterations: 8 });
  engine.gravity.y = 1.05;
  let birds = [],
    mergeQueue = [],
    particles = [],
    labels = [],
    score = 0,
    best = 0;
  let current = 0,
    next = 0,
    aim = W / 2,
    readyAt = 0,
    gameOver = false,
    combo = 0,
    lastMerge = -Infinity;
  let soundOn = false,
    audio = null,
    held = new Set(),
    pointer = null;
  let clock = 0,
    accumulator = 0,
    previous = 0,
    warning = 0;
  try {
    const value = Number(localStorage.getItem(BEST_KEY));
    best = Number.isFinite(value) ? Math.max(0, Math.floor(value)) : 0;
  } catch {
    $('storage-note').hidden = false;
  }

  // すべてCanvasで描くオリジナルの鳥。物理の円に合わせて羽も内側へ。
  function drawBird(context, level, x, y, radius, angle = 0, scale = 1) {
    const b = BIRDS[level],
      c = context;
    c.save();
    c.translate(x, y);
    c.rotate(angle);
    c.scale(radius * scale, radius * scale);
    const ellipse = (x, y, rx, ry, color) => {
      c.fillStyle = color;
      c.beginPath();
      c.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
      c.fill();
    };
    ellipse(0, 0, 0.97, 0.97, b.color);
    c.strokeStyle = '#52616b28';
    c.lineWidth = 0.04;
    c.stroke();
    ellipse(-0.63, 0.22, 0.23, 0.39, b.wing);
    ellipse(0.63, 0.22, 0.23, 0.39, b.wing);
    if (['sparrow', 'java', 'eagle'].includes(b.mark))
      ellipse(
        0,
        -0.45,
        0.67,
        0.43,
        b.mark === 'java' ? '#5b626f' : b.mark === 'eagle' ? '#faf1dc' : '#8a604d',
      );
    if (['penguin', 'eagle', 'pigeon'].includes(b.mark))
      ellipse(0, 0.34, 0.55, 0.55, b.mark === 'pigeon' ? '#e1e9ef' : '#fff5dc');
    if (b.mark === 'owl') {
      ellipse(-0.34, -0.12, 0.36, 0.42, '#f7e8cf');
      ellipse(0.34, -0.12, 0.36, 0.42, '#f7e8cf');
    }
    if (b.mark === 'budgie') {
      ellipse(0, -0.34, 0.59, 0.5, '#f6ed99');
      c.strokeStyle = '#579881';
      c.lineWidth = 0.05;
      for (let i = 0; i < 3; i++) {
        c.beginPath();
        c.moveTo(-0.78, 0.12 + i * 0.15);
        c.lineTo(-0.57, 0.2 + i * 0.15);
        c.stroke();
        c.beginPath();
        c.moveTo(0.78, 0.12 + i * 0.15);
        c.lineTo(0.57, 0.2 + i * 0.15);
        c.stroke();
      }
    }
    if (['chick', 'cockatiel'].includes(b.mark)) {
      c.strokeStyle = b.mark === 'chick' ? '#edbf50' : '#e4bb63';
      c.lineWidth = 0.1;
      c.lineCap = 'round';
      c.beginPath();
      c.moveTo(-0.15, -0.76);
      c.quadraticCurveTo(-0.2, -0.99, 0.07, -0.89);
      c.moveTo(0.07, -0.76);
      c.quadraticCurveTo(0.32, -1, 0.31, -0.81);
      c.stroke();
    }
    if (b.mark === 'shima') {
      ellipse(-0.42, 0.19, 0.19, 0.1, '#f4cbd9');
      ellipse(0.42, 0.19, 0.19, 0.1, '#f4cbd9');
      ellipse(0, 0.47, 0.33, 0.21, '#ffedf3');
    } else {
      const blush = b.mark === 'cockatiel' ? '#eca46a' : '#e7adab';
      ellipse(-0.43, 0.17, 0.14, 0.085, blush);
      ellipse(0.43, 0.17, 0.14, 0.085, blush);
    }
    const eyeY = b.mark === 'eagle' ? -0.28 : -0.14;
    ellipse(-0.28, eyeY, 0.062, 0.082, '#344753');
    ellipse(0.28, eyeY, 0.062, 0.082, '#344753');
    ellipse(-0.3, eyeY - 0.025, 0.019, 0.023, 'white');
    ellipse(0.26, eyeY - 0.025, 0.019, 0.023, 'white');
    c.fillStyle = b.mark === 'java' ? '#e48e9a' : b.mark === 'shima' ? '#6d6670' : '#e2ac56';
    const beak = b.mark === 'shima' ? 0.085 : 0.13;
    c.beginPath();
    c.moveTo(-beak, 0.02);
    c.lineTo(beak, 0.02);
    c.lineTo(0, 0.18);
    c.closePath();
    c.fill();
    c.restore();
  }

  function pickBird() {
    const total = BIRDS.reduce((s, b) => s + b.dropWeight, 0);
    let roll = Math.random() * total;
    for (let i = 0; i < BIRDS.length; i++) {
      roll -= BIRDS[i].dropWeight;
      if (roll < 0) return i;
    }
    return 0;
  }
  function updateScores() {
    $('score').textContent = score;
    $('best').textContent = best;
  }
  function saveBest() {
    if (score <= best) return;
    best = score;
    try {
      localStorage.setItem(BEST_KEY, String(best));
    } catch {
      $('storage-note').hidden = false;
    }
  }
  function updateNext() {
    const c = $('next-bird').getContext('2d');
    c.clearRect(0, 0, 64, 64);
    drawBird(c, next, 32, 32, 25);
    $('next-name').textContent = BIRDS[next].name;
  }
  function clampAim(x) {
    const r = BIRDS[current].radius;
    aim = Math.max(WALL + r, Math.min(W - WALL - r, x));
  }
  function addBird(level, x, y, fromDrop = false) {
    const r = BIRDS[level].radius;
    const body = Bodies.circle(Math.max(WALL + r, Math.min(W - WALL - r, x)), y, r, {
      restitution: 0.17,
      friction: 0.32,
      frictionStatic: 0.6,
      frictionAir: 0.004,
      density: 0.0018,
    });
    body.plugin = {
      level,
      born: clock,
      fromDrop,
      entered: !fromDrop,
      claimed: false,
      over: 0,
      pop: fromDrop ? 0 : 1,
    };
    birds.push(body);
    Composite.add(engine.world, body);
    return body;
  }

  // 接触イベントでは予約だけ。予約した鳥は即ロックし、更新後にまとめて置き換える。
  function queueMerges(event) {
    if (gameOver) return;
    for (const { bodyA: a, bodyB: b } of event.pairs) {
      if (!birds.includes(a) || !birds.includes(b) || a.plugin.claimed || b.plugin.claimed)
        continue;
      if (a.plugin.level !== b.plugin.level || a.plugin.level >= BIRDS.length - 1) continue;
      a.plugin.claimed = b.plugin.claimed = true;
      mergeQueue.push([a, b]);
    }
  }
  Events.on(engine, 'collisionStart', queueMerges);
  Events.on(engine, 'collisionActive', queueMerges);
  function mergeBirds() {
    const queue = mergeQueue;
    mergeQueue = [];
    for (const [a, b] of queue) {
      if (!birds.includes(a) || !birds.includes(b)) continue;
      const level = a.plugin.level + 1;
      const x = (a.position.x + b.position.x) / 2,
        y = (a.position.y + b.position.y) / 2;
      const vx = (a.velocity.x + b.velocity.x) / 2,
        vy = (a.velocity.y + b.velocity.y) / 2;
      Composite.remove(engine.world, [a, b]);
      birds = birds.filter((v) => v !== a && v !== b);
      const child = addBird(level, x, y);
      Body.setVelocity(child, { x: vx * 0.65, y: Math.min(vy, 1) });
      score += BIRDS[level].points;
      saveBest();
      updateScores();
      combo = clock - lastMerge < 1600 ? combo + 1 : 1;
      lastMerge = clock;
      burst(x, y, level);
      if (level === BIRDS.length - 1)
        labels.push({ text: 'MAX BIRD！', x: W / 2, y: 205, life: 2000, max: 2000 });
      else if (combo > 1)
        labels.push({ text: `COMBO ×${combo}！`, x, y: y - 40, life: 1000, max: 1000 });
      else if (level >= 7)
        labels.push({
          text: `${BIRDS[level].name} 誕生！`,
          x: W / 2,
          y: 205,
          life: 1600,
          max: 1600,
        });
      tone(level === BIRDS.length - 1 ? 'max' : 'merge', level);
    }
  }

  function drop() {
    if (gameOver || clock < readyAt) return;
    clampAim(aim);
    addBird(current, aim, DROP_Y, true);
    current = next;
    next = pickBird();
    readyAt = clock + DROP_DELAY;
    clampAim(aim);
    updateNext();
    tone('drop');
  }
  function finish() {
    gameOver = true;
    held.clear();
    saveBest();
    updateScores();
    $('final-score').textContent = score;
    $('final-best').textContent = best;
    $('overlay').hidden = false;
    $('status').textContent = 'もう一度、鳥を育てよう';
    $('restart').focus();
  }
  // 落とした鳥がラインの下へ入るまでは猶予。高い位置で詰まった場合も猶予後に計測。
  function checkOver(dt) {
    let warning = 0;
    for (const b of birds) {
      const p = b.plugin;
      if (b.position.y - b.circleRadius >= LINE) p.entered = true;
      const eligible = !p.fromDrop || p.entered || clock - p.born >= DROP_GRACE;
      if (eligible && b.position.y - b.circleRadius < LINE) p.over += dt;
      else p.over = 0;
      warning = Math.max(warning, p.over);
    }
    if (warning >= OVER_TIME) finish();
    return warning;
  }
  function reset() {
    Composite.clear(engine.world, false);
    Engine.clear(engine);
    birds = [];
    mergeQueue = [];
    particles = [];
    labels = [];
    score = 0;
    clock = 0;
    accumulator = 0;
    warning = 0;
    readyAt = 0;
    gameOver = false;
    combo = 0;
    lastMerge = -Infinity;
    held.clear();
    pointer = null;
    current = pickBird();
    next = pickBird();
    aim = W / 2;
    Composite.add(engine.world, [
      Bodies.rectangle(-8, H / 2, 40, H + 300, { isStatic: true }),
      Bodies.rectangle(W + 8, H / 2, 40, H + 300, { isStatic: true }),
      Bodies.rectangle(W / 2, H + 9, W + 80, 42, { isStatic: true }),
    ]);
    $('overlay').hidden = true;
    updateScores();
    updateNext();
    $('status').textContent = '好きな場所に落としてね';
  }

  // 著作権付き素材を使わず、ユーザー操作後に短い音を合成。
  function tone(type, level = 0) {
    if (!soundOn) return;
    try {
      audio ??= new (window.AudioContext || window.webkitAudioContext)();
      if (audio.state === 'suspended') audio.resume();
      const notes =
        type === 'max' ? [523, 659, 784, 1046] : [type === 'drop' ? 220 : 360 + level * 60];
      notes.forEach((f, i) => {
        const osc = audio.createOscillator(),
          gain = audio.createGain(),
          t = audio.currentTime + i * 0.09;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, t);
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.07, t + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
        osc.connect(gain);
        gain.connect(audio.destination);
        osc.start(t);
        osc.stop(t + 0.2);
      });
    } catch {
      soundOn = false;
      $('sound').textContent = '音：利用できません';
      $('sound').setAttribute('aria-pressed', 'false');
    }
  }
  function burst(x, y, level) {
    const count = level === BIRDS.length - 1 ? 48 : level >= 7 ? 28 : 14;
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2,
        speed = 1 + Math.random() * 3;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1,
        life: 600 + Math.random() * 500,
        max: 1100,
        color: ['#f0aec5', '#f2d879', '#a2cdd6', '#fff'][i % 4],
        size: 2 + Math.random() * 3,
      });
    }
  }

  function render(warning) {
    ctx.clearRect(0, 0, W, H);
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#edf8fb');
    sky.addColorStop(1, '#fff9e9');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#ffffff99';
    for (const [x, y] of [
      [60, 178],
      [360, 310],
      [100, 455],
    ]) {
      ctx.beginPath();
      ctx.ellipse(x, y, 42, 12, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#dfebdd';
    ctx.fillRect(0, H - 12, W, 12);
    ctx.save();
    ctx.setLineDash([5, 6]);
    ctx.strokeStyle = warning > 0 ? '#da859c' : '#b1c7ce';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(WALL, LINE);
    ctx.lineTo(W - WALL, LINE);
    ctx.stroke();
    ctx.restore();
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillStyle = warning > 0 ? '#bd6682' : '#8ea6af';
    ctx.fillText(
      warning > 0
        ? `あと ${Math.max(0, (OVER_TIME - warning) / 1000).toFixed(1)} 秒`
        : 'ここまで積むと注意',
      W - 20,
      LINE - 9,
    );
    if (!gameOver) {
      const ready = clock >= readyAt;
      ctx.save();
      ctx.globalAlpha = ready ? 0.85 : 0.3;
      ctx.setLineDash([3, 7]);
      ctx.strokeStyle = '#b5cbd2';
      ctx.beginPath();
      ctx.moveTo(aim, 83);
      ctx.lineTo(aim, H - 18);
      ctx.stroke();
      drawBird(ctx, current, aim, DROP_Y, BIRDS[current].radius);
      ctx.restore();
      ctx.textAlign = 'left';
      ctx.fillStyle = '#75949f';
      ctx.font = '11px sans-serif';
      ctx.fillText(ready ? 'DROP ↓' : 'ひと休み…', 18, 25);
    }
    for (const b of birds) {
      const age = clock - b.plugin.born,
        scale = b.plugin.pop ? 1 + 0.11 * Math.sin(Math.min(1, age / 280) * Math.PI) : 1;
      drawBird(ctx, b.plugin.level, b.position.x, b.position.y, b.circleRadius, b.angle, scale);
    }
    for (const p of particles) {
      ctx.globalAlpha = Math.max(0, p.life / p.max);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    for (const l of labels) {
      ctx.save();
      ctx.globalAlpha = Math.min(1, l.life / 300);
      ctx.textAlign = 'center';
      ctx.font = `bold ${l.text.startsWith('MAX') ? 30 : 20}px sans-serif`;
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#fffdf7';
      ctx.strokeText(l.text, Math.max(110, Math.min(W - 110, l.x)), l.y);
      ctx.fillStyle = l.text.startsWith('MAX') ? '#c78d3d' : '#bf718e';
      ctx.fillText(l.text, Math.max(110, Math.min(W - 110, l.x)), l.y);
      ctx.restore();
    }
  }

  // 固定時間刻み。タブ復帰時の巨大な時間差で鳥が壁を突き抜けるのを防ぐ。
  function frame(now) {
    const elapsed = previous ? Math.min(now - previous, 50) : 0;
    previous = now;
    if (!document.hidden && !gameOver) {
      accumulator += elapsed;
      while (accumulator >= STEP) {
        clock += STEP;
        if (held.has('ArrowLeft')) clampAim(aim - 4);
        if (held.has('ArrowRight')) clampAim(aim + 4);
        Engine.update(engine, STEP);
        mergeBirds();
        warning = checkOver(STEP);
        accumulator -= STEP;
        if (gameOver) break;
      }
      if (!gameOver)
        $('status').textContent =
          clock < readyAt ? '次の鳥を準備中…' : `${BIRDS[current].name}を落としてね`;
    }
    for (const p of particles) {
      p.x += (p.vx * elapsed) / STEP;
      p.y += (p.vy * elapsed) / STEP;
      p.vy += (0.035 * elapsed) / STEP;
      p.life -= elapsed;
    }
    particles = particles.filter((p) => p.life > 0);
    for (const l of labels) {
      l.life -= elapsed;
      l.y -= (0.2 * elapsed) / STEP;
    }
    labels = labels.filter((l) => l.life > 0);
    render(warning);
    requestAnimationFrame(frame);
  }

  function point(event) {
    const rect = canvas.getBoundingClientRect();
    clampAim(((event.clientX - rect.left) * W) / rect.width);
  }
  canvas.addEventListener('pointermove', (e) => {
    if (gameOver) return;
    if (e.pointerType === 'mouse' || pointer === e.pointerId) point(e);
  });
  canvas.addEventListener('pointerdown', (e) => {
    if (gameOver || pointer !== null || !e.isPrimary || e.button !== 0) return;
    e.preventDefault();
    point(e);
    canvas.focus({ preventScroll: true });
    pointer = e.pointerId;
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointerup', (e) => {
    if (pointer !== e.pointerId) return;
    point(e);
    pointer = null;
    if (canvas.hasPointerCapture(e.pointerId)) canvas.releasePointerCapture(e.pointerId);
    drop();
  });
  canvas.addEventListener('pointercancel', () => {
    pointer = null;
  });
  window.addEventListener('keydown', (e) => {
    if (
      !['ArrowLeft', 'ArrowRight', 'Space'].includes(e.code) ||
      gameOver ||
      e.target.tagName === 'BUTTON'
    )
      return;
    e.preventDefault();
    if (e.code === 'Space') {
      if (!e.repeat) drop();
    } else held.add(e.code);
  });
  window.addEventListener('keyup', (e) => held.delete(e.code));
  window.addEventListener('blur', () => {
    held.clear();
    pointer = null;
  });
  document.addEventListener('visibilitychange', () => {
    held.clear();
    previous = 0;
    accumulator = 0;
  });
  $('restart').addEventListener('click', () => {
    reset();
    canvas.focus({ preventScroll: true });
  });
  $('sound').addEventListener('click', () => {
    soundOn = !soundOn;
    $('sound').textContent = `音：${soundOn ? 'ON' : 'OFF'}`;
    $('sound').setAttribute('aria-pressed', String(soundOn));
    if (soundOn) tone('merge');
  });
  BIRDS.forEach((b, i) => {
    const li = document.createElement('li'),
      icon = document.createElement('canvas'),
      name = document.createElement('span'),
      step = document.createElement('span');
    icon.width = icon.height = 72;
    icon.setAttribute('aria-hidden', 'true');
    drawBird(icon.getContext('2d'), i, 36, 36, 29);
    name.textContent = b.name;
    step.className = 'step';
    step.textContent = String(i + 1).padStart(2, '0');
    li.append(icon, name, step);
    $('bird-list').append(li);
  });
  // 自動検証用の入口は ?test=1 のときだけ有効。
  if (new URLSearchParams(location.search).get('test') === '1')
    window.birdMergeTest = {
      engine,
      addBird,
      reset,
      drop,
      step(count = 1) {
        for (let i = 0; i < count; i++) {
          clock += STEP;
          Engine.update(engine, STEP);
          mergeBirds();
          checkOver(STEP);
        }
      },
      state: () => ({ birds, score, best, current, next, aim, gameOver, clock }),
      setCurrent(level) {
        current = level;
        clampAim(aim);
      },
      drawBird,
    };
  reset();
  requestAnimationFrame(frame);
})();
