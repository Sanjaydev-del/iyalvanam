import express, { Request, Response, NextFunction } from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { initMySQL, isMySQLConnected, getMySQLConfig, getPool } from "./src/db/mysql";

dotenv.config();

const app = express();
const PORT = 3000;
const JWT_SECRET = process.env.JWT_SECRET || "iyalvanam-secret-key-2026";
const DATA_DIR = path.join(process.cwd(), "data");
const DB_FILE = path.join(DATA_DIR, "db.json");

app.use(express.json());

// Database structures
interface DBData {
  users: Array<{
    id: string;
    username: string;
    passwordHash: string;
    email: string;
    role: string;
    createdAt: string;
  }>;
  blogPosts: Array<{
    id: string;
    title: string;
    titleTamil?: string;
    slug: string;
    content: string;
    excerpt: string;
    imageUrl: string;
    author: string;
    category: string;
    tags: string[];
    readTime: string;
    published: boolean;
    createdAt: string;
    updatedAt: string;
  }>;
  memberInquiries: Array<{
    id: string;
    name: string;
    email: string;
    phone: string;
    skills?: string;
    areaOfContribution?: string;
    numberOfMembers?: number;
    preferredInteractionMethod?: string;
    message: string;
    status: 'PENDING' | 'CONTACTED' | 'JOINED';
    notes?: string;
    submittedAt: string;
  }>;
  contactInquiries: Array<{
    id: string;
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    submittedAt: string;
    responded?: boolean;
  }>;
  donations: Array<{
    id: string;
    donorName: string;
    donorEmail: string;
    amount?: number;
    type: string;
    description?: string;
    status: 'PENDING' | 'RECEIVED';
    createdAt: string;
  }>;
  leadershipProfiles?: Array<{
    id: string;
    designation: 'FOUNDER' | 'CO_FOUNDER';
    displayName: string;
    roleTitle: string;
    roleTitleTamil?: string;
    shortBio: string;
    fullBiography: string;
    profileImage: string;
    coverImage?: string;
    visionStatement: string;
    philosophy: string;
    quote: string;
    displayOrder: number;
    isPublished: boolean;
    projects?: string[];
    socialLinks?: any;
    createdAt?: string;
    updatedAt?: string;
  }>;
}

// Ensure data folder and db file
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

