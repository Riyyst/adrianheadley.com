const careerTimeline=[
  {role:"Medical Staffing & Recruitment Officer",period:"2026 – Present",description:"Responsible for coordinating recruitment and onboarding processes, maintaining accurate workforce records, legal and payroll documentation, supporting rota scheduling, and ensuring compliance with NHS policies, employment law, immigration law, and confidentiality standards.",tags:["Recruitment","Onboarding","NHS Compliance","Employment Law","Immigration Law"]},
  {role:"IT Lead",period:"2026 – Present",description:"Responsibility for remote digital operations, system changes, data services, and compliance. Focused on delivering secure, efficient processes that support high-quality patient care, and leading out-of-hours execution of requests, governance, and continuous improvement.",tags:["Digital Operations","Change Management","Security & Compliance","Data Services","Process Improvement"]},
  {role:"IT Officer",period:"2025 – 2026",description:"Broader responsibility for software, networking, and security infrastructure. Focused on delivering dependable, secure systems that support efficient, high-quality patient care, and leading response to incidents and upgrades.",tags:["IT Leadership","Infrastructure Management","Cyber Security","Incident Response","Service Improvement"]},
  {role:"IT and Network Support",period:"2024 – 2025",description:"Maintained and developed IT software and networking infrastructure after progressing from business administration. Provided second-line support and helped shape improvements in reliability and workflows.",tags:["Second Line Support","Network Support","Systems Administration","Workflow Improvement","Operational Reliability"]},
  {role:"IT and Communications Support",period:"2022 – 2024",description:"Alongside business administration work, took on responsibility for IT and communications. Helped enhance technological infrastructure, supported staff day to day, and contributed to communication and change projects.",tags:["IT Support","Communications Support","Change Coordination","Infrastructure Support","Staff Assistance"]},
  {role:"Bachelor of Laws (LLB)",period:"2023 – Present",description:"Studying for an Honours LLB alongside professional work, building a deeper understanding of legal frameworks, governance, and how the law interacts with organisations and technology.",tags:["Legal Research","Governance","Regulatory Awareness","Critical Analysis","Professional Development"]}
];

const projects=[
  {id:"portfolio",title:"Portfolio website",type:"Personal",tech:["HTML","CSS","JavaScript"],summary:"This site – a static portfolio bringing together professional experience, projects, and writing.",details:"A lightweight, fully static portfolio designed to be accessible and easy to maintain. Built without frameworks so it can be hosted anywhere, with a focus on clean layout, motion, and strong accessibility options.",images:["https://via.placeholder.com/900x520?text=Portfolio+Home","https://via.placeholder.com/900x520?text=Projects+Page"],link:""},
  {id:"discord-bot",title:"Discord bot experiments",type:"Code / Hobby",tech:["Python","discord.py"],summary:"Custom moderation and fun commands, including music playback, reaction-based roles, and interactive features.",details:"An ongoing sandbox for experimenting with asynchronous Python, APIs, and user interaction design. Includes moderation tools, music features, and playful commands to keep servers organised but fun.",images:["https://via.placeholder.com/900x520?text=Discord+Bot+Commands","https://via.placeholder.com/900x520?text=Music+System+Flow"],link:""},
  {id:"ops-dashboard",title:"Operations dashboard (concept)",type:"Concept",tech:["Python","APIs"],summary:"An internal concept for tracking IT incidents, bottlenecks, and resolutions to support decision making.",details:"Prototype designs for a simple operations dashboard: aggregating tickets, service health, and response times into one place so leaders can see patterns and prioritise improvements.",images:["https://via.placeholder.com/900x520?text=Dashboard+Concept","https://via.placeholder.com/900x520?text=Incident+Timeline"],link:""}
];

const articleCategories={
  law:[],
  political:[
    {
      slug:"autumn-budget-2025",
      title:"The 2025 Autumn Budget – Working Adults Are Left Paying for Everything (Again!)",
      outlet:"Personal writing",
      date:"2025",
      teaser:"A critical look at the 2025 Autumn Budget and how it loads the cost of everything onto working adults.",
      body:"The 2025 Autumn Budget \u2013 Working Adults Are Left Paying for Everything (Again!)\nRachel Reeves\u2019 Autumn Budget makes one thing unmistakably clear. Working adults have become the country\u2019s financial shock absorbers. Whenever the government mismanages money, overspends, or discovers yet another \u201cunexpected\u201d fiscal hole, the solution is always the same, to squeeze the people who actually work for every penny they have. Despite promising earlier this year that there would be \u201cno major tax rises\u201d, Reeves has delivered another round of stealth taxation that falls overwhelmingly on ordinary earners.\n\nThe scrapping of the two-child benefit cap has been sold as a progressive policy, but in reality it simply rewards people regardless of whether they contribute anything to the system. Support should be available for families facing genuine hardship, not for those who choose to have children and expect taxpayers to fund them. Working people, already taxed at every turn, are being asked once again to finance choices that should be personal responsibilities.\n\nThe freeze on income tax thresholds is a quieter but even more punishing blow. Inflation continues to push prices higher, yet wages barely keep up to match. Recent ONS data shows nominal pay rising around 5 per cent, while real income has increased by less than 1 per cent. That tiny gain is quickly swallowed by the threshold freeze, meaning millions are dragged into higher tax bands without being any better off. Workers are effectively taking home less money despite receiving pay rises. A stealth tax in everything but name.\n\nOther measures in the Budget follow the same pattern. Reeves\u2019 new mansion tax sounds fair until you consider that property value alone doesn\u2019t reflect someone\u2019s wealth or income. Many inherited or rural homes will be caught in the net, and landlords will inevitably pass new charges onto tenants, worsening the rental crisis.\n\nTaxing savings and dividends is no better. After paying income tax, National Insurance, VAT, council tax, fuel duty and everything else, whatever people manage to save should be theirs. By taxing savings, the government is penalising those who live responsibly and plan for the future. At this rate, Reeves might resurrect the old English window tax if she thought she could get away with it.\n\nThe pension reforms are equally short-sighted, targeting long-serving professionals who rely on salary sacrifice to build their retirement pots. Charging National Insurance on money people never actually receive as a salary is absurd. It hurts teachers, nurses, police and engineers far more than the genuinely wealthy, who have the means to shelter their income elsewhere.\n\nEven the new electric vehicle mileage tax follows the same logic. Punish responsible behaviour. People who switched to EVs, whether to save money or reduce emissions will now pay around 6p per mile for the privilege of driving. That, combined with the new EV road tax could mean the average driver pays hundreds extra each year. All of this is being introduced without any clear plan for enforcement. Will the government use MOT readings? Will cars be tracked? No one seems to know.\n\nThe Budget\u2019s sin taxes are equally hypocritical. Increasing duties on alcohol and gambling doesn\u2019t change behaviour, it simply gives the government another revenue stream while pretending to act in the public interest. These taxes hit ordinary people far more than they affect addiction or harm, which they so claim to be helping with.\n\nReeves insists that public services need the extra funding that these taxes provide, and she\u2019s not wrong. But the real issue isn\u2019t just the scale of funding but how that funding is used. The NHS spent over \u00a33.5 billion on agency staff last year and continues to suffer from chronic inefficiency, excessive administration and a lack of investment in preventative care. Without reform, throwing more money at the system will only produce the same failing results.\n\nPerhaps the most telling part of this Budget is the size of the fiscal black hole. Earlier this year, Reeves had around \u00a310 billion of headroom. Since then, weaker growth, higher borrowing costs and abandoned welfare reforms have widened the gap to between \u00a312 billion and \u00a320 billion. Despite raising enormous amounts of tax, \u00a326 billion this time on top of \u00a340 billion last year, the underlying problem is simply being masked rather than solved.\n\nThe overall message of this Budget is unmistakable. If you work, you pay. If you save, you pay. If you drive, you pay. If you prepare for retirement, you pay. Meanwhile, those who do not work, and in many cases, have no intention of working, continue to receive increased support. This isn\u2019t fairness. It\u2019s a slow erosion of the social contract, and working adults are once again being asked to bankroll a system that takes more from them every year while giving less in return."
    }
  ],
  it:[
    {title:"Example IT / operations note",outlet:"Internal notes",date:"2023",teaser:"An internal-style write-up on reliability, workflows, or systems."},
    {title:"Network changes log",outlet:"Internal notes",date:"2022",teaser:"Summary of notable infrastructure changes and lessons learned."},
    {title:"Service improvements idea dump",outlet:"Drafts",date:"2022",teaser:"Rough ideas for automations, dashboards, and better incident response."},
    {title:"Tooling experiments",outlet:"Lab notes",date:"2021",teaser:"Short notes on small tooling tests and scripting experiments."}
  ]
};

