var ne=(s,u)=>()=>(u||s((u={exports:{}}).exports,u),u.exports);var Ue=ne((Xe,oe)=>{(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))A(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const C of n.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&A(C)}).observe(document,{childList:!0,subtree:!0});function ie(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function A(o){if(o.ep)return;o.ep=!0;const n=ie(o);fetch(o.href,n)}})();oe.exports={content:["./index.html","./src/**/*.{js,ts,jsx,tsx}"],theme:{fontFamily:{primary:"trickster"},fontFamily:{primary:"karrik"},extend:{}},plugins:[]};var le=document.querySelector("#display"),w=document.querySelector("#click"),m=document.querySelector("#multiply"),c=document.querySelector("#autoclick"),d=document.querySelector("#bonus"),l=document.querySelector("#bonus1"),a=document.querySelector("#bonus2"),r=document.querySelector("#bonus3"),J=document.querySelector("#pbonus"),ae=document.querySelector("#pmultiply"),re=document.querySelector("#pautoclick"),ce=document.querySelector("#pclick"),de=document.querySelector("#pbonus3"),ue=document.querySelector("#pbonus2"),me=document.querySelector("#pbonus1"),ve=document.querySelector("#multiplicateur"),fe=document.querySelector("#POdepense"),pe=document.querySelector("#resetbutton"),t=document.querySelector("#notif-template"),k=30,q=50,B=100,T=200,h=100,i=300,y=0,V=!1,g=!1,x=1e3,ye=1e3,D=window.setInterval(se,ye);window.setInterval(Me,1e3);var e=0,v=1,p=1,I=30,S=10,Le=10,be=e*p*(S/100*10),E=0;function he(){location.reload(),localStorage.clear()}function f(){le.innerText=e.toFixed(2)}function Q(){ae.innerText="(coût : "+k+")"}function U(){ve.innerText=`Multi : 
 x`+p}function Se(){re.innerText="(coût : "+q+")"}function W(){J.innerText="(coût : "+B+")"}function X(){J.innerText="Durée : "+I+" s"}function Y(){me.innerText="(coût : "+T+")"}function Z(){ue.innerText=`+${Le++}% (coût : ${h})`}function _(){de.innerText="(coût : "+i+")"}function ke(){ce.innerText=`PO/s : 
 + `+v.toFixed(2)}function ee(){localStorage.totalScore?localStorage.totalScore=Number(localStorage.totalScore)+1*v:localStorage.totalScore=be,document.getElementById("pointtotal").innerText=`Total : 
`+Math.floor(parseInt(localStorage.totalScore)+E)}function L(){fe.innerText=`Depense : 
`+y}function Te(){e>=k&&p<=16?(m.disabled=!1,m.classList.remove("cursor-not-allowed","opacity-50"),m.classList.add("hover:animate-ping")):(m.disabled=!0,m.classList.add("cursor-not-allowed","opacity-50"),m.classList.remove("hover:animate-ping"))}function ge(){!V&&e>=q?(c.disabled=!1,c.classList.remove("cursor-not-allowed","opacity-50"),c.classList.add("hover:animate-bounce")):(c.disabled=!0,c.classList.add("cursor-not-allowed","opacity-50"),c.classList.remove("hover:animate-bounce"))}function we(){!g&&e>=B?(d.disabled=!1,d.classList.remove("cursor-not-allowed","opacity-50"),d.classList.add("hover:animate-waving-hand")):(d.disabled=!0,d.classList.add("cursor-not-allowed","opacity-50"),d.classList.remove("hover:animate-waving-hand"))}function xe(){e>=T&&x>500?(l.disabled=!1,l.classList.remove("cursor-not-allowed","opacity-50"),l.classList.add("hover:animate-pulse"),l.classList.add("hover:scale-125")):(l.disabled=!0,l.classList.add("cursor-not-allowed","opacity-50"),l.classList.remove("hover:animate-pulse"),l.classList.remove("hover:scale-125"))}function Ee(){e>=h&&S<=15?(a.disabled=!1,a.classList.remove("cursor-not-allowed","opacity-50"),a.classList.add("hover:animate-pulse"),a.classList.add("hover:scale-125")):(a.disabled=!0,a.classList.add("cursor-not-allowed","opacity-50"),a.classList.remove("hover:animate-pulse"),a.classList.remove("hover:scale-125"))}function qe(){e>=i?(r.disabled=!1,r.classList.remove("cursor-not-allowed","opacity-50"),r.classList.add("hover:animate-pulse"),r.classList.add("hover:scale-125")):(r.disabled=!0,r.classList.add("cursor-not-allowed","opacity-50"),r.classList.remove("hover:animate-pulse"),r.classList.remove("hover:scale-125"))}function b(){Te(),ge(),we(),xe(),Ee(),qe()}function te(){e+=v,ke(),b(),f(),ee()}function Be(){e-=k,y+=k,p*=2,v=p*(S/100*10),g&&(v*=2),k*=2,U(),b(),f(),Q(),L()}function Ie(){e-=q,y+=q,V=!0,c.disabled=!0,f(),L()}function se(){V&&te()}function Ce(){e-=B,y+=B,g=!0,v*=2,d.disabled=!0,f(),X(),L()}function Fe(){g=!1,I=30,v=p/100*S*10,W(),b()}function Me(){g&&(--I,X(),I===0&&Fe())}function Ne(){x>500&&(clearInterval(D),x-=100,D=window.setInterval(se,x)),l.disabled=!0,e-=T,y+=T,T*=3,b(),f(),Y(),L()}function Oe(){e>=h&&(S*=1.1,v+=Math.min(p/100*S)),e-=h,y+=h,a.disabled=!0,h*=2,f(),b(),Z(),L()}function Pe(){let s=Math.floor(Math.random()*10);console.log(s),y+=i,s===1?(e+=i,E=e*=5,ze()):s>1&&s<=3?(e+=i,E=e*=1.25,Ge()):s>3&&s<=5?(e+=i,E=e*=1.15,He()):s>5&&s<=7?e<=i?(e+=i,e=0,H()):e>i&&(e+=i,e*=.5,Je()):s>7&&s<=9?(e+=i,e=0,H()):Qe(),e-=i,r.disabled=!0,i*=3,f(),b(),_(),L()}f();Q();Se();W();Y();Z();_();b();ee();U();L();m.disabled=!0;c.disabled=!0;d.disabled=!0;l.disabled=!0;a.disabled=!0;r.disabled=!0;w.addEventListener("mousedown",te);m.addEventListener("mousedown",Be);c.addEventListener("mousedown",Ie);d.addEventListener("mousedown",Ce);l.addEventListener("mousedown",Ne);a.addEventListener("mousedown",Oe);r.addEventListener("mousedown",Pe);pe.addEventListener("mousedown",he);var j=document.getElementById("skull"),K=document.getElementById("skullTwo"),$=document.getElementById("skullThree"),R=document.getElementById("skullFour"),z=document.getElementById("skullFive"),G=document.getElementById("knight"),F=document.getElementById("orc"),w=document.querySelector("#click"),M=!0,N=!0,O=!0,P=!0;w.addEventListener("click",De);w.addEventListener("click",Ve);w.addEventListener("click",Ae);function Ve(){G.classList.add("animate-sliding2"),G.classList.add("lg:animate-sliding4")}function Ae(){F.classList.add("animate-sliding"),F.classList.add("lg:animate-sliding3"),F.classList.remove("animate-bounce")}function De(){M&&(M=!1,j.classList.remove("hidden"),setTimeout(()=>{M=!0,je(),j.classList.add("hidden")},2e3))}function je(){N&&(N=!1,K.classList.remove("hidden"),setTimeout(()=>{K.classList.add("hidden"),N=!0},2e3),setTimeout(()=>{Ke()},500))}function Ke(){O&&(O=!1,$.classList.remove("hidden"),setTimeout(()=>{$.classList.add("hidden"),O=!0},2e3),setTimeout(()=>{$e()},300))}function $e(){P&&(P=!1,R.classList.remove("hidden"),setTimeout(()=>{R.classList.add("hidden"),P=!0},2e3),setTimeout(()=>{Re()},800))}function Re(){let s=!0;s&&(s=!1,z.classList.remove("hidden"),setTimeout(()=>{s=!0,z.classList.add("hidden")},2e3))}function ze(){t.innerText="Score x5 !",setTimeout(()=>{t.classList.add("hidden")},3e3),t.classList.remove("hidden")}function Ge(){t.innerText="Score +50% !",setTimeout(()=>{t.classList.add("hidden")},3e3),t.classList.remove("hidden")}function He(){t.innerText="Score +30% !",setTimeout(()=>{t.classList.add("hidden")},3e3),t.classList.remove("hidden")}function H(){t.innerText="Score à 0 !",setTimeout(()=>{t.classList.add("hidden")},3e3),t.classList.remove("hidden")}function Je(){t.innerText="Score divisé par 2 !",setTimeout(()=>{t.classList.add("hidden")},3e3),t.classList.remove("hidden")}function Qe(){t.innerText="Rien ne se passe...",setTimeout(()=>{t.classList.add("hidden")},3e3),t.classList.remove("hidden")}});export default Ue();