function getInitialDB(): DBData {
  const salt = bcrypt.genSaltSync(10);
  const defaultPasswordHash = bcrypt.hashSync("admin123", salt);

  return {
    users: [
      {
        id: "usr-admin-01",
        username: "admin",
        passwordHash: defaultPasswordHash,
        email: "contact@iyalvanam.org",
        role: "ADMIN",
        createdAt: new Date().toISOString(),
      },
    ],
    blogPosts: [
      {
        id: "post-01",
        title: "Restoring the Western Ghats: Our First Sapling Drive in Dharmapuramadam",
        titleTamil: "மேற்குத் தொடர்ச்சி மலையின் மடியில் முதல் மரக்கன்றுகள் நடும் விழா",
        slug: "restoring-western-ghats-sapling-drive",
        excerpt: "A glimpse into our collective effort at Dharmapuramadam, planting native Western Ghats species to restore the natural canopy and protect soil biodiversity.",
        content: `At the foothills of the Agastiyar Malai Biosphere Reserve in Tenkasi District, our journey began not with concrete foundations, but with native seeds and saplings. 

In harmony with the natural ecosystem of the Western Ghats, we gathered with friends, local botanists, and prospective community members to plant over 150 indigenous varieties, including Kadamba, Marudham, Vembu, and wild fruit trees that sustain local bird and pollinator populations.

### Principles in Action
Our approach follows the five foundational principles of Iyalvanam:
1. **Non-Artificial Intervention**: Avoiding synthetic fertilizers and chemicals, relying purely on mulching, indigenous soil microbes, and companion planting.
2. **The Forest as Our Teacher**: Observing how natural deciduous and evergreen forest canopies layer themselves to retain ground moisture and microclimates.
3. **Collective Joy**: Working with our hands in soil, sharing fresh tender coconuts, and singing folk songs in gratitude for the earth.

As the monsoon showers from the Kalakad-Mundanthurai range bless our soil, we invite all seekers and nature lovers to visit, immerse, and participate in our upcoming community gathering.`,
        imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
        author: "Iyalvanam Core Circle",
        category: "Ecology & Land",
        tags: ["Western Ghats", "Reforestation", "Agastiyar Malai", "Native Species"],
        readTime: "4 min read",
        published: true,
        createdAt: "2026-06-15T09:30:00.000Z",
        updatedAt: "2026-06-15T09:30:00.000Z",
      },
      {
        id: "post-02",
        title: "Why Non-Artificial Living is the Greatest Healing: Water, Sun & Soil",
        titleTamil: "செயற்கையற்ற வாழ்வியலே மெய்யான நலம் – பஞ்சபூதங்களின் மருத்துவம்",
        slug: "why-non-artificial-living-is-healing",
        excerpt: "Exploring our natural health philosophy: how fresh air, pure open well water, direct sunlight, and barefoot grounding restore human vitality.",
        content: `Modern human life has systematically isolated us from the primal elements: we walk on rubber soles, breathe air conditioned through synthetic ducts, drink demineralized bottled water, and hide behind screens from dawn to dusk.

At Iyalvanam, health is not an expensive medical commodity; it is the natural consequence of being in direct resonance with the five elements (Pancha Bhootas).

### The Four Pillars of Natural Wellness
* **Sunlight (Surya Upasana)**: Morning absorption of soft sunrays stimulates circadian synchronization, natural Vitamin D synthesis, and deep cellular energy.
* **Grounding (Earth Connection)**: Walking barefoot on living forest loam transfers free electrons from the earth, neutralizing chronic systemic inflammation.
* **Living Water**: Sourced from our unpolluted deep open well, rich in dissolved natural minerals without chemical chlorination.
* **Mindful Fasting and Seasonal Fruits**: Eating fresh produce harvested right from the trees, honoring digestive rest and internal biological rhythms.

> "We don’t create a new health system—we return to the timeless natural one that built the human body over millions of years."`,
        imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
        author: "Health & Living Circle",
        category: "Conscious Living",
        tags: ["Holistic Health", "Grounding", "Natural Living", "Pancha Bhoota"],
        readTime: "5 min read",
        published: true,
        createdAt: "2026-07-02T11:15:00.000Z",
        updatedAt: "2026-07-02T11:15:00.000Z",
      },
      {
        id: "post-03",
        title: "Consensus Governance: How Decisions Are Made Without Hierarchy",
        titleTamil: "அதிகாரமற்ற கூட்டுறவு நிர்வாகம் – ஒருமித்த கருத்தின் வலிமை",
        slug: "consensus-governance-without-hierarchy",
        excerpt: "Understanding the dual trust structure of Iyalvanam Asset Trust and SEYON Operational Trust, safeguarding collective stewardship.",
        content: `How can a multi-family community thrive over generations without creating bureaucratic power structures, landlords, or marginalized voices?

The answer lies in our dual-trust legal architecture and sacred consensus circles:

### The Legal Framework
1. **Iyalvanam Asset Trust**: Holds the sacred land in perpetuity. No single individual owns private parcels of land. The land belongs to nature and the collective community.
2. **SEYON Operational Trust**: Manages daily logistical functions, shared infrastructure maintenance, water distribution, and ecological activities.

### The Decision Circle
Every major decision is not subject to simple majority voting (which creates winners and losers), but to **Consensus Processing**. Every voice is heard until collective harmony and mutual understanding are reached.

Conflicts are addressed through open circle dialogues under the shade of our communal banyan tree, grounded in truth, compassion, and shared responsibility.`,
        imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
        author: "SEYON Trust Circle",
        category: "Community Governance",
        tags: ["Governance", "Trust Architecture", "Consensus", "Collective Stewardship"],
        readTime: "6 min read",
        published: true,
        createdAt: "2026-07-20T14:00:00.000Z",
        updatedAt: "2026-07-20T14:00:00.000Z",
      },
      {
        id: "post-04",
        title: "Earthen Architecture & Eco-Infrastructure in Tenkasi",
        titleTamil: "இயற்கை வீடுகள் மற்றும் நிலைத்தன்மை உள்கட்டமைப்புகள்",
        slug: "earthen-architecture-eco-infrastructure",
        excerpt: "Constructing breathable lime-mud homes, dry compost toilets, and decentralized solar grids in Tenkasi district.",
        content: `Our living spaces are designed to leave zero toxic residue on the earth. Built using sun-dried mud blocks, lime plaster, bamboo roofing, and terracotta tiles, these structures remain naturally cool during tropical summers and warm during mountain winters.

### Current Infrastructure Highlights
- **Dry Compost Toilets**: Transforming human waste into safe, pathogen-free compost for non-food agroforestry, conserving thousands of liters of clean groundwater.
- **Solar Micro-Grid**: Off-grid renewable power powering essential lighting, communication, and water pumping.
- **Community Kitchen & Library**: Shared communal spaces where meals are cooked collectively on fuel-efficient earthen stoves using dry fallen wood.`,
        imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
        author: "Infrastructure Circle",
        category: "Architecture & Land",
        tags: ["Eco Architecture", "Solar", "Compost Toilets", "Mud Houses"],
        readTime: "4 min read",
        published: true,
        createdAt: "2026-08-10T16:20:00.000Z",
        updatedAt: "2026-08-10T16:20:00.000Z",
      },
    ],
    memberInquiries: [
      {
        id: "inq-101",
        name: "Arunachalam S.",
        email: "arun.nature@example.com",
        phone: "+91 98401 23456",
        skills: "Organic farming, Permaculture design, Earthen masonry",
        areaOfContribution: "Land development, Agriculture, Food forest",
        numberOfMembers: 3,
        preferredInteractionMethod: "In-person visit & stay",
        message: "My family and I have been practicing natural farming for 4 years in Madurai. We are deeply aligned with the Iyalvanam vision of non-artificial living and consensus governance.",
        status: "PENDING",
        submittedAt: "2026-08-20T10:15:00.000Z",
      },
      {
        id: "inq-102",
        name: "Dr. Meenakshi Sundaram",
        email: "drmeena.eco@example.com",
        phone: "+91 94440 98765",
        skills: "Naturopathy, Traditional Siddha herbal medicine, Children's education",
        areaOfContribution: "Community health, Experiential learning for children",
        numberOfMembers: 2,
        preferredInteractionMethod: "Phone call followed by weekend visit",
        message: "Wishing to transition away from urban hospital practice to a pure nature-based preventative life. Ready to contribute medical knowledge and herbal botanical garden development.",
        status: "CONTACTED",
        notes: "Spoke on phone on Aug 22. Scheduled orientation stay for first week of September.",
        submittedAt: "2026-08-18T14:40:00.000Z",
      },
      {
        id: "inq-103",
        name: "Karthikeyan & Priya",
        email: "karthi.priya@example.com",
        phone: "+91 97900 11223",
        skills: "Renewable energy, Solar microgrids, Carpentry, Water harvesting",
        areaOfContribution: "Infrastructure, Solar power, Rainwater systems",
        numberOfMembers: 4,
        preferredInteractionMethod: "In-person immersion",
        message: "We have visited the Dharmapuramadam land and completed the initial 1-month transition stay. We are ready to make the founding member contribution and join full-time.",
        status: "JOINED",
        notes: "Completed orientation and consensus circle dialogue. Invited as active resident family.",
        submittedAt: "2026-07-28T09:00:00.000Z",
      },
    ],
    contactInquiries: [
      {
        id: "cnt-201",
        name: "Senthil Kumar",
        email: "senthil.k@example.com",
        phone: "+91 98840 55667",
        subject: "Volunteering for upcoming sapling plantation weekend",
        message: "Hello Iyalvanam team, I would love to bring a group of 5 college students to volunteer for tree planting and ditch contouring next weekend. Please let us know the visiting protocol.",
        submittedAt: "2026-08-24T12:30:00.000Z",
        responded: true,
      },
      {
        id: "cnt-202",
        name: "Ananya Iyer",
        email: "ananya.iyer@example.com",
        subject: "Donation of traditional heirloom vegetable seeds",
        message: "Namaskaram! I have conserved over 30 indigenous varieties of Tamil Nadu brinjal, lady's finger, pumpkin, and greens seeds. I would like to courier them or deliver personally.",
        submittedAt: "2026-08-25T15:10:00.000Z",
        responded: false,
      },
    ],
    donations: [
      {
        id: "don-301",
        donorName: "Venkatesh R.",
        donorEmail: "venkat.r@example.com",
        amount: 50000,
        type: "Infrastructure-specific support",
        description: "Contribution towards the Community Hall open well deepening and solar pump setup.",
        status: "RECEIVED",
        createdAt: "2026-08-12T11:00:00.000Z",
      },
      {
        id: "don-302",
        donorName: "Dr. Lakshmi Narayanan",
        donorEmail: "dr.lakshmi@example.com",
        amount: 25000,
        type: "Monetary support",
        description: "Support for planting 200 native forest saplings along the Western Ghats perimeter.",
        status: "RECEIVED",
        createdAt: "2026-08-19T16:45:00.000Z",
      },
      {
        id: "don-303",
        donorName: "Sundar Rajan",
        donorEmail: "sundar.rajan@example.com",
        type: "Seeds",
        description: "Pledge to supply 50 kg of organic heirloom paddy and millet seeds from Thiruvannamalai.",
        status: "PENDING",
        createdAt: "2026-08-25T17:20:00.000Z",
      },
    ],
    leadershipProfiles: [
      {
        id: "lead-01",
        designation: "FOUNDER",
        displayName: "Sanjay Dev",
        roleTitle: "Founder & Vision Steward",
        roleTitleTamil: "நிறுவனர் & தொலைநோக்கு வழிகாட்டி",
        shortBio: "A dedicated land steward and philosopher championing sovereign land preservation and non-artificial human living in the Western Ghats.",
        fullBiography: "Sanjay Dev initiated the Iyalvanam movement after witnessing the rapid acceleration of urban dependency, soil depletion, and ecological fragmentation. Rooted in the ancient Tamil ethos of living in harmony with nature and inspired by natural forest ecologies, he envisioned a dual-trust architecture that guarantees land is held in perpetuity as a sacred commonwealth—never to be bought, sold, or fragmented by individuals.\n\nHis stewardship focuses on establishing permanent food forests, native seed repositories, and sovereign consensus-based living where humanity reconnects with the five primal elements (Pancha Bhootas).",
        profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
        coverImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80",
        visionStatement: "To create an immutable, generational sanctuary where human life returns to its effortless natural state, guided by living soil and timeless consensus.",
        philosophy: "Nature does not build factories or hierarchies. It creates boundless abundance through interconnected cooperation. When we step outside synthetic systems, we reclaim our time, health, and true sovereignty.",
        quote: "“We do not create a new life system; we simply return to the timeless natural one that built the human body over millions of years.”",
        displayOrder: 1,
        isPublished: true,
        projects: ["Iyalvanam Asset Trust Legal Architecture", "Dharmapuramadam Food Forest", "Heirloom Seed Repository"],
        socialLinks: { email: "sanjay@iyalvanam.org", phone: "+91 96007 56007" },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "lead-02",
        designation: "CO_FOUNDER",
        displayName: "Dr. Meenakshi Sundaram",
        roleTitle: "Co-Founder & Operational Steward",
        roleTitleTamil: "இணை நிறுவனர் & கள ஒருங்கிணைப்பாளர்",
        shortBio: "Pioneering traditional Siddha herbal health, community consensus circles, and experiential education at SEYON.",
        fullBiography: "Dr. Meenakshi Sundaram brings over a decade of dedication to natural wellness, traditional herbal medicine, and regenerative community facilitation. As the operational steward of SEYON Operational Trust, she leads on-ground community transitions, experiential workshops, natural earthen architecture initiatives, and the orientation of incoming families.\n\nHer work bridges traditional indigenous botanical wisdom with practical daily rhythms—ensuring that children grow barefoot in pure soil, meals are medicine, and community conflicts dissolve naturally under open dialogue circles.",
        profileImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
        coverImage: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=80",
        visionStatement: "To cultivate a vibrant, caring community platform where education, health, and daily labor flow seamlessly from nature’s living patterns.",
        philosophy: "Health is not an expensive commodity manufactured in hospitals. It is the direct consequence of living soil, unchlorinated open-well water, morning sunlight, and loving human cooperation.",
        quote: "“True luxury is clean mountain air, living water, unpoisoned food, and a quiet, sovereign mind.”",
        displayOrder: 2,
        isPublished: true,
        projects: ["SEYON Community Health & Herbal Grove", "Natural Earthen Architecture Program", "Family Orientation Immersion"],
        socialLinks: { email: "meenakshi@iyalvanam.org", phone: "+91 94440 98765" },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
  };
}

function readDB(): DBData {
  try {
    if (!fs.existsSync(DB_FILE)) {
      const initial = getInitialDB();
      fs.writeFileSync(DB_FILE, JSON.stringify(initial, null, 2), "utf-8");
      return initial;
    }
    const data = fs.readFileSync(DB_FILE, "utf-8");
    return JSON.parse(data) as DBData;
  } catch (err) {
    console.error("Error reading database:", err);
    return getInitialDB();
  }
}

function writeDB(data: DBData) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing database:", err);
  }
}

