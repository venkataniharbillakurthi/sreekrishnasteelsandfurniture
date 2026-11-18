// Sree Krishna Steels & Furniture (SKL Furniture) - Catalog & Concept Data

export const BRAND_NAME = "SKL Furniture";
export const BRAND_FULL_NAME = "Sree Krishna Steels & Furniture";
export const BRAND_SHORT = "SKL";
export const BRAND_TAGLINE = "Sree Krishna Steels & Furniture — Quality Craft & Everyday Living";

export const CATEGORIES = [
  {
    id: "seating",
    name: "Seating",
    subtitle: "A little space to slow down.",
    description: "Sofas, lounge chairs & daybeds",
    itemCount: 8,
    image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-collection-gallery-seating.png",
    badge: "Popular"
  },
  {
    id: "tables",
    name: "Tables",
    subtitle: "For quiet coffee and shared dinners.",
    description: "Dining, coffee & side tables",
    itemCount: 6,
    image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-collection-gallery-tables.png",
    badge: "New Finishes"
  },
  {
    id: "storage",
    name: "Storage",
    subtitle: "Everyday essentials, quietly kept.",
    description: "Shelves, sideboards & wall rails",
    itemCount: 5,
    image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-collection-gallery-storage.png",
    badge: "Solid Oak"
  },
  {
    id: "lighting",
    name: "Lighting",
    subtitle: "Warmth that settles into the room.",
    description: "Floor, table & pendant lamps",
    itemCount: 7,
    image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-stem-lamp-editorial-v1-room.png",
    badge: "Dimmable"
  }
];

export const HERO_SLIDES = [
  {
    id: "slide-1",
    eyebrow: "LIVING, WITH COLOUR",
    headingLines: ["A little colour.", "A lot of home."],
    subtext: "Considered furniture for rooms that feel like you.",
    ctaText: "Explore the collection",
    categoryTarget: "seating",
    bgImage: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-hero-light-v3-ledge-desktop.png",
    bgImageMobile: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-hero-light-v3-ledge-mobile.png",
    productPill: {
      id: "ledge-sofa",
      title: "Ledge 2-Seat Sofa",
      finish: "Oat linen",
      price: "$1,480.00",
      image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-ledge-oat.png"
    }
  },
  {
    id: "slide-2",
    eyebrow: "A QUIETER KIND OF COMFORT",
    headingLines: ["A quieter kind", "of comfort."],
    subtext: "Sculpted proportions and tactile bouclé upholstery designed for restful spaces that breathe.",
    ctaText: "Explore the Cove Chair",
    categoryTarget: "seating",
    bgImage: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-hero-light-v3-cove-desktop.png",
    bgImageMobile: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-hero-light-v3-cove-desktop.png",
    productPill: {
      id: "cove-lounge-chair",
      title: "The Cove Lounge Chair",
      finish: "Oat bouclé",
      price: "$690.00",
      image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-cove-oat.png"
    }
  },
  {
    id: "slide-3",
    eyebrow: "MODERN GATHERING",
    headingLines: ["Good company.", "Room for more."],
    subtext: "Solid natural timber with subtle chamfered edges crafted to age with warmth over decades.",
    ctaText: "View Gather Table",
    categoryTarget: "tables",
    bgImage: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-hero-light-v3-gather-desktop.png",
    bgImageMobile: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-hero-light-v3-gather-desktop.png",
    productPill: {
      id: "gather-table",
      title: "Gather Dining Table",
      finish: "Natural oak",
      price: "$1,850.00",
      image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-gather-table-master.png"
    }
  }
];

