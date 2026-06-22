const progress=document.getElementById('progress');
const updateProgress=()=>{const h=document.documentElement; const sc=h.scrollTop; const max=h.scrollHeight-h.clientHeight; if(progress) progress.style.width=(max?sc/max*100:0)+'%'};
window.addEventListener('scroll',updateProgress,{passive:true}); updateProgress();
window.addEventListener('pointermove',e=>{document.body.style.setProperty('--mx',e.clientX+'px');document.body.style.setProperty('--my',e.clientY+'px')});

// Reveal on scroll — use rootMargin to trigger earlier, and threshold 0 so even huge sections trigger
const io=new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      en.target.classList.add('in');
      io.unobserve(en.target);
    }
  });
},{rootMargin:'0px 0px -40px 0px',threshold:0});

// Also reveal elements that are already in the viewport on load
const revealEls=document.querySelectorAll('.reveal');
revealEls.forEach(el=>{
  const rect=el.getBoundingClientRect();
  if(rect.top<window.innerHeight && rect.bottom>0){
    el.classList.add('in');
  }else{
    io.observe(el);
  }
});