// Authentication Middleware
function authenticateAdmin(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Unauthorized: Missing or invalid token" });
    return;
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string; role: string };
    if (decoded.role !== "ADMIN") {
      res.status(403).json({ error: "Forbidden: Admin privileges required" });
      return;
    }
    (req as any).user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Unauthorized: Token expired or invalid" });
  }
}

// Initialize database
readDB();

// ----------------- REST API ROUTES -----------------

// Health check
app.get("/api/health", (req, res) => {
  const mysqlConfig = getMySQLConfig();
  res.json({
    status: "ok",
    service: "Iyalvanam Full-Stack Platform API",
    database: {
      type: "MySQL",
      connected: isMySQLConnected(),
      host: mysqlConfig.host,
      port: mysqlConfig.port,
      database: mysqlConfig.database,
      user: mysqlConfig.user,
    },
    timestamp: new Date().toISOString(),
  });
});

// Auth endpoints
app.post("/api/auth/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ error: "Username and password are required" });
    return;
  }

  const db = readDB();
  const user = db.users.find((u) => u.username === username || u.email === username);

  if (!user) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }

  const isMatch = bcrypt.compareSync(password, user.passwordHash);
  if (!isMatch) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({
    token,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    },
  });
});

app.get("/api/auth/me", authenticateAdmin, (req, res) => {
  const userId = (req as any).user.id;
  const db = readDB();
  const user = db.users.find((u) => u.id === userId);
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  res.json({
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
  });
});

