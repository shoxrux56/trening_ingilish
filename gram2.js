/* ===== gram2.js — grammatika: rasmli qoida + eslab qolish + mini-o'yinlar ===== */
(function(){
var st=document.createElement("style");st.textContent=
".g2h{width:116px;height:116px;border-radius:50%;background:var(--sel);display:flex;align-items:center;justify-content:center;font-size:62px;margin:4px auto 10px;animation:g2pop .6s both}"+
"@keyframes g2pop{0%{transform:scale(.3) rotate(-20deg)}70%{transform:scale(1.15)}100%{transform:scale(1)}}"+
"@keyframes g2in{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}"+
"@keyframes g2sk{25%{transform:translateX(-7px)}75%{transform:translateX(7px)}}"+
".g2t{text-align:center;font-size:23px;font-weight:900;margin:0 0 12px}"+
".g2c{border:2px solid var(--bd);border-left:7px solid var(--b);border-radius:14px;padding:12px 14px;margin:10px 0;font-size:18px;line-height:1.6;animation:g2in .4s both}"+
".g2c mark,.g2f mark{background:var(--sel);color:var(--b);padding:1px 7px;border-radius:7px;font-weight:900}"+
".g2x{border:2px solid var(--bd);border-bottom-width:5px;border-radius:16px;padding:12px 14px;margin:10px 0;cursor:pointer;animation:g2in .4s both}"+
".g2x .f{font-size:21px;font-weight:900;display:flex;gap:10px;align-items:center;justify-content:space-between}"+
".g2x .u{margin-top:6px;color:var(--mut);font-size:15px}.g2x.on{border-color:var(--g);background:var(--gl)}.g2x.on .u{color:var(--gd)}"+
".g2hook{background:linear-gradient(135deg,#ce82ff,#1cb0f6);color:#fff;border-radius:22px;padding:22px 18px;text-align:center;animation:g2pop .6s both}"+
".g2hook .p{font-size:34px;line-height:1.5;margin:6px 0 14px}.g2hook .k{font-size:12px;letter-spacing:.14em;font-weight:900;opacity:.9}.g2hook .tx{font-size:18px;line-height:1.55;font-weight:800}"+
".g2bn{display:flex;justify-content:space-between;align-items:center;font-size:13px;font-weight:900;color:var(--mut);letter-spacing:.06em;margin:0 0 10px}.g2bn b{color:var(--b)}"+
".g2grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.g2grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}"+
".g2b{padding:14px 8px;border:2px solid var(--bd);border-bottom-width:5px;border-radius:14px;background:var(--bg);color:var(--tx);font:inherit;font-size:16px;font-weight:800;cursor:pointer;min-height:62px;line-height:1.25}"+
".g2b.sel{border-color:var(--b);background:var(--sel)}.g2b.ok{border-color:var(--g);background:var(--gl);color:var(--gd);opacity:.75}.g2b.no{border-color:var(--r);background:var(--rl);animation:g2sk .35s}"+
".g2fc{height:86px;font-size:34px;border-radius:16px;border:2px solid var(--bd);border-bottom-width:5px;background:var(--b);color:#fff;font:inherit;font-weight:900;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:4px;text-align:center}"+
".g2fc.up{background:var(--bg);color:var(--tx);font-size:16px;border-color:var(--b)}.g2fc.ok{background:var(--gl);color:var(--gd);border-color:var(--g)}"+
".g2tm{height:12px;border-radius:7px;background:var(--bd);overflow:hidden;margin:6px 0 14px}.g2tm i{display:block;height:100%;background:var(--g);width:100%}"+
".g2sb{display:flex;justify-content:space-between;font-size:20px;font-weight:900;margin-bottom:4px}.g2cb{color:#ff9600}"+
".g2f{font-size:19px;line-height:1.4}";
document.head.appendChild(st);

var HK={
"a / an / the":["🍎 an · 🚗 a · ☀️ the","AN — unli TOVUSH oldidan (an apple, an egg). A — undosh oldidan (a car). THE — 👆 ko'rsatkich barmoq: aniq narsa."],
"Ko'plik (plural)":["🐱 ➜ 🐱🐱🐱","Ko'p bo'lsa +s: cat ➜ cats. s, sh, ch, x bilan tugasa +es: bus ➜ buses. Sirli: man ➜ men, child ➜ children."],
"I, you, he, she, it, we, they":["👦 he · 👧 she · 🐶 it · 👥 we","Faqat 7 ta so'z! I=men, you=sen/siz, he=u (o'g'il), she=u (qiz), it=u (narsa/hayvon), we=biz, they=ular."],
"To be: am / is / are":["🙋 I AM · 👦 he IS · 👥 we ARE","AM — faqat I bilan. IS — bitta kishi/narsa. ARE — ko'p yoki you. «I AM, HE IS, WE ARE» — 3 marta qo'shiq qilib ayting!"],
"Present Simple (har kuni)":["☀️ 🪥 🚌 har kuni","Har kuni takrorlanadigan ish. He/she/it bo'lsa fe'lga +s: He works. Soat kabi — har kuni, har kuni!"],
"have / has":["🎒 I HAVE · 👧 she HAS","I/you/we/they ➜ HAVE. He/she/it ➜ HAS. «U» (he/she/it) — HAS!"],
"there is / there are":["🪑 There IS · 🪑🪑 There ARE","Bitta narsa — there IS. Ko'p narsa — there ARE. Xonaga kirib «Mana!» deganingiz kabi."],
"Inkor: don't / doesn't":["🚫 I DON'T · 🚫 he DOESN'T","DON'T — I/you/we/they bilan. DOESN'T — he/she/it bilan. DOESN'T dan keyin fe'lga -s QO'SHILMAYDI: He doesn't work."],
"Savol: do / does + Wh-":["❓ DO you…? DOES he…?","Savolda DO/DOES gapning BOSHIGA chiqadi. Savol so'zlari: What, Where, When, Why, Who, How — 5W+H!"],
"can / can't":["💪 I CAN · 🚫 I CAN'T","CAN + fe'l (to yo'q, -s yo'q): I can swim. Superman: «I CAN fly!» 🦸"],
"Past Simple: was / were":["⏪ I WAS · they WERE","I/he/she/it ➜ WAS. You/we/they ➜ WERE. «Kecha» bo'lsa: is/are ➜ was/were."],
"Past Simple: fe'l + -ed":["⏪ work ➜ work-ED","O'tgan zamon belgisi — oxirida -ed. «Kecha ishladim» = I worked. ED = ertalabki «o'tib ketdi» 🚪"],
"Irregular fe'llar (o'tgan zamon)":["🔀 go ➜ went · see ➜ saw","Bu fe'llar -ed olmaydi, shakli o'zgaradi. Har kuni 3 tasini yodlang: go–went, see–saw, eat–ate."],
"Future: will / going to":["🔮 WILL · 🎯 GOING TO","WILL — hozir qaror yoki bashorat. GOING TO — oldindan reja. Birinchisi «bo'ladi», ikkinchisi «mo'ljal olganman»."],
"Prepositions: in / on / at":["📦 IN · 🪑 ON · 📍 AT","IN — ichida (qutida). ON — ustida (stol ustida). AT — aniq nuqtada (bekatda, soat 5 da)."],
"my / your / his / her":["👋 my · your · his · her","my=mening, your=sening, his=uning (o'g'il), her=uning (qiz), our=bizning, their=ularning. Ot oldidan turadi: my book."],
"Comparative: katta-roq":["📏 tall ➜ taller","Qisqa so'z +er (tall ➜ taller). Uzun so'z oldiga MORE (more beautiful). Keyin THAN: taller than me."],
"Present Continuous: hozir":["▶️ am/is/are + -ING","Aynan hozir bo'layotgan ish: I am reading. Kamera yoqilgan ▶️ — hozir sodir bo'lmoqda!"],
"this / that / these / those":["👉 THIS · 👆 THAT","THIS/THESE — yonimda. THAT/THOSE — uzoqda. THIS ichida «is» bor: shu yerda."],
"Egalik: Ali's book":["👦📘 Ali'S book","Egalik: ot + 's. Ali's book = Ali ning kitobi. Ko'plikda: parents' house."],
"Buyruq: Open! / Don't! / Let's":["📢 Open! · 🚫 Don't! · 🤝 Let's","Buyruq — faqat fe'l: Open! Sit! Inkor — Don't + fe'l. Taklif — Let's + fe'l (keling…)."],
"like + -ing, want + to":["❤️ like swimming · 🎯 want TO swim","LIKE + -ing (yoqtiraman). WANT + TO + fe'l (xohlayman). Ikki do'st: like—ing, want—to."],
"Past Simple: did / didn't":["⏪ DID you…? · I DIDN'T","Savol va inkorda DID bor, fe'l esa ASL holida: Did you go? I didn't go. (went ✗)"],
"Present Perfect: have / has + V3":["🧳 HAVE/HAS + V3","«Hayotimda…» yoki natija hozir muhim: I have visited Paris. Aniq vaqt aytilmaydi!"],
"ever, never, just, already, yet":["🌍 ever · never · just · already · yet","Ever — qachondir (savolda). Never — hech qachon. Just — hozirgina. Already — allaqachon. Yet — hali (inkor/savolda)."],
"Present Perfect yoki Past Simple?":["⏰ yesterday ➜ Past · ever ➜ Perfect","Aniq vaqt bor (yesterday, in 2020) — Past Simple. Vaqt yo'q yoki ever/never — Present Perfect."],
"for va since":["⏳ FOR 2 years · 📅 SINCE 2020","FOR + davomiylik (3 hours). SINCE + boshlanish nuqtasi (Monday, 2020)."],
"Superlative: eng katta":["🏆 THE biggest","Eng…: THE + qisqa so'z+est (the tallest) yoki THE MOST + uzun so'z. Kubok 🏆 olish uchun «the» kerak!"],
"as ... as, too, enough":["⚖️ AS tall AS · 🔥 TOO hot","AS…AS = teng. TOO = ortiqcha (yomon): too hot = ichib bo'lmaydi. ENOUGH = yetarli."],
"some / any, much / many":["➕ SOME · ❓ ANY","SOME — darak gapda. ANY — savol va inkorda. MANY — sanaladigan (apples), MUCH — sanalmaydigan (water)."],
"must / have to / should":["🔴 MUST · 🟡 HAVE TO · 🟢 SHOULD","Svetofor! MUST = shart. HAVE TO = majburiyat. SHOULD = maslahat."],
"used to: oldin shunday edi":["📼 USED TO","Oldin shunday edi, endi yo'q: I used to smoke. Eski kassetani eslang 📼"],
"Past Continuous: was / were + -ing":["⏪▶️ WAS/WERE + -ing","O'tgan paytda jarayon: I was sleeping when you called. Uzun jarayon + qisqa voqea."],
"First conditional: If ... will":["☔ If it rains, I WILL stay","Real shart: If + hozirgi zamon, will + fe'l. If dan keyin WILL qo'yilmaydi!"],
"Second conditional: If I were ...":["💭 If I WERE rich…","Xayol: If + o'tgan, would + fe'l. Hamma shaxsga WERE: If I were you…"],
"me, him, us va mine, yours":["👉 me · him · us / mine · yours","Me/him/us — fe'ldan keyin. Mine/yours — «meniki, seniki» (ot kerak emas)."],
"Iltimos va taklif: Could, Would, Let's":["🙏 COULD you…? · WOULD you…?","Iltimosda Could/Would — Can dan muloyimroq. Could you help me? Taklif: Let's go!"],
"-ing yoki to + fe'l":["🔀 enjoy -ING · decide TO","Enjoy, finish, stop + -ing. Want, decide, hope + to. Ro'yxatni kartochka qilib yodlang."],
"who / which / that / where":["🧲 who · which · where","Who — odam, which — narsa, where — joy, that — ikkalasi. Bular gapni «yopishtiruvchi» so'zlar 🧲"],
"always, usually ... va -ly ravishlar":["📊 always 100% … never 0%","Chastota: always, usually, often, sometimes, never. Fe'ldan OLDIN, am/is/are dan KEYIN: He always works. He is always late."],
"Passive: is made, was built":["🏗️ is MADE · was BUILT","Kim qildi emas, NIMA bo'ldi muhim: The house was built. Formula: be + V3."],
"Reported speech: said / asked":["💬 He SAID he WAS…","Boshqaning gapini aytib berish: zamon bir qadam ortga: «I am» ➜ he said he was."],
"Phrasal verbs: fe'l + kichik so'z":["🧩 give UP · look FOR","Fe'l + kichik so'z = yangi ma'no: give up (taslim bo'lmoq), look for (qidirmoq). Jumboqdek yig'ing 🧩"],
"wish va Third conditional":["🌠 I WISH… · If I HAD known…","Wish + o'tgan = hozirgi orzu. If + had V3, would have V3 = o'tmishdagi afsus."]
};


var G2=null,E=function(s){return esc(s)};
function emo(h){var m=h.match(/^(\p{Extended_Pictographic}️?(?:‍\p{Extended_Pictographic}️?)*)/u);return m?m[1]:"📘"}
function nohd(h){return h.replace(/^\p{Extended_Pictographic}️?(?:‍\p{Extended_Pictographic}️?)*\s*/u,"")}
function bf(x){return E(x).replace(/\*\*(.+?)\*\*/g,"<mark>$1</mark>")}
function clean(s){return s.replace(/[🔵🔴🟡]/g,"").trim()}
function top(p){return '<div class="top"><button class="x" onclick="home()" aria-label="Yopish">✕</button><div class="pg"><i style="width:'+Math.round(p*100)+'%"></i></div></div>'}
function pairsOf(t){var a=[],seen={};
  t.s.forEach(function(s){s.e.forEach(function(e){var f=clean(e[0]);if(f&&e[1]&&!seen[f]){seen[f]=1;a.push([f,e[1]])}})});
  t.q.forEach(function(q){if(q[0]==="build"&&q[2]&&q[1]&&!seen[q[2]]){seen[q[2]]=1;a.push([q[2],q[1]])}});
  return a}
function mcs(t){return t.q.filter(function(q){return q[0]==="mc"&&q[1].indexOf("___")>=0})}
function plan(t){var g=[],pr=pairsOf(t),m=mcs(t);
  if(pr.length>=3)g.push("match");
  if(pr.length>=3)g.push("memory");
  if(m.length>=3)g.push("pick");
  if(m.length>=4)g.push("speed");
  return g}
var NM={match:"Juftlikni top",memory:"Xotira kartalari",pick:"Qaysi gap to'g'ri?",speed:"Tezkor raund"};

/* ---- qoida ekranlari ---- */
function rule(){var t=GR.t,si=GR.si||0,sd=t.s[si],last=si>=t.s.length-1,n=t.s.length+1;
  GR.rv={};
  $("#app").innerHTML=top((si+1)/(n+1))+'<div class="bd"><small style="color:var(--b);font-weight:900">'+E(t.lv)+' · '+E(t.t)+' · '+(si+1)+'/'+t.s.length+'</small>'+
   '<div class="g2h" key="'+si+'">'+emo(sd.h)+'</div><h2 class="g2t">'+bf(nohd(sd.h))+'</h2>'+
   sd.p.map(function(p,k){return '<div class="g2c" style="animation-delay:'+(k*.12)+'s">'+bf(p)+'</div>'}).join("")+
   (sd.e.length?'<div class="note" style="margin-top:14px">👇 Bosib tarjimani ko\'ring, 🔊 bilan eshiting</div>'+sd.e.map(function(e,k){var f=clean(e[0]);
     return '<div class="g2x" id="gx'+k+'" onclick="g2rv('+k+')"><div class="f"><span>'+E(f)+'</span><button class="spk" onclick="event.stopPropagation();sayT(this.dataset.t)" data-t="'+E(f)+'" aria-label="Eshitish">🔊</button></div><div class="u" id="gu'+k+'">👆 tarjimasi</div></div>'}).join(""):"")+
   '</div><div class="ft"><button class="btn" onclick="g2go()">'+(last?"Tushunarli ➜":"Davom ➜")+'</button></div>';
  window.g2rvE=sd.e}
window.g2rv=function(k){var e=window.g2rvE[k],b=$("#gx"+k);if(!e||!b)return;b.classList.add("on");$("#gu"+k).textContent="🇺🇿 "+e[1];hap(true);snd(600,.08)};
window.g2go=function(){var t=GR.t;
  if(GR.st==="rule"){if((GR.si||0)<t.s.length-1){GR.si=(GR.si||0)+1;return rule()}GR.st="hook";return hook()}
  if(GR.st==="hook"){GR.st="g2";G2={g:plan(t),k:0,pts:0,max:0};return nextGame()}
  if(GR.st==="g2"){G2.k++;return nextGame()}
  };
function hook(){var t=GR.t,h=HK[t.t]||["📘","Qoidani 3 marta ovoz chiqarib ayting."];
  $("#app").innerHTML=top(.85)+'<div class="bd"><small style="color:var(--b);font-weight:900">'+E(t.lv)+' · '+E(t.t)+'</small><div style="height:12px"></div>'+
   '<div class="g2hook"><div class="k">🧠 ESDA QOLADI</div><div class="p">'+E(h[0])+'</div><div class="tx">'+E(h[1])+'</div></div>'+
   '<div class="note" style="text-align:center;margin-top:16px">'+(G2plan(t))+'</div></div><div class="ft"><button class="btn" onclick="g2go()">🎮 O\'yinlarga!</button></div>';snd(660,.15)}
function G2plan(t){var g=plan(t);return g.length?"Oldinda: "+g.map(function(x){return "🎮 "+NM[x]}).join(" · ")+" · 🏁 Yakuniy test":"Oldinda: 🏁 Yakuniy test"}

/* ---- o'yinlar ---- */
function banner(name,extra){return '<div class="g2bn"><span>🎮 O\'YIN '+(G2.k+1)+'/'+G2.g.length+' · <b>'+E(name)+'</b></span><span>'+(extra||"")+'</span></div>'}
function nextGame(){
  if(G2.k>=G2.g.length)return endGames();
  var g=G2.g[G2.k];({match:gMatch,memory:gMemory,pick:gPick2,speed:gSpeed})[g]()}
function shell(inner,p){$("#app").innerHTML=top(p)+'<div class="bd">'+inner+'</div>'}
function done(label,pts,max){G2.pts+=pts;G2.max+=max;hap(true);snd(784,.25);
  var f=document.createElement("div");f.className="ft ok";f.innerHTML='<div class="fm">'+label+' · ⭐ +'+pts+'</div><button class="btn" onclick="g2go()">Davom</button>';$("#app").appendChild(f)}

/* 1. match */
function gMatch(){var P=sh(pairsOf(GR.t)).slice(0,4),L=sh(P.map(function(p,i){return [p[0],i]})),R=sh(P.map(function(p,i){return [p[1],i]}));
  var S={l:null,r:null,ok:0,err:0};window.g2m=S;
  shell(banner("Juftlikni top","❤️ juft: "+P.length)+'<div class="note" style="margin-top:0">Chapdagini o\'ngdagi tarjimasi bilan bog\'lang</div><div class="g2grid"><div id="ml">'+L.map(function(x,k){return '<button class="g2b" style="width:100%;margin-bottom:10px" id="l'+k+'" onclick="g2mp(0,'+k+')">'+E(x[0])+'</button>'}).join("")+'</div><div id="mr">'+R.map(function(x,k){return '<button class="g2b" style="width:100%;margin-bottom:10px" id="r'+k+'" onclick="g2mp(1,'+k+')">'+E(x[0])+'</button>'}).join("")+'</div></div>',.9);
  S.L=L;S.R=R;S.n=P.length}
window.g2mp=function(side,k){var S=window.g2m,id=(side?"r":"l")+k,b=$("#"+id);if(!b||b.classList.contains("ok"))return;
  if(!side)try{sayT(S.L[k][0])}catch(e){}
  if(side){if(S.r!==null)$("#r"+S.r).classList.remove("sel");S.r=k}else{if(S.l!==null)$("#l"+S.l).classList.remove("sel");S.l=k}
  b.classList.add("sel");
  if(S.l===null||S.r===null)return;
  var a=$("#l"+S.l),c=$("#r"+S.r);
  if(S.L[S.l][1]===S.R[S.r][1]){a.className="g2b ok";c.className="g2b ok";snd(660,.12);hap(true);S.ok++;S.l=S.r=null;
    if(S.ok>=S.n)done("🎉 Hammasi to'g'ri!",Math.max(10,40-S.err*8),40)}
  else{a.className="g2b no";c.className="g2b no";S.err++;hap(false);snd(200,.15);
    var l=S.l,r=S.r;S.l=S.r=null;setTimeout(function(){a.className="g2b";c.className="g2b"},450)}};

/* 2. memory */
function gMemory(){var P=sh(pairsOf(GR.t)).slice(0,3),C=[];P.forEach(function(p,i){C.push([p[0],i,1]);C.push([p[1],i,0])});C=sh(C);
  var S={C:C,a:null,ok:0,mv:0,lock:false,n:P.length};window.g2mm=S;
  shell(banner("Xotira kartalari","")+'<div class="note" style="margin-top:0">Kartalarni oching: so\'z va uning tarjimasi juft bo\'lsin. Harakatlar: <b id="mv">0</b></div><div class="g2grid3">'+C.map(function(c,k){return '<button class="g2fc" id="c'+k+'" onclick="g2mc('+k+')">❓</button>'}).join("")+'</div>',.9)}
window.g2mc=function(k){var S=window.g2mm,b=$("#c"+k),c=S.C[k];if(S.lock||!b||b.classList.contains("up")||b.classList.contains("ok"))return;
  b.classList.add("up");b.textContent=c[0];snd(500,.06);if(c[2])try{sayT(c[0])}catch(e){}
  if(S.a===null){S.a=k;return}
  S.mv++;$("#mv").textContent=S.mv;var o=S.a,oc=S.C[o];S.a=null;
  if(oc[1]===c[1]&&o!==k){$("#c"+o).className="g2fc ok";b.className="g2fc ok";S.ok++;hap(true);snd(700,.12);if(S.ok>=S.n)done("🧠 Xotirangiz zo'r!",Math.max(10,40-(S.mv-S.n)*6),40)}
  else{S.lock=true;hap(false);setTimeout(function(){$("#c"+o).className="g2fc";$("#c"+o).textContent="❓";b.className="g2fc";b.textContent="❓";S.lock=false},800)}};

/* 3. pick the right sentence */
function gPick2(){var Q=sh(mcs(GR.t)).slice(0,4).map(function(q){var w=[q[3],q[4]].filter(function(x){return x&&x!==q[2]});return {q:q,o:sh([q[2]].concat(w.slice(0,2)))}});
  window.g2p={Q:Q,i:0,ok:0,lock:false};pickDraw()}
function pickDraw(){var S=window.g2p;if(S.i>=S.Q.length)return done("🔍 Ko'zingiz o'tkir!",S.ok*10,S.Q.length*10);
  var it=S.Q[S.i];S.lock=false;
  shell(banner("Qaysi gap to'g'ri?","✅ "+S.ok)+'<div class="note" style="margin-top:0">Faqat bittasi to\'g\'ri. Toping!</div>'+it.o.map(function(o,k){return '<button class="g2b g2f" style="width:100%;text-align:left;margin-bottom:10px;padding:16px" id="p'+k+'" onclick="g2pk('+k+')">'+E(it.q[1].replace("___",o))+'</button>'}).join(""),.9)}
window.g2pk=function(k){var S=window.g2p;if(S.lock)return;S.lock=true;var it=S.Q[S.i],right=it.q[2],ok=it.o[k]===right;
  it.o.forEach(function(o,j){if(o===right)$("#p"+j).className="g2b g2f ok"});if(!ok)$("#p"+k).className="g2b g2f no";
  ok?S.ok++:0;hap(ok);snd(ok?660:200,.15);setTimeout(function(){S.i++;pickDraw()},ok?650:1500)};

/* 4. speed round */
function gSpeed(){var Q=sh(mcs(GR.t)).slice(0,6);window.g2s={Q:Q,i:0,hp:3,combo:0,pts:0,t:null};speedDraw()}
function speedDraw(){var S=window.g2s;clearTimeout(S.t);if(S.hp<=0||S.i>=S.Q.length)return done(S.hp<=0?"💔 Yurak tugadi":"⚡ Tezkor raund tugadi",S.pts,S.Q.length*10*3);
  var q=S.Q[S.i],o=sh([q[2]].concat([q[3],q[4]].filter(function(x){return x&&x!==q[2]})));S.o=o;S.lock=false;
  shell(banner("Tezkor raund","")+'<div class="g2sb"><span>'+"❤️".repeat(S.hp)+'</span><span class="g2cb">'+(S.combo>1?"🔥 x"+S.combo:"")+'</span><span>⭐ '+S.pts+'</span></div><div class="g2tm"><i id="tm" style="transition:width 8s linear"></i></div>'+
   '<div class="q" style="font-size:22px">'+E(q[1])+'</div>'+o.map(function(x,k){return '<button class="g2b" style="width:100%;text-align:left;margin-bottom:10px;padding:15px" id="s'+k+'" onclick="g2sp('+k+')">'+E(x)+'</button>'}).join(""),.9);
  setTimeout(function(){var t=$("#tm");if(t)t.style.width="0"},30);S.t=setTimeout(function(){g2sp(-1)},8100)}
window.g2sp=function(k){var S=window.g2s;if(S.lock)return;S.lock=true;clearTimeout(S.t);var q=S.Q[S.i],ok=k>=0&&S.o[k]===q[2];
  S.o.forEach(function(x,j){if(x===q[2])$("#s"+j).className="g2b ok"});if(!ok&&k>=0)$("#s"+k).className="g2b no";
  if(ok){S.combo++;S.pts+=10*Math.min(S.combo,3)}else{S.combo=0;S.hp--}
  hap(ok);snd(ok?700:200,.15);S.i++;setTimeout(speedDraw,ok?500:1100)};

/* o'yinlar tugadi */
function endGames(){var p=G2.pts,mx=Math.max(1,G2.max),r=p/mx,s=r>=.8?3:r>=.5?2:1;
  GR.bonus=Math.min(20,Math.round(p/10));
  $("#app").innerHTML=top(.95)+'<div class="bd"><div class="end" style="padding-top:20px"><div class="e">🎮</div><h1>O\'yinlar tugadi!</h1><div class="stars">'+"⭐".repeat(s)+'<span style="opacity:.25">'+"⭐".repeat(3-s)+'</span></div><div class="stat"><div style="color:#ce82ff">🎯 '+p+' ball</div><div style="color:var(--g)">🏅 +'+GR.bonus+' XP bonus</div></div><div class="note">Endi yakuniy test — o\'rgangan narsangizni mustahkamlang!</div></div></div><div class="ft"><button class="btn" onclick="GR.st=\'q\';GR.n=0;gDraw()">🏁 Yakuniy test</button></div>';
  snd(523,.2);setTimeout(function(){snd(784,.3)},160)}

/* ulash */
var oDraw=window.gDraw,oFin=window.gFin;
window.gDraw=function(){if(GR&&!GR.test&&GR.st==="rule")return rule();return oDraw()};
window.gFin=function(){if(GR&&!GR.test&&GR.bonus&&!G.gr[GR.i]){G.xp+=GR.bonus}return oFin()};
})();