function renderTimeline(container,items){
  if(!container)return;
  container.innerHTML=items.map((item,index)=>{
    const current=(item.period||"").toLowerCase().includes("present");
    const education=(item.role||"").toLowerCase().includes("bachelor of laws");
    const description=(item.description||"").trim();
    const sentenceBreak=description.indexOf(". ");
    const summary=sentenceBreak>-1?description.slice(0,sentenceBreak+1):description;
    const remainder=sentenceBreak>-1?description.slice(sentenceBreak+2).trim():"";
    const focus=item.tags&&item.tags.length?item.tags.join(" · "):"";
    const hasDetails=Boolean(remainder||focus);
    return `
      <article class="timeline-item fade-in-on-scroll${current?" is-current":""}${education?" is-education":""}" style="--stagger-delay:${index*70}ms">
        <div class="timeline-dot" aria-hidden="true"></div>
        <div class="timeline-content">
          <div class="timeline-heading">
            <div>
              <div class="timeline-role">${item.role}</div>
              <div class="timeline-meta">${item.period||""}</div>
            </div>
            ${current?`<span class="timeline-current-label">Current</span>`:""}
          </div>
          <div class="timeline-description">${summary}</div>
          ${hasDetails?`<div class="timeline-details" id="timeline-details-${index}" hidden>
            ${remainder?`<p>${remainder}</p>`:""}
            ${focus?`<p><span class="timeline-focus-label">Focus</span> ${focus}</p>`:""}
          </div>
          <button class="timeline-more" type="button" aria-expanded="false" aria-controls="timeline-details-${index}">More details</button>`:""}
        </div>
      </article>
    `;
  }).join("");

  container.querySelectorAll('.timeline-more').forEach(function(button){
    button.addEventListener('click',function(){
      const id=button.getAttribute('aria-controls');
      const details=id?document.getElementById(id):null;
      if(!details)return;
      const open=button.getAttribute('aria-expanded')==='true';
      button.setAttribute('aria-expanded',String(!open));
      details.hidden=open;
      button.textContent=open?'More details':'Less detail';
    });
  });
}

function renderProjects(container,items){
  if(!container)return;
  container.innerHTML=items.map((project,index)=>{
    const tech=project.tech?project.tech.join(", "):"";
    return `
      <article class="project-card fade-in-on-scroll" data-project-index="${index}" style="--stagger-delay:${index*70}ms">
        <div class="project-header">
          <div class="project-title">${project.title}</div>
          <div class="project-meta">${project.type||""}${tech?" · "+tech:""}</div>
        </div>
        <div class="project-summary">${project.summary||""}</div>
        <div class="project-extra">
          <div class="project-gallery" data-gallery-index="0">
            <div class="project-frame">
              ${project.images&&project.images.length?`<img src="${project.images[0]}" alt="Preview image for ${project.title}">`:"No previews yet – add images later."}
            </div>
            <div class="project-gallery-controls">
              <span class="gallery-label">Preview <span class="gallery-current">1</span> of <span class="gallery-total">${project.images?project.images.length:1}</span></span>
              <div class="gallery-buttons">
                <button type="button" class="gallery-btn" data-gallery-prev>Prev</button>
                <button type="button" class="gallery-btn" data-gallery-next>Next</button>
              </div>
            </div>
          </div>
          <p class="project-detail-text">${project.details||""}</p>
        </div>
      </article>
    `;
  }).join("");

  container.querySelectorAll(".project-card").forEach(card=>{
    card.addEventListener("click",e=>{
      if(e.target.closest(".gallery-btn"))return;
      card.classList.toggle("expanded");
    });
  });

  container.querySelectorAll(".project-card").forEach(card=>{
    const index=parseInt(card.dataset.projectIndex,10);
    const project=items[index];
    const gallery=card.querySelector(".project-gallery");
    if(!gallery||!project.images||!project.images.length)return;
    const frame=gallery.querySelector(".project-frame img");
    const currentSpan=gallery.querySelector(".gallery-current");
    const totalSpan=gallery.querySelector(".gallery-total");
    let current=0;
    totalSpan.textContent=project.images.length.toString();

    function update(){
      if(frame){frame.src=project.images[current];}
      if(currentSpan)currentSpan.textContent=(current+1).toString();
    }

    gallery.querySelectorAll("[data-gallery-prev]").forEach(btn=>{
      btn.addEventListener("click",e=>{
        e.stopPropagation();
        current=(current-1+project.images.length)%project.images.length;
        update();
      });
    });
    gallery.querySelectorAll("[data-gallery-next]").forEach(btn=>{
      btn.addEventListener("click",e=>{
        e.stopPropagation();
        current=(current+1)%project.images.length;
        update();
      });
    });
  });
}

function renderArticlesByCategory(openArticleModal){
  const sections=document.querySelectorAll(".article-card-grid[data-article-category]");
  sections.forEach(section=>{
    const key=section.dataset.articleCategory;
    const items=articleCategories[key]||[];
    section.innerHTML=items.map((article,index)=>`
      <article class="article-card fade-in-on-scroll" data-article-category="${key}" data-article-index="${index}" style="--stagger-delay:${index*70}ms">
        <div class="article-card-header">
          <h3 class="article-title">${article.title}</h3>
          <div class="article-meta">${article.outlet||""}${article.date?" · "+article.date:""}</div>
        </div>
        <div class="article-teaser">${article.teaser||""}</div>
      </article>
    `).join("");

    const cards=Array.from(section.querySelectorAll(".article-card"));

    const idealCardWidth=320;
    let perView=Math.max(1,Math.floor(section.clientWidth/idealCardWidth));
    perView=Math.min(perView,cards.length||1);
    section.style.setProperty("--cards-per-view",perView);

    cards.forEach(card=>{
      card.addEventListener("click",()=>{
        const cat=card.dataset.articleCategory;
        const idx=parseInt(card.dataset.articleIndex,10);
        const data=(articleCategories[cat]||[])[idx];
        if(data)openArticleModal(data);
      });
    });

    const carousel=section.closest(".article-carousel");
    if(!carousel)return;
    const prevBtn=carousel.querySelector(".article-scroll-prev");
    const nextBtn=carousel.querySelector(".article-scroll-next");
    if(!prevBtn||!nextBtn||cards.length<=perView){
      if(prevBtn)prevBtn.disabled=true;
      if(nextBtn)nextBtn.disabled=true;
      return;
    }

    let currentPage=0;
    const maxPage=Math.max(0,Math.ceil(cards.length/perView)-1);

    const scrollToPage=page=>{
      if(page<0||page>maxPage)return;
      const firstIndex=page*perView;
      const target=cards[firstIndex];
      if(!target)return;
      const offset=target.offsetLeft-section.offsetLeft;
      section.scrollTo({left:offset,behavior:"smooth"});
    };

    prevBtn.addEventListener("click",()=>{
      if(currentPage<=0)return;
      currentPage-=1;
      scrollToPage(currentPage);
    });

    nextBtn.addEventListener("click",()=>{
      if(currentPage>=maxPage)return;
      currentPage+=1;
      scrollToPage(currentPage);
    });
  });
}let lastFocusedElement=null;
function getModalElements(){
  return {backdrop:document.getElementById("modal-backdrop"),content:document.getElementById("modal-content"),closeBtn:document.getElementById("modal-close")};
}
function openModal(buildContent){
  const {backdrop,content,closeBtn}=getModalElements();
  if(!backdrop||!content||!closeBtn)return;
  lastFocusedElement=document.activeElement;
  content.innerHTML=buildContent();
  backdrop.hidden=false;
  document.body.style.overflow="hidden";
  requestAnimationFrame(()=>{
    backdrop.classList.add("open");
    closeBtn.focus({preventScroll:true});
  });
  closeBtn.onclick=closeModal;
  backdrop.addEventListener("click",onBackdropClick);
  document.addEventListener("keydown",onEsc);
}
function closeModal(){
  const {backdrop,content}=getModalElements();
  if(!backdrop)return;
  backdrop.classList.remove("open");
  let closed=false;
  const handler=()=>{
    if(closed)return;
    closed=true;
    backdrop.hidden=true;
    backdrop.removeEventListener("transitionend",handler);
    if(content)content.innerHTML="";
    document.body.style.overflow="";
    if(backdrop.dataset.modalMode==="article-reader"){
      backdrop.classList.remove("article-reader-backdrop");
      const panel=backdrop.querySelector(".overlay-panel");
      if(panel){
        panel.classList.remove("article-reader-panel");
        const shareButton=panel.querySelector(".article-reader-share");
        if(shareButton)shareButton.remove();
      }
      delete backdrop.dataset.modalMode;
    }
  };
  backdrop.addEventListener("transitionend",handler);
  const noMotion=document.body.classList.contains("reduce-motion")||window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(noMotion||parseFloat(getComputedStyle(backdrop).transitionDuration)===0){
    handler();
  }else{
    window.setTimeout(handler,260);
  }
  document.removeEventListener("keydown",onEsc);
  backdrop.removeEventListener("click",onBackdropClick);
  if(lastFocusedElement&&typeof lastFocusedElement.focus==="function"){lastFocusedElement.focus();}
}
function onEsc(e){if(e.key==="Escape")closeModal();}
function onBackdropClick(e){
  const panel=e.target.closest(".overlay-panel");
  if(!panel)closeModal();
}

