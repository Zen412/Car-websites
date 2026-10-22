# Car Websites — Koketso

Two standalone, fully-static websites for a car content creator whose favourite car is a **Golf 7 GTI**.

Both sites ship the same content (gallery, videos, events, about, contact) but in two visually distinct styles so you can pick a favourite or A/B test them.

| Site | Folder | Vibe | Quick open |
|------|--------|------|-----------|
| **Velocity** | `site1-velocity/` | Dark / neon / street-racing / edgy | Open `site1-velocity/index.html` |
| **GTI Society** | `site2-gti-society/` | Editorial magazine / premium / classic GTI red | Open `site2-gti-society/index.html` |

> To preview: just double-click any `index.html`, or run `python3 -m http.server 8000` from the repo root and visit `http://localhost:8000/site1-velocity` / `.../site2-gti-society`.

---

## 📁 What's inside

```
Car-websites/
├── site1-velocity/          # Dark neon racing style
│   ├── index.html           # Home
│   ├── gallery.html         # Photo gallery w/ category filter
│   ├── videos.html          # Video grid
│   ├── events.html          # Upcoming + past events calendar
│   ├── about.html           # Creator bio + photo
│   ├── contact.html         # Contact details + form
│   ├── css/style.css
│   ├── js/
│   │   ├── content.js       # 👉 ALL EDITABLE CONTENT LIVES HERE
│   │   └── main.js          # Rendering & interactions
│   └── images/              # Drop your own photos here
│
└── site2-gti-society/       # Premium magazine/editorial style
    ├── index.html
    ├── gallery.html
    ├── videos.html
    ├── events.html
    ├── about.html
    ├── contact.html
    ├── css/style.css
    ├── js/
    │   ├── content.js       # 👉 ALL EDITABLE CONTENT LIVES HERE
    │   └── main.js
    └── images/
```

---

## ✏️ How to change the key content

You do **NOT** need to edit the HTML files. Every piece of user-facing copy, photo link, video, event and contact detail lives in one file per site:

- **Velocity:**    `site1-velocity/js/content.js`
- **GTI Society:** `site2-gti-society/js/content.js`

Open that file in any text editor (VS Code, Notepad++, even Notepad). It's a single JavaScript object called `SITE_CONTENT` with clearly-named sections. Save the file → refresh the browser → done.

### 1. Swap photos / gallery

```js
homeGallery: [
  { src: "https://images.unsplash.com/...", caption: "GTI — Stage 2 glow" },
  ...
],
gallery: [
  { src: "images/my-photo.jpg", category: "GTI", caption: "Local show, Nov 2026" },
  ...
]
```

- **Local photos:** Drop them into the site's `images/` folder and reference them as `images/filename.jpg`.
- **External photos:** Paste any image URL (Unsplash, CDN, your Google Public link, etc.)
- **Categories:** edit the `galleryCategories` array to add / rename filter buttons. Make sure the `category` field on each photo matches one of those strings.

### 2. Add / update videos

```js
videos: [
  {
    title: "New video title",
    description: "...",
    thumb: "images/video-thumb.jpg",
    url: "https://www.youtube.com/embed/VIDEO_ID",   // or YouTube watch URL
    duration: "08:42",
    date: "Nov 02, 2026",
    views: "3.2K views"
  },
  ...
]
```

> **Tip:** To embed YouTube, use `https://www.youtube.com/embed/VIDEO_ID` (replace `VIDEO_ID` with the 11-char ID from the video URL). Currently the card opens links in a new tab — you can wire it up to a modal in `main.js` later.

### 3. Update events (calendar)

```js
events: [
  { date: "Nov 14, 2026", title: "Tarmac Sessions Vol.5",
    location: "Midvaal Raceway, Gauteng", status: "upcoming" },
  { day:"18", month:"OCT", title: "...", location: "...", status: "past" },
  ...
]
```
- Mark as `"upcoming"` or `"past"` — the UI sorts them automatically.
- For **Velocity**, use the `date` field (free-text). For **GTI Society**, use `day` / `month` (numerical day, uppercase 3-letter month). The formats differ because each design treats the date visually in a different way.

### 4. About page (including your photo)

```js
about: {
  photo: "images/koketso.jpg",   // 👈 Replace with your own portrait path
  intro: "Hey, I'm Koketso.",
  paragraphs: [
    "First paragraph of your bio...",
    "Second paragraph..."
  ],
  favorites: [
    { car: "Golf 7 GTI (Stage 2)", note: "The daily, the weapon, the reason." },
    ...
  ]
}
```

Drop your profile picture into `images/` (e.g. `images/koketso.jpg`) and update the `photo` path.

### 5. Contact details & socials

```js
contact: {
  email: "hello@example.com",
  phone: "+27 (0) 82 123 4567",
  location: "Johannesburg, Gauteng, South Africa",
  socials: [
    { name: "Instagram", handle: "@yourhandle", url: "https://instagram.com/..." },
    ...
  ]
}
```