export const PRODUCTS = [
  {
    id: "ledge-sofa",
    title: "Ledge 2-Seat Sofa",
    category: "seating",
    price: 1480,
    originalPrice: null,
    tag: "Editorial Pick",
    description: "A tailored two-seat sofa with a recessed plinth base that creates a floating visual lightness. Deep cushions invite unhurried afternoons and relaxed conversation.",
    dimensions: {
      widthCm: 168,
      depthCm: 82,
      heightCm: 74,
      widthIn: 66,
      depthIn: 32,
      heightIn: 29,
      seatHeightCm: 44
    },
    materials: "Solid oak plinth, pocket-sprung base, feather-wrapped foam cushions, pre-washed Belgian linen.",
    finishes: [
      {
        name: "Oat linen",
        hex: "#D8CEBE",
        image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-ledge-oat.png"
      },
      {
        name: "Moss canvas",
        hex: "#4E5B41",
        image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-ledge-moss.png"
      }
    ],
    inStock: true
  },
  {
    id: "cove-lounge-chair",
    title: "Cove Lounge Chair",
    category: "seating",
    price: 690,
    originalPrice: 750,
    tag: "Bestseller",
    description: "An enveloping low-slung silhouette featuring seamless curves and supportive dual-density foam core covered in heavy textured oat bouclé or clay woven linen.",
    dimensions: {
      widthCm: 84,
      depthCm: 88,
      heightCm: 76,
      widthIn: 33,
      depthIn: 35,
      heightIn: 30,
      seatHeightCm: 42
    },
    materials: "FSC certified kiln-dried birch frame, high-resilience foam, Italian wool-blend bouclé.",
    finishes: [
      {
        name: "Oat bouclé",
        hex: "#D8CEBE",
        image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-cove-oat.png"
      },
      {
        name: "Terracotta clay",
        hex: "#B85D3B",
        image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-cove-clay.png"
      }
    ],
    inStock: true
  },
  {
    id: "nest-side-tables",
    title: "Nest Side Tables (Set of 2)",
    category: "tables",
    price: 340,
    originalPrice: 380,
    tag: "Set of 2",
    description: "Interlocking organic pebble profiles crafted from solid timber. Slide together to create a layered multi-height arrangement or place separately around seating.",
    dimensions: {
      widthCm: 56,
      depthCm: 48,
      heightCm: 45,
      widthIn: 22,
      depthIn: 19,
      heightIn: 18,
      seatHeightCm: null
    },
    materials: "100% Solid European Oak or American Walnut with organic matte lacquer protection.",
    finishes: [
      {
        name: "Dark walnut",
        hex: "#4E3728",
        image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-nest-walnut.png"
      },
      {
        name: "Natural oak",
        hex: "#D1B58C",
        image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-nest-oak.png"
      }
    ],
    inStock: true
  },
  {
    id: "fold-daybed",
    title: "Fold Daybed",
    category: "seating",
    price: 1650,
    originalPrice: null,
    tag: "Iconic",
    description: "An architectural daybed with a cylindrical bolster cushion fastened with vegetable-tanned leather straps. Perfect as a room divider or quiet sanctuary by windows.",
    dimensions: {
      widthCm: 190,
      depthCm: 85,
      heightCm: 42,
      widthIn: 75,
      depthIn: 33,
      heightIn: 17,
      seatHeightCm: 42
    },
    materials: "Solid waxed ash frame, natural rubber core, saddle leather straps, raw slub cotton mattress.",
    finishes: [
      {
        name: "Moss canvas",
        hex: "#4E5B41",
        image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-fold-moss.png"
      },
      {
        name: "Oat linen",
        hex: "#D8CEBE",
        image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-fold-oat.png"
      }
    ],
    inStock: true
  },
  {
    id: "column-shelf",
    title: "Column Modular Shelf",
    category: "storage",
    price: 520,
    originalPrice: null,
    tag: "Modular",
    description: "Rhythmically spaced vertical fins creating sculptural cubbies for books, ceramic vessels, and vinyl records. Mounts securely flush to the wall.",
    dimensions: {
      widthCm: 90,
      depthCm: 32,
      heightCm: 140,
      widthIn: 35,
      depthIn: 13,
      heightIn: 55,
      seatHeightCm: null
    },
    materials: "FSC Oak veneer over birch core with concealed powder-coated steel bracket system.",
    finishes: [
      {
        name: "Natural oak",
        hex: "#D1B58C",
        image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-column-shelf-master.png"
      },
      {
        name: "Smoked oak",
        hex: "#3E362F",
        image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-column-shelf-variant.png"
      }
    ],
    inStock: true
  },
  {
    id: "gather-table",
    title: "Gather Dining Table",
    category: "tables",
    price: 1850,
    originalPrice: 1980,
    tag: "Signature",
    description: "A solid timber table seating up to 8 guests comfortably. Subtle soft radius edging and inward angled legs provide maximum legroom and visual calm.",
    dimensions: {
      widthCm: 220,
      depthCm: 95,
      heightCm: 75,
      widthIn: 87,
      depthIn: 37,
      heightIn: 30,
      seatHeightCm: null
    },
    materials: "Continuous stave solid White Oak or American Walnut with hand-rubbed oil finish.",
    finishes: [
      {
        name: "Natural oak",
        hex: "#D1B58C",
        image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-gather-table-master.png"
      }
    ],
    inStock: true
  },
  {
    id: "dome-table-lamp",
    title: "Dome Table Lamp",
    category: "lighting",
    price: 280,
    originalPrice: null,
    tag: "The Object Edit",
    description: "An understated domed reflector resting on a spun metal base. Emits a smooth, glare-free downward wash with integrated capacitive touch stepless dimming.",
    dimensions: {
      widthCm: 32,
      depthCm: 32,
      heightCm: 38,
      widthIn: 13,
      depthIn: 13,
      heightIn: 15,
      seatHeightCm: null
    },
    materials: "Spun aluminum with matte powder coating, brass touch switch, braided cloth cord.",
    finishes: [
      {
        name: "Deep forest",
        hex: "#1E3A2F",
        image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-spotlight-dome-cutout-20261016.png"
      }
    ],
    inStock: true
  },
  {
    id: "stem-floor-lamp",
    title: "Stem Floor Lamp",
    category: "lighting",
    price: 240,
    originalPrice: null,
    tag: "Ambient",
    description: "A slender vertical stem with a pivoting frosted glass orb that casts a warm, relaxing diffused glow for late evening reading.",
    dimensions: {
      widthCm: 28,
      depthCm: 28,
      heightCm: 148,
      widthIn: 11,
      depthIn: 11,
      heightIn: 58,
      seatHeightCm: null
    },
    materials: "Solid travertine base, steel stem, mouth-blown opal glass globe, floor foot switch.",
    finishes: [
      {
        name: "Warm brass & opal",
        hex: "#C88A42",
        image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-stem-lamp-master.png"
      }
    ],
    inStock: true
  },
  {
    id: "disc-side-table",
    title: "Disc Side Table",
    category: "tables",
    price: 160,
    originalPrice: 190,
    tag: "Compact",
    description: "A lightweight circular pedestal table with an integrated top handle groove for moving effortlessly between reading chair and bed.",
    dimensions: {
      widthCm: 42,
      depthCm: 42,
      heightCm: 48,
      widthIn: 16,
      depthIn: 16,
      heightIn: 19,
      seatHeightCm: null
    },
    materials: "Turned beech wood with moisture-resistant organic ceramic coating.",
    finishes: [
      {
        name: "Natural birch",
        hex: "#D8CEBE",
        image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-disc-table-master.png"
      }
    ],
    inStock: true
  },
  {
    id: "arc-pendant",
    title: "Arc Pendant Light",
    category: "lighting",
    price: 220,
    originalPrice: null,
    tag: "Handcrafted",
    description: "Spun ceramic bowl shade with raw matte exterior and glazed interior reflecting warm downlight over counters and dining tables.",
    dimensions: {
      widthCm: 36,
      depthCm: 36,
      heightCm: 22,
      widthIn: 14,
      depthIn: 14,
      heightIn: 9,
      seatHeightCm: null
    },
    materials: "Slip-cast earthenware, linen wrapped suspension cable, porcelain ceiling canopy.",
    finishes: [
      {
        name: "Ivory ceramic",
        hex: "#F5F2EB",
        image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-arc-pendant-master.png"
      }
    ],
    inStock: true
  },
  {
    id: "bedside-table",
    title: "Form Floating Bedside Table",
    category: "storage",
    price: 260,
    originalPrice: null,
    tag: "Wall Mount",
    description: "A cantilevered wall-hung drawer unit with concealed soft-close runners and rear cable management passage.",
    dimensions: {
      widthCm: 45,
      depthCm: 30,
      heightCm: 16,
      widthIn: 18,
      depthIn: 12,
      heightIn: 6,
      seatHeightCm: null
    },
    materials: "Solid oak drawer face with precision mitred dovetail joinery.",
    finishes: [
      {
        name: "Natural oak",
        hex: "#D1B58C",
        image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-bedside-master.png"
      }
    ],
    inStock: true
  },
  {
    id: "arc-ottoman",
    title: "Arc Bouclé Ottoman",
    category: "seating",
    price: 290,
    originalPrice: 320,
    tag: "Versatile",
    description: "Multifunctional pill-shaped footstool or spare stool with hidden glide feet and firm supportive seating density.",
    dimensions: {
      widthCm: 60,
      depthCm: 45,
      heightCm: 40,
      widthIn: 24,
      depthIn: 18,
      heightIn: 16,
      seatHeightCm: 40
    },
    materials: "Molded cold-cure foam over timber frame, tactile textured bouclé.",
    finishes: [
      {
        name: "Forest moss",
        hex: "#4E5B41",
        image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-arc-moss.png"
      },
      {
        name: "Oat bouclé",
        hex: "#D8CEBE",
        image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-arc-oat.png"
      }
    ],
    inStock: true
  }
];

