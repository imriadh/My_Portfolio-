/* ============================================================================
   RIAD HOSSAIN — PROJECT DATA
   ----------------------------------------------------------------------------
   Every entry below was verified against the public repository and/or a
   working live deployment (checked November 2026). Nothing here is invented.

   - "live"   → only set when the deployment was verified reachable.
   - "source" → only set for public repositories.
   - "image"  → a REAL screenshot of the running product (assets/projects/).
                Projects without a deployment have no screenshot by design.
   - "desc"   → profile-aware description: key "ai" is the default; the
                "data" and "devops" keys swap in automatically when
                ACTIVE_PROFILE changes (see config.js).
   - "order"  → featured ordering per profile.
============================================================================ */

const PROJECTS = [
  {
    id: "biai",
    name: "BIAI Corporate Intelligence",
    meta: "AI · CRM · Data quality — built for the BIAI AI internship challenge",
    desc: {
      ai: "A corporate sales-pipeline CRM with an AI follow-up-email assistant and a natural-language analyst that answers questions about your deals — designed so the model can never invent records or totals: deterministic calculations first, structured AI queries second.",
      data: "A data-quality machine for 25 messy lead records: normalization, exact & potential duplicate detection, date validation and overdue flagging — cross-checked by a Python audit script that the TypeScript pipeline reproduces exactly (25/25 checks).",
      devops: "A Next.js CRM served live from Cloudflare Workers — AI keys kept server-side only, LLM provider configurable by environment (Z.ai, Groq, OpenRouter, NVIDIA), with a Caddy config for self-hosting.",
    },
    problem: "Sales teams drown in messy lead data, missed follow-ups and guesswork about what matters.",
    contribution: "Designed and built the entire product solo: data pipeline, guarded AI assistant, executive dashboard, data-quality center, and 37 passing unit tests.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Z.ai / Groq LLMs", "Cloudflare Workers", "Bun tests"],
    live: "https://biai-corporate-intelligence.imriad.workers.dev",
    source: "https://github.com/imriadh/biai-corporate-intelligence",
    image: "assets/projects/biai-corporate-intelligence.webp",
    imgAlt: "BIAI Corporate Intelligence web app — landing page reading “Every lead. Every follow-up. One clear pipeline.” with live pipeline statistics",
    imgW: 1360, imgH: 907,
  },
  {
    id: "pharmasuite",
    name: "PharmaSuite BD",
    meta: "Business software · Pharmacy SaaS — Bangladesh",
    desc: {
      ai: "Pharmacy management software for Bangladeshi pharmacies — sales, stock, expiry alerts, purchases and due ledgers in one place, with a 61,800+ medicine catalog and Bangla/English medicine names.",
      data: "A business record-keeping system with the data problems that matter in retail: real-time stock levels, expiry-window alerts, due/ledger tracking and sales reports for thousands of medicine entries.",
      devops: "A full SaaS product served live from Cloudflare Workers — sign-up, free 7-day trial flow and a no-install experience that runs on any phone, tablet or computer.",
    },
    problem: "Independent pharmacies run on paper and memory; expiring medicine and unpaid dues get lost every day.",
    contribution: "Built the product end-to-end — from the sales and inventory workflows to the trial onboarding — and deployed it on Cloudflare Workers.",
    stack: ["Web application", "Cloudflare Workers", "Bangla & English UI", "Inventory & expiry logic"],
    live: "https://pharmasuite-bd.imriad.workers.dev",
    source: null, // repository is private
    image: "assets/projects/pharmasuite-bd.webp",
    imgAlt: "PharmaSuite BD web app — landing page reading “Run your pharmacy the easy way” with feature cards for dashboard, expiry alerts and due ledger",
    imgW: 1360, imgH: 907,
  },
  {
    id: "habitflow",
    name: "HabitFlow",
    meta: "Full-stack product · AI coach — React, Supabase, Groq",
    desc: {
      ai: "A calm, data-driven habit tracker with a private AI coach — the live demo runs with 10 weeks of sample data and no sign-up, entirely in your browser. React + TypeScript frontend, Node.js/Express API, Supabase PostgreSQL with row-level security, and the Groq coach integration.",
      data: "A habit tracker that treats behavior as data: streak algorithms that survive missed days, calendar history and statistics computed from ten weeks of check-in records — explore them in the live demo, pre-loaded with sample data.",
      devops: "A three-tier architecture — React frontend, Node.js/Express API and Supabase PostgreSQL — with schema, row-level security policies and environment-based configuration in version control. The static frontend build is deployed in the live demo.",
    },
    problem: "Most habit apps nag and shame. HabitFlow is designed to be kind, private and honest about missed days.",
    contribution: "Full-stack build: React + TypeScript frontend with hand-written CSS, Express API, Supabase schema with row-level security, and the Groq AI coach integration.",
    stack: ["React", "TypeScript", "Node.js", "Express", "Supabase", "Groq AI"],
    live: "https://riad.iam.bd/habitflow-demo/", // interactive demo — sample data, no login
    source: "https://github.com/imriadh/Habit-Flow",
    image: "assets/projects/habitflow.webp",
    imgAlt: "HabitFlow dashboard — 1 of 5 habits checked in today with a 30% progress ring, streak cards, weekly bar chart and an on-device AI coach insight panel",
    imgW: 1360, imgH: 907,
  },
  {
    id: "disaster-tweet",
    name: "Disaster Tweet Classifier",
    meta: "Machine learning · NLP — trained on the Kaggle disaster-tweets dataset",
    desc: {
      ai: "A natural-language classifier that decides whether a tweet describes a real disaster — a TF-IDF + Linear SVM baseline, then a fine-tuned DistilBERT model deployed publicly on Hugging Face Spaces.",
      data: "The full modeling pipeline on the Kaggle “NLP with Disaster Tweets” dataset: preprocessing, TF-IDF + LinearSVM training and evaluation, with saved model artifacts and a Streamlit inference app.",
      devops: "A trained model shipped to the public internet on Hugging Face Spaces, with a Streamlit app, pinned dependencies and reproducible training artifacts in the repository.",
    },
    problem: "During real emergencies, useful signals drown in ordinary chatter — classifiers help surface them.",
    contribution: "Built the complete pipeline myself: dataset handling, preprocessing, training, evaluation, and a public deployment anyone can try.",
    stack: ["Python", "scikit-learn", "DistilBERT", "Jupyter", "Streamlit", "Hugging Face Spaces"],
    live: "https://riads-disaster-tweet-classification-01.hf.space",
    source: "https://github.com/imriadh/Disaster_Tweet_Classifier",
    image: "assets/projects/disaster-tweet-classifier.webp",
    imgAlt: "Disaster Tweet Classifier app running on Hugging Face Spaces — DistilBERT tweet classification interface",
    imgW: 1360, imgH: 907,
  },
  {
    id: "yaqeen",
    name: "YaqeenPOS",
    meta: "Business software · Point of sale — Bangladesh",
    desc: {
      ai: "A multipurpose point-of-sale system for Bangladeshi shops — sales, stock, dues and reports in Bangla or English, with payment support for cash, bKash, Nagad, Rocket and card.",
      data: "A point-of-sale system built around daily business numbers: live stock counts, sales summaries, due tracking and reporting across different shop types — restaurants, electronics, groceries and more.",
      devops: "A complete POS product delivered from Cloudflare Workers — nothing to install, running in the browser on whatever hardware the shop already owns.",
    },
    problem: "Small shops need POS software that works on the hardware they already own, in their own language, without IT help.",
    contribution: "Built and deployed the full POS product on Cloudflare Workers, from the sales flow to the Bangla-first interface.",
    stack: ["Web application", "Cloudflare Workers", "Bangla & English UI", "Multi-payment workflow"],
    live: "https://yaqeenpos.imriad.workers.dev",
    source: null, // repository is private
    image: "assets/projects/yaqeenpos.webp",
    imgAlt: "YaqeenPOS web app — Bangla landing page for a POS system with a live dashboard preview showing sales, stock and due figures",
    imgW: 1360, imgH: 907,
  },
  {
    id: "studio",
    name: "Riad Creative Studio — Proposals Portal",
    meta: "Client portal · Notion integration — deployed on Render",
    desc: {
      ai: "A premium client-proposal portal where every inquiry is captured as a structured lead — services sync in real time from Notion and each request lands directly in the studio's Notion database.",
      data: "A lead-capture workflow built on structured data: a service catalog loaded live from Notion, bundle-based quote math, and clean lead records written straight into a Notion database.",
      devops: "An Express server deployed live on Render, integrating the Notion API server-side so tokens never reach the browser, with environment-based configuration.",
    },
    problem: "Freelancers lose clients to slow, manual quoting — by the time the proposal arrives, the moment has passed.",
    contribution: "Built the Express server, the Notion API integration (service sync + lead capture) and the editorial quoting interface.",
    stack: ["Node.js", "Express", "Notion API", "Render"],
    live: "https://riad-creative-studio.onrender.com",
    source: "https://github.com/imriadh/Riad-Creative-Studio",
    image: "assets/projects/riad-creative-studio.webp",
    imgAlt: "Riad Creative Studio proposals portal — “Client Proposals” page with a service catalog and a live quote panel",
    imgW: 1360, imgH: 907,
  },
];