The contact form currently shows a "sent" confirmation **only on the front-end**. To make it actually deliver mail, wire the submit handler in `js/main.js` (search for `contact-form` / `c-form`) to one of:
- [Formspree](https://formspree.io) — easiest, just set the form `action`
- [Netlify Forms](https://docs.netlify.com/forms/setup/) — automatic if hosted on Netlify
- Your own backend endpoint (see companion app notes below)

### 6. Hero text, stats, featured video, car specs

All in the same `content.js` object:
- `brand` — site name, creator name, tagline
- `stats` — the animated counters on the Velocity hero (events, photos, drag runs)
- `featuredVideo` / `coverStory` — the big hero video/post
- `carProfile` / Spotlight specs for the Mk7 GTI section

---

## 🚀 Deploying

Both sites are plain HTML/CSS/JS — no build step, no server required.
- **GitHub Pages:** push the repo, enable Pages on the branch, set `/` as root. Each site is available at `yourdomain.com/site1-velocity/` and `/site2-gti-society/`.
- **Netlify / Vercel:** drag-and-drop either site folder, or connect the repo and set the publish directory to the folder you want.
- **Own hosting:** upload either folder via FTP as-is.

To serve both from a domain root (one at `mydomain.co.za` and the other kept for preview), just copy the contents of your preferred site folder into the public web root.

---

## 📱 Roadmap: future companion app / CMS

The content is architected to make a future management layer easy. All content lives in plain JavaScript data objects (`js/content.js`) with predictable shapes. That means a companion app or CMS can be added later **without redesigning the sites**.

### Recommended stack for the companion app

| Piece | Recommendation | Why |
|-------|---------------|-----|
| Mobile app | **Flutter** or **React Native** | Single codebase for iOS + Android, offline-friendly |
| Backend / CMS API | **Supabase** (Postgres + Auth + Storage) or **Strapi** / **Directus** (headless CMS) | Free tier is generous, instant dashboard, image hosting built in |
| Auth | Supabase Auth or **Firebase Auth** | Email + Google + phone OTP for you (and any contributors) |
| Image/Video hosting | **Cloudinary** or Supabase Storage | Auto-resizing, CDN, on-the-fly optimisation |
| Video hosting | **YouTube** (free, built-in discovery) or **Mux** (more control) | Embed via iframe/player |
| Frontend admin | Simple React/Vue SPA, or even the **Strapi/Direc­tus admin panel** | You already get a dashboard with Strapi/Directus for free |

### How the sites will talk to the CMS

Replace the static `SITE_CONTENT` object in each site with a small `fetch()` call at the top of `main.js`:

```js
let SITE_CONTENT = {};
fetch("https://your-cms.example.com/api/content?site=velocity")
  .then(r => r.json())
  .then(data => { SITE_CONTENT = data; initSite(); });
```

Wrap all the current rendering logic in a function called `initSite()` and call it once data loads — that's the entire refactor. Because the current renderers already read from `window.SITE_CONTENT`, no other code needs to change.

### Suggested CMS data model

```
posts (videos / features)
  - id, title, description, thumb_url, video_url, duration, date, views, category_id, slug

gallery_items
  - id, image_url, caption, category_id, featured (bool), sort_order

categories
  - id, name (e.g. GTI, Drag, Shows, Details)

events
  - id, title, location, date (timestamp), status (upcoming|past), cover_url

creator (single)
  - name, bio, portrait_url, location, tagline

contact (single)
  - email, phone, location, socials (jsonb)

car_profile (single)
  - specs (jsonb), description
```

### App features worth building first

1. **Login + protect routes** — only you (and any trusted contributors) can edit.
2. **Upload photos** from your phone directly to a gallery bucket (with auto-thumbnail).
3. **Event check-in** — tap to mark an event as "attended" and bulk-upload photos taken that day.
4. **Video link paste** — paste a YouTube URL and auto-fill title, thumb, duration via YouTube's oEmbed API.
5. **Push publish** — "sync to website" button that invalidates the cached JSON and re-deploys (Supabase webhook → Netlify build hook works great).
6. **Analytics** — top videos, top photos, event attendance, all in one dashboard.

### Migration path (zero downtime)

1. Keep `content.js` as the source of truth today.
2. When the CMS is ready, export the existing `SITE_CONTENT` JSON once and seed the DB from it (5-minute job).
3. Switch the fetch URL from local to the API.
4. Leave a fallback: if the API fails for any reason, load a bundled `content.json` snapshot — the site never breaks.

---

## 🛠 Tech used

- Pure **HTML5** / **CSS3** / **vanilla JavaScript** — no framework, no build step.
- Google Fonts (Bebas Neue / Orbitron / Rajdhani for Velocity; Playfair Display / Inter / DM Serif Display for GTI Society).
- Unsplash placeholder imagery — replace with your own photos before launch.
- SVG inline illustrations (car silhouette, GTI stamp) — crisp at any size.

---

## ✅ Checklist before going live

- [ ] Replace Unsplash URLs with your own photos (or local files in `images/`).
- [ ] Drop a real profile photo into `images/` and update `about.photo` in `content.js`.
- [ ] Update `contact.email`, `contact.phone`, and social URLs/handles.
- [ ] Point video `url` fields to real YouTube embeds.
- [ ] Wire the contact form to a real email endpoint (Formspree / Netlify Forms).
- [ ] Update `brand.location` / `brand.issue` (on GTI Society) to reflect your current issue/month.
- [ ] Pick one site as your primary, or deploy both on subdomains (e.g. `velocity.yourdomain.co.za` and `society.yourdomain.co.za`).
- [ ] Add a favicon (drop `favicon.ico` in each site root).

Enjoy. Burn rubber responsibly. 🏁