export const OBJECT_EDIT_FEATURE = {
  id: "dome-table-lamp",
  tag: "THE OBJECT EDIT",
  title: "Dome Table Lamp",
  price: "$280.00",
  description: "Form, material and soft ambient illumination. A tranquil balance of pure geometry and hand-finished craft that anchors any bedside or side table.",
  views: {
    silhouette: {
      title: "Pure Silhouette",
      caption: "Studio profile highlighting the 32cm balanced dome ratio and satin sheen.",
      image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-spotlight-dome-cutout-20261016.png"
    },
    inRoom: {
      title: "In A Living Room",
      caption: "Casting a 2700K warm diffused glow across an oak console and lime-washed wall.",
      image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-dome-room.png"
    }
  },
  specs: [
    { label: "Light Source", value: "Integrated 8W Warm LED (2700K, 650 lm)" },
    { label: "Switch", value: "Capacitive touch stepless dimming" },
    { label: "Cord", value: "2.2m Braided Oat Textile cord" },
    { label: "Material", value: "Spun Aluminum & Sand-cast base" }
  ]
};

export const SHOPPABLE_ROOM = {
  title: "Better together.",
  subtitle: "IN GOOD COMPANY",
  roomName: "The Reading Corner",
  description: "A harmonious sanctuary designed with grounding natural textures, tactile bouclé upholstery, and layered directional warm lighting.",
  sceneImage: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-reading-corner-scene-20261015.png",
  hotspots: [
    {
      id: "hotspot-1",
      number: "01",
      top: "54%",
      left: "48%",
      productId: "cove-lounge-chair",
      title: "Cove Lounge Chair",
      price: "$690.00",
      finish: "Oat Bouclé"
    },
    {
      id: "hotspot-2",
      number: "02",
      top: "62%",
      left: "76%",
      productId: "disc-side-table",
      title: "Disc Side Table",
      price: "$160.00",
      finish: "Natural Birch"
    },
    {
      id: "hotspot-3",
      number: "03",
      top: "36%",
      left: "26%",
      productId: "stem-floor-lamp",
      title: "Stem Floor Lamp",
      price: "$240.00",
      finish: "Warm Brass & Opal"
    }
  ]
};

