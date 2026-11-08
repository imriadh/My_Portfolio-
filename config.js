/* ============================================================================
   RIAD HOSSAIN — PORTFOLIO PROFILE CONFIGURATION
   ----------------------------------------------------------------------------
   ⭐ THE ONE VALUE YOU NEED TO CHANGE WHEN APPLYING FOR DIFFERENT ROLES ⭐

   Set ACTIVE_PROFILE to exactly one of:

       "ai"     → AI Engineer        (Applied AI · Automation · AI products)
       "data"   → Data Science       (Python · Analytics · Machine learning)
       "devops" → Cloud / DevOps     (Deployment · CI/CD · Infrastructure)

   Changing this single value automatically updates:
     • Hero headline, professional title & introduction
     • About section positioning
     • Featured project ordering (and profile-specific descriptions)
     • Technical focus / skills groups
     • Calls to action and profile labels

   Nothing else needs to be edited. The default is "ai".

   TIP: you can also preview a mode without touching this file by opening
        the site with ?profile=data  (or ?profile=devops) in the URL.
        Preview never overwrites this source configuration.
============================================================================ */

const ACTIVE_PROFILE = "ai";

/* ----------------------------------------------------------------------------
   Site facts (used across the site — edit rarely)
---------------------------------------------------------------------------- */
const SITE = {
  name: "Riad Hossain",
  location: "Dhaka, Bangladesh",
  email: "mdriad.alone@gmail.com",
  github: "https://github.com/imriadh",
  linkedin: "https://www.linkedin.com/in/riad-hossain-576316289/",
  domain: "https://riad.iam.bd",

  // Availability indicator — shown only when true.
  // Keep it accurate: it currently reflects "open to internships and
  // junior developer roles", as stated on the previous version of the site.
  available: true,
  availabilityText: "Open to internships & junior developer roles",
};