// Leadership Endpoints
app.get("/api/leadership", (req, res) => {
  const db = readDB();
  const { all } = req.query;
  let list = db.leadershipProfiles || [];
  if (all !== "true") {
    list = list.filter((l) => l.isPublished);
  }
  list = [...list].sort((a, b) => (a.displayOrder || 1) - (b.displayOrder || 1));
  res.json(list);
});

app.get("/api/leadership/:id", (req, res) => {
  const db = readDB();
  const idOrDesignation = req.params.id.toLowerCase();
  const list = db.leadershipProfiles || [];

  const profile = list.find(
    (l) =>
      l.id.toLowerCase() === idOrDesignation ||
      (idOrDesignation === "founder" && l.designation === "FOUNDER") ||
      ((idOrDesignation === "co-founder" || idOrDesignation === "cofounder") && l.designation === "CO_FOUNDER")
  );

  if (!profile) {
    res.status(404).json({ error: "Leadership profile not found" });
    return;
  }
  res.json(profile);
});

app.post("/api/leadership", authenticateAdmin, (req, res) => {
  const {
    designation,
    displayName,
    roleTitle,
    roleTitleTamil,
    shortBio,
    fullBiography,
    profileImage,
    coverImage,
    visionStatement,
    philosophy,
    quote,
    displayOrder,
    isPublished,
    projects,
    socialLinks,
  } = req.body;

  if (!displayName) {
    res.status(400).json({ error: "Display name is required" });
    return;
  }

  const db = readDB();
  if (!db.leadershipProfiles) db.leadershipProfiles = [];

  const newProfile = {
    id: `lead-${Date.now()}`,
    designation: designation || "FOUNDER",
    displayName,
    roleTitle: roleTitle || "Community Steward",
    roleTitleTamil: roleTitleTamil || "",
    shortBio: shortBio || "",
    fullBiography: fullBiography || "",
    profileImage: profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    coverImage: coverImage || "",
    visionStatement: visionStatement || "",
    philosophy: philosophy || "",
    quote: quote || "",
    displayOrder: Number(displayOrder) || 1,
    isPublished: isPublished ?? true,
    projects: Array.isArray(projects) ? projects : [],
    socialLinks: socialLinks || {},
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  db.leadershipProfiles.push(newProfile);
  writeDB(db);
  res.status(201).json(newProfile);
});

app.put("/api/leadership/:id", authenticateAdmin, (req, res) => {
  const db = readDB();
  if (!db.leadershipProfiles) db.leadershipProfiles = [];
  const index = db.leadershipProfiles.findIndex((l) => l.id === req.params.id);
  if (index === -1) {
    res.status(404).json({ error: "Leadership profile not found" });
    return;
  }

  const existing = db.leadershipProfiles[index];
  const updated = {
    ...existing,
    ...req.body,
    updatedAt: new Date().toISOString(),
  };

  db.leadershipProfiles[index] = updated;
  writeDB(db);
  res.json(updated);
});

app.delete("/api/leadership/:id", authenticateAdmin, (req, res) => {
  const db = readDB();
  if (!db.leadershipProfiles) db.leadershipProfiles = [];
  const index = db.leadershipProfiles.findIndex((l) => l.id === req.params.id);
  if (index === -1) {
    res.status(404).json({ error: "Leadership profile not found" });
    return;
  }
  db.leadershipProfiles.splice(index, 1);
  writeDB(db);
  res.json({ message: "Leadership profile deleted successfully" });
});

// Blog Endpoints
app.get("/api/blog", (req, res) => {
  const db = readDB();
  const { category, search, includeUnpublished } = req.query;

  let posts = db.blogPosts;

  // Filter unpublished for public queries
  if (includeUnpublished !== "true") {
    posts = posts.filter((p) => p.published);
  }

  if (category && typeof category === "string" && category !== "All") {
    posts = posts.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }

  if (search && typeof search === "string" && search.trim() !== "") {
    const q = search.toLowerCase();
    posts = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        (p.titleTamil && p.titleTamil.toLowerCase().includes(q)) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.content.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  // Sort latest first
  posts = [...posts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  res.json(posts);
});

app.get("/api/blog/:id", (req, res) => {
  const db = readDB();
  const post = db.blogPosts.find((p) => p.id === req.params.id || p.slug === req.params.id);
  if (!post) {
    res.status(404).json({ error: "Blog post not found" });
    return;
  }
  res.json(post);
});

app.post("/api/blog", authenticateAdmin, (req, res) => {
  const { title, titleTamil, content, excerpt, imageUrl, author, category, tags, readTime, published } = req.body;

  if (!title || !content) {
    res.status(400).json({ error: "Title and content are required" });
    return;
  }

  const db = readDB();
  const id = `post-${Date.now()}`;
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  const newPost = {
    id,
    title,
    titleTamil: titleTamil || "",
    slug: `${slug}-${Math.floor(Math.random() * 1000)}`,
    content,
    excerpt: excerpt || content.slice(0, 150) + "...",
    imageUrl: imageUrl || "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
    author: author || "Iyalvanam Core Circle",
    category: category || "Community Updates",
    tags: Array.isArray(tags) ? tags : ["Iyalvanam", "Nature"],
    readTime: readTime || "4 min read",
    published: published ?? true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  db.blogPosts.unshift(newPost);
  writeDB(db);

  res.status(201).json(newPost);
});

app.put("/api/blog/:id", authenticateAdmin, (req, res) => {
  const db = readDB();
  const index = db.blogPosts.findIndex((p) => p.id === req.params.id);
  if (index === -1) {
    res.status(404).json({ error: "Blog post not found" });
    return;
  }

  const existing = db.blogPosts[index];
  const { title, titleTamil, content, excerpt, imageUrl, author, category, tags, readTime, published } = req.body;

  const updatedPost = {
    ...existing,
    title: title ?? existing.title,
    titleTamil: titleTamil ?? existing.titleTamil,
    content: content ?? existing.content,
    excerpt: excerpt ?? existing.excerpt,
    imageUrl: imageUrl ?? existing.imageUrl,
    author: author ?? existing.author,
    category: category ?? existing.category,
    tags: Array.isArray(tags) ? tags : existing.tags,
    readTime: readTime ?? existing.readTime,
    published: published ?? existing.published,
    updatedAt: new Date().toISOString(),
  };

  db.blogPosts[index] = updatedPost;
  writeDB(db);

  res.json(updatedPost);
});

app.delete("/api/blog/:id", authenticateAdmin, (req, res) => {
  const db = readDB();
  const index = db.blogPosts.findIndex((p) => p.id === req.params.id);
  if (index === -1) {
    res.status(404).json({ error: "Blog post not found" });
    return;
  }

  db.blogPosts.splice(index, 1);
  writeDB(db);

  res.json({ message: "Blog post deleted successfully" });
});

// Member Inquiries (Join Us)
app.post("/api/join", (req, res) => {
  const { name, email, phone, skills, areaOfContribution, numberOfMembers, preferredInteractionMethod, message } = req.body;

  if (!name || !email || !phone || !message) {
    res.status(400).json({ error: "Name, email, phone, and message are required" });
    return;
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ error: "Please provide a valid email address" });
    return;
  }

  const db = readDB();
  const inquiry = {
    id: `inq-${Date.now()}`,
    name,
    email,
    phone,
    skills: skills || "",
    areaOfContribution: areaOfContribution || "",
    numberOfMembers: Number(numberOfMembers) || 1,
    preferredInteractionMethod: preferredInteractionMethod || "In-person visit",
    message,
    status: "PENDING" as const,
    submittedAt: new Date().toISOString(),
  };

  db.memberInquiries.unshift(inquiry);
  writeDB(db);

  res.status(201).json({
    message: "Thank you for reaching out to Iyalvanam. We have received your inquiry and will connect with you soon.",
    inquiry,
  });
});

app.get("/api/inquiries/members", authenticateAdmin, (req, res) => {
  const db = readDB();
  res.json(db.memberInquiries);
});

app.put("/api/inquiries/members/:id/status", authenticateAdmin, (req, res) => {
  const { status, notes } = req.body;
  const db = readDB();
  const inquiry = db.memberInquiries.find((i) => i.id === req.params.id);
  if (!inquiry) {
    res.status(404).json({ error: "Member inquiry not found" });
    return;
  }

  if (status && ["PENDING", "CONTACTED", "JOINED"].includes(status)) {
    inquiry.status = status;
  }
  if (notes !== undefined) {
    inquiry.notes = notes;
  }

  writeDB(db);
  res.json(inquiry);
});

app.delete("/api/inquiries/members/:id", authenticateAdmin, (req, res) => {
  const db = readDB();
  const index = db.memberInquiries.findIndex((i) => i.id === req.params.id);
  if (index === -1) {
    res.status(404).json({ error: "Member inquiry not found" });
    return;
  }
  db.memberInquiries.splice(index, 1);
  writeDB(db);
  res.json({ message: "Member inquiry deleted successfully" });
});

// Contact Inquiries
app.post("/api/contact", (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    res.status(400).json({ error: "Name, email, subject, and message are required" });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ error: "Please provide a valid email address" });
    return;
  }

  const db = readDB();
  const contact = {
    id: `cnt-${Date.now()}`,
    name,
    email,
    phone: phone || "",
    subject,
    message,
    submittedAt: new Date().toISOString(),
    responded: false,
  };

  db.contactInquiries.unshift(contact);
  writeDB(db);

  res.status(201).json({
    message: "Your message has been sent successfully. We will get back to you shortly.",
    contact,
  });
});