export const MATERIALS_DATA = [
  {
    id: "upholstery",
    number: "01",
    title: "Upholstery & Weaves",
    summary: "Bouclé, pre-washed Belgian linen, and heavy cotton twill designed to endure everyday family life.",
    description: "Our textiles undergo rigorous Martindale abrasion testing (50,000+ rubs). Dyed using low-impact botanical and mineral dyes that maintain tactile breathability and natural irregularities.",
    macroImage: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-cove-editorial-v1-oat-texture.png",
    tag: "Bouclé Weave / Oat Texture",
    details: ["Natural linen & wool blend", "Oeko-Tex Standard 100 certified", "Stain-resistant nano shield"]
  },
  {
    id: "wood",
    number: "02",
    title: "Solid Wood & Finishes",
    summary: "Sustainably harvested White Oak and American Walnut selected for continuous grain flow.",
    description: "Hand-finished with plant-based VOC-free hardwax oils. This allows the timber to breathe and develop a rich patina over time without peeling, yellowing, or plastic gloss.",
    macroImage: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-material-oak.jpg",
    tag: "End Grain / Natural Oak",
    details: ["FSC 100% certified European forestry", "Natural matte tactile finish", "Repairable wax oil system"]
  },
  {
    id: "surface",
    number: "03",
    title: "Joinery & Structural Hardware",
    summary: "Traditional mortise and tenon joints combined with precision CNC machining for lifelong durability.",
    description: "All structural frames are constructed from kiln-dried hardwood to prevent warping across changing seasons. Concealed German soft-close dampers ensure quiet, graceful operation.",
    macroImage: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-cove-editorial-v1-arm-curve.png",
    tag: "Dovetail Joinery / Clean Chamfer",
    details: ["Zero squeak spring architecture", "Die-cast solid brass fixings", "10-year structural frame guarantee"]
  }
];