function openArticleModal(article, options = {}){
  if(!article)return;

  const rawText = article.body || article.teaser || "";
  const paragraphs = rawText
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(Boolean);

  const bodyHtml = paragraphs
    .map(p => `<p class="overlay-text">${p}</p>`)
    .join("");

  if (!options.skipUrlUpdate && article.slug) {
    const url = new URL(window.location.href);
    url.searchParams.set("article", article.slug);
    history.pushState({ articleSlug: article.slug }, "", url);
  }

  openModal(()=>`
      <div class="overlay-header">
        <h2 id="modal-title">${article.title}</h2>
        <p>${article.outlet||""}${article.date?" · "+article.date:""}</p>
      </div>
      <div class="overlay-body">
        <div class="overlay-article-text">
          ${bodyHtml}
        </div>
      </div>
  `);
}

function getCvPdfPath(){
  const inPages=document.body.getAttribute("data-in-pages")==="true";
  return (inPages?"":"Pages/") + "cv.html";
}
function openCvModal(){
  openModal(()=>`
    <div class="overlay-header">
      <h2 id="modal-title">Some quick questions</h2>
      <p>Before you view my full CV, please share a few details.</p>
    </div>
    <div class="overlay-body">
      <form class="cv-form-grid" id="cv-form">
        <div class="cv-form-row">
          <div class="cv-form-field">
            <label for="cv-name">Name</label>
            <input id="cv-name" name="name" type="text" required>
          </div>
          <div class="cv-form-field">
            <label for="cv-company">Organisation / company</label>
            <input id="cv-company" name="company" type="text">
          </div>
        </div>
        <div class="cv-form-field">
          <label for="cv-role">Role / position</label>
          <input id="cv-role" name="role" type="text">
        </div>
        <div class="cv-form-field">
          <label for="cv-reason">Brief reason for viewing my CV</label>
          <textarea id="cv-reason" name="reason" rows="3" placeholder="For example: recruitment, collaboration, curiosity, or future opportunities."></textarea>
        </div>
        <div class="cv-form-footer">
          <small>I’ll use this information only to understand who is interested in my background.</small>
          <button type="submit" class="btn primary-btn">Continue to CV</button>
        </div>
      </form>
    </div>
  `);
  const form=document.getElementById("cv-form");
  if(form){
    form.addEventListener("submit",async e=>{
      e.preventDefault();
      const formData=new FormData(form);
      try{
        await fetch("https://formspree.io/f/manznbjr",{method:"POST",body:formData,headers:{"Accept":"application/json"}});
      }catch(err){
        console.error("Error sending CV form",err);
      }
      window.open(getCvPdfPath(),"_blank");
      closeModal();
    });
  }
}

const THEME_KEY="ah-theme",TEXT_SIZE_KEY="ah-text-size",MOTION_KEY="ah-motion",CONTRAST_KEY="ah-contrast",LINKS_KEY="ah-links",COLOR_KEY="ah-color-mode",FOCUS_KEY="ah-focus";
/* === Accessibility preferences persistence (localStorage + cookie for subdomains) === */
function ahSetCookie(name,value,days){
  try{
    const expires = days ? "; expires=" + new Date(Date.now()+days*864e5).toUTCString() : "";
    const domain = location.hostname.endsWith("adrianheadley.com") ? "; domain=.adrianheadley.com" : "";
    const secure = location.protocol === "https:" ? "; Secure" : "";
    document.cookie = encodeURIComponent(name)+"="+encodeURIComponent(value)+expires+"; path=/"+domain+"; SameSite=Lax"+secure;
  }catch(e){}
}
function ahGetCookie(name){
  try{
    const key = encodeURIComponent(name)+"=";
    const parts = document.cookie ? document.cookie.split("; ") : [];
    for(const part of parts){
      if(part.indexOf(key)===0) return decodeURIComponent(part.substring(key.length));
    }
  }catch(e){}
  return null;
}
function ahGetPref(key){
  const fromCookie = ahGetCookie(key);
  if(fromCookie!==null && fromCookie!=="") return fromCookie;
  try{ return localStorage.getItem(key); }catch(e){ return null; }
}
function ahSetPref(key,value){
  try{ localStorage.setItem(key,value); }catch(e){}
  ahSetCookie(key,value,3650);
}
/* === End persistence helpers === */

function applyTheme(theme){if(theme==="dark"){document.body.classList.add("dark-theme");}else{document.body.classList.remove("dark-theme");}document.querySelectorAll("[data-theme]").forEach(btn=>btn.classList.toggle("active",btn.dataset.theme===theme));}
function initTheme(){const saved=ahGetPref(THEME_KEY);if(saved==="light"||saved==="dark"){applyTheme(saved);}else{applyTheme("light");}}
function setTheme(theme){applyTheme(theme);ahSetPref(THEME_KEY,theme);}
function applyTextSize(size){
  const root=document.documentElement;
  const base=16;
  let scale=1;
  if(size==="large"){scale=1.125;}
  else if(size==="xlarge"){scale=1.25;}
  root.style.fontSize=(base*scale)+"px";

  document.body.classList.remove("text-large","text-xlarge");
  if(size==="large")document.body.classList.add("text-large");
  if(size==="xlarge")document.body.classList.add("text-xlarge");

  document.querySelectorAll("[data-text-size]").forEach(btn=>{
    btn.classList.toggle("active",btn.dataset.textSize===size);
  });
}
function initTextSize(){const saved=ahGetPref(TEXT_SIZE_KEY)||"normal";applyTextSize(saved);}
function setTextSize(size){applyTextSize(size);ahSetPref(TEXT_SIZE_KEY,size);}
function applyMotion(reduce){document.body.classList.toggle("reduce-motion",reduce);const toggle=document.getElementById("motion-toggle");if(toggle)toggle.checked=reduce;}
function initMotion(){const saved=ahGetPref(MOTION_KEY);applyMotion(saved==="reduce");}
function setMotion(reduce){applyMotion(reduce);ahSetPref(MOTION_KEY,reduce?"reduce":"normal");}
function applyContrast(mode){document.body.classList.toggle("high-contrast",mode==="high");document.querySelectorAll("[data-contrast]").forEach(btn=>btn.classList.toggle("active",btn.dataset.contrast===mode));}
function initContrast(){const saved=ahGetPref(CONTRAST_KEY)||"normal";applyContrast(saved);}
function setContrast(mode){applyContrast(mode);ahSetPref(CONTRAST_KEY,mode);}
function applyLinkStyle(underline){document.body.classList.toggle("links-underlined",underline);const toggle=document.getElementById("underline-toggle");if(toggle)toggle.checked=underline;}
function initLinkStyle(){const saved=ahGetPref(LINKS_KEY);applyLinkStyle(saved==="underline");}
function setLinkStyle(underline){applyLinkStyle(underline);ahSetPref(LINKS_KEY,underline?"underline":"normal");}

function applyColorMode(mode){
  document.body.classList.toggle("cb-mode",mode==="cb");
  document.querySelectorAll("[data-color-mode]").forEach(btn=>btn.classList.toggle("active",btn.dataset.colorMode===mode));
}
function initColorMode(){
  const saved=ahGetPref(COLOR_KEY)||"normal";
  applyColorMode(saved);
}
function setColorMode(mode){
  applyColorMode(mode);
  ahSetPref(COLOR_KEY,mode);
}
function applyFocusMode(strong){
  document.body.classList.toggle("strong-focus",strong);
  const toggle=document.getElementById("focus-toggle");
  if(toggle)toggle.checked=strong;
}
function initFocusMode(){
  const saved=ahGetPref(FOCUS_KEY);
  applyFocusMode(saved==="strong");
}
function setFocusMode(strong){
  applyFocusMode(strong);
  ahSetPref(FOCUS_KEY,strong?"strong":"normal");
}
function initScrollAnimations(){const elements=document.querySelectorAll(".fade-in-on-scroll");if(!("IntersectionObserver"in window)){elements.forEach(el=>el.classList.add("visible"));return;}const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}})},{threshold:0.18});elements.forEach(el=>observer.observe(el));}