app.get("/api/inquiries/contacts", authenticateAdmin, (req, res) => {
  const db = readDB();
  res.json(db.contactInquiries);
});

app.delete("/api/inquiries/contacts/:id", authenticateAdmin, (req, res) => {
  const db = readDB();
  const index = db.contactInquiries.findIndex((c) => c.id === req.params.id);
  if (index === -1) {
    res.status(404).json({ error: "Contact inquiry not found" });
    return;
  }
  db.contactInquiries.splice(index, 1);
  writeDB(db);
  res.json({ message: "Contact inquiry deleted successfully" });
});

// Donations & Support Pledges
app.post("/api/donate", (req, res) => {
  const { donorName, donorEmail, amount, type, description } = req.body;

  if (!donorName || !donorEmail || !type) {
    res.status(400).json({ error: "Donor name, email, and support type are required" });
    return;
  }

  const db = readDB();
  const donation = {
    id: `don-${Date.now()}`,
    donorName,
    donorEmail,
    amount: amount ? Number(amount) : undefined,
    type,
    description: description || "",
    status: "PENDING" as const,
    createdAt: new Date().toISOString(),
  };

  db.donations.unshift(donation);
  writeDB(db);

  res.status(201).json({
    message: "Thank you for supporting Iyalvanam. Your support pledge has been recorded. Our team will coordinate next steps with you.",
    donation,
  });
});

