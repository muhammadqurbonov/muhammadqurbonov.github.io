/* Animations: reveal on scroll, counters, image zoom, scroll progress, mouse effects. */
function RV(){var els=document.querySelectorAll(".pg.on .card,.pg.on .st div,.pg.on .steps div,.pg.on figure,.pg.on .sk span");
if(!("IntersectionObserver" in window)){els.forEach(function(e){e.classList.add("rv","in")});CNT();return}
if(RV.o)RV.o.disconnect();
RV.o=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");RV.o.unobserve(x.target)}})},{threshold:.12});
els.forEach(function(e,i){e.classList.remove("in");e.classList.add("rv");e.style.setProperty("--d",(i%6)*.08+"s");RV.o.observe(e)});
CNT()}
function CNT(){document.querySelectorAll(".pg.on .st b").forEach(function(b){var raw=b.dataset.t||(b.dataset.t=b.textContent),m=raw.match(/^(\d+)(.*)$/);if(!m)return;var n=+m[1],suf=m[2],t0=performance.now();(function f(t){var k=Math.min(1,(t-t0)/1100);b.textContent=Math.round(n*(1-Math.pow(1-k,3)))+suf;if(k<1)requestAnimationFrame(f)})(t0)})}
document.addEventListener("click",function(e){var i=e.target.closest&&e.target.closest(".shots img,.phones img");if(!i)return;var o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.88);z-index:99;display:grid;place-items:center;padding:16px;cursor:zoom-out";o.innerHTML='<img src="'+i.src+'" style="max-width:100%;max-height:100%;border-radius:12px">';o.onclick=function(){o.remove()};document.body.appendChild(o)});
window.addEventListener("scroll",function(){var h=document.documentElement,mx=h.scrollHeight-innerHeight;$("#pr").style.width=(mx>0?scrollY/mx*100:0)+"%";$("header").classList.toggle("sc",scrollY>10)},{passive:true});
var PF=0;document.addEventListener("pointermove",function(e){var c=e.target.closest&&e.target.closest(".card");if(c){var r=c.getBoundingClientRect();c.style.setProperty("--mx",e.clientX-r.left+"px");c.style.setProperty("--my",e.clientY-r.top+"px")}
if(PF)return;PF=1;requestAnimationFrame(function(){PF=0;var s=document.documentElement.style;s.setProperty("--px",(e.clientX/innerWidth-.5).toFixed(3));s.setProperty("--py",(e.clientY/innerHeight-.5).toFixed(3))})},{passive:true});