export const MOOD_PALETTES = [
  {
    id: "warm-neutrals",
    name: "Warm Neutrals",
    headline: "Oat, Oak & Cream",
    description: "Gentle natural tones that catch the morning daylight. Soft textural layers that make any living room feel airy, serene and restful.",
    bgImage: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-hero-colour-v1-01-ledge-sage.png",
    chips: [
      { name: "Oat Bouclé", hex: "#D8CEBE" },
      { name: "Natural Oak", hex: "#D1B58C" },
      { name: "Bone White", hex: "#FAF8F5" }
    ],
    pillLabel: "Serene & Daylight"
  },
  {
    id: "earth-tones",
    name: "Earth Tones",
    headline: "Olive, Terracotta & Timber",
    description: "Rich organic pigments inspired by Scandinavian pine forests and fired terracotta clay. Grounds the home in tactile warmth and depth.",
    bgImage: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-20261011-fold-room.png",
    chips: [
      { name: "Forest Moss", hex: "#4E5B41" },
      { name: "Terracotta Clay", hex: "#B85D3B" },
      { name: "Honey Oak", hex: "#C88A42" }
    ],
    pillLabel: "Grounded & Organic"
  },
  {
    id: "quiet-contrast",
    name: "Quiet Contrast",
    headline: "Deep Charcoal, Slate & Birch",
    description: "Graphic architectural clarity where deep dark tones accentuate light timber curves. Sophisticated, structured, and timeless.",
    bgImage: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-scene-morning.png",
    chips: [
      { name: "Deep Charcoal", hex: "#242220" },
      { name: "Dusty Slate", hex: "#6F838E" },
      { name: "Pale Birch", hex: "#E8E2D8" }
    ],
    pillLabel: "Modern & Crisp"
  }
];

export const EDITORIAL_STORIES = [
  {
    id: "story-1",
    room: "Living Room",
    tagline: "Room to unwind.",
    description: "Layered low profiles and modular seating that invite family and friends to gather without clutter.",
    image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-collection-gallery-seating.png"
  },
  {
    id: "story-2",
    room: "Dining Room",
    tagline: "A place to gather.",
    description: "Solid oak dining tables paired with contoured wooden chairs built for three-hour dinners.",
    image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-collection-gallery-tables.png"
  },
  {
    id: "story-3",
    room: "Lighting & Details",
    tagline: "The finishing touch.",
    description: "Sculptural lamps and ceramic pendants that transform the atmosphere when night settles.",
    image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-stem-lamp-editorial-v1-room.png"
  },
  {
    id: "story-4",
    room: "Everyday Storage",
    tagline: "Everyday, in order.",
    description: "Open rhythm column shelves and floating consoles keeping life tidy and serene.",
    image: "https://formrest-furniture.myshopify.com/cdn/shop/files/formrest-collection-gallery-storage.png"
  }
];

export const JOURNAL_POSTS = [
  {
    id: "post-1",
    category: "LIVING SPACES",
    title: "A softer living room starts with a little space.",
    excerpt: "Why leaving room between architectural furniture pieces creates a calmer, more welcoming home that breathes through the seasons.",
    date: "November 2026",
    readTime: "4 min read",
    image: "https://formrest-furniture.myshopify.com/cdn/shop/articles/formrest-journal-01-a-softer-living-room-starts-with-a-little-space.jpg"
  },
  {
    id: "post-2",
    category: "INTERIOR CRAFT",
    title: "Make a reading corner from what you already have.",
    excerpt: "Simple principles of light orientation, acoustic buffering with bouclé fabrics, and ergonomic seating heights.",
    date: "October 2026",
    readTime: "5 min read",
    image: "https://formrest-furniture.myshopify.com/cdn/shop/articles/formrest-journal-02-make-a-reading-corner-from-what-you-already-have.jpg"
  }
];
