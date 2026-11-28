/* ===== extra.js — kunlik vazifalar, sovg'a, yutuqlar (medallar), "Eshit va top" va "Gap tuz" o'yinlari ===== */
(function(){
var X={d:0,ls:0,rv:0,li:0,gp:0,cl:0,g:0,bd:{}};
function xd(){var t=today();if(X.d!==t){X.d=t;X.ls=0;X.rv=0;X.li=0;X.gp=0;X.cl=0}}
var st=document.createElement("style");st.textContent=
".xq{margin:0 16px 4px;border:2px solid var(--bd);border-radius:18px;padding:14px;background:var(--bg)}"+
".xqh{display:flex;justify-content:space-between;align-items:center;font-size:17px;font-weight:900;margin-bottom:8px}.xqh span{color:var(--g)}"+
".xqb{height:10px;border-radius:6px;background:var(--bd);overflow:hidden;margin-bottom:10px}.xqb i{display:block;height:100%;background:linear-gradient(90deg,#ffc800,#58cc02);border-radius:6px;transition:width .4s}"+
".xqr{display:flex;align-items:center;gap:10px;padding:10px 12px;border:2px solid var(--bd);border-bottom-width:4px;border-radius:14px;margin:8px 0;font-size:16px;font-weight:800;width:100%;background:var(--bg);color:var(--tx);font-family:inherit;text-align:left;cursor:pointer}"+
".xqr .t{flex:1}.xqr .c{font-size:20px}.xqr.ok{background:var(--gl);border-color:var(--g)}"+
".xqg{width:100%;margin-top:6px;padding:13px;border:0;border-bottom:5px solid #d8a700;border-radius:14px;background:#ffc800;color:#4b3b00;font-family:inherit;font-size:16px;font-weight:900;cursor:pointer;animation:xpl 1.1s infinite}"+
"@keyframes xpl{50%{transform:scale(1.03)}}"+
".xqy{display:block;margin:10px auto 0;background:none;border:0;color:var(--b);font-family:inherit;font-weight:900;font-size:15px;cursor:pointer}"+
".xtoast{position:fixed;left:50%;top:calc(14px + env(safe-area-inset-top));transform:translateX(-50%);z-index:50;background:#ffc800;color:#4b3b00;border-radius:16px;padding:12px 18px;font-weight:900;font-size:16px;box-shadow:0 6px 18px rgba(0,0,0,.25);animation:xin .4s both;max-width:90vw;text-align:center}"+
"@keyframes xin{from{opacity:0;transform:translate(-50%,-20px)}to{opacity:1;transform:translate(-50%,0)}}"+
".xspk{width:110px;height:110px;border-radius:50%;border:0;border-bottom:8px solid var(--bd2);background:var(--b);color:#fff;font-size:48px;cursor:pointer;display:block;margin:10px auto 18px;animation:xpl 1.6s infinite}"+
".xop{display:block;width:100%;text-align:left;padding:15px;margin:0 0 10px;border:2px solid var(--bd);border-bottom-width:5px;border-radius:14px;background:var(--bg);color:var(--tx);font-family:inherit;font-size:17px;font-weight:800;cursor:pointer}"+
".xop.ok{border-color:var(--g);background:var(--gl)}.xop.no{border-color:var(--r);background:var(--rl)}"+
".xtl{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;min-height:54px;padding:8px 0}"+
".xtk{padding:10px 14px;border:2px solid var(--bd);border-bottom-width:5px;border-radius:12px;background:var(--bg);color:var(--tx);font-family:inherit;font-size:18px;font-weight:800;cursor:pointer}"+
".xtk.on{border-color:var(--b);background:var(--sel)}.xtk.used{opacity:.25;pointer-events:none}"+
".xans{min-height:70px;border-bottom:2px solid var(--bd);border-top:2px solid var(--bd);margin:12px 0}"+
".xbg{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}.xbd{border:2px solid var(--bd);border-radius:16px;padding:12px 4px;text-align:center;font-size:12px;font-weight:800;color:var(--mut)}.xbd b{display:block;font-size:34px;margin-bottom:2px}.xbd.off{filter:grayscale(1);opacity:.45}.xbd.on{border-color:#ffc800;background:rgba(255,200,0,.12);color:var(--tx)}";
document.head.appendChild(st);

/* ---- saqlash: G yozuviga qo'shimcha maydon (mavjud progress buzilmaydi) ---- */
window.saveG=function(){xd();Store.put("g",{gr:G.gr,gt:G.gt,xp:G.xp,sk:G.sk,last:G.last,ty:G.ty,lg:G.lg,wk:G.wk,x:X})};
var oLoad=window.loadG;
var xLoaded=false;
window.loadG=function(m){xLoaded=true;oLoad(m);if(m&&m.g&&m.g.x){var x=m.g.x;X.d=x.d||0;X.ls=x.ls||0;X.rv=x.rv||0;X.li=x.li||0;X.gp=x.gp||0;X.cl=x.cl||0;X.g=x.g||0;X.bd=x.bd||{}}xd()};

/* ---- yutuqlar ---- */
var BD=[
 ["s3","🔥","3 kun ketma-ket",function(){return G.sk>=3}],
 ["s7","🔥","7 kun seriya",function(){return G.sk>=7}],
 ["s14","🌋","14 kun seriya",function(){return G.sk>=14}],
 ["s30","👑","30 kun seriya",function(){return G.sk>=30}],
 ["w50","🌱","50 ta gap",function(){return learned()>=50}],
 ["w200","🌳","200 ta gap",function(){return learned()>=200}],
 ["w500","🏔","500 ta gap",function(){return learned()>=500}],
 ["x500","⭐","500 XP",function(){return G.xp>=500}],
 ["x2000","💎","2000 XP",function(){return G.xp>=2000}],
 ["g1","🎮","Birinchi o'yin",function(){return X.g>=1}],
 ["g10","🕹","10 ta o'yin",function(){return X.g>=10}],
 ["cl1","🎁","Birinchi sovg'a",function(){return X.cl===1||Object.keys(X.bd).indexOf("cl1")>=0}]
];
function learned(){try{return allRecs().length}catch(e){return 0}}
function toast(h){var d=document.createElement("div");d.className="xtoast";d.innerHTML=h;document.body.appendChild(d);try{snd(784,.25)}catch(e){}try{hap(true)}catch(e){}setTimeout(function(){d.remove()},3800)}
function checkBd(){var n=[];BD.forEach(function(b){if(!X.bd[b[0]]&&b[3]()){X.bd[b[0]]=today();n.push(b)}});
  if(n.length){toast("🏅 Yangi yutuq!<br>"+n.map(function(b){return b[1]+" "+b[2]}).join(" · "));saveG()}}
window.xBadges=function(){checkBd();var got=BD.filter(function(b){return X.bd[b[0]]}).length;
  $("#app").innerHTML='<div class="top"><button class="x" onclick="home()" aria-label="Yopish">✕</button><div class="pg"><i style="width:'+Math.round(got/BD.length*100)+'%"></i></div></div><div class="bd"><h2 style="text-align:center;margin:4px 0 14px">🏅 Yutuqlar ('+got+'/'+BD.length+')</h2><div class="xbg">'+
   BD.map(function(b){var on=!!X.bd[b[0]];return '<div class="xbd '+(on?"on":"off")+'"><b>'+b[1]+'</b>'+b[2]+'</div>'}).join("")+'</div></div><div class="ft"><button class="btn" onclick="home()">Orqaga</button></div>'};

/* ---- bosh sahifada kunlik vazifalar ---- */
/* ---- daraja imtihoni (?m=exam&lv=A1) va haftalik sinov (?m=week): mavjud test mexanizmi, natija botga sendData bilan ketadi ---- */
var XM=Q.get("m"),XLV=Q.get("lv"),xStarted=false,xW=[];
function xTestMode(){var items=[],lv=XLV||"",title;
  if(XM==="exam"){var all=[];DAYS.forEach(function(d){if(d.lv===lv)d.i.forEach(function(x){all.push(x)})});items=sh(all).slice(0,30);PASS=.75}
  else{var rs=[];try{rs=allRecs()}catch(e){}
    var weak=sh(rs.filter(function(w){return isWeak(w.r)})).slice(0,8),rest=sh(rs.filter(function(w){return weak.indexOf(w)<0})).slice(0,15-weak.length);
    var pick=weak.concat(rest);xW=pick;items=pick.map(function(w){return w.it});
    if(items.length<6){xW=[];items=sh(DAYS[DAY-1].i).slice(0)}}
  var day={lv:lv,t:XM==="exam"?"Daraja imtihoni":"Hafta sinovi",e:"🎓",s:"",k:1,p:1,i:items};DAYS.push(day);
  DAY=DAYS.length;its=items;UN=[];dayRec={v:[],p:0};LID=Number(Q.get("l"));window.saveDay=function(){};
  startTest()}
var oFinTest=window.finTest;
window.finTest=function(){try{if(XM==="week"&&xW.length&&L&&L.miss){L.miss.filter(function(k,i,a){return a.indexOf(k)===i}).forEach(function(k){if(xW[k])markOld(xW[k],false)})}}catch(e){}return oFinTest.apply(this,arguments)};

var oHome=window.home;
window.home=function(){if((XM==="exam"||XM==="week")&&!xStarted){xStarted=true;return xTestMode()}
  oHome.apply(this,arguments);try{xd();var u=$(".unit");if(!u||GDAY)return;
  var n=(X.ls?1:0)+(X.li?1:0)+(X.gp?1:0),all=n===3;
  var row=function(done,emo,txt,fn){return '<button class="xqr'+(done?" ok":"")+'" '+(fn?'onclick="'+fn+'"':"")+'><span class="c">'+emo+'</span><span class="t">'+txt+'</span><span class="c">'+(done?"✅":"⬜")+'</span></button>'};
  /* vazifalar bloki olib tashlandi: faqat darslar yo'li */
  checkBd()}catch(e){}};
window.xClaim=function(){xd();if(X.cl||!(X.ls&&X.li&&X.gp))return;X.cl=1;G.xp+=30;bumpStreak();checkBd();saveG();snd(523);setTimeout(function(){snd(784,.3)},150);
  var h=$("#app");h.insertAdjacentHTML("afterbegin",confetti());toast("🎁 +30 XP! Ertaga yangi vazifalar kutadi");setTimeout(home,1500)};

/* darsni tugatish / takrorlash -> vazifa belgilash */
var oFin=window.fin;window.fin=function(){oFin.apply(this,arguments);try{xd();X.ls=1;checkBd();saveG()}catch(e){}};
/* alohida o'yinlar yo'q: vazifalar darsning o'zidan belgilanadi */
var oRE=window.rEnd;if(oRE)window.rEnd=function(){var it=null;try{it=L.q[L.i]}catch(e){}var was=it&&it.done;oRE.apply(this,arguments);
  try{if(it&&!was&&it.sc>=Math.ceil(it.qs.length*.6)){xd();X.li=1;checkBd();saveG()}}catch(e){}};
var oFT=window.finTest;window.finTest=function(){var r=oFT.apply(this,arguments);try{xd();X.gp=1;checkBd();saveG()}catch(e){}return r};
var oFinRev=window.finRev;if(oFinRev)window.finRev=function(){oFinRev.apply(this,arguments);try{xd();X.rv=1;checkBd();saveG()}catch(e){}};


/* dars tartibi endi index.html ichidagi mk() da (tez dars: gaplar -> rasm -> juftlik -> tezkor musobaqa) */

/* ---- umumiy ---- */
function pool(){var out=[],seen={};
  try{allRecs().forEach(function(w){if(!seen[w.it[0]]){seen[w.it[0]]=1;out.push({it:w.it,w:w})}})}catch(e){}
  var d=DAYS[DAY-1];if(d)d.i.forEach(function(it){if(!seen[it[0]]){seen[it[0]]=1;out.push({it:it,w:null})}});
  return out}
function play(it){var sv=L;L={q:[{item:it}],i:0};try{sayCur()}catch(e){try{sayT(it[1])}catch(x){}}L=sv}
function top(p){return '<div class="top"><button class="x" onclick="home()" aria-label="Yopish">✕</button><div class="pg"><i style="width:'+Math.round(p*100)+'%"></i></div></div>'}
function srs(r,ok){try{if(r.w&&r.w.r)markOld(r.w,ok)}catch(e){}}
function end(kind,sc,max,hp,title,f){xd();var r=max?sc/max:0,s=r>=.85?3:r>=.55?2:1,xp=Math.round(sc*(f||1.5))+(r>=.99?5:0);
  G.xp+=xp;bumpStreak();X[kind]=1;X.g++;checkBd();saveG();snd(523);setTimeout(function(){snd(784,.3)},150);
  $("#app").innerHTML=confetti()+'<div class="end"><div class="e">'+(hp<=0?"💔":"🎮")+'</div><h1>'+title+'</h1><div class="stars" style="font-size:38px">'+"⭐".repeat(s)+'<span style="opacity:.25">'+"⭐".repeat(3-s)+'</span></div><div class="stat"><div style="color:#ce82ff">⭐ +'+xp+' XP</div><div style="color:#ff9600">🔥 '+G.sk+'</div><div style="color:var(--g)">🎯 '+sc+'/'+max+'</div></div><div class="note">Vazifa bajarildi ✅ Xato qilgan gaplaringiz takrorlashda qaytadi.</div><div class="bd"><button class="btn" onclick="home()">Davom etish</button></div></div>'}

/* ---- 🎧 Eshit va top ---- */
window.xListen=function(){var P=pool();if(P.length<4){toast("Avval 1 ta dars o'ting");return}
  var R=sh(P).slice(0,8);window.xl={R:R,P:P,i:0,sc:0,hp:3,lock:false};lDraw()};
function lDraw(){var S=window.xl;if(S.i>=S.R.length||S.hp<=0)return end("li",S.sc,S.R.length,S.hp,S.hp<=0?"Jonlar tugadi":"Quloqlaringiz zo'r!");
  var r=S.R[S.i],it=r.it,uz=S.i%2===0,fi=uz?2:1,oth=sh(S.P.filter(function(x){return x.it[0]!==it[0]&&x.it[fi]!==it[fi]})).slice(0,3);
  var ops=sh([it].concat(oth.map(function(x){return x.it})));S.ops=ops;S.cur=it;S.fi=fi;S.lock=false;
  $("#app").innerHTML=top(S.i/S.R.length)+'<div class="bd"><div class="g2sb" style="display:flex;justify-content:space-between;font-weight:900;font-size:19px"><span>'+"❤️".repeat(S.hp)+'</span><span>⭐ '+S.sc+'</span></div><div class="q" style="text-align:center">'+(uz?"Nima dedi? 👂":"Eshiting va eshitgan gapni toping 👂")+'</div><button class="xspk" onclick="xlp()">🔊</button>'+
   ops.map(function(o,k){return '<button class="xop" id="xo'+k+'" onclick="xlk('+k+')">'+esc(o[fi])+'</button>'}).join("")+'</div>';
  setTimeout(function(){play(it)},300)}
window.xlp=function(){play(window.xl.cur)};
window.xlk=function(k){var S=window.xl;if(S.lock)return;S.lock=true;var it=S.cur,ok=S.ops[k][0]===it[0];
  S.ops.forEach(function(o,j){if(o[0]===it[0])$("#xo"+j).className="xop ok"});if(!ok){$("#xo"+k).className="xop no";S.hp--}else S.sc++;
  srs(S.R[S.i],ok);hap(ok);snd(ok?700:200,.15);if(!ok)setTimeout(function(){play(it)},300);
  setTimeout(function(){S.i++;lDraw()},ok?700:1900)};

/* ---- 🧩 Gap tuz ---- */
window.xBuild=function(){var P=pool().filter(function(x){var n=words(x.it[1]).length;return n>=3&&n<=9});if(P.length<3){toast("Avval 1 ta dars o'ting");return}
  var all=pool();window.xb={R:sh(P).slice(0,6),A:all,i:0,sc:0,hp:3,ans:[],t0:0};bDraw()};
function bDraw(){var S=window.xb;if(S.i>=S.R.length||S.hp<=0)return end("gp",S.sc,S.R.length*10,S.hp,S.hp<=0?"Jonlar tugadi":"Gap ustasi!",.5);
  var r=S.R[S.i],it=r.it,ws=words(it[1]),have={};ws.forEach(function(w){have[core(w)[1].toLowerCase()]=1});
  var ex=sh(S.A.reduce(function(a,x){return a.concat(words(x.it[1]))},[])).filter(function(w){return !have[core(w)[1].toLowerCase()]&&core(w)[1].length>1}).slice(0,2);
  S.tiles=sh(ws.concat(ex));S.ans=[];S.done=false;S.t0=Date.now();
  $("#app").innerHTML=top(S.i/S.R.length)+'<div class="bd"><div style="display:flex;justify-content:space-between;font-weight:900;font-size:19px"><span>'+"❤️".repeat(S.hp)+'</span><span>⭐ '+S.sc+'</span></div><div class="q" style="text-align:center">'+esc(it[3]||"")+' '+esc(it[2])+'</div><div class="xans" id="xa"></div><div class="xtl" id="xt"></div></div><div class="ft"><button class="btn" id="xchk" onclick="xbc()" disabled>Tekshirish</button></div>';bTiles()}
function bTiles(){var S=window.xb;$("#xa").innerHTML='<div class="xtl">'+S.ans.map(function(i,k){return '<button class="xtk on" onclick="xbu('+k+')">'+esc(S.tiles[i])+'</button>'}).join("")+'</div>';
  $("#xt").innerHTML=S.tiles.map(function(w,i){return '<button class="xtk'+(S.ans.indexOf(i)>=0?" used":"")+'" onclick="xbt('+i+')">'+esc(w)+'</button>'}).join("");
  var c=$("#xchk");if(c)c.disabled=!S.ans.length}
window.xbt=function(i){var S=window.xb;if(S.done||S.ans.indexOf(i)>=0)return;S.ans.push(i);try{snd(500,.05)}catch(e){}bTiles()};
window.xbu=function(k){var S=window.xb;if(S.done)return;S.ans.splice(k,1);bTiles()};
window.xbc=function(){var S=window.xb;if(S.done){S.i++;return bDraw()}
  var it=S.R[S.i].it,got=S.ans.map(function(i){return S.tiles[i]}).join(" "),ok=norm(got)===norm(it[1]);S.done=true;
  var sec=(Date.now()-S.t0)/1000,pts=ok?(sec<20?10:7):0;S.sc+=pts;if(!ok)S.hp--;srs(S.R[S.i],ok);hap(ok);snd(ok?700:200,.15);
  var c=$("#xchk");c.textContent=S.hp<=0&&!ok?"Tugatish":"Davom";c.disabled=false;
  $("#xa").style.background=ok?"var(--gl)":"var(--rl)";
  if(!ok)$("#xa").innerHTML='<div style="padding:10px;text-align:center;font-size:18px">✅ '+esc(it[1])+'</div>';else{$("#xa").innerHTML+='<div style="text-align:center;font-weight:900;color:var(--gd)">'+(sec<20?"⚡ Tez! +10":"+7")+'</div>'}
  try{play(it)}catch(e){}};
/* ============ Rumiyo sayti ichida: dars -> test -> qaytish (ret rejimi) ============ */
var RET=Q.get("ret");if(RET&&!/^https:\/\//.test(RET))RET=null;
function xSep(u){return u.indexOf("?")<0?"?":"&"}
if(RET){
  var oFinR=window.fin;window.fin=function(){oFinR.apply(this,arguments);
    try{var nt=document.querySelector("#app .note");
      if(nt&&/botga qaytib/i.test(nt.textContent)){
        var bt=document.querySelector("#app .btn");if(bt){bt.textContent="🗣 Rumiyo bilan gaplashish";nt.textContent="Endi Rumiyo bilan shu gaplarni ayting: u talaffuzingizni tuzatadi va darsni baholaydi.";
          bt.onclick=function(){bt.disabled=true;goRumiyo()};
          var c=3;bt.textContent="🗣 Rumiyoga o'tilmoqda… "+c;var iv=setInterval(function(){c--;if(!document.body.contains(bt)||bt.disabled){clearInterval(iv);return}if(c<=0){clearInterval(iv);bt.disabled=true;goRumiyo()}else bt.textContent="🗣 Rumiyoga o'tilmoqda… "+c},1000)}}}catch(e){}};
  window.gtRum=function(){location.href=RET+xSep(RET)+"gt="+gramIdx(DAY)+(location.hash||"")};
  window.goRumiyo=function(){var N=its.length,ms=Object.keys(window.WK||{}).map(Number).filter(function(k){return k<N}),p=JSON.stringify({l:LID,s:N-ms.length,n:N,w:ms.slice(0,3).map(function(k){return String(its[k][1]).slice(0,80)})});
    try{ms.forEach(function(k){var cur=dayRec.v[k];dayRec.v[k]=pk(grade(nr(cur||newRec()),false,today()))});saveDay();saveG()}catch(e){}
    location.href=RET+xSep(RET)+"r="+encodeURIComponent(p)+(location.hash||"")};
  var oHomeR=window.home;window.home=function(){oHomeR.apply(this,arguments);
    try{if(!GDAY&&dayRec.p>UN.length){var ns=document.querySelectorAll("#app .note"),nt=null;for(var i=0;i<ns.length;i++)if(/botga qaytib/i.test(ns[i].textContent))nt=ns[i];
      if(nt){nt.textContent="🎉 Bugungi dars tayyor! Endi Rumiyo bilan gaplashing: u talaffuzingizni tuzatadi.";
        var b=document.createElement("button");b.className="btn";b.style.marginTop="14px";b.textContent="🗣 Rumiyo bilan gaplashish";b.onclick=function(){b.disabled=true;goRumiyo()};nt.parentNode.appendChild(b)}}}catch(e){}};
  var oFinT=window.finTest;window.finTest=function(){var r=oFinT.apply(this,arguments);
    try{var p=window.__payload;if(p&&Number.isInteger(LID)){
      var host=document.querySelector("#app .bd")||document.querySelector("#app"),o=JSON.parse(p),pass=o.n>0&&o.s/o.n>=PASS;
      var sb=document.getElementById("sendb");if(sb&&sb.parentNode)sb.parentNode.removeChild(sb);
      var ns=host.querySelectorAll(".note");for(var i=0;i<ns.length;i++)if(/Telegram bot tugmasi/.test(ns[i].textContent))ns[i].parentNode.removeChild(ns[i]);
      var d=document.createElement("div");d.style.marginTop="14px";
      d.innerHTML=(pass?"":'<button class="op" style="text-align:center" id="retry">🔁 Testni qayta yechish</button><br><br>')+'<button class="btn" id="retb">🗣 Rumiyoga qaytish</button>';
      host.appendChild(d);
      var rb=document.getElementById("retb");if(rb)rb.onclick=function(){rb.disabled=true;location.href=RET+xSep(RET)+"r="+encodeURIComponent(p)+(location.hash||"")};
      var rt=document.getElementById("retry");if(rt)rt.onclick=function(){startTest()}}}catch(e){}return r};
}
if((XM==="exam"||XM==="week")&&!xStarted&&!/Yuklanmoqda/.test($("#app").innerText))home();
})();
