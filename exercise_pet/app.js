"use strict";

const EXERCISES = [
  {id:"march",name:"その場で軽く足踏み",seconds:30,instruction:"片足ずつ、床から少しだけ上げます。足音は静かに。",hint:"足を交互に ↑ ↓",cycle:1.7},
  {id:"side",name:"左右にサイドステップ",seconds:30,instruction:"右へ一歩、戻って左へ一歩。体重をゆっくり移します。",hint:"左 ←　→ 右",cycle:3.2},
  {id:"arms",name:"両腕の上げ下げ",seconds:30,instruction:"両腕を肩からゆっくり上げ、ゆっくり下ろします。",hint:"両腕を ↑ ↓",cycle:2.6},
  {id:"heels",name:"かかとの上げ下げ",seconds:30,instruction:"つま先を床につけたまま、かかとを上げて戻します。",hint:"かかとを ↑ ↓",cycle:2.2},
  {id:"squat",name:"浅いスクワット",seconds:30,instruction:"ひざを軽く曲げ、お尻を少し下げて戻します。深くしゃがまないでください。",hint:"腰を少し ↓ ↑",cycle:3},
  {id:"slow",name:"ゆっくり足踏み",seconds:30,instruction:"呼吸を整えながら、片足ずつゆっくり持ち上げます。",hint:"ゆっくり交互に ↑ ↓",cycle:3.4}
];
const COURSE={id:"quiet_full_body_3",name:"静かに全身3分コース",exercises:EXERCISES};
const TOTAL=COURSE.exercises.reduce((sum,item)=>sum+item.seconds,0);
const STORE_KEY="exercise_pet_records_v1";
const $=id=>document.getElementById(id);
const screens=["home","workout","complete","records"];
let records=readRecords();
let state={mode:"home",start:0,pausedAt:0,pausedMs:0,frame:0,step:-1,saved:false,freezeElapsed:0};

function petSvg(prefix){return `<svg viewBox="0 0 360 330" role="img" aria-label="シマエナガが運動の見本を見せます" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="180" cy="295" rx="87" ry="10" fill="#dcb9c6" opacity=".38"/>
  <g data-part="pet"><g data-part="left-leg" transform="translate(145 242)"><path d="M0 0 Q-3 21 -5 36" stroke="#806b73" stroke-width="11" stroke-linecap="round" fill="none"/><path data-part="left-foot" d="M-5 36 Q-22 40 -26 36" stroke="#806b73" stroke-width="9" stroke-linecap="round" fill="none"/></g><g data-part="right-leg" transform="translate(215 242)"><path d="M0 0 Q3 21 5 36" stroke="#806b73" stroke-width="11" stroke-linecap="round" fill="none"/><path data-part="right-foot" d="M5 36 Q22 40 26 36" stroke="#806b73" stroke-width="9" stroke-linecap="round" fill="none"/></g>
  <g data-part="torso"><ellipse cx="180" cy="183" rx="78" ry="77" fill="#fffdfb" stroke="#e4d7db" stroke-width="3"/><ellipse cx="180" cy="209" rx="46" ry="33" fill="#fbe9ef"/></g>
  <g data-part="left-wing" transform="translate(115 158)"><path d="M0 0 Q-27 -2 -42 17 Q-47 29 -39 39 Q-30 43 -20 31 L3 14" fill="#fffdfb" stroke="#d9c8d0" stroke-width="3"/></g><g data-part="right-wing" transform="translate(245 158)"><path d="M0 0 Q27 -2 42 17 Q47 29 39 39 Q30 43 20 31 L-3 14" fill="#fffdfb" stroke="#d9c8d0" stroke-width="3"/></g>
  <g data-part="head"><circle cx="180" cy="111" r="67" fill="#fffdfb" stroke="#e4d7db" stroke-width="3"/><ellipse cx="136" cy="120" rx="16" ry="8" fill="#f5c8d8" opacity=".8"/><ellipse cx="224" cy="120" rx="16" ry="8" fill="#f5c8d8" opacity=".8"/><circle cx="155" cy="104" r="5" fill="#493e46"/><circle cx="205" cy="104" r="5" fill="#493e46"/><path d="M172 118 Q180 129 188 118Z" fill="#c79378"/><path d="M174 132 Q180 138 186 132" fill="none" stroke="#9e7682" stroke-width="2" stroke-linecap="round"/></g></g></svg>`}
