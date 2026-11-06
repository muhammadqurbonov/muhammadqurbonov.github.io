/* Shared helpers: current language (L) and the $ selector. */
var L="ru",$=function(s){return document.querySelector(s)};
try{L=localStorage.getItem("lang")||"ru"}catch(e){}