/* Featured ordering per profile (ids must exist above). */
const PROJECT_ORDER = {
  ai: ["biai", "pharmasuite", "habitflow", "disaster-tweet", "yaqeen", "studio"],
  data: ["disaster-tweet", "biai", "pharmasuite", "yaqeen", "habitflow", "studio"],
  devops: ["biai", "pharmasuite", "yaqeen", "studio", "habitflow", "disaster-tweet"],
};

/* Smaller verified builds — shown in the “More builds” archive. */
const ARCHIVE_PROJECTS = [
  {
    name: "Docupy",
    line: "Turns AI-generated text into Markdown, PDF or Jupyter notebooks — and notebooks back into Markdown/PDF.",
    stack: "Python · Streamlit · nbformat",
    url: "https://github.com/imriadh/Docupy",
  },
  {
    name: "CofeeShopIMS",
    line: "Desktop POS & inventory system for coffee shops: role-based access, PDF receipts, sales analytics.",
    stack: "Java · Swing · SQLite · Maven",
    url: "https://github.com/imriadh/CofeeShopIMS",
  },
  {
    name: "Compiler-Construction",
    line: "A complete compiler for a C-like language: Flex lexer, Bison parser, hash-chained symbol table, 8086 assembly with a peephole optimizer.",
    stack: "C++ · Flex/Bison · Docker · Makefile",
    url: "https://github.com/imriadh/Compiler-Construction",
  },
];
