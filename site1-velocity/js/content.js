/* =========================================================
   SITE CONTENT — Edit this file to update text/images/videos.
   Future companion mobile/CMS app will target this structure.
   ========================================================= */

const SITE_CONTENT = {

  // ---- HERO / BRAND -----------------------------------------
  brand: {
    name: "VELOCITY",
    creatorName: "Koketso",
    tagline: "Burn Rubber. Capture the Chaos.",
    bio: "Drag races, show floors, street builds — seen through the lens of a Golf 7 GTI fanatic with a helmet on and a camera rolling.",
    location: "Johannesburg, South Africa"
  },

  // ---- HERO STATS (animated counters) ----------------------
  stats: {
    events: 47,
    photos: 8200,
    dragRuns: 312
  },

  // ---- FEATURED VIDEO --------------------------------------
  featuredVideo: {
    title: "Stage 2 GTI vs The Strip — Tarmac Sessions Vol.4",
    description: "Mid-night runs, boost controllers bleeding, and a white-knuckle rematch against a tuned R that refused to stay quiet. This is why we do it.",
    cover: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1600&q=80",
    // Replace with your YouTube/Vimeo embed URL for the play modal:
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "12:47",
    date: "Oct 18, 2026",
    tag: "DRAG RACE • 4K"
  },

  // ---- HOME PAGE GALLERY PREVIEW (6 items) -----------------
  homeGallery: [
    { src: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80", caption: "GTI — Stage 2 glow" },
    { src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80", caption: "Show floor shine" },
    { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", caption: "Strip lights" },
    { src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80", caption: "Burnout zone" },
    { src: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&q=80", caption: "Night meet" },
    { src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", caption: "Detail shot" }
  ],

  // ---- GALLERY PAGE (full) ---------------------------------
  // Categories are used by the filter buttons. Add as many as needed.
  galleryCategories: ["All", "GTI", "Drag", "Shows", "Details"],
  gallery: [
    { src: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1600&q=80", category: "GTI",     caption: "Stage 2 glow" },
    { src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80", category: "Shows",   caption: "Show floor shine" },
    { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80", category: "Drag",    caption: "Strip lights" },
    { src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80", category: "Drag",    caption: "Burnout zone" },
    { src: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=1200&q=80", category: "Shows",   caption: "Night meet" },
    { src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1600&q=80", category: "Details", caption: "Detail shot" },
    { src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80", category: "GTI",     caption: "Hatch stance" },
    { src: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200&q=80", category: "GTI",     caption: "Red line" },
    { src: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=80", category: "Drag",    caption: "Launch control" },
    { src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=80", category: "Details", caption: "Turbo bay" },
    { src: "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?w=1200&q=80", category: "Shows",   caption: "Cars & Coffee" },
    { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80", category: "GTI",     caption: "Full send" }
  ],

  // ---- VIDEOS ----------------------------------------------
  videos: [
    {
      title: "Stage 2 GTI vs The Strip — Tarmac Sessions Vol.4",
      description: "Mid-night runs, boost controllers bleeding, rematch against a tuned R.",
      thumb: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "12:47",
      date: "Oct 18, 2026",
      views: "24K"
    },
    {
      title: "Slammed Sundays — Cape Town Car Show",
      description: "The cleanest builds in the Cape, one parking lot at a time.",
      thumb: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80",
      url: "#",
      duration: "09:12",
      date: "Oct 03, 2026",
      views: "18K"
    },
    {
      title: "GTI Stage 1 → Stage 2: Is It Worth It?",
      description: "Dyno numbers, track testing, and a very loud before/after.",
      thumb: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80",
      url: "#",
      duration: "15:22",
      date: "Sep 20, 2026",
      views: "33K"
    },
    {
      title: "Night Run — Jozi Streets After Dark",
      description: "Illegal-looking, entirely legal. A night cruise through the city.",
      thumb: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=1200&q=80",
      url: "#",
      duration: "07:48",
      date: "Sep 05, 2026",
      views: "12K"
    },
    {
      title: "Drag Day: GTI vs Type R vs RS3",
      description: "Three hot hatches, one prepped strip, no mercy.",
      thumb: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=80",
      url: "#",
      duration: "11:04",
      date: "Aug 22, 2026",
      views: "41K"
    },
    {
      title: "Wash & Shoot — Keeping The GTI Clean",
      description: "Detailing day, behind the scenes, and a few rolling shots.",
      thumb: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=80",
      url: "#",
      duration: "06:30",
      date: "Aug 10, 2026",
      views: "9.4K"
    }
  ],

  // ---- EVENTS (upcoming + past) ----------------------------
  // status: "upcoming" or "past"
  events: [
    { date: "Nov 14, 2026", title: "Tarmac Sessions Vol.5",  location: "Midvaal Raceway, Gauteng", status: "upcoming" },
    { date: "Dec 05, 2026", title: "Slammed SummerFest",      location: "Grand Parade, Cape Town",  status: "upcoming" },
    { date: "Jan 21, 2027", title: "GP Drag Nationals",       location: "Tarlton International Raceway", status: "upcoming" },
    { date: "Feb 14, 2027", title: "Cars & Coffee Valentine's", location: "Steyn City, JHB",        status: "upcoming" },
    { date: "Oct 18, 2026", title: "Tarmac Sessions Vol.4",  location: "Midvaal Raceway, Gauteng", status: "past" },
    { date: "Sep 24, 2026", title: "Cape Town Car Fest",     location: "Killarney Race Track",     status: "past" },
    { date: "Aug 12, 2026", title: "Jozi Summer Spin",       location: "Nasrec, Johannesburg",     status: "past" },
    { date: "Jul 02, 2026", title: "Winter Warm-Up Drags",   location: "Tarlton International Raceway", status: "past" }
  ],

  // ---- ABOUT -----------------------------------------------
  about: {
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&q=80",
    // Replace the src above with a local image e.g. "images/koketso.jpg" later
    intro: "Hey, I'm Koketso.",
    paragraphs: [
      "I'm a Johannesburg-based car content creator who swapped a 9-to-5 for a camera rig and a passenger seat that's seen one too many energy drinks.",
      "I chase three things: clean light, loud turbos, and that perfect launch. My weapon of choice is a Golf 7 GTI that's currently one intercooler upgrade away from being uninsurable.",
      "This site is the archive. Every drag run, every show floor, every 2AM petrol station pit-stop — it all lives here."
    ],
    favorites: [
      { car: "Golf 7 GTI (Stage 2)",   note: "The daily, the weapon, the reason." },
      { car: "Tarmac Sessions",        note: "Favourite event series — pure drag energy." },
      { car: "Sony A7IV + 24-70mm",    note: "The trusty lens that gets the shot." }
    ]
  },

  // ---- CONTACT ---------------------------------------------
  contact: {
    intro: "Shows to film, builds to feature, brands to collab? Slide into the inbox — the inbox doesn't miss shifts.",
    email: "hello@velocity-cars.co.za",
    phone: "+27 (0) 82 123 4567",
    location: "Johannesburg, Gauteng, South Africa",
    socials: [
      { name: "Instagram", handle: "@koketso.velocity", url: "#" },
      { name: "YouTube",   handle: "@VelocityCarsZA",   url: "#" },
      { name: "TikTok",    handle: "@velocity.k",       url: "#" }
    ]
  }
};

// Expose to other scripts
window.SITE_CONTENT = SITE_CONTENT;
