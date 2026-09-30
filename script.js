// ----- mobile menu -----
const menuBtn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
menuBtn.addEventListener('click',()=>{const o=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',o)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.setAttribute('aria-expanded',false)}));
document.addEventListener('click',e=>{document.querySelectorAll('.nav details[open]').forEach(d=>{if(!d.contains(e.target))d.removeAttribute('open')})});

// ----- lightbox -----
const lb=document.getElementById('lightbox'),lbImg=document.getElementById('lbImg'),lbCap=document.getElementById('lbCap'),lbClose=document.getElementById('lbClose');
let lastFocus=null;
document.querySelectorAll('.zoom').forEach(b=>b.addEventListener('click',()=>{
  const img=b.querySelector('img');
  const cap=b.parentElement.querySelector('figcaption,.cap');
  lastFocus=b;lbImg.src=img.src;lbImg.alt=img.alt;lbCap.textContent=cap?cap.textContent:'';
  lb.classList.add('show');lbClose.focus();
}));
function closeLb(){lb.classList.remove('show');lastFocus&&lastFocus.focus()}
lbClose.addEventListener('click',closeLb);
lb.addEventListener('click',e=>{if(e.target===lb)closeLb()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&lb.classList.contains('show'))closeLb()});

// ----- theme -----
const root=document.documentElement;
try{const t=localStorage.getItem('theme');if(t)root.dataset.theme=t}catch(e){}
document.getElementById('themeBtn').addEventListener('click',()=>{
  const dark=root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme=dark?'light':'dark';
  try{localStorage.setItem('theme',root.dataset.theme)}catch(e){}
});