document.addEventListener("DOMContentLoaded",()=>{
  initTheme();initTextSize();initContrast();initMotion();initLinkStyle();initColorMode();initFocusMode();
  const a11yButton=document.getElementById("a11y-button");
  const a11yPanel=document.getElementById("a11y-panel");
  if(a11yButton&&a11yPanel){
    a11yButton.addEventListener("click",()=>{
      const isOpen=a11yPanel.classList.toggle("open");
      a11yButton.setAttribute("aria-expanded",isOpen?"true":"false");
    });
    document.addEventListener("click",e=>{
      if(!a11yPanel.contains(e.target)&&!a11yButton.contains(e.target)){
        if(a11yPanel.classList.contains("open")){
          a11yPanel.classList.remove("open");
          a11yButton.setAttribute("aria-expanded","false");
        }
      }
    });
    document.querySelectorAll("[data-theme]").forEach(btn=>btn.addEventListener("click",()=>setTheme(btn.dataset.theme)));
    document.querySelectorAll("[data-text-size]").forEach(btn=>btn.addEventListener("click",()=>setTextSize(btn.dataset.textSize)));
    document.querySelectorAll("[data-contrast]").forEach(btn=>btn.addEventListener("click",()=>setContrast(btn.dataset.contrast)));
    document.querySelectorAll("[data-color-mode]").forEach(btn=>btn.addEventListener("click",()=>setColorMode(btn.dataset.colorMode)));
    const underlineToggle=document.getElementById("underline-toggle");
    if(underlineToggle){underlineToggle.addEventListener("change",e=>setLinkStyle(e.target.checked));}
    const motionToggle=document.getElementById("motion-toggle");
    if(motionToggle){motionToggle.addEventListener("change",e=>setMotion(e.target.checked));}
    const focusToggle=document.getElementById("focus-toggle");
    if(focusToggle){focusToggle.addEventListener("change",e=>setFocusMode(e.target.checked));}
  }
  renderTimeline(document.getElementById("career-timeline"),careerTimeline);
  renderProjects(document.getElementById("projects-grid"),projects);
  renderArticlesByCategory(openArticleModal);
  document.querySelectorAll(".cv-modal-trigger").forEach(btn=>btn.addEventListener("click",()=>openCvModal()));
  initScrollAnimations();
  const yearSpan=document.getElementById("footer-year");if(yearSpan)yearSpan.textContent=new Date().getFullYear().toString();
});

function findArticleBySlug(slug){
  if(!slug)return null;
  for(const list of Object.values(articleCategories)){
    const found=list.find(a=>a.slug===slug);
    if(found)return found;
  }
  return null;
}

document.addEventListener("DOMContentLoaded",()=>{
  const params=new URLSearchParams(window.location.search);
  const slug=params.get("article");
  if(slug){
    const article=findArticleBySlug(slug);
    if(article){
      openArticleModal(article,{ skipUrlUpdate:true });
    }
  }
});

/* Contact form: build Formspree email subject as "<Topic> - <Subject>" */
(function(){
  const form = document.querySelector("form.contact-form-card");
  if(!form) return;

  const topic = form.querySelector("#topic");
  const subject = form.querySelector("#subject");
  const hiddenSubject = form.querySelector("#_subject");

  form.addEventListener("submit", function(){
    if(!hiddenSubject) return;

    const topicText = topic && topic.options && topic.selectedIndex >= 0
      ? (topic.options[topic.selectedIndex].text || "").trim()
      : "";

    const subjectText = subject ? (subject.value || "").trim() : "";

    const combined = [topicText, subjectText].filter(Boolean).join(" - ");
    hiddenSubject.value = combined || "Website enquiry";
  });
})();



/* === Book-style Articles reader === */
const articleBooks = {
  "time-is-money": {
    title: "Time Is Money",
    subtitle: "Every Second Your Site Wastes Costs You Sales",
    category: "Business Articles",
    pages: [
      {
        heading: "The measurable cost of speed",
        html: [
          "You have probably heard the phrase ‘time is money’, but in e-commerce it&#x27;s not just a saying, it is a measurable reality backed by data from major research programmes.",
          "In the study <a href=\"https://www.deloitte.com/ie/en/services/consulting/research/milliseconds-make-millions.html\" target=\"_blank\" rel=\"noopener noreferrer\">Milliseconds Make Millions</a>, commissioned by Google and conducted by Deloitte and analytics firm fifty-five, researchers analysed more than 30 million mobile user sessions across 37 retail, travel, luxury and lead-generation brands in Europe and the United States.",
          "They found that a natural 0.1-second improvement in mobile site speed was associated with an 8.4% increase in retail conversion rate and a 9.2% increase in average order value, with similar gains in travel and lead-generation funnels. The same report breaks down where speed matters most in the journey."
        ]
      },
      {
        heading: "Where speed matters most",
        html: [
          "A 0.1-second improvement produced a 3.2% increase in progression from product listing pages to product detail pages and a 9.1% increase from product detail pages to add-to-basket pages.",
          "In other words, the benefit compounds exactly at the points where most e-commerce sites lose volume. Google’s own web.dev case study summarising this research presents the same findings for developers and performance practitioners.",
          "A separate large-scale study from Akamai, <a href=\"https://www.ir.akamai.com/news-releases/news-release-details/akamai-online-retail-performance-report-milliseconds-are\" target=\"_blank\" rel=\"noopener noreferrer\">the State of Online Retail Performance</a>, looked at performance data from roughly 10 billion user visits to leading retail sites. Akamai’s analysis found that a 100-millisecond delay in page load can hurt conversion rates by about 7%, and that a two-second delay can increase bounce rates by over 100%. Their summary makes the point clear."
        ]
      },
      {
        html: [
          "Even 100-millisecond delays can impact customer engagement and online revenue, and 53% of mobile visitors leave a page that takes longer than three seconds to load. Google’s own mobile speed research reaches the same conclusions.",
          "In its DoubleClick mobile web speed work, presented in the <a href=\"https://www.thinkwithgoogle.com/_qs/documents/3702/9e6a3_DoubleClick_Mobile_Web_Speed_Toolkit_10_17_2016.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Get your mobile site in shape toolkit</a>, Google reports that 53% of mobile site visits are abandoned if a page takes longer than three seconds to load. The toolkit ties load time directly to commercial outcomes and encourages site owners to measure and improve mobile performance as part of their broader business strategy."
        ]
      },
      {
        heading: "What the research says together",
        html: [
          "With all the research put together, these studies tell a consistent story. Even small changes in load times are associated with noticeable differences in how many visitors progress, and how much they spend when they do.",
          "Once pages cross roughly three seconds on mobile, abandonment rises sharply, and every extra second becomes a tangible commercial cost. None of this is based on anecdote. It comes from large-scale measurements of real sessions, monitored hour by hour across many brands and industries.",
          "The human side is straightforward. People don&#x27;t arrive on a website to admire its structure and layout, but rather to complete a task, often on a phone with a variable connection. If the path to that task is smooth and quick, they are more likely to finish it and remember the experience positively."
        ]
      },
      {
        heading: "The human side of performance",
        html: [
          "If it is slow or uneven, many will leave, and the business never sees the revenue that might have followed. This is why Google’s own guidance now treats mobile speed, Core Web Vitals and abandonment as part of the same conversation. Performance is both a user-experience issue and a commercial one.",
          "It is worth asking why those few seconds matter so much. People shopping online are not always in a rush, and many browse on the sofa or idly scroll during a commute. The problem is less about absolute time and more about expectation and perception.",
          "Google’s <a href=\"https://www.marketingdive.com/news/google-53-of-mobile-users-abandon-sites-that-take-over-3-seconds-to-load/426070/\" target=\"_blank\" rel=\"noopener noreferrer\">mobile performance work</a> reports that around 53% of mobile visitors abandon a site that takes more than three seconds to load, and that pages loading in nineteen seconds on typical 3G connections see dramatically higher bounce and lower engagement than pages loading in five seconds."
        ]
      },
      {
        heading: "Why waiting feels longer",
        html: [
          "Studies of perceived speed show that users feel waits are longer than they really are, and people experience load times as roughly 15% slower than measurement tools report, as described in SpeedCurve’s “<a href=\"https://www.speedcurve.com/blog/psychology-site-speed/\" target=\"_blank\" rel=\"noopener noreferrer\">The psychology of site speed and human happiness”</a> and Wired’s “<a href=\"https://www.wired.com/2016/08/science-waiting-waiting-page-load/\" target=\"_blank\" rel=\"noopener noreferrer\">The Science of Waiting ... for Your Page to Load</a>”.",
          "Contrary to the popular claim that our attention spans have simply collapsed to a few seconds, there is little scientific evidence that humans now possess a fixed, eight-second window beyond which they cannot focus. What recent work suggests instead is that attention online is highly task-dependent and shaped by cognitive load, control and context."
        ]
      },
      {
        heading: "Attention, control and patience",
        html: [
          "Delays of more than about two seconds break concentration, increase stress responses and make users feel powerless, especially when they have many other tabs or apps to switch to, according to “<a href=\"https://wisetech.ae/it-solutions/psychology-of-loading-screens-user-patience/\" target=\"_blank\" rel=\"noopener noreferrer\">The Psychology of Loading Screens and User Patience</a>” and “<a href=\"https://medium.com/@elenech/the-psychology-of-waiting-skeletons-ca3b309e12a2\" target=\"_blank\" rel=\"noopener noreferrer\">The Psychology of Waiting: Skeletons</a>”.",
          "On mobile, where connections are more variable and usage is often fragmented into short, opportunistic windows, that effect is amplified, with surveys and performance studies consistently finding that people are less patient on phones than on a desktop and treat speed as one of the most important parts of the experience.",
          "In that light, the “three second rule” is not arbitrary, but it does reflect the point at which waiting ceases to feel like part of the journey and starts to feel like a problem."
        ]
      },
      {
        heading: "The business question",
        html: [
          "For any e-commerce business, a useful question to ask is not simply ‘Is my site online?’ but ‘How much time am I asking visitors to spend waiting, and what does the best available research say that delay is costing me?’. The answer will never appear as a neat line in a profit and loss statement labelled ‘lost to slow pages’, but the impact is real.",
          "When time is money, the seconds between a customer’s intent and your response become one of the most important parts of the business to understand."
        ]
      }
    ]
  },
  "what-is-this-website": {
    title: "What is this website?",
    subtitle: "A short introduction",
    pages: [
      {
        heading: "About this website",
        text: [
          "This website is my personal portfolio. It brings my professional experience, projects, business work and writing into one place.",
          "You can use the main navigation to explore my career, view projects I have worked on, learn about my business interests, read articles and get in touch."
        ]
      },
      {
        heading: "What you can find here",
        text: [
          "The Career section sets out my professional background and ongoing development. The Business section covers work and services outside my main employment, while Projects highlights practical things I have built or developed.",
          "Articles gives me a separate space for longer pieces of writing. Each article is presented in this book-style reader so it can be read in short pages rather than one long block of text."
        ]
      },
      {
        heading: "How the site is designed",
        text: [
          "The site is kept simple and lightweight. It is designed to work across desktop, tablet and mobile screens without requiring an account or special software.",
          "Accessibility controls are available in the header. They let you change text size, use a colourblind-friendly mode, underline links, reduce motion and strengthen focus outlines."
        ]
      },
      {
        heading: "Why it exists",
        text: [
          "The aim is to keep one clear, up-to-date place for my work and interests. Instead of separating everything across different profiles, this site gives each area its own section while keeping the overall experience consistent.",
          "I will continue adding projects, articles and other material as the site develops."
        ]
      }
    ]
  }
};

