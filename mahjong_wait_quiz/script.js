"use strict";

// 0-8 萬子、9-17 筒子、18-26 索子、27-33 東南西北白發中。
const HONORS = ["東", "南", "西", "北", "白", "發", "中"];
const TERMINALS = [0,8,9,17,18,26,27,28,29,30,31,32,33];
const ALL_TILES = Array.from({length:34},(_,i)=>i);

function parseHand(notation){
  const tiles=[];
  for(const part of notation.split(/\s+/)){
    const match=part.match(/^([1-9]+)([mps])$/);
    if(match){const base={m:0,p:9,s:18}[match[2]];for(const digit of match[1])tiles.push(base+Number(digit)-1);}
    else for(const letter of part){const n="ESWNPFC".indexOf(letter);if(n<0)throw Error(`不明な牌: ${letter}`);tiles.push(27+n);}
  }
  return tiles.sort((a,b)=>a-b);
}
function countsOf(tiles){const counts=Array(34).fill(0);for(const tile of tiles){if(!Number.isInteger(tile)||tile<0||tile>33)throw Error("牌の範囲外");counts[tile]++;}return counts;}
function ordinaryWin(counts){
  const memo=new Map();
  function melds(c){
    const key=c.join("");if(memo.has(key))return memo.get(key);
    const i=c.findIndex(n=>n>0);if(i<0)return true;
    let ok=false;
    if(c[i]>=3){c[i]-=3;ok=melds(c);c[i]+=3;}
    if(!ok&&i<27&&i%9<=6&&c[i+1]&&c[i+2]){c[i]--;c[i+1]--;c[i+2]--;ok=melds(c);c[i]++;c[i+1]++;c[i+2]++;}
    memo.set(key,ok);return ok;
  }
  for(let i=0;i<34;i++)if(counts[i]>=2){counts[i]-=2;const ok=melds(counts);counts[i]+=2;if(ok)return true;}
  return false;
}
function sevenPairs(counts){return counts.filter(n=>n===2).length===7;}
function thirteenOrphans(counts){return TERMINALS.every(i=>counts[i]>=1)&&TERMINALS.some(i=>counts[i]===2)&&counts.every((n,i)=>TERMINALS.includes(i)||n===0);}
function winTypes(counts){if(counts.reduce((a,b)=>a+b,0)!==14)return [];const types=[];if(ordinaryWin(counts.slice()))types.push("一般形");if(sevenPairs(counts))types.push("七対子");if(thirteenOrphans(counts))types.push("国士無双");return types;}
function findWaits(tiles){if(tiles.length!==13)throw Error("手牌は13枚である必要があります");const counts=countsOf(tiles);if(counts.some(n=>n>4))throw Error("同じ牌は4枚までです");const result=new Map();for(const tile of ALL_TILES){if(counts[tile]===4)continue;counts[tile]++;const types=winTypes(counts);counts[tile]--;if(types.length)result.set(tile,types);}return result;}
function tileName(i){return i<27?`${i%9+1}${["萬","筒","索"][Math.floor(i/9)]}`:HONORS[i-27];}
function tileElement(i){const tile=document.createElement("span");tile.className=`tile ${i<9?"man":i<18?"pin":i<27?"sou":"honor"}`;const number=document.createElement("span"),suit=document.createElement("span");number.className="number";suit.className="suit";number.textContent=i<27?String(i%9+1):HONORS[i-27];suit.textContent=i<9?"萬":i<18?"筒":i<27?"索":"字牌";tile.append(number,suit);return tile;}

// 解説の牌名は正解集合から自動で組み立てる。問題ごとの形の説明だけを保持する。
const QUESTIONS=[
  {level:"beginner",hand:"123m 456m 789p 123s E",shape:"単騎待ち",hint:"雀頭になる牌を探してみましょう。",detail:"4面子がそろっており、残る1枚を雀頭にします。"},
  {level:"beginner",hand:"123m 456m 789p EE 45s",shape:"両面待ち",hint:"2枚続いた数字の両側を考えてみましょう。",detail:"2枚続きの部分に牌を足し、順子を作ります。"},
  {level:"beginner",hand:"123m 456m 789p EE 46s",shape:"嵌張待ち",hint:"数字の間が一つ空いています。",detail:"間の牌を入れて順子を完成させます。"},
  {level:"beginner",hand:"123m 456m 789p EE 12s",shape:"辺張待ち",hint:"端の2枚を使う順子を考えましょう。",detail:"端の2枚に続く牌で順子を完成させます。"},
  {level:"beginner",hand:"123m 456m 789p EE SS",shape:"双碰待ち",hint:"2組ある対子に注目しましょう。",detail:"どちらかの対子を刻子にし、もう一方を雀頭にします。"},
  {level:"intermediate",hand:"234m 567m 123p 456p 7s",shape:"単騎待ち",hint:"すでに4面子ができているか確認しましょう。",detail:"残った1枚と同じ牌で雀頭を作ります。"},
  {level:"intermediate",hand:"234m 567m 123p 55s 67p",shape:"両面待ち",hint:"筒子の続いた2枚を見てください。",detail:"筒子の2枚の両側を試すと順子になります。"},
  {level:"intermediate",hand:"234m 567m 123p 55s 79p",shape:"嵌張待ち",hint:"筒子の間の数字に注目しましょう。",detail:"筒子の間を埋めると4面子1雀頭になります。"},
  {level:"intermediate",hand:"234m 567m 123p 55s 89p",shape:"辺張待ち",hint:"9を含む2枚続きがあります。",detail:"端の2枚に牌を加えて789の順子を作ります。"},
  {level:"intermediate",hand:"234m 567m 123p 55s NN",shape:"双碰待ち",hint:"雀頭候補が2組あります。",detail:"2つの対子の一方を刻子にできます。"},
  {level:"advanced",hand:"11m 22m 33p 44p 55s EE N",shape:"七対子の単騎待ち",hint:"同じ牌の組がいくつあるでしょうか。",detail:"6組の対子に、最後の1組を加えると七対子です。"},
  {level:"advanced",hand:"19m 19p 19s ESWNPFC",shape:"国士無双の十三面待ち",hint:"1・9と字牌が何種類あるか数えてみましょう。",detail:"13種類の幺九牌が1枚ずつあり、どれかを重ねると国士無双です。"},
  {level:"advanced",hand:"119m 19p 19s ESWNPF",shape:"国士無双の単騎待ち",hint:"1・9と字牌で、まだない種類を探しましょう。",detail:"幺九牌13種類のうち欠けた1種類を加えると国士無双です。"},
  {level:"advanced",hand:"1111234567899m",shape:"多面待ち",hint:"萬子の分け方を一通りに決めず、雀頭の位置も変えてみましょう。",detail:"同じ萬子の並びを複数の面子・雀頭に分けられます。"},
  {level:"advanced",hand:"111123m 456p 78s EE",shape:"4枚使用済みを含む両面待ち",hint:"1萬はすでに4枚あります。索子の2枚に注目しましょう。",detail:"1萬4枚は手牌内で使い切っています。索子の両側を試します。"}
];