function parts(){const root=$("workout-pet");return Object.fromEntries(["pet","head","torso","left-wing","right-wing","left-leg","right-leg","left-foot","right-foot"].map(name=>[name,root.querySelector(`[data-part="${name}"]`)]))}
let p;
function renderPet(id,elapsed){
  if(!p)return;
  const move=EXERCISES.find(x=>x.id===id)||EXERCISES[0];
  const wave=Math.sin(2*Math.PI*elapsed/move.cycle);
  const lift=Math.max(0,wave),other=Math.max(0,-wave);
  let x=0,y=0,head=0,torsoY=0,leftW=0,rightW=0,leftY=0,rightY=0,leftRot=0,rightRot=0,leftFoot=0,rightFoot=0;
  switch(id){
    case "march":leftY=-22*lift;rightY=-22*other;leftW=-12*wave;rightW=-12*wave;head=2*wave;break;
    case "side":x=24*wave;leftRot=-18*Math.max(0,-wave);rightRot=18*Math.max(0,wave);leftW=12*wave;rightW=12*wave;head=-4*wave;break;
    case "arms":{const up=(1-wave)/2;leftW=76*up;rightW=-76*up;head=2*wave;break}
    case "heels":{const rise=(1-wave)/2;y=-9*rise;leftY=9*rise;rightY=9*rise;leftFoot=-20*rise;rightFoot=20*rise;break}
    case "squat":{const bend=(1-wave)/2;y=13*bend;torsoY=5*bend;leftRot=-21*bend;rightRot=21*bend;leftW=-16*bend;rightW=16*bend;head=3*bend;break}
    case "slow":leftY=-17*lift;rightY=-17*other;leftW=-8*wave;rightW=-8*wave;head=1.5*wave;break;
  }
  p.pet.setAttribute("transform",`translate(${x.toFixed(2)} ${y.toFixed(2)})`);
  p.head.setAttribute("transform",`translate(0 ${head.toFixed(2)})`);
  p.torso.setAttribute("transform",`translate(0 ${torsoY.toFixed(2)})`);
  p["left-wing"].setAttribute("transform",`translate(115 158) rotate(${leftW.toFixed(2)})`);
  p["right-wing"].setAttribute("transform",`translate(245 158) rotate(${rightW.toFixed(2)})`);
  p["left-leg"].setAttribute("transform",`translate(145 242) translate(0 ${leftY.toFixed(2)}) rotate(${leftRot.toFixed(2)})`);
  p["right-leg"].setAttribute("transform",`translate(215 242) translate(0 ${rightY.toFixed(2)}) rotate(${rightRot.toFixed(2)})`);
  p["left-foot"].setAttribute("transform",`rotate(${leftFoot.toFixed(2)} -26 36)`);
  p["right-foot"].setAttribute("transform",`rotate(${rightFoot.toFixed(2)} 26 36)`);
}

