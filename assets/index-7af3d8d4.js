var _=(l,d)=>()=>(d||l((d={exports:{}}).exports,d),d.exports);var Me=_((Pe,Y)=>{(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))H(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const B of s.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&H(B)}).observe(document,{childList:!0,subtree:!0});function Z(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function H(t){if(t.ep)return;t.ep=!0;const s=Z(t);fetch(t.href,s)}})();Y.exports={content:["./index.html","./src/**/*.{js,ts,jsx,tsx}"],theme:{fontFamily:{primary:"trickster"},fontFamily:{primary:"karrik"},extend:{}},plugins:[]};var ee=document.querySelector("#display"),w=document.querySelector("#click"),u=document.querySelector("#multiply"),n=document.querySelector("#autoclick"),r=document.querySelector("#bonus"),i=document.querySelector("#bonus1"),a=document.querySelector("#bonus2"),o=document.querySelector("#bonus3"),Q=document.querySelector("#pbonus"),te=document.querySelector("#pmultiply"),se=document.querySelector("#pautoclick"),ie=document.querySelector("#pclick"),ae=document.querySelector("#pbonus3"),oe=document.querySelector("#pbonus2"),le=document.querySelector("#pbonus1");document.querySelector("#multiplicateur");var ne=document.querySelector("#resetbutton"),h=50,N=20,j=10,T=100,y=100,E=10,q=!1,b=!1,S=1e3,re=1e3,J=window.setInterval(X,re);window.setInterval(ge,1e3);var e=0,f=1,k=1,g=30,L=10;function ce(){console.log("reset"),e=0,f=1,k=1,L=10,h=50,g=30,c(),K(),R(),$(),D(),z(),G(),q=!1,b=!1,v(),M.classList.add("hidden"),O.classList.add("hidden"),P.classList.add("hidden"),A.classList.add("hidden"),V.classList.add("hidden"),p.classList.add("animate-none"),p.classList.add("lg:animate-none"),p.classList.remove("animate-sliding2"),p.classList.remove("lg:animate-sliding4"),m.classList.add("animate-none"),m.classList.add("lg:animate-none"),m.classList.remove("animate-sliding"),m.classList.remove("lg:animate-sliding3"),m.classList.add("animate-bounce")}function c(){ee.innerText=Math.round(e)}function K(){te.innerText="x"+k+" (coût : "+h+")"}function R(){se.innerText="(coût : "+N+")"}function $(){Q.innerText="(coût : "+j+")"}function U(){Q.innerText="Durée : "+g+" s"}function D(){le.innerText="(coût : "+T+")"}function z(){oe.innerText=`+${Math.floor(L)}% (coût : ${y})`}function G(){ae.innerText="? (coût : "+E+")"}function de(){ie.innerText="+ "+f+" PO/s "}function ue(){e>=h?(u.disabled=!1,u.classList.remove("cursor-not-allowed","opacity-50"),u.classList.add("hover:animate-ping")):(u.disabled=!0,u.classList.add("cursor-not-allowed","opacity-50"),u.classList.remove("hover:animate-ping"))}function me(){!q&&e>=N?(n.disabled=!1,n.classList.remove("cursor-not-allowed","opacity-50"),n.classList.add("hover:animate-bounce")):(n.disabled=!0,n.classList.add("cursor-not-allowed","opacity-50"),n.classList.remove("hover:animate-bounce"))}function ve(){!b&&e>=j?(r.disabled=!1,r.classList.remove("cursor-not-allowed","opacity-50"),r.classList.add("hover:animate-waving-hand")):(r.disabled=!0,r.classList.add("cursor-not-allowed","opacity-50"),r.classList.remove("hover:animate-waving-hand"))}function fe(){e>=T&&S>500?(i.disabled=!1,i.classList.remove("cursor-not-allowed","opacity-50"),i.classList.add("hover:animate-pulse"),i.classList.add("hover:scale-125")):(i.disabled=!0,i.classList.add("cursor-not-allowed","opacity-50"),i.classList.remove("hover:animate-pulse"),i.classList.remove("hover:scale-125"))}function Le(){e>=y?(a.disabled=!1,a.classList.remove("cursor-not-allowed","opacity-50"),a.classList.add("hover:animate-pulse"),a.classList.add("hover:scale-125")):(a.disabled=!0,a.classList.add("cursor-not-allowed","opacity-50"),a.classList.remove("hover:animate-pulse"),a.classList.remove("hover:scale-125"))}function pe(){e>=E?(o.disabled=!1,o.classList.remove("cursor-not-allowed","opacity-50"),o.classList.add("hover:animate-pulse"),o.classList.add("hover:scale-125")):(o.disabled=!0,o.classList.add("cursor-not-allowed","opacity-50"),o.classList.remove("hover:animate-pulse"),o.classList.remove("hover:scale-125"))}function v(){ue(),me(),ve(),fe(),Le(),pe()}function W(){e+=f,de(),v(),c()}function be(){e-=h,k*=2,f=k,b&&(f*=2),h*=3,v(),c(),K()}function ye(){e-=N,q=!0,n.disabled=!0,c()}function X(){q&&W()}function he(){e-=j,b=!0,f*=2,r.disabled=!0,c(),U()}function ke(){b=!1,g=30,f=k,$(),v()}function ge(){b&&(--g,U(),g===0&&ke())}function we(){S>500&&(clearInterval(J),S-=100,J=window.setInterval(X,S)),i.disabled=!0,e-=T,T*=5,v(),c(),D()}function Se(){e>=y&&L<=15?(e+=Math.ceil(e/100*L),L*=1.1):e>=y&&(e+=Math.ceil(e/100*L)),a.disabled=!0,y*=3,c(),v(),z()}function Te(){let l=Math.floor(Math.random()*10);l>=5?e*=5:l<5&&(e*=.5),e-=E,o.disabled=!0,E*=1,c(),v(),G()}c();K();R();$();D();z();G();v();u.disabled=!0;n.disabled=!0;r.disabled=!0;i.disabled=!0;a.disabled=!0;o.disabled=!0;w.addEventListener("mousedown",W);u.addEventListener("mousedown",be);n.addEventListener("mousedown",ye);r.addEventListener("mousedown",he);i.addEventListener("mousedown",we);a.addEventListener("mousedown",Se);o.addEventListener("mousedown",Te);ne.addEventListener("mousedown",ce);var M=document.getElementById("skull"),O=document.getElementById("skullTwo"),P=document.getElementById("skullThree"),A=document.getElementById("skullFour"),V=document.getElementById("skullFive"),p=document.querySelector("#knight"),m=document.querySelector("#orc"),w=document.querySelector("#click"),x=!0,I=!0,C=!0,F=!0;w.addEventListener("click",Be);w.addEventListener("click",Ee);w.addEventListener("click",qe);function Ee(){p.classList.add("animate-sliding2"),p.classList.add("lg:animate-sliding4")}function qe(){m.classList.add("animate-sliding"),m.classList.add("lg:animate-sliding3"),m.classList.remove("animate-bounce")}function Be(){x&&(x=!1,M.classList.remove("hidden"),setTimeout(()=>{x=!0,xe(),M.classList.add("hidden")},2e3))}function xe(){I&&(I=!1,O.classList.remove("hidden"),setTimeout(()=>{O.classList.add("hidden"),I=!0},2e3),setTimeout(()=>{Ie()},500))}function Ie(){C&&(C=!1,P.classList.remove("hidden"),setTimeout(()=>{P.classList.add("hidden"),C=!0},2e3),setTimeout(()=>{Ce()},300))}function Ce(){F&&(F=!1,A.classList.remove("hidden"),setTimeout(()=>{A.classList.add("hidden"),F=!0},2e3),setTimeout(()=>{Fe()},800))}function Fe(){let l=!0;l&&(l=!1,V.classList.remove("hidden"),setTimeout(()=>{l=!0,V.classList.add("hidden")},2e3))}});export default Me();
