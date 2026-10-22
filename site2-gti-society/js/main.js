/* =========================================================
   GTI Society — main interactions & content renderers
   ========================================================= */

(function(){
  const c = window.SITE_CONTENT;
  if(!c) return;

  // Year
  const yr = document.getElementById('yr');
  if(yr) yr.textContent = new Date().getFullYear();

  // Mobile menu
  const mt = document.getElementById('menuToggle');
  const nav = document.querySelector('.main-nav');
  if(mt && nav){
    mt.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  /* ---------------- HOME PAGE ---------------- */

  // Features
  const hf = document.getElementById('home-features');
  if(hf){
    c.features.forEach(f => {
      const el = document.createElement('article');
      el.className = 'feature-card';
      el.innerHTML = `
        <div class="feature-img"><img src="${f.image}" alt="${f.title}" loading="lazy"/></div>
        <span class="feature-cat">${f.category}</span>
        <h3>${f.title}</h3>
        <p>${f.excerpt}</p>
        <div class="feature-meta">${f.meta}</div>`;
      el.addEventListener('click', ()=> location.href = 'videos.html');
      hf.appendChild(el);
    });
  }

  // Home photo preview
  const hp = document.getElementById('home-photos');
  if(hp){
    c.homePhotos.forEach(p => {
      const d = document.createElement('div');
      d.className = 'p-item';
      d.innerHTML = `<img src="${p.src}" alt="${p.caption}" loading="lazy"/><span class="p-cap">${p.caption}</span>`;
      d.addEventListener('click', () => openLightbox(p.src));
      hp.appendChild(d);
    });
  }

  // Home events (4 upcoming)
  const he = document.getElementById('home-events');
  if(he){
    c.events.filter(e => e.status === 'upcoming').slice(0,4).forEach(ev => {
      const d = document.createElement('div');
      d.className = 'event-sm';
      d.innerHTML = `
        <span class="ev-date">${ev.month} ${ev.day}, 2026/27</span>
        <h4 class="ev-title">${ev.title}</h4>
        <p class="ev-loc">${ev.location}</p>
        <span class="ev-tag">Upcoming</span>`;
      d.addEventListener('click', ()=> location.href = 'events.html');
      he.appendChild(d);
    });
  }

  // Car profile specs
  const sg = document.querySelector('.specs-grid');
  if(sg && c.carProfile){
    sg.innerHTML = c.carProfile.specs.map(s => `<div><span>${s.label}</span><strong>${s.value}</strong></div>`).join('');
  }

  /* ---------------- GALLERY PAGE ---------------- */
  const gGrid = document.getElementById('gal-wrap');
  const gFilter = document.getElementById('filters');
  if(gGrid){
    c.galleryCategories.forEach((cat,i) => {
      const b = document.createElement('button');
      b.className = 'filt-btn' + (i===0?' active':'');
      b.textContent = cat;
      b.addEventListener('click', () => {
        gFilter.querySelectorAll('.filt-btn').forEach(x=>x.classList.remove('active'));
        b.classList.add('active');
        renderGallery(cat);
      });
      gFilter.appendChild(b);
    });
    function renderGallery(cat){
      gGrid.innerHTML = '';
      const items = cat === 'All' ? c.gallery : c.gallery.filter(g => g.category === cat);
      items.forEach(item => {
        const d = document.createElement('div');
        d.className = 'p-item';
        d.innerHTML = `<img src="${item.src}" alt="${item.caption}" loading="lazy"/><span class="p-cap">${item.caption}</span>`;
        d.addEventListener('click', ()=> openLightbox(item.src));
        gGrid.appendChild(d);
      });
    }
    renderGallery('All');
  }

  /* ---------------- VIDEOS PAGE ---------------- */
  const vGrid = document.getElementById('films-wrap');
  if(vGrid){
    c.videos.forEach(v => {
      const d = document.createElement('article');
      d.className = 'film-card';
      d.innerHTML = `
        <div class="film-thumb">
          <img src="${v.thumb}" alt="${v.title}" loading="lazy"/>
          <span class="play-pulse">▶</span>
          <span class="film-duration">${v.duration}</span>
        </div>
        <div class="film-body">
          <div class="film-cat">${v.category}</div>
          <h3>${v.title}</h3>
          <p>${v.description}</p>
          <div class="film-meta"><span>${v.date}</span><span>${v.views}</span></div>
        </div>`;
      d.addEventListener('click', ()=> {
        if(v.url && v.url.startsWith('http')) window.open(v.url,'_blank');
        else alert('Link this video in js/content.js → videos[]');
      });
      vGrid.appendChild(d);
    });
  }

  /* ---------------- EVENTS PAGE ---------------- */
  const upcomingCal = document.getElementById('cal-upcoming');
  const pastCal = document.getElementById('cal-past');
  if(upcomingCal){
    c.events.filter(e=>e.status==='upcoming').forEach(ev => upcomingCal.appendChild(calCard(ev)));
    c.events.filter(e=>e.status==='past').forEach(ev => pastCal.appendChild(calCard(ev)));
  }
  function calCard(ev){
    const d = document.createElement('div');
    d.className = 'cal-item';
    d.innerHTML = `
      <div class="cal-date"><div class="day">${ev.day}</div><div class="mth">${ev.mth}</div></div>
      <div class="cal-body">
        <h3>${ev.title}</h3>
        <p class="loc">${ev.location}</p>
        <span class="status ${ev.status}">${ev.status === 'upcoming' ? 'Upcoming' : 'Past'}</span>
      </div>`;
    return d;
  }

  /* ---------------- ABOUT PAGE ---------------- */
  const aPhoto = document.getElementById('a-photo');
  if(aPhoto){
    aPhoto.src = c.about.photo;
    aPhoto.alt = c.brand.creatorName;
    document.getElementById('a-name').textContent = c.brand.creatorName;
    document.getElementById('a-role').textContent = c.about.role;
    document.getElementById('a-body').innerHTML = c.about.paragraphs.map(p => `<p>${p}</p>`).join('');
    document.getElementById('a-favs').innerHTML = c.about.favorites
      .map(f => `<li><strong>${f.car}</strong>${f.note}</li>`).join('');
  }

  /* ---------------- CONTACT PAGE ---------------- */
  const ci = document.getElementById('contact-intro');
  if(ci){
    ci.querySelector('p').textContent = c.contact.intro;
    const list = document.getElementById('c-cards');
    list.innerHTML = `
      <div class="cc-card"><div class="cc-ic">@</div><div class="cc-text"><strong>Email</strong><span>${c.contact.email}</span></div></div>
      <div class="cc-card"><div class="cc-ic">☎</div><div class="cc-text"><strong>Phone</strong><span>${c.contact.phone}</span></div></div>
      <div class="cc-card"><div class="cc-ic">⚑</div><div class="cc-text"><strong>Location</strong><span>${c.contact.location}</span></div></div>
      ${c.contact.socials.map(s => `<div class="cc-card"><div class="cc-ic">${s.name[0]}</div><div class="cc-text"><strong>${s.name}</strong><span><a href="${s.url}" target="_blank">${s.handle}</a></span></div></div>`).join('')}
    `;
    const form = document.getElementById('c-form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      const old = btn.textContent;
      btn.textContent = 'SENDING...'; btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Message Sent ✓';
        btn.style.background = 'var(--red)'; btn.style.borderColor='var(--red)';
        form.reset();
        setTimeout(()=>{ btn.textContent=old; btn.disabled=false; btn.style.background=''; btn.style.borderColor=''; },2500);
      }, 1000);
    });
  }

  /* ---------------- LIGHTBOX ---------------- */
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = `<span class="lb-close">✕</span><img src="" alt=""/>`;
  document.body.appendChild(lb);
  const lbImg = lb.querySelector('img');
  function openLightbox(src){ lbImg.src = src; lb.classList.add('open'); }
  lb.addEventListener('click', e => {
    if(e.target === lb || e.target.classList.contains('lb-close')) lb.classList.remove('open');
  });
  document.addEventListener('keydown', e => { if(e.key==='Escape') lb.classList.remove('open'); });

})();
