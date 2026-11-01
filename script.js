document.addEventListener('DOMContentLoaded',()=>{
  const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
  const body=document.body;
  const saved=localStorage.getItem('portfolio-theme');
  if(saved==='light') body.classList.add('light');

  $('#themeToggle')?.addEventListener('click',()=>{
    body.classList.toggle('light');
    localStorage.setItem('portfolio-theme',body.classList.contains('light')?'light':'dark');
  });

  const menu=$('#navLinks');
  $('#menuBtn')?.addEventListener('click',()=>menu.classList.toggle('open'));
  $$('#navLinks a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

  const progress=$('#progress');
  window.addEventListener('scroll',()=>{
    const max=document.documentElement.scrollHeight-window.innerHeight;
    progress.style.width=(max>0?(scrollY/max)*100:0)+'%';
  },{passive:true});

  const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');reveal.unobserve(e.target)}}),{threshold:.12});
  $$('.reveal').forEach(el=>reveal.observe(el));

  $$('.filter').forEach(button=>button.addEventListener('click',()=>{
    $$('.filter').forEach(b=>b.classList.remove('active')); button.classList.add('active');
    const f=button.dataset.filter;
    $$('.project-card').forEach(card=>card.classList.toggle('hidden',f!=='all'&&!card.dataset.category.split(' ').includes(f)));
  }));

  const details={
    pharma:{label:'01 / PRODUCT · BUSINESS SOFTWARE',title:'PharmaSuite BD',description:'A pharmacy management product designed around the everyday workflow of Bangladesh pharmacies.',problem:'Organizes sales, inventory, customer records, expiry tracking and faster medicine entry so a pharmacy can spend less time fighting spreadsheets and manual records.',tech:'Full-stack web app · Cloudflare D1 · AI/OCR integration · Bangla + English medicine data',link:'https://pharmasuite-bd.imriad.workers.dev/'},
    yaqeen:{label:'02 / PRODUCT · POS',title:'YaqeenPOS',description:'A multipurpose POS and business management product built for small businesses in Bangladesh.',problem:'Brings sales, inventory, customers and daily operations into one web-based workflow that can work across grocery, restaurant, retail and other businesses.',tech:'Web app · POS workflows · inventory · payments · responsive UI',link:'https://yaqeenpos.imriad.workers.dev/'},
    docupy:{label:'03 / TOOL · PYTHON',title:'DocuPy',description:'A small developer utility that turns AI-generated content and notebooks into useful document formats.',problem:'Reduces repetitive formatting work when moving between AI-generated text, Python code, Jupyter notebooks, Markdown and PDF.',tech:'Python · Streamlit · Jupyter · document automation',link:'https://github.com/imriadh/Docupy'},
    habit:{label:'04 / APP · FULL-STACK',title:'HabitFlow',description:'A full-stack habit tracker focused on consistency, useful statistics and a private AI coach.',problem:'Turns habit tracking into a feedback loop with streaks, calendar views and data-driven progress rather than another static checklist.',tech:'React · Supabase · Node.js · Express · AI integration',link:'https://github.com/imriadh/Habit-Flow'}
  };
  const modal=$('#projectModal');
  function openProject(key){const d=details[key]; if(!d)return; $('#modalLabel').textContent=d.label;$('#modalTitle').textContent=d.title;$('#modalDescription').textContent=d.description;$('#modalProblem').textContent=d.problem;$('#modalTech').textContent=d.tech;$('#modalLink').href=d.link;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
  function closeProject(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
  $$('.project-open').forEach(b=>b.addEventListener('click',()=>openProject(b.dataset.project)));
  $('#modalClose')?.addEventListener('click',closeProject);
  modal?.addEventListener('click',e=>{if(e.target===modal)closeProject()});

  const command=$('#commandOverlay');
  function closeCommand(){command.classList.remove('open');command.setAttribute('aria-hidden','true')}
  function openCommand(){command.classList.add('open');command.setAttribute('aria-hidden','false')}
  $('#commandClose')?.addEventListener('click',closeCommand);
  command?.addEventListener('click',e=>{if(e.target===command)closeCommand()});
  $$('[data-command]').forEach(b=>b.addEventListener('click',()=>{const c=b.dataset.command;closeCommand(); if(c==='work')$('#work').scrollIntoView({behavior:'smooth'});if(c==='about')$('#about').scrollIntoView({behavior:'smooth'});if(c==='github')window.open('https://github.com/imriadh','_blank');if(c==='linkedin')window.open('https://www.linkedin.com/in/riad-hossain-576316289/','_blank');if(c==='email')window.location.href='mailto:mdriad.alone@gmail.com'}));
  document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openCommand()}if(e.key==='Escape'){closeCommand();closeProject()}});

  // Subtle pointer glow on interactive project cards.
  $$('.project-card').forEach(card=>card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();card.style.background=`radial-gradient(circle at ${e.clientX-r.left}px ${e.clientY-r.top}px, rgba(200,255,61,.045), var(--bg) 42%)`}));
  $$('.project-card').forEach(card=>card.addEventListener('pointerleave',()=>card.style.background=''));
});
