/* App core: render all (R), routing (G), language and theme buttons, start. */
function R(){var t=T[L];document.documentElement.lang=L==="tg"?"tg":L;
document.querySelectorAll("[data-i]").forEach(function(e){e.textContent=t[e.dataset.i]});
$("#nm").textContent=NM[L];
var ids=["home","projects","services","about","contact"];
$("#nav").innerHTML=ids.map(function(id,i){return '<a href="#'+id+'" data-p="'+id+'">'+t.nav[i]+"</a>"}).join("");
$("#st").innerHTML=t.st.map(function(s){return "<div><b>"+s[0]+"</b><span>"+s[1]+"</span></div>"}).join("");
$("#dirs").innerHTML=t.dirs.map(function(d){return '<div class="card"><div class="ic">'+d[0]+"</div><h3>"+d[1]+"</h3><p>"+d[2]+"</p></div>"}).join("");
$("#pl").innerHTML=PR(t).map(function(p){return '<div class="card"><div class="cv">'+p[0]+"</div><h3>"+p[1]+"</h3><p>"+p[3]+'</p><div class="tags">'+p[4].map(function(x){return"<span>"+x+"</span>"}).join("")+"</div>"+BT(p)+"</div>"}).join("");
$("#svl").innerHTML=t.svc.map(function(d){return '<div class="card"><div class="ic">'+d[0]+"</div><h3>"+d[1]+"</h3><p>"+d[2]+"</p></div>"}).join("");
$("#steps").innerHTML=t.steps.map(function(s){return"<div>"+s+"</div>"}).join("");
$("#sk").innerHTML=SK.map(function(s){return"<span>"+s+"</span>"}).join("");
document.querySelectorAll(".tools [data-l]").forEach(function(b){b.classList.toggle("on",b.dataset.l===L)});
WP();IA();CR();ICO();G()}
function G(){var h=(location.hash||"#home").slice(1);if(!$("#"+h))h="home";
document.querySelectorAll(".pg").forEach(function(s){s.classList.toggle("on",s.id===h)});
document.querySelectorAll("nav a").forEach(function(a){a.classList.toggle("on",a.dataset.p===h)});window.scrollTo(0,0);RV()}
document.querySelectorAll(".tools [data-l]").forEach(function(b){b.onclick=function(){L=b.dataset.l;try{localStorage.setItem("lang",L)}catch(e){}R()}});
$("#th").onclick=function(){var r=document.documentElement,d=r.dataset.theme==="dark";r.dataset.theme=d?"light":"dark"};
window.onhashchange=G;R();