let articleReaderKeyHandler = null;

function articleCoverHtml(book){
  return `
    <div class="article-reader-page article-reader-cover" aria-label="Cover of ${book.title}">
      <span class="article-book-kicker">Adrian Headley</span>
      <span class="article-book-rule" aria-hidden="true"></span>
      <h2 class="article-book-title" id="modal-title">${book.title}</h2>
      <span class="article-book-subtitle">${book.subtitle || ""}</span>
    </div>`;
}

function articlePageHtml(book,page,index){
  const content=page.html||page.text||[];
  const paragraphs=content.map(item=>`<p>${item}</p>`).join("");
  const heading=page.heading ? `<h2 id="modal-title">${page.heading}</h2>` : `<h2 id="modal-title" class="sr-only">${book.title}</h2>`;
  return `
    <article class="article-reader-page article-reader-paper${page.heading ? "" : " article-reader-continuation"}">
      <p class="reader-section-label">${book.title} · Page ${index}</p>
      ${heading}
      ${paragraphs}
    </article>`;
}

function getBookShareUrl(bookId,pageIndex){
  const inPages=document.body.getAttribute("data-in-pages")==="true";
  const isWeb=window.location.protocol==="https:"||window.location.protocol==="http:";
  const isLocalHost=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.hostname==="0.0.0.0";
  const url=(isWeb&&!isLocalHost)
    ? new URL(inPages ? "articles.html" : "Pages/articles.html",window.location.href)
    : new URL("https://www.adrianheadley.com/Pages/articles.html");
  url.search="";
  url.hash="";
  url.searchParams.set("book",bookId);
  url.searchParams.set("page",pageIndex===0 ? "cover" : String(pageIndex));
  return url.toString();
}

function copyTextFallback(text){
  const input=document.createElement("textarea");
  input.value=text;
  input.setAttribute("readonly","");
  input.style.position="fixed";
  input.style.left="-9999px";
  input.style.opacity="0";
  document.body.appendChild(input);
  input.focus();
  input.select();
  let copied=false;
  try{copied=document.execCommand("copy");}catch(_error){copied=false;}
  input.remove();
  return copied;
}

function parseBookPage(rawValue,book){
  if(!rawValue||rawValue.toLowerCase()==="cover")return 0;
  const page=Number.parseInt(rawValue,10);
  if(!Number.isFinite(page))return 0;
  return Math.max(0,Math.min(book.pages.length,page));
}

function openBookReader(bookId,options={}){
  const book=articleBooks[bookId];
  if(!book)return;
  let current=Math.max(0,Math.min(book.pages.length,Number(options.startPage)||0));
  const total=book.pages.length+1;

  const modal=getModalElements();
  const panel=modal.backdrop ? modal.backdrop.querySelector(".overlay-panel") : null;
  if(modal.backdrop){
    modal.backdrop.classList.add("article-reader-backdrop");
    modal.backdrop.dataset.modalMode="article-reader";
  }
  if(panel)panel.classList.add("article-reader-panel");

  openModal(()=>`
    <div class="article-reader-shell">
      <div class="article-reader-stage">
        <button type="button" class="article-reader-arrow" data-reader-prev aria-label="Previous page">‹</button>
        <div data-reader-page></div>
        <button type="button" class="article-reader-arrow" data-reader-next aria-label="Next page">›</button>
      </div>
      <div class="article-reader-progress" data-reader-progress aria-live="polite"></div>
      <p class="article-reader-hint">Use the arrows or your keyboard to move between pages.</p>
    </div>
  `);

  const pageHost=document.querySelector("[data-reader-page]");
  const progress=document.querySelector("[data-reader-progress]");
  const prev=document.querySelector("[data-reader-prev]");
  const next=document.querySelector("[data-reader-next]");
  if(!pageHost||!progress||!prev||!next)return;

  let shareButton=panel ? panel.querySelector(".article-reader-share") : null;
  if(panel&&!shareButton){
    shareButton=document.createElement("button");
    shareButton.type="button";
    shareButton.className="article-reader-share";
    shareButton.textContent="Share";
    panel.appendChild(shareButton);
  }

  const render=()=>{
    pageHost.innerHTML=current===0
      ? articleCoverHtml(book)
      : articlePageHtml(book,book.pages[current-1],current);
    prev.disabled=current===0;
    next.disabled=current===total-1;
    progress.textContent=current===0 ? `Cover · ${book.pages.length} pages` : `Page ${current} of ${book.pages.length}`;
    if(shareButton){
      const pageName=current===0 ? "cover" : `page ${current}`;
      shareButton.setAttribute("aria-label",`Share ${book.title}, ${pageName}`);
      shareButton.title=`Share ${pageName}`;
    }
  };

  if(shareButton){
    shareButton.addEventListener("click",async()=>{
      const shareUrl=getBookShareUrl(bookId,current);
      const original=shareButton.textContent;
      let copied=false;

      try{
        if(navigator.clipboard&&window.isSecureContext){
          await navigator.clipboard.writeText(shareUrl);
          copied=true;
        }
      }catch(_error){
        copied=false;
      }

      if(!copied){
        copied=copyTextFallback(shareUrl);
      }

      shareButton.textContent=copied ? "Link copied" : "Copy link";
      if(copied){
        window.setTimeout(()=>{
          if(shareButton&&shareButton.isConnected)shareButton.textContent=original;
        },1600);
      }else{
        shareButton.dataset.shareUrl=shareUrl;
        shareButton.title=shareUrl;
        window.setTimeout(()=>{
          if(shareButton&&shareButton.isConnected)shareButton.textContent=original;
        },2200);
      }
    });
  }

  prev.addEventListener("click",()=>{if(current>0){current-=1;render();}});
  next.addEventListener("click",()=>{if(current<total-1){current+=1;render();}});

  if(articleReaderKeyHandler){document.removeEventListener("keydown",articleReaderKeyHandler);}
  articleReaderKeyHandler=(event)=>{
    const backdrop=document.getElementById("modal-backdrop");
    if(!backdrop||backdrop.hidden)return;
    if(event.key==="ArrowLeft"&&current>0){event.preventDefault();current-=1;render();}
    if(event.key==="ArrowRight"&&current<total-1){event.preventDefault();current+=1;render();}
  };
  document.addEventListener("keydown",articleReaderKeyHandler);
  render();
}