/* ----------------------------------------------------------------------------
   The three professional positioning modes
---------------------------------------------------------------------------- */
const PROFILES = {

  /* ----------------------------- MODE A: AI ------------------------------ */
  ai: {
    mode: "ai",
    title: "AI Engineer",
    kicker: "Applied AI · Automation · AI-powered products",
    headline: 'I build <em>AI-powered</em> products that solve real business problems.',
    intro:
      "I'm Riad Hossain — a software developer and Computer Science student in Dhaka. " +
      "I put AI to work inside real software: an AI sales analyst that never invents numbers, " +
      "a privacy-first habit coach, a language model deployed online — and the business tools built around them.",
    aboutLede:
      "I like the part where AI becomes useful — not a demo on a slide, but a feature inside a product a real person can open and use.",
    aboutBody:
      "Most of my projects start with a practical problem: a pharmacy losing track of expiring medicine, a freelancer losing leads to slow quotes, a habit tracker that nags too hard. I build the software that fixes them, and where it genuinely helps, I wire in AI — LLM APIs with strict guardrails, classification models, automation. I care that the AI is honest: it should calculate when it can calculate, and only generate when generating is safe.",
    workLabel: "AI-powered products",
    ctaPrimary: "Explore AI projects",
    focusHeading: "Technical focus",
    focusNote: "What I work with in applied-AI mode — everything below is used in real, public projects.",
    skills: [
      {
        group: "AI & LLM integration",
        items: ["LLM API integration (Groq, OpenAI-compatible, Z.ai)", "Prompt design with anti-hallucination guardrails", "Multi-provider AI fallbacks", "AI feature UX (email drafting, Q&A, coaching)"],
      },
      {
        group: "Machine learning",
        items: ["Python", "scikit-learn", "TF-IDF + Linear SVM", "DistilBERT (deployed on Hugging Face Spaces)", "pandas · NumPy", "Jupyter"],
      },
      {
        group: "Software engineering",
        items: ["JavaScript · TypeScript", "React", "Node.js · Express", "Next.js", "REST APIs", "SQL · PostgreSQL · Supabase", "HTML · CSS", "Git · GitHub"],
      },
    ],
  },

  /* ---------------------------- MODE B: DATA ----------------------------- */
  data: {
    mode: "data",
    title: "Data Science",
    kicker: "Python · Data analytics · Machine learning",
    headline: 'I turn <em>messy, real-world data</em> into tools people can actually use.',
    intro:
      "I'm Riad Hossain — a software developer and Computer Science student in Dhaka. " +
      "I clean and normalize messy records, train classification models with scikit-learn, " +
      "and wrap the results in working software — from a disaster-tweet classifier to a lead-data quality pipeline.",
    aboutLede:
      "Data is only useful when it survives contact with reality — typos, duplicates, impossible dates and all.",
    aboutBody:
      "My data work is grounded in real datasets: 25 messy corporate leads turned into a queryable, deduplicated pipeline with a Python audit script cross-checking every number, and the Kaggle disaster-tweets dataset turned into a deployed classifier. I care about the unglamorous parts — validation, reproducibility, honest evaluation — because that is what makes analysis trustworthy. Software is how I deliver the results, so people use them instead of reading a report once.",
    workLabel: "Data & ML projects",
    ctaPrimary: "Explore data projects",
    focusHeading: "Technical focus",
    focusNote: "What I work with in data mode — everything below is used in real, public projects.",
    skills: [
      {
        group: "Data analysis",
        items: ["Python", "pandas", "NumPy", "Jupyter Notebooks", "Exploratory data analysis", "Data visualization"],
      },
      {
        group: "Machine learning",
        items: ["scikit-learn", "TF-IDF + Linear SVM", "DistilBERT (deployed on Hugging Face Spaces)", "Model training & evaluation", "Streamlit model apps"],
      },
      {
        group: "Data engineering & SQL",
        items: ["SQL", "PostgreSQL · Supabase", "Data cleaning & normalization", "Duplicate detection & validation", "SQLite", "Schema design"],
      },
    ],
  },

  /* ---------------------------- MODE C: DEVOPS --------------------------- */
  devops: {
    mode: "devops",
    title: "Cloud & DevOps",
    kicker: "Cloud engineering · DevOps · Automation",
    headline: 'I take software from code to <em>running product</em> — and keep it running.',
    intro:
      "I'm Riad Hossain — a software developer and Computer Science student in Dhaka. " +
      "I deploy real applications on Cloudflare Workers and Render, automate builds with GitHub Actions, " +
      "containerize environments with Docker, and run this site on a custom domain with CI/CD.",
    aboutLede:
      "A project isn't finished when it works on my machine — it's finished when someone else can open it.",
    aboutBody:
      "Everything I build ends up deployed and publicly reachable: business apps served from Cloudflare Workers, a proposal portal on Render, a model on Hugging Face Spaces, and this portfolio shipped by a GitHub Actions workflow to GitHub Pages with a custom domain. I like the details that keep it that way — reproducible builds, Makefiles, Docker images, keys kept server-side and out of client code. I'm cautious about what I claim: this is deployment and automation of real products, not enterprise infrastructure operations.",
    workLabel: "Deployed & automated",
    ctaPrimary: "Explore deployed projects",
    focusHeading: "Technical focus",
    focusNote: "What I work with in cloud/DevOps mode — everything below is used in real, public deployments.",
    skills: [
      {
        group: "Deployment & hosting",
        items: ["Cloudflare Workers (3 live product deployments)", "Render", "GitHub Pages + custom domain", "Hugging Face Spaces"],
      },
      {
        group: "Automation & CI/CD",
        items: ["Git · GitHub", "GitHub Actions (CI/CD)", "Makefile build automation", "Maven builds", "Release workflows"],
      },
      {
        group: "Infrastructure basics",
        items: ["Linux", "Docker (containerized builds)", "Caddy", "DNS & custom domains", "Server-side secrets management", "HTML/CSS/JS static hosting"],
      },
    ],
  },
};

/* Expose nothing globally beyond these constants. */
