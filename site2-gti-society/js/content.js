/* =========================================================
   GTI SOCIETY — Content File
   Edit this file to swap text, photos, videos & events.
   A future companion app/CMS will target this same structure.
   ========================================================= */

const SITE_CONTENT = {

  // ---- Brand -------------------------------------------------
  brand: {
    name: "GTI Society",
    issue: "Issue N°07 · October 2026",
    tagline: "A Journal of Car Culture · Est. 2023",
    location: "Johannesburg · ZA",
    creatorName: "Koketso"
  },

  // ---- Hero / Cover Story ------------------------------------
  coverStory: {
    tag: "Cover Story",
    category: "Feature · Drag Diaries",
    title: "The GTI That <em>Refuses to Age.</em>",
    dek: "A Stage 2 Golf 7, a Joburg strip at midnight, and the thin line between weekend hobby and full obsession. A photo essay by Koketso.",
    image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1600&q=80",
    author: "Koketso",
    readTime: "12 min read",
    date: "Oct 18, 2026"
  },

  // ---- Features (home page cards) ----------------------------
  features: [
    {
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80",
      category: "Drag Racing",
      title: "Tarmac Sessions Vol.4 — The Strip After Midnight",
      excerpt: "Boost gauges pinned, time slips stacked, and one very loud GTI that wanted to say hello to every car in the opposite lane.",
      meta: "12 min · Film + Photo"
    },
    {
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80",
      category: "Show Report",
      title: "Cape Town Car Fest — A Clean Kind of Chaos",
      excerpt: "The Mother City put on her best sun dress, and the car scene showed up with its Sunday best. A walkthrough in frames.",
      meta: "8 min · Gallery"
    },
    {
      image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80",
      category: "Build Diary",
      title: "Stage 2, Unlocked — What 290 hp Feels Like",
      excerpt: "A dyno sheet, a new intercooler, and a right boot that suddenly has a lot more to say. Honest impressions at full send.",
      meta: "10 min · Editorial"
    }
  ],

  // ---- Home photo preview -----------------------------------
  homePhotos: [
    { src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1400&q=80", caption: "Stance check — GTI on deck" },
    { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",  caption: "Strip lights" },
    { src: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",  caption: "Red line" },
    { src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",  caption: "Show floor" },
    { src: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&q=80",  caption: "Night meet" }
  ],

  // ---- GTI car profile --------------------------------------
  carProfile: {
    badge: "Drive Profile",
    title: "The Daily: <em>Mk7 GTI</em>",
    lead: "Not a show car. Not a garage queen. A hot hatch that works for a living and gets thrashed on weekends. Twenty-two thousand kilometres of stage 2 tune, and counting.",
    specs: [
      { label: "Engine",     value: "2.0 TSI" },
      { label: "Power",      value: "290 hp" },
      { label: "Torque",     value: "420 Nm" },
      { label: "0–100",      value: "5.4 sec" },
      { label: "Suspension", value: "KW V1" },
      { label: "Exhaust",    value: "Res-delete" }
    ]
  },

  // ---- Gallery page -----------------------------------------
  galleryCategories: ["All", "GTI", "Drag", "Shows", "Details"],
  gallery: [
    { src: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1600&q=80", category: "GTI",     caption: "Cover car — Mk7" },
    { src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80", category: "GTI",     caption: "Stance check" },
    { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80", category: "Drag",    caption: "Staging lights" },
    { src: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200&q=80", category: "GTI",     caption: "Red line" },
    { src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80", category: "Shows",   caption: "Show floor" },
    { src: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=1200&q=80", category: "Shows",   caption: "Night meet" },
    { src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1600&q=80", category: "Details", caption: "Detail — wheel" },
    { src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80", category: "Drag",    caption: "Burnout" },
    { src: "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?w=1200&q=80", category: "Shows",   caption: "Cars & Coffee" },
    { src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=80", category: "Details", caption: "Engine bay" },
    { src: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=80", category: "Drag",    caption: "Launch" },
    { src: "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=1200&q=80", category: "GTI",     caption: "Garage queen" }
  ],

  // ---- Videos page ------------------------------------------
  videos: [
    {
      thumb: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80",
      category: "Drag Film",
      title: "Tarmac Sessions Vol.4",
      description: "Mid-night runs, boost controllers bleeding, and a rematch against a tuned R.",
      duration: "12:47",
      date: "Oct 18, 2026",
      views: "24K views",
      url: "#"
    },
    {
      thumb: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80",
      category: "Show Film",
      title: "Cape Town Car Fest",
      description: "The cleanest builds in the Cape, one parking lot at a time.",
      duration: "09:12",
      date: "Oct 03, 2026",
      views: "18K views",
      url: "#"
    },
    {
      thumb: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80",
      category: "Build Diary",
      title: "Stage 1 → Stage 2: Is It Worth It?",
      description: "Dyno numbers, track testing, and a loud before/after.",
      duration: "15:22",
      date: "Sep 20, 2026",
      views: "33K views",
      url: "#"
    },
    {
      thumb: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=1200&q=80",
      category: "Cruise",
      title: "Night Run — Jozi After Dark",
      description: "Illegal-looking, entirely legal. A night cruise through the city.",
      duration: "07:48",
      date: "Sep 05, 2026",
      views: "12K views",
      url: "#"
    },
    {
      thumb: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=80",
      category: "Drag Film",
      title: "GTI vs Type R vs RS3",
      description: "Three hot hatches, one prepped strip, no mercy.",
      duration: "11:04",
      date: "Aug 22, 2026",
      views: "41K views",
      url: "#"
    },
    {
      thumb: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=80",
      category: "Short",
      title: "Wash & Shoot",
      description: "Detailing day, behind the scenes, and a few rolling shots.",
      duration: "06:30",
      date: "Aug 10, 2026",
      views: "9.4K views",
      url: "#"
    }
  ],

  // ---- Events -----------------------------------------------
  events: [
    { day:"14", month:"NOV", title:"Tarmac Sessions Vol.5",  location:"Midvaal Raceway, Gauteng",   status:"upcoming" },
    { day:"05", month:"DEC", title:"Slammed SummerFest",     location:"Grand Parade, Cape Town",    status:"upcoming" },
    { day:"21", month:"JAN", title:"GP Drag Nationals",      location:"Tarlton International Raceway", status:"upcoming" },
    { day:"14", month:"FEB", title:"Cars & Coffee Valentine's", location:"Steyn City, Johannesburg", status:"upcoming" },
    { day:"18", month:"OCT", title:"Tarmac Sessions Vol.4",  location:"Midvaal Raceway, Gauteng",   status:"past" },
    { day:"24", month:"SEP", title:"Cape Town Car Fest",     location:"Killarney Race Track",       status:"past" },
    { day:"12", month:"AUG", title:"Jozi Summer Spin",       location:"Nasrec, Johannesburg",       status:"past" },
    { day:"02", month:"JUL", title:"Winter Warm-Up Drags",   location:"Tarlton International Raceway", status:"past" }
  ],

  // ---- About ------------------------------------------------
  about: {
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&q=80",
    role: "Founder, Photographer & Unapologetic GTI Fanatic",
    paragraphs: [
      "I'm Koketso — a Johannesburg-based car content creator who swapped a more sensible career for a camera rig and a passenger seat that's seen one too many energy drinks.",
      "I chase three things: clean light, loud turbos, and that perfect launch. My weapon of choice is a Golf 7 GTI that's perpetually one intercooler upgrade away from being uninsurable.",
      "GTI Society is the archive. Every drag run, every show floor, every 2AM petrol-station pit-stop — it all lives here, curated the way I'd want to read it on a Sunday morning."
    ],
    favorites: [
      { car: "Golf 7 GTI (Stage 2)", note: "The daily. The weapon. The reason there's always tyre noise in my videos." },
      { car: "Tarmac Sessions",      note: "Favourite event series — pure drag energy, no posers." },
      { car: "Sony A7IV + 24-70mm",  note: "The trusty lens that gets the shot, even when I'm shaking from launch-pads." }
    ]
  },

  // ---- Contact ----------------------------------------------
  contact: {
    intro: "Got a show to cover, a build to feature, or a brand that wants to collaborate? Send a proper note — the good ones get a reply within 48 hours.",
    email: "hello@gtisociety.co.za",
    phone: "+27 (0) 82 123 4567",
    location: "Johannesburg, Gauteng, South Africa",
    socials: [
      { name: "Instagram", handle: "@gtisociety.za",    url: "#" },
      { name: "YouTube",   handle: "GTI Society",       url: "#" },
      { name: "TikTok",    handle: "@gtisociety.k",     url: "#" }
    ]
  }
};

window.SITE_CONTENT = SITE_CONTENT;
