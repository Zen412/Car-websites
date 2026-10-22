/* ==========================================================
   VELOCITY — main interactions & content renderers
   ========================================================== */

(function(){
  const c = window.SITE_CONTENT;
  if(!c) return;

  // --- Year in footer ---
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // --- Mobile burger ---
  const burger = document.getElementById('burger');
  const nav = document.querySelector('.main-nav');
  if(burger && nav){
    burger.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=>nav.classList.remove('open')));
  }

  // --- Counter animations ---
  function animateCounter(el, target, duration=1800){
    if(!el) return;
    let start = null;
    const step = (ts) => {
      if(!start) start = ts;
      const p = Math.min((ts-start)/duration, 1);
      const eased = 1 - Math.pow(1-p, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if(p<1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString() + '+';
    };
    requestAnimationFrame(step);
  }
  const statsObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        animateCounter(document.getElementById('stat-1'), c.stats.events);
        animateCounter(document.getElementById('stat-2'), c.stats.photos);
        animateCounter(document.getElementById('stat-3'), c.stats.dragRuns);
        statsObs.disconnect();
      }
    });
  },{threshold:.4});
  if(document.getElementById('stat-1')) statsObs.observe(document.getElementById('stat-1'));

  // --- Home gallery ---
  const hg = document.getElementById('home-gallery');
  if(hg){
    c.homeGallery.slice(0,6).forEach((item,i)=>{
      const d = document.createElement('div');
      d.className = 'g-item';
      d.innerHTML = `<img src="${item.src}" alt="${item.caption}" loading="lazy"/><span class="g-caption">${item.caption}</span>`;
      d.addEventListener('click', ()=> openLightbox(item.src));
      hg.appendChild(d);
    });
  }

  // --- Home events preview (3 upcoming) ---
  const he = document.getElementById('home-events');
  if(he){
    c.events.filter(e=>e.status==='upcoming').slice(0,3).forEach(ev=>{
      const card = document.createElement('div');
      card.className = 'event-card upcoming';
      card.innerHTML = `
        <p class="event-date">${ev.date}</p>
        <h3>${ev.title}</h3>
        <p class="event-loc">📍 ${ev.location}</p>
        <span class="event-status">UPCOMING</span>
      `;
      he.appendChild(card);
    });
  }

  // --- GALLERY PAGE ---
  const gg = document.getElementById('gallery-page-grid');
  const gFilter = document.getElementById('gallery-filter');
  if(gg){
    // render filters
    if(gFilter){
      c.galleryCategories.forEach((cat,i)=>{
        const b = document.createElement('button');
        b.className = 'filter-btn' + (i===0?' active':'');
        b.textContent = cat;
        b.dataset.filter = cat;
        b.addEventListener('click', ()=>{
          gFilter.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));
          b.classList.add('active');
          renderGallery(cat);
        });
        gFilter.appendChild(b);
      });
    }
    function renderGallery(cat){
      gg.innerHTML = '';
      const items = cat === 'All' ? c.gallery : c.gallery.filter(g => g.category === cat);
      items.forEach(item => {
        const d = document.createElement('div');
        d.className = 'g-item';
        d.innerHTML = `<img src="${item.src}" alt="${item.caption}" loading="lazy"/><span class="g-caption">${item.caption}</span>`;
        d.addEventListener('click', ()=> openLightbox(item.src));
        gg.appendChild(d);
      });
    }
    renderGallery('All');
  }

  // --- VIDEOS PAGE ---
  const vg = document.getElementById('video-grid');
  if(vg){
    c.videos.forEach(v=>{
      const d = document.createElement('div');
      d.className = 'v-card';
      d.innerHTML = `
        <div class="v-thumb"><img src="${v.thumb}" alt="${v.title}" loading="lazy"/></div>
        <div class="v-body">
          <h3>${v.title}</h3>
          <p>${v.description}</p>
          <div class="v-meta"><span>${v.duration}</span><span>${v.date}</span><span>${v.views} views</span></div>
        </div>`;
      d.addEventListener('click', ()=>{
        if(v.url && v.url.startsWith('http')) window.open(v.url, '_blank');
        else alert('Link this video in js/content.js → videos[]');
      });
      vg.appendChild(d);
    });
  }

  // --- EVENTS PAGE ---
  const upcomingEl = document.getElementById('cal-upcoming');
  const pastEl = document.getElementById('cal-past');
  if(upcomingEl || pastEl){
    c.events.filter(e=>e.status==='upcoming').forEach(ev=>{
      upcomingEl.appendChild(eventCard(ev));
    });
    c.events.filter(e=>e.status==='past').forEach(ev=>{
      pastEl.appendChild(eventCard(ev));
    });
  }
  function eventCard(ev){
    const d = document.createElement('div');
    d.className = 'event-card ' + ev.status;
    d.innerHTML = `
      <p class="event-date">${ev.date}</p>
      <h3>${ev.title}</h3>
      <p class="event-loc">📍 ${ev.location}</p>
      <span class="event-status ${ev.status}">${ev.status.toUpperCase()}</span>`;
    return d;
  }

  // --- ABOUT PAGE ---
  const aboutPhoto = document.getElementById('about-photo');
  const aboutName = document.getElementById('about-name');
  const aboutTag = document.getElementById('about-tag');
  const aboutBody = document.getElementById('about-body');
  const favList = document.getElementById('fav-list');
  if(aboutPhoto && c.about){
    aboutPhoto.src = c.about.photo;
    aboutPhoto.alt = c.creatorName;
    aboutName.textContent = c.about.intro;
    aboutTag.textContent = c.brand.location + " // CAR CREATOR";
    aboutBody.innerHTML = c.about.paragraphs.map(p=>`<p>${p}</p>`).join('');
    favList.innerHTML = c.about.favorites.map(f => `<li><strong>${f.car}</strong>${f.note}</li>`).join('');
  }

  // --- CONTACT PAGE ---
  const contactIntro = document.getElementById('contact-intro');
  const contactList = document.getElementById('contact-list');
  if(contactIntro && c.contact){
    contactIntro.textContent = c.contact.intro;
    contactList.innerHTML = `
      <li><div class="c-ic">@</div><div class="c-txt"><strong>Email</strong><span>${c.contact.email}</span></div></li>
      <li><div class="c-ic">☎</div><div class="c-txt"><strong>Phone</strong><span>${c.contact.phone}</span></div></li>
      <li><div class="c-ic">⚑</div><div class="c-txt"><strong>Location</strong><span>${c.contact.location}</span></div></li>
      ${c.contact.socials.map(s=>`<li><div class="c-ic">${s.name[0]}</div><div class="c-txt"><strong>${s.name}</strong><span><a href="${s.url}" target="_blank">${s.handle}</a></span></div></li>`).join('')}
    `;
    const form = document.getElementById('contact-form');
    if(form){
      form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const btn = form.querySelector('button[type=submit]');
        const old = btn.textContent;
        btn.textContent = 'SENDING...';
        btn.disabled = true;
        // In a real deployment, wire this to Formspree, Netlify Forms,
        // or your future backend API:
        setTimeout(()=>{
          btn.textContent = 'SENT ✓';
          btn.style.background = 'var(--neon-yel)';
          form.reset();
          setTimeout(()=>{ btn.textContent = old; btn.disabled=false; btn.style.background=''; }, 2500);
        }, 1200);
      });
    }
  }

  // --- LIGHTBOX ---
  let lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = `<span class="lightbox-close">✕</span><img src="" alt=""/>`;
  document.body.appendChild(lb);
  const lbImg = lb.querySelector('img');
  function openLightbox(src){
    lbImg.src = src;
    lb.classList.add('open');
  }
  lb.addEventListener('click', (e)=>{
    if(e.target===lb || e.target.classList.contains('lightbox-close')) lb.classList.remove('open');
  });
  document.addEventListener('keydown', (e)=>{
    if(e.key==='Escape') lb.classList.remove('open');
  });

})();