app.get("/api/donations", authenticateAdmin, (req, res) => {
  const db = readDB();
  res.json(db.donations);
});

app.put("/api/donations/:id/status", authenticateAdmin, (req, res) => {
  const { status } = req.body;
  const db = readDB();
  const donation = db.donations.find((d) => d.id === req.params.id);
  if (!donation) {
    res.status(404).json({ error: "Donation record not found" });
    return;
  }

  if (status && ["PENDING", "RECEIVED"].includes(status)) {
    donation.status = status;
  }

  writeDB(db);
  res.json(donation);
});

app.delete("/api/donations/:id", authenticateAdmin, (req, res) => {
  const db = readDB();
  const index = db.donations.findIndex((d) => d.id === req.params.id);
  if (index === -1) {
    res.status(404).json({ error: "Donation record not found" });
    return;
  }
  db.donations.splice(index, 1);
  writeDB(db);
  res.json({ message: "Donation record deleted successfully" });
});

// Admin Dashboard Overview Stats
app.get("/api/stats", authenticateAdmin, (req, res) => {
  const db = readDB();
  const totalBlogPosts = db.blogPosts.length;
  const publishedPosts = db.blogPosts.filter((p) => p.published).length;
  const pendingMemberInquiries = db.memberInquiries.filter((i) => i.status === "PENDING").length;
  const totalMemberInquiries = db.memberInquiries.length;
  const contactInquiries = db.contactInquiries.length;
  const donationRecords = db.donations.length;
  const totalPledgedAmount = db.donations.reduce((acc, curr) => acc + (curr.amount || 0), 0);
  const receivedDonationsCount = db.donations.filter((d) => d.status === "RECEIVED").length;

  res.json({
    totalBlogPosts,
    publishedPosts,
    pendingMemberInquiries,
    totalMemberInquiries,
    contactInquiries,
    donationRecords,
    totalPledgedAmount,
    receivedDonationsCount,
  });
});

// Informational Endpoints
app.get("/api/about", (req, res) => {
  res.json({
    name: "Iyalvanam Iyarkai Vazhviyal Koodam",
    nameTamil: "இயல்வனம் இயற்கை வாழ்வியல் கூடம்",
    tagline: "Return to nature as much as possible",
    taglineTamil: "இயன்ற வரை இயற்கைக்கு திரும்புவோம்",
    location: "Dharmapuramadam, Tenkasi District, Tamil Nadu, India",
    foundations: [
      "Non-Artificial Living",
      "Interconnected Life",
      "Collective Existence",
      "Return to Natural State",
      "Forest as a Model",
    ],
  });
});

// Start full-stack server
async function startServer() {
  // Connect to MySQL
  try {
    const initialData = readDB();
    await initMySQL(initialData);
  } catch (dbErr) {
    console.error("Database initialization warning:", dbErr);
  }

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🌿 Iyalvanam server running on http://0.0.0.0:${PORT}`);
    console.log(`📦 Database: MySQL (${getMySQLConfig().database} @ ${getMySQLConfig().host}:${getMySQLConfig().port})`);
  });
}

startServer();