function initArticleBooks(){
  document.querySelectorAll("[data-book-id]").forEach(book=>{
    book.addEventListener("click",event=>{
      event.preventDefault();
      openBookReader(book.dataset.bookId);
    });
  });
}

function openBookFromUrl(){
  const params=new URLSearchParams(window.location.search);
  const bookId=params.get("book");
  const book=articleBooks[bookId];
  if(!book)return;
  const startPage=parseBookPage(params.get("page"),book);
  openBookReader(bookId,{startPage});
}

document.addEventListener("DOMContentLoaded",()=>{
  initArticleBooks();
  openBookFromUrl();
});


/* Project case studies */
const projectCaseStudies={
  tools:{
    title:"Tools",
    summary:"A collection of browser tools I built to keep everyday jobs quick, simple and private.",
    body:`
      <section class="case-study-intro" aria-label="Tools overview">
        <h3>Why I built it</h3>
        <p>I kept finding myself using a different website for every small job. Resize an image, compare some text, generate a QR code, split a PDF, check metadata. None of these things should take much effort.</p>
        <p>Tools is my answer to that. I wanted one place I could open, get the job done and move on, without accounts, clutter or unnecessary steps.</p>
      </section>

      <section class="case-study-section">
        <span class="case-study-number">01</span>
        <h3>Privacy was important from the start</h3>
        <p>Where something can be processed in the browser, that is how I prefer to do it. A simple task should not mean uploading a personal file to another server if it does not need to leave your device.</p>
      </section>

      <section class="case-study-section">
        <span class="case-study-number">02</span>
        <h3>What is there</h3>
        <div class="case-study-simple-grid">
          <div>
            <h4>Text and data</h4>
            <p>Word counting, case conversion, find and replace, text comparison and converters.</p>
          </div>
          <div>
            <h4>Files and media</h4>
            <p>PDF utilities, image tools, metadata tools, compression and conversion.</p>
          </div>
          <div>
            <h4>Security</h4>
            <p>Encryption, hashing, password utilities and other privacy-focused tools.</p>
          </div>
          <div>
            <h4>Everyday jobs</h4>
            <p>QR codes, barcodes, date and time tools, and other things I regularly find useful.</p>
          </div>
        </div>
      </section>

      <section class="case-study-section">
        <span class="case-study-number">03</span>
        <h3>How I keep it</h3>
        <p>The site uses a lightweight HTML, CSS and JavaScript front end. I keep the layout consistent so new tools can be added without making the site harder to use. It is a project I expect to keep expanding whenever I find another genuinely useful tool to add.</p>
      </section>

      <div class="case-study-visit">
        <a class="btn primary-btn" href="https://tools.adrianheadley.com/" target="_blank" rel="noopener noreferrer">Visit Tools</a>
      </div>`
  },
  "orthodox-calendar":{
    title:"Orthodox Calendar and Study Bible",
    summary:"A single place for the Greek and Russian Orthodox calendars, daily readings and the Orthodox Study Bible.",
    body:`
      <section class="case-study-intro" aria-label="Orthodox Calendar and Study Bible overview">
        <h3>Why I built it</h3>
        <p>This started as separate calendar projects. I wanted a cleaner way to check the day without jumping between different sites and sources, so I eventually brought the Greek and Russian calendars together.</p>
        <p>The Study Bible grew from the same idea. The calendar gives the day its context, and the reader gives somewhere to continue reading without leaving the site.</p>
      </section>

      <section class="case-study-section">
        <span class="case-study-number">01</span>
        <h3>The daily calendar</h3>
        <p>The calendar brings together commemorations, fasting guidance, feast days and scripture readings. Greek and Russian views remain separate where they need to be, while the overall design and controls stay familiar.</p>
      </section>

      <section class="case-study-section">
        <span class="case-study-number">02</span>
        <h3>The reading side</h3>
        <div class="case-study-simple-grid">
          <div>
            <h4>Study Bible</h4>
            <p>A dedicated reading room for the Orthodox Study Bible, with book and chapter navigation.</p>
          </div>
          <div>
            <h4>Daily scripture</h4>
            <p>Readings sit alongside the calendar so the day can be followed from one place.</p>
          </div>
          <div>
            <h4>Language</h4>
            <p>The calendar can stay in the selected language as you move between dates and content.</p>
          </div>
          <div>
            <h4>Read aloud</h4>
            <p>Optional speech controls make prayers and scripture easier to listen to as well as read.</p>
          </div>
        </div>
      </section>

      <section class="case-study-section">
        <span class="case-study-number">03</span>
        <h3>What I wanted from it</h3>
        <p>I have tried to keep the site calm and straightforward. There is quite a lot of information behind each day, but it should still feel easy to open, find what you need and read without the interface getting in the way.</p>
      </section>

      <div class="case-study-visit">
        <a class="btn primary-btn" href="https://riyyst.github.io/Orthodox-Calendars/index.html" target="_blank" rel="noopener noreferrer">Visit Orthodox Calendars</a>
      </div>`
  },
  churchfinder:{
    title:"ChurchFinder",
    summary:"A UK church discovery project built around useful information, maps and simple search.",
    body:`
      <section class="case-study-intro" aria-label="ChurchFinder overview">
        <h3>Why I started it</h3>
        <p>Finding a church can be surprisingly awkward. Useful information is often spread across maps, parish websites, social media pages and directories, and some of it can be out of date.</p>
        <p>I started ChurchFinder to bring the basics into one place and make it easier to discover churches whether you are local, travelling, or looking somewhere new.</p>
      </section>

      <section class="case-study-section">
        <span class="case-study-number">01</span>
        <h3>What matters most</h3>
        <p>The project is centred on search and maps, but the useful part is the information behind each result. Denomination, address, service times, accessibility, photos and other practical details should be easy to find before somebody decides to visit.</p>
      </section>

      <section class="case-study-section">
        <span class="case-study-number">02</span>
        <h3>Where I want it to go</h3>
        <div class="case-study-simple-grid">
          <div>
            <h4>Better discovery</h4>
            <p>Search by place and browse churches visually on a map instead of relying on a long directory.</p>
          </div>
          <div>
            <h4>Useful profiles</h4>
            <p>Give each church enough practical information to help somebody decide whether it is worth a visit.</p>
          </div>
          <div>
            <h4>Accurate information</h4>
            <p>Allow churches to take ownership of their page and keep important details up to date.</p>
          </div>
          <div>
            <h4>Room to grow</h4>
            <p>Build the core properly first, then add things such as saved churches, events and other useful features.</p>
          </div>
        </div>
      </section>

      <section class="case-study-section">
        <span class="case-study-number">03</span>
        <h3>Still a work in progress</h3>
        <p>ChurchFinder is the earliest-stage project of the three. I am deliberately building it in stages because the usefulness of the site will depend on good data and a simple experience, rather than adding features for the sake of it.</p>
      </section>

      <div class="case-study-visit">
        <a class="btn primary-btn" href="https://ChurchFinder.uk" target="_blank" rel="noopener noreferrer">Visit ChurchFinder.uk</a>
      </div>`
  }
};

function openProjectCaseStudy(projectId){
  const project=projectCaseStudies[projectId];
  if(!project)return;
  openModal(()=>`
    <div class="overlay-header project-case-study-header">
      <span class="case-study-eyebrow">Project case study</span>
      <h2 id="modal-title">${project.title}</h2>
      <p>${project.summary}</p>
    </div>
    <div class="overlay-body project-case-study-body">
      ${project.body}
    </div>
  `);
}

function initProjectCaseStudies(){
  document.querySelectorAll("[data-project-case-study]").forEach(card=>{
    const open=()=>openProjectCaseStudy(card.dataset.projectCaseStudy);
    card.addEventListener("click",event=>{
      if(event.target.closest("a,button"))return;
      open();
    });
    card.addEventListener("keydown",event=>{
      if(event.target.closest("a,button"))return;
      if(event.key==="Enter"||event.key===" "){
        event.preventDefault();
        open();
      }
    });
  });
}

function openProjectCaseStudyFromUrl(){
  const params=new URLSearchParams(window.location.search);
  const projectId=params.get("project");
  if(projectId&&projectCaseStudies[projectId])openProjectCaseStudy(projectId);
}

document.addEventListener("DOMContentLoaded",()=>{
  initProjectCaseStudies();
  openProjectCaseStudyFromUrl();
});