function show(name){screens.forEach(id=>$(id).hidden=id!==name);state.mode=name;window.scrollTo(0,0)}
function formatSeconds(seconds){const s=Math.max(0,Math.ceil(seconds));return `${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`}
function formatDuration(seconds){const mins=Math.floor(seconds/60),rest=seconds%60;return rest?`${mins}分${rest}秒`:`${mins}分`}
function localDay(date){return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`}
function readRecords(){try{const value=JSON.parse(localStorage.getItem(STORE_KEY)||"[]");if(!Array.isArray(value))return [];return value.filter(r=>r&&typeof r.date==="string"&&!Number.isNaN(Date.parse(r.date))&&typeof r.courseId==="string"&&typeof r.courseName==="string"&&Number.isFinite(r.seconds)&&r.seconds>0&&r.completed===true)}catch{return []}}
function saveRecord(){if(state.saved)return;state.saved=true;const item={date:new Date().toISOString(),courseId:COURSE.id,courseName:COURSE.name,seconds:TOTAL,completed:true};records.push(item);try{localStorage.setItem(STORE_KEY,JSON.stringify(records))}catch{/* Private browsing or full storage: keep this session's record. */}}
function totals(){const now=new Date(),today=localDay(now),month=today.slice(0,7),weekStart=new Date(now.getFullYear(),now.getMonth(),now.getDate());weekStart.setDate(weekStart.getDate()-(weekStart.getDay()+6)%7);const weekKey=localDay(weekStart);return records.reduce((a,r)=>{const day=localDay(new Date(r.date));a.total+=r.seconds;a.count++;if(day===today)a.today+=r.seconds;if(day>=weekKey&&day<=today)a.week+=r.seconds;if(day.slice(0,7)===month)a.month+=r.seconds;return a},{today:0,week:0,month:0,total:0,count:0})}
function updateHome(){const t=totals();$("home-today").textContent=formatDuration(t.today);$("home-month").textContent=formatDuration(t.month)}
function stepAt(elapsed){let passed=0;for(let i=0;i<EXERCISES.length;i++){if(elapsed<passed+EXERCISES[i].seconds)return {index:i,within:elapsed-passed};passed+=EXERCISES[i].seconds}return {index:EXERCISES.length-1,within:EXERCISES.at(-1).seconds}}
function updateStep(index){const move=EXERCISES[index];$("step-number").textContent=`${index+1} / ${EXERCISES.length}`;$("move-title").textContent=move.name;$("move-instruction").textContent=move.instruction;$("direction").textContent=move.hint;$("next-move").textContent=index<EXERCISES.length-1?`次：${EXERCISES[index+1].name}`:"次：おつかれさま！";state.step=index}
function updateProgress(elapsed){$("time-left").textContent=formatSeconds(TOTAL-elapsed);$("progress-fill").style.width=`${Math.min(100,elapsed/TOTAL*100)}%`;$("progress").setAttribute("aria-valuenow",String(Math.floor(elapsed)))}
function start(){cancelAnimationFrame(state.frame);state={mode:"countdown",start:performance.now(),pausedAt:0,pausedMs:0,frame:0,step:-1,saved:false,freezeElapsed:0};show("workout");state.mode="countdown";$("pause").disabled=true;$("pause").textContent="一時停止";$("countdown").hidden=false;$("count-number").textContent="3";updateStep(0);updateProgress(0);renderPet("march",0);tick()}
function tick(){const now=performance.now();if(state.mode==="countdown"){const elapsed=(now-state.start)/1000;if(elapsed>=3){state.mode="running";state.start+=3000;$("countdown").hidden=true;$("pause").disabled=false}else{$("count-number").textContent=String(Math.max(1,3-Math.floor(elapsed)));state.frame=requestAnimationFrame(tick);return}}
  if(state.mode!=="running")return;
  const elapsed=Math.min(TOTAL,(now-state.start-state.pausedMs)/1000);
  if(elapsed>=TOTAL){finish();return}
  const step=stepAt(elapsed);if(state.step!==step.index)updateStep(step.index);
  updateProgress(elapsed);renderPet(EXERCISES[step.index].id,step.within);
  state.frame=requestAnimationFrame(tick)
}
function pauseResume(){if(state.mode==="running"){state.pausedAt=performance.now();state.freezeElapsed=Math.min(TOTAL,(state.pausedAt-state.start-state.pausedMs)/1000);state.mode="paused";cancelAnimationFrame(state.frame);$("pause").textContent="再開する"}else if(state.mode==="paused"){state.pausedMs+=performance.now()-state.pausedAt;state.pausedAt=0;state.mode="running";$("pause").textContent="一時停止";tick()}}
function stop(){if(state.mode!=="countdown"&&state.mode!=="running"&&state.mode!=="paused")return;cancelAnimationFrame(state.frame);$("countdown").hidden=true;updateHome();show("home")}
function finish(){if(state.saved)return;cancelAnimationFrame(state.frame);updateProgress(TOTAL);saveRecord();const t=totals();$("complete-today").textContent=formatDuration(t.today);$("complete-month").textContent=formatDuration(t.month);$("complete-total").textContent=formatDuration(t.total);show("complete")}
function renderRecords(){const t=totals();for(const [key,value] of Object.entries(t)){const el=$(`record-${key}`);if(el)el.textContent=key==="count"?`${value}回`:formatDuration(value)}
  const now=new Date(),year=now.getFullYear(),month=now.getMonth();$("calendar-title").textContent=`${year}年${month+1}月のカレンダー`;
  const grouped=new Map();for(const r of records){const key=localDay(new Date(r.date));if(!grouped.has(key))grouped.set(key,[]);grouped.get(key).push(r)}
  const calendar=$("calendar");calendar.replaceChildren();for(const day of ["月","火","水","木","金","土","日"]){const el=document.createElement("div");el.className="weekday";el.textContent=day;calendar.append(el)}
  const offset=(new Date(year,month,1).getDay()+6)%7;for(let i=0;i<offset;i++)calendar.append(document.createElement("div"));
  for(let d=1,last=new Date(year,month+1,0).getDate();d<=last;d++){const key=localDay(new Date(year,month,d)),list=grouped.get(key)||[];const el=document.createElement("div");el.className=`day${list.length?" done":""}`;el.innerHTML=`<strong>${d}</strong>`;if(list.length){const mark=document.createElement("small");mark.textContent=`✿ ${list.length}回`;el.append(mark);el.setAttribute("aria-label",`${d}日、${list.length}回実施`)}calendar.append(el)}
  const history=$("history");history.replaceChildren();const keys=[...grouped.keys()].sort().reverse();if(!keys.length){history.textContent="まだ記録はありません。";return}for(const key of keys){const section=document.createElement("section"),title=document.createElement("h4"),list=document.createElement("ul");section.className="history-day";title.textContent=`${key.replaceAll("-","/")}（${grouped.get(key).length}回）`;for(const r of grouped.get(key).slice().sort((a,b)=>b.date.localeCompare(a.date))){const item=document.createElement("li"),date=new Date(r.date);item.textContent=`${date.toLocaleTimeString("ja-JP",{hour:"2-digit",minute:"2-digit"})}　${r.courseName}　${formatDuration(r.seconds)}`;list.append(item)}section.append(title,list);history.append(section)}}
function showRecords(){renderRecords();show("records")}
$("home-pet").innerHTML=petSvg("home");$("workout-pet").innerHTML=petSvg("workout");p=parts();updateHome();
$("start").addEventListener("click",start);$("again").addEventListener("click",start);$("pause").addEventListener("click",pauseResume);$("stop").addEventListener("click",stop);$("show-records").addEventListener("click",showRecords);$("records-home").addEventListener("click",()=>{updateHome();show("home")});$("complete-home").addEventListener("click",()=>{updateHome();show("home")});