function validateQuestions(){
  for(const [index,q] of QUESTIONS.entries()){
    if(!["beginner","intermediate","advanced"].includes(q.level))throw Error(`問題${index+1}: 難易度`);
    q.tiles=parseHand(q.hand);q.waits=findWaits(q.tiles);
    if(!q.waits.size||!q.shape||!q.hint||!q.detail)throw Error(`問題${index+1}: テンパイまたは解説`);
  }
  return true;
}
validateQuestions();

if(typeof module!=="undefined")module.exports={parseHand,countsOf,ordinaryWin,sevenPairs,thirteenOrphans,winTypes,findWaits,tileName,QUESTIONS,validateQuestions};

if(typeof document!=="undefined"){
  const el=id=>document.getElementById(id);
  let current=null,selected=new Set(),answered=false,shown=new Set(),count=0;
  const pools={beginner:[],intermediate:[],advanced:[]};
  function drawQuestion(){
    const level=el("difficulty").value;
    if(!pools[level].length){pools[level]=QUESTIONS.filter(q=>q.level===level).sort(()=>Math.random()-.5);if(pools[level].length>1&&pools[level][0]===current){pools[level].push(pools[level].shift());}}
    current=pools[level].shift();selected=new Set();answered=false;count++;
    el("question-number").textContent=`問題 ${count}`;
    el("hand").replaceChildren(...current.tiles.map(tileElement));
    el("result").hidden=true;el("hint-text").textContent="";el("next").disabled=true;el("check").disabled=false;el("hint").disabled=false;
    renderChoices();updateSelection();
  }
  function renderChoices(){const parent=el("choices");parent.replaceChildren();for(const i of ALL_TILES){const button=document.createElement("button");button.type="button";button.className="choice";button.dataset.tile=String(i);button.setAttribute("aria-label",`${tileName(i)}を選ぶ`);button.setAttribute("aria-pressed",String(selected.has(i)));button.disabled=answered||current.tiles.filter(t=>t===i).length===4;button.append(tileElement(i));button.addEventListener("click",()=>{if(answered)return;selected.has(i)?selected.delete(i):selected.add(i);renderChoices();updateSelection();});parent.append(button);}}
  function updateSelection(){el("selection-status").textContent=selected.size?`選択中：${[...selected].sort((a,b)=>a-b).map(tileName).join("・")}`:"選択中：なし";}
  el("check").addEventListener("click",()=>{if(answered)return;if(!selected.size){el("selection-status").textContent="牌を1枚以上選んでください。";return;}answered=true;const correct=[...current.waits.keys()],right=selected.size===correct.length&&correct.every(i=>selected.has(i));el("result-heading").textContent=right?"正解です":"答えを確認しましょう";el("correct-tiles").replaceChildren(...correct.map(tileElement));const missed=correct.filter(i=>!selected.has(i)),extra=[...selected].filter(i=>!current.waits.has(i));el("selection-result").textContent=`あなたの選択：${[...selected].sort((a,b)=>a-b).map(tileName).join("・")}。${right?"すべて選べました。":`選び忘れ：${missed.length?missed.map(tileName).join("・"):"なし"}／余分：${extra.length?extra.map(tileName).join("・"):"なし"}`}`;el("explanation").textContent=`${current.shape}。${current.detail} 和了牌は${correct.map(tileName).join("・")}です。`;el("result").hidden=false;el("check").disabled=true;el("hint").disabled=true;el("next").disabled=false;renderChoices();el("result").scrollIntoView({block:"nearest",behavior:"smooth"});});
  el("hint").addEventListener("click",()=>{if(!answered)el("hint-text").textContent=`ヒント：${current.hint}`;});
  el("next").addEventListener("click",()=>{if(answered)drawQuestion();});
  el("difficulty").addEventListener("change",()=>{for(const key of Object.keys(pools))pools[key]=[];drawQuestion();});
  drawQuestion();
}