/* === Site-wide search === */
const siteSearchCertifications = [{"title": "Business Administrator Diploma", "category": "Diplomas"}, {"title": "Leadership and Followership", "category": "Business"}, {"title": "Effective Communication in the Workplace", "category": "Business"}, {"title": "Working in Teams", "category": "Business"}, {"title": "Developing Career Resilience", "category": "Business"}, {"title": "Diversity and Inclusion in the Workplace", "category": "Business"}, {"title": "Succeed in the Workplace", "category": "Education & Development"}, {"title": "Becoming an Ethical Researcher", "category": "Education & Development"}, {"title": "Cyber Fundamentals", "category": "IT Career Paths"}, {"title": "Technical Fundamentals", "category": "IT Career Paths"}, {"title": "Security Hygiene", "category": "IT Career Paths"}, {"title": "Management, Risk, and Compliance", "category": "IT Career Paths"}, {"title": "Windows Concepts", "category": "IT Fundamentals"}, {"title": "Windows Basics", "category": "IT Fundamentals"}, {"title": "Networking", "category": "IT Fundamentals"}, {"title": "Introduction to Networking", "category": "IT Fundamentals"}, {"title": "Linux Command Line", "category": "IT Fundamentals"}, {"title": "Introduction to Cryptography", "category": "IT Fundamentals"}, {"title": "Modern Encryption", "category": "IT Fundamentals"}, {"title": "Historic Encryption", "category": "IT Fundamentals"}, {"title": "Encoding", "category": "IT Fundamentals"}, {"title": "Ethics & Laws", "category": "IT Fundamentals"}, {"title": "Cyber 101", "category": "IT Fundamentals"}, {"title": "Social Engineering", "category": "IT Fundamentals"}, {"title": "Data Handling", "category": "IT Fundamentals"}, {"title": "Browsing Securely", "category": "IT Fundamentals"}, {"title": "Cyber Safety", "category": "IT Fundamentals"}, {"title": "Physical Security", "category": "IT Fundamentals"}, {"title": "Digital Footprint", "category": "IT Fundamentals"}, {"title": "Staying Safe Online", "category": "IT Fundamentals"}, {"title": "Introduction to Penetration Testing", "category": "Offensive Cyber"}, {"title": "Introduction to Penetration Test Programs", "category": "Offensive Cyber"}, {"title": "Introducing the Cyber Kill Chain", "category": "Offensive Cyber"}, {"title": "Active Directory Basics", "category": "Offensive Cyber"}, {"title": "Vulnerability Management", "category": "Defensive Cyber"}, {"title": "Threat Hunting - Theory", "category": "Defensive Cyber"}, {"title": "Introduction to Digital Forensics", "category": "Defensive Cyber"}, {"title": "Security Reporting and Responsiveness", "category": "Defensive Cyber"}, {"title": "Device Security", "category": "Defensive Cyber"}, {"title": "Range Exercise Prep: Artica Defensive – Investigation Fundamentals", "category": "Defensive Cyber"}, {"title": "Security Headers", "category": "Application Security"}, {"title": "Git Security", "category": "Application Security"}, {"title": "Authentication", "category": "Application Security"}, {"title": "Secure Fundamentals", "category": "Application Security"}, {"title": "CISA and NSA Kubernetes Hardening Guidance", "category": "Cloud Security"}, {"title": "Zero Trust in the Cloud", "category": "Cloud Security"}, {"title": "AI Fundamentals", "category": "Artificial Intelligence"}, {"title": "AI Foundations", "category": "Artificial Intelligence"}, {"title": "AI for Business", "category": "Artificial Intelligence"}, {"title": "Business Impact Analysis", "category": "Crisis Management"}, {"title": "Business Continuity 101", "category": "Crisis Management"}, {"title": "Crisis Management 101", "category": "Crisis Management"}, {"title": "NIST – Security and Privacy Controls for Information Systems and Organizations (800-53)", "category": "Management, Risk & Compliance"}, {"title": "NCSC - Cloud Security Guidance", "category": "Management, Risk & Compliance"}, {"title": "MITRE ATT&CK", "category": "Management, Risk & Compliance"}, {"title": "Cyber for Board Members", "category": "Management, Risk & Compliance"}, {"title": "Cyber for Executives", "category": "Management, Risk & Compliance"}, {"title": "Risk", "category": "Management, Risk & Compliance"}, {"title": "Compliance", "category": "Management, Risk & Compliance"}, {"title": "Data Privacy", "category": "Management, Risk & Compliance"}, {"title": "NIST – Guidelines on Security and Privacy in Public Cloud Computing (800-144)", "category": "Management, Risk & Compliance"}, {"title": "Human Factors in Cybersecurity", "category": "Management, Risk & Compliance"}, {"title": "OWASP Top 10", "category": "Management, Risk & Compliance"}, {"title": "ISO 22381 - Security and Resilience for Identification Systems", "category": "Management, Risk & Compliance"}, {"title": "ISO 27001 - Information Security Management Systems", "category": "Management, Risk & Compliance"}, {"title": "ISO 27014 - Governance of Information Security", "category": "Management, Risk & Compliance"}, {"title": "ISO 27018 - Protecting Private Data in Public Clouds", "category": "Management, Risk & Compliance"}, {"title": "ISO 28000 - Security Management Systems for Supply Chains", "category": "Management, Risk & Compliance"}, {"title": "ISO 31000 - Risk Management", "category": "Management, Risk & Compliance"}, {"title": "Range Exercise Prep: Op. Palisade – Investigation Fundamentals", "category": "Challenges & Scenarios"}];

const siteSearchBaseIndex = [
  {title:"Home",type:"Page",description:"Homepage, featured projects and latest article.",path:"index.html",keywords:"welcome portfolio Adrian Headley"},
  {title:"Career",type:"Page",description:"Professional roles, experience, qualifications and career development.",path:"Pages/professional.html",keywords:"professional career CV employment NHS IT recruitment law"},
  {title:"Business",type:"Page",description:"AH Consultancy and my business work.",path:"Pages/business.html",keywords:"consultancy operations technology workflows business"},
  {title:"Projects",type:"Page",description:"Projects I am building and developing.",path:"Pages/projects.html",keywords:"code software websites tools churchfinder orthodox calendar"},
  {title:"Articles",type:"Page",description:"My articles and longer-form writing.",path:"Pages/articles.html",keywords:"writing books reading articles"},
  {title:"Contact",type:"Page",description:"Get in touch with me.",path:"Pages/contact.html",keywords:"email message contact enquiry"},
  {title:"Adrian Headley Digital Business Card",type:"Contact",description:"Interactive personal business card with contact details, email and website links.",path:"Pages/card-personal.html",keywords:"digital business card Adrian Headley contact QR email website"},
  {title:"AH Consultancy Digital Business Card",type:"Business",description:"Interactive AH Consultancy business card with contact details, email and website links.",path:"Pages/card-consultancy.html",keywords:"digital business card consultancy contact QR email website"},
  {title:"My CV",type:"Career",description:"View my full CV.",path:"Pages/professional.html?focus=full%20CV",keywords:"curriculum vitae resume experience employment qualifications"},

  {title:"Tools",type:"Project",description:"Privacy-focused browser tools for useful everyday tasks.",path:"Pages/projects.html?project=tools",keywords:"HTML CSS JavaScript privacy PDF image QR encryption hashing utilities"},
  {title:"Orthodox Calendar and Study Bible",type:"Project",description:"Greek and Russian Orthodox calendars with scripture and a Study Bible reader.",path:"Pages/projects.html?project=orthodox-calendar",keywords:"orthodox Greek Russian calendar bible scripture liturgy prayers study"},
  {title:"ChurchFinder",type:"Project",description:"A UK church discovery project built around maps, search and useful information.",path:"Pages/projects.html?project=churchfinder",keywords:"church finder map denomination services accessibility UK"},

  {title:"Time Is Money",type:"Article",description:"Every Second Your Site Wastes Costs You Sales. Research on website speed, conversions and customer abandonment.",path:"Pages/articles.html?book=time-is-money&page=cover",keywords:"business article ecommerce e-commerce website speed performance Core Web Vitals conversion sales bounce mobile Deloitte Google Akamai"},
  {title:"What is this website?",type:"Article",description:"A short introduction to this website and what you can find here.",path:"Pages/articles.html?book=what-is-this-website&page=cover",keywords:"article introduction website portfolio purpose"},

  {title:"Medical Staffing & Recruitment Officer",type:"Career",description:"Current work coordinating recruitment, onboarding and workforce processes.",path:"Pages/professional.html?focus=Medical%20Staffing%20%26%20Recruitment%20Officer",keywords:"NHS recruitment onboarding payroll rota employment law immigration medical staffing"},
  {title:"IT Lead",type:"Career",description:"Current responsibility for digital operations, system changes, data services and compliance.",path:"Pages/professional.html?focus=IT%20Lead",keywords:"digital operations change management security compliance data services IT"},
  {title:"IT Officer",type:"Career",description:"IT infrastructure, systems, security and operational support.",path:"Pages/professional.html?focus=IT%20Officer",keywords:"IT infrastructure networking cybersecurity systems support"},
  {title:"IT and Network Support",type:"Career",description:"Second-line support, networking and systems administration.",path:"Pages/professional.html?focus=IT%20and%20Network%20Support",keywords:"network support systems administration second line IT"},
  {title:"IT and Communications Support",type:"Career",description:"IT support, communications and change coordination.",path:"Pages/professional.html?focus=IT%20and%20Communications%20Support",keywords:"communications IT support infrastructure staff change"},
  {title:"Bachelor of Laws (LLB)",type:"Education",description:"Ongoing law degree alongside professional work.",path:"Pages/professional.html?focus=Bachelor%20of%20Laws%20(LLB)",keywords:"law degree LLB legal research governance regulation university study"},

  {title:"AH Consultancy",type:"Business",description:"My consultancy focused on technology, workflows and operations.",path:"Pages/business.html",keywords:"consulting consultancy IT systems processes operations workflows"}
];

const siteSearchIndex = siteSearchBaseIndex.concat(
  siteSearchCertifications.map(item => ({
    title:item.title,
    type:"Certification",
    description:item.category + " qualification or learning badge.",
    path:"Pages/professional.html?focus=" + encodeURIComponent(item.title),
    keywords:item.category + " badge certificate certification training learning"
  }))
);

function siteSearchNormalise(value){
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g,"")
    .replace(/&/g," and ")
    .replace(/[^a-z0-9]+/g," ")
    .trim();
}

function siteSearchRootUrl(){
  const inPages = /\/Pages\//i.test(window.location.pathname);
  return new URL(inPages ? "../" : "./", window.location.href);
}

function siteSearchResolve(path){
  return new URL(path,siteSearchRootUrl()).toString();
}

function siteSearchScore(item,query){
  const q=siteSearchNormalise(query);
  if(!q)return 0;
  const title=siteSearchNormalise(item.title);
  const description=siteSearchNormalise(item.description);
  const type=siteSearchNormalise(item.type);
  const keywords=siteSearchNormalise(item.keywords);
  const haystack=`${title} ${description} ${type} ${keywords}`;
  const words=q.split(/\s+/).filter(Boolean);
  if(!words.every(word=>haystack.includes(word)))return 0;

  let score=words.length*8;
  if(title===q)score+=120;
  else if(title.startsWith(q))score+=85;
  else if(title.includes(q))score+=60;
  if(haystack.includes(q))score+=25;
  words.forEach(word=>{
    if(title.split(" ").some(part=>part.startsWith(word)))score+=8;
    if(type.includes(word))score+=3;
  });
  return score;
}

function siteSearchResults(query){
  return siteSearchIndex
    .map((item,index)=>({item,index,score:siteSearchScore(item,query)}))
    .filter(result=>result.score>0)
    .sort((a,b)=>b.score-a.score || a.index-b.index)
    .slice(0,10)
    .map(result=>result.item);
}

function createSiteSearch(){
  if(document.querySelector(".site-search-trigger"))return;

  const trigger=document.createElement("button");
  trigger.type="button";
  trigger.className="site-search-trigger";
  trigger.setAttribute("aria-label","Search this website");
  trigger.setAttribute("title","Search (Ctrl + K)");
  trigger.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="M16 16l4.2 4.2"></path></svg>`;

  const headerActions=document.querySelector(".header-actions");
  if(!headerActions)return;
  headerActions.insertBefore(trigger,headerActions.firstChild);

  const backdrop=document.createElement("div");
  backdrop.className="site-search-backdrop";
  backdrop.hidden=true;
  backdrop.innerHTML=`
    <section class="site-search-panel" role="dialog" aria-modal="true" aria-labelledby="site-search-title">
      <h2 id="site-search-title" class="sr-only">Search this website</h2>
      <div class="site-search-input-row">
        <svg class="site-search-input-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="M16 16l4.2 4.2"></path></svg>
        <input class="site-search-input" type="search" autocomplete="off" spellcheck="false" placeholder="Search articles, projects, career..." aria-label="Search this website">
        <span class="site-search-shortcut" aria-hidden="true">Ctrl K</span>
        <button type="button" class="site-search-close" aria-label="Close search">×</button>
      </div>
      <div class="site-search-results" role="listbox" aria-label="Search results"></div>
      <div class="site-search-footer"><span>↑ ↓ to move</span><span>Enter to open</span><span>Esc to close</span></div>
    </section>`;
  document.body.appendChild(backdrop);

  const input=backdrop.querySelector(".site-search-input");
  const resultsHost=backdrop.querySelector(".site-search-results");
  const closeButton=backdrop.querySelector(".site-search-close");
  let activeIndex=0;
  let resultLinks=[];
  let lastFocused=null;

  function quickLinks(){
    return siteSearchBaseIndex.filter(item=>item.type==="Page").slice(0,6);
  }

  function render(query){
    const clean=query.trim();
    const results=clean ? siteSearchResults(clean) : quickLinks();
    activeIndex=0;

    if(!results.length){
      resultsHost.innerHTML=`<div class="site-search-empty"><strong>No results found</strong><span>Try a different word or shorter phrase.</span></div>`;
      resultLinks=[];
      return;
    }

    const heading=clean ? `${results.length} result${results.length===1?"":"s"}` : "Quick links";
    resultsHost.innerHTML=`<p class="site-search-results-label">${heading}</p>` + results.map((item,index)=>`
      <a class="site-search-result${index===0?" is-active":""}" role="option" aria-selected="${index===0?"true":"false"}" data-search-result href="${siteSearchResolve(item.path)}">
        <span class="site-search-result-main">
          <strong>${item.title}</strong>
          <span>${item.description}</span>
        </span>
        <span class="site-search-result-type">${item.type}</span>
      </a>`).join("");
    resultLinks=Array.from(resultsHost.querySelectorAll("[data-search-result]"));
  }

  function setActive(index){
    if(!resultLinks.length)return;
    activeIndex=(index+resultLinks.length)%resultLinks.length;
    resultLinks.forEach((link,i)=>{
      const active=i===activeIndex;
      link.classList.toggle("is-active",active);
      link.setAttribute("aria-selected",active?"true":"false");
    });
    resultLinks[activeIndex].scrollIntoView({block:"nearest"});
  }

  function openSearch(){
    lastFocused=document.activeElement;
    backdrop.hidden=false;
    document.body.classList.add("site-search-open");
    input.value="";
    render("");
    window.setTimeout(()=>input.focus(),20);
  }

  function closeSearch(){
    if(backdrop.hidden)return;
    backdrop.hidden=true;
    document.body.classList.remove("site-search-open");
    if(lastFocused&&typeof lastFocused.focus==="function")lastFocused.focus();
  }

  trigger.addEventListener("click",openSearch);
  closeButton.addEventListener("click",closeSearch);
  backdrop.addEventListener("mousedown",event=>{
    if(event.target===backdrop)closeSearch();
  });
  input.addEventListener("input",()=>render(input.value));
  resultsHost.addEventListener("mousemove",event=>{
    const link=event.target.closest("[data-search-result]");
    if(!link)return;
    const index=resultLinks.indexOf(link);
    if(index>=0)setActive(index);
  });

  document.addEventListener("keydown",event=>{
    if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==="k"){
      event.preventDefault();
      backdrop.hidden ? openSearch() : input.focus();
      return;
    }
    if(backdrop.hidden)return;
    if(event.key==="Escape"){event.preventDefault();closeSearch();return;}
    if(event.key==="ArrowDown"){event.preventDefault();setActive(activeIndex+1);return;}
    if(event.key==="ArrowUp"){event.preventDefault();setActive(activeIndex-1);return;}
    if(event.key==="Enter"&&document.activeElement===input&&resultLinks.length){
      event.preventDefault();
      resultLinks[activeIndex].click();
    }
  });
}

function initSearchFocus(){
  const params=new URLSearchParams(window.location.search);
  const focus=params.get("focus");
  if(!focus)return;
  const wanted=siteSearchNormalise(focus);
  window.setTimeout(()=>{
    const candidates=Array.from(document.querySelectorAll(".timeline-item, .badge-link[title], [data-title], .cv-modal-trigger"));
    const target=candidates.find(el=>{
      const text=el.getAttribute("title")||el.getAttribute("data-title")||el.textContent||"";
      return siteSearchNormalise(text).includes(wanted);
    });
    if(!target)return;
    target.scrollIntoView({behavior:"smooth",block:"center",inline:"center"});
    target.classList.add("site-search-focus-highlight");
    if(typeof target.focus==="function"){
      if(!target.hasAttribute("tabindex")&&target.tagName!=="A"&&target.tagName!=="BUTTON")target.setAttribute("tabindex","-1");
      target.focus({preventScroll:true});
    }
    window.setTimeout(()=>target.classList.remove("site-search-focus-highlight"),2200);
  },120);
}

document.addEventListener("DOMContentLoaded",()=>{
  createSiteSearch();
  initSearchFocus();
});
