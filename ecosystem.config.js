/**
 * ecosystem.config.js
 * Single Source of Truth for Adarsh Pawaskar's Architecture Ecosystem
 * Governs metadata, projects, keywords, and credentials across all portals.
 */
const ECOSYSTEM_CONFIG = {
  profile: {
    name: "Adarsh Pawaskar",
    primaryRole: "Staff Software Engineer & Cloud-Native Systems Architect",
    seniorityScope: "Senior Staff Engineer • Technical Lead • Distributed Systems Architect",
    currentTitle: "Senior Staff Engineer at Nagarro",
    tenure: "11+ YRS",
    bio: "Architecting, scaling, and operating high-throughput distributed systems, event-driven messaging fabrics, cloud-native container platforms, and enterprise federated identity ecosystems across mission-critical domains.",
    runtimeBio: "Unifying deep backend systems rigor (.NET 10, Kafka, Vector Search) with first-principles browser runtime laboratories (React 19 Fiber & Angular 19 Signals) to eliminate cross-boundary latency, state drift, and architectural impedance mismatch between cloud backends and client runtimes.",
    links: {
      github: "https://github.com/adarshsince90",
      linkedin: "https://www.linkedin.com/in/adarshpawaskar/",
      email: "mailto:adarshsince90@gmail.com",
      gateway: "https://adarshsince90.github.io/"
    }
  },

  projects: [
    {
      id: "rag-dotnet",
      name: "Conversational RAG Engine",
      navLabel: "RAG Engine",
      subName: ".NET 10 Retrieval Platform",
      code: "rag-dotnet",
      badge: ".NET 10 / GenAI",
      icon: "⚡",
      stack: "C# / .NET 10, Qdrant, Groq",
      focus: "Clean Architecture, Vector Search, SSE Streaming & 13 ADRs",
      url: "https://adarshsince90.github.io/rag-dotnet/#overview",
      repo: "https://github.com/adarshsince90/rag-dotnet",
      category: "AI & Distributed Backend",
      tags: ["C# / .NET 10", "Qdrant Vector DB", "Ollama & Groq", "Clean Architecture", "13 ADRs"],
      description: "A conversational Retrieval-Augmented Generation (RAG) platform built from first principles in .NET 10, adhering strictly to Clean Architecture, Dependency Inversion, and automated evaluation gates. Built progressively from raw mathematical foundations (TF-IDF vectorization and custom cosine similarity) up to a persistent vector database with HNSW indexing.",
      highlights: [
        { label: "Multi-Provider Inference", text: "Seamless runtime switching between private local inference (Ollama) and high-throughput cloud LLMs (Groq)." },
        { label: "Memory & Streaming", text: "Multi-turn sliding context window with token-level Server-Sent Events (SSE) via ASP.NET Core IAsyncEnumerable." },
        { label: "Automated Evaluation Suite", text: "Integrated 12-question benchmark suite measuring groundedness, relevance, and latency backed by 13 documented ADRs." },
        { label: "Companion Portal", text: "Hosted interactive architecture hub with live query visualizers and 16 architectural assessment guides." }
      ]
    },
    {
      id: "ai-fullstack-architecture-hub",
      name: "AI Full-Stack Architecture Hub",
      navLabel: "AI Systems Hub",
      subName: "Visual System Design Simulator",
      code: "ai-arch-hub",
      badge: "Systems Design",
      icon: "🏛️",
      stack: "Vanilla ES6+, CSS3, HTML5",
      focus: "9 Interactive Simulators (Saga, OAuth2 PKCE, Event Loop)",
      url: "https://adarshsince90.github.io/ai-fullstack-architecture-hub/",
      repo: "https://github.com/adarshsince90/ai-fullstack-architecture-hub",
      category: "Systems Architecture",
      tags: ["Vanilla ES6+", "Zero-Dep Native APIs", "9 Simulators", "Distributed Systems"],
      description: "An open-source visual simulation platform and architecture knowledge base for Staff Engineers, Technical Leads, and Distributed Systems Architects. Built entirely with native browser APIs (zero npm runtimes) for instant loading, deterministic execution, and GitHub Pages hosting.",
      highlights: [
        { label: "9 Visual Simulators", text: "Client-side playgrounds for Event Loop microtasks, Distributed Saga orchestrations, and OAuth2 PKCE token handoffs." },
        { label: "24 Architectural Guides", text: "Deep dives into C# 12/13 internals, DDD/CQRS, AWS/Azure cloud topologies, and Fiber vs Signals execution models." },
        { label: "Systems Search Index", text: "292-term engineering index with client-side AI assistant and localized progress tracking." },
        { label: "Zero Abstraction Leaks", text: "Pure CSS3 and native DOM pipelines executing without external bundle overhead." }
      ]
    },
    {
      id: "react-interview-prep",
      name: "React 19 Runtime Portal",
      navLabel: "React 19 Lab",
      subName: "Execution Internals Laboratory",
      code: "react-prep",
      badge: "React 19 / Fiber",
      icon: "⚛️",
      stack: "React 19, TS, Vite",
      focus: "Fiber Reconciliation, Concurrency, Closure Traps & RSC",
      url: "https://adarshsince90.github.io/react-interview-prep/",
      repo: "https://github.com/adarshsince90/react-interview-prep",
      category: "Frontend Runtime Internals",
      tags: ["React 19 & Vite", "Fiber Work Loop", "Microtasks"],
      description: "Dissecting JavaScript execution contexts, the V8 microtask queue, Fiber reconciliation, and Concurrent Mode scheduling from the inside out.",
      highlights: [
        { label: "Call Stack vs Microtasks", text: "Event loop prioritization and macrotask scheduling boundaries." },
        { label: "Fiber Tree Internals", text: "Cooperative multitasking, lanes priority, and work loop scheduling." },
        { label: "Closure State Traps", text: "Memory references, stale closure models, and reconciliation trees." },
        { label: "Cross-Platform Bridge", text: "Translating concepts directly for enterprise .NET (async/Task) and Angular engineers." }
      ]
    },
    {
      id: "angular-interview-prep",
      name: "Angular Enterprise Architecture",
      navLabel: "Angular 19+",
      subName: "Signals & Zoneless Laboratory",
      code: "angular-prep",
      badge: "Angular 19+ / Signals",
      icon: "🅰️",
      stack: "Angular 19+, Signals, RxJS",
      focus: "Signal Primitives, Zoneless CD, OnPush, Micro-Frontends",
      url: "https://adarshsince90.github.io/angular-interview-prep/",
      repo: "https://github.com/adarshsince90/angular-interview-prep",
      category: "Frontend Runtime Internals",
      tags: ["Angular 19+ & Signals", "Zoneless CD", "Hierarchical DI"],
      description: "Enterprise architecture portal breaking down Signal primitives, fine-grained reactivity graphs, and Zoneless change detection scheduling.",
      highlights: [
        { label: "Reactive Primitives", text: "Direct breakdown of computed, effect, and linkedSignal." },
        { label: "Zoneless Scheduling", text: "Eliminating Zone.js runtime monkey-patching for OnPush optimization." },
        { label: "Hierarchical DI", text: "Element Injector vs Environment Injector trees and resolution algorithms." },
        { label: "Enterprise Integration", text: "Micro-frontends (Module Federation) and OIDC token handoffs." }
      ]
    },
    {
      id: "resumatch-ai",
      name: "ResuMatch AI",
      navLabel: "ResuMatch AI",
      subName: "Zero-PII Client-Side AI ATS",
      code: "resumatch-ai",
      badge: "Client-Side AI",
      icon: "🤖",
      stack: "React 19, IndexedDB, Groq",
      focus: "Zero-PII Client-Side AI ATS & Vector PDF Generator",
      url: "https://resumatch-ai-ruby.vercel.app/",
      repo: null,
      category: "Client AI App",
      tags: ["React 19 & TypeScript", "IndexedDB (LocalForage)", "Groq Llama 3.3", "Vector PDF Generator"],
      description: "Engineered with a strict Zero-PII Privacy Architecture: 100% of candidate data resides exclusively in the browser's IndexedDB storage with zero telemetry or profile persistence on external servers.",
      highlights: [
        { label: "Dual ATS Match Engine", text: "Multi-metric scoring (keyword density, formatting audit, structural validation) with pixel-perfect vector PDF output." },
        { label: "Streaming LLM Inference", text: "Multi-model BYOK streaming via Groq Llama 3.3 and Gemini REST APIs." },
        { label: "Test Suite Rigor", text: "139 Vitest unit tests and 65 Playwright E2E specs running in automated CI/CD." },
        { label: "Zero Backend Footprint", text: "Completely serverless client-side operational model." }
      ]
    }
  ],

  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      provider: "Amazon Web Services (AWS)",
      issued: "June 2021",
      validity: "June 2021 – June 2024",
      category: "Multi-Cloud & Architecture",
      categoryKey: "cloud",
      badge: "AWS",
      icon: "☁️",
      skills: ["AWS Cloud Architecture", "Security & Compliance", "Cloud Economics"]
    },
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      provider: "Microsoft",
      issued: "June 2021",
      validity: "Active Credential",
      category: "Multi-Cloud & Architecture",
      categoryKey: "cloud",
      badge: "Azure",
      icon: "🛡️",
      skills: ["Microsoft Azure", "Cloud Concepts", "Security, Privacy & Trust"]
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      provider: "Amazon Web Services (AWS)",
      issued: "January 2021",
      validity: "Completed",
      category: "Multi-Cloud & Architecture",
      categoryKey: "cloud",
      badge: "AWS",
      icon: "☁️",
      skills: ["AWS Global Infrastructure", "Cloud Core Services", "Billing & Pricing"]
    },
    {
      title: "The OWASP Top 10 Demystified",
      provider: "Udemy",
      issued: "March 2022",
      validity: "Credential ID: UC-delb32d8-66ac-45f2-a112-0306d7ae71d8",
      credentialId: "UC-delb32d8-66ac-45f2-a112-0306d7ae71d8",
      category: "Application Security & Governance",
      categoryKey: "security",
      badge: "OWASP",
      icon: "🔒",
      skills: ["OWASP Top 10", "Threat Modeling", "Vulnerability Mitigation", "AppSec"]
    },
    {
      title: "Building Apps with AI Tools: ChatGPT, Semantic Kernel, and LangChain",
      provider: "LinkedIn Learning",
      issued: "December 2023",
      validity: "Active Credential",
      category: "Applied Generative AI",
      categoryKey: "genai",
      badge: "GenAI",
      icon: "🧠",
      skills: ["Semantic Kernel", "LangChain", "ChatGPT", "LLM Orchestration"]
    },
    {
      title: "Learning AI with GitHub Copilot",
      provider: "LinkedIn Learning",
      issued: "December 2023",
      validity: "Active Credential",
      category: "Applied Generative AI",
      categoryKey: "genai",
      badge: "AI Tooling",
      icon: "🤖",
      skills: ["GitHub Copilot", "AI Pair Programming", "Context Grounding"]
    },
    {
      title: "Pair Programming with AI",
      provider: "LinkedIn Learning",
      issued: "December 2023",
      validity: "Active Credential",
      category: "Applied Generative AI",
      categoryKey: "genai",
      badge: "AI Tooling",
      icon: "👥",
      skills: ["AI-Assisted Engineering", "Prompt Engineering", "ChatGPT"]
    },
    {
      title: "UX for AI: Design Practices for AI Developers",
      provider: "LinkedIn Learning",
      issued: "December 2023",
      validity: "Active Credential",
      category: "Applied Generative AI",
      categoryKey: "genai",
      badge: "AI UX",
      icon: "🎨",
      skills: ["Human-in-the-Loop UX", "AI Interaction Patterns", "Generative UX"]
    },
    {
      title: "Reimagine Software Development Life Cycle (SDLC) with AI",
      provider: "Udemy",
      issued: "March 2026",
      validity: "Active Credential",
      category: "Applied Generative AI",
      categoryKey: "genai",
      badge: "AI SDLC",
      icon: "⚡",
      skills: ["AI-Driven SDLC", "Automated Engineering", "Velocity Acceleration"]
    },
    {
      title: "Generative AI for Beginners: Fundamentals, Tools & Prompts",
      provider: "Udemy",
      issued: "March 2026",
      validity: "Active Credential",
      category: "Applied Generative AI",
      categoryKey: "genai",
      badge: "GenAI",
      icon: "💡",
      skills: ["Prompt Engineering", "Generative AI Primitives", "Tool Grounding"]
    },
    {
      title: "Using AI Imagery for Illustration and Design",
      provider: "LinkedIn Learning",
      issued: "December 2023",
      validity: "Active Credential",
      category: "Applied Generative AI",
      categoryKey: "genai",
      badge: "AI Design",
      icon: "🖼️",
      skills: ["AI Imagery", "Diffusion Models", "Visual Design"]
    },
    {
      title: "C# (Basic)",
      provider: "HackerRank",
      issued: "February 2021",
      validity: "Verified Skills Assessment",
      category: "Language & Algorithmic Foundations",
      categoryKey: "core",
      badge: "C#",
      icon: "💻",
      skills: ["C#", "OOP", "Full-Stack Development"]
    },
    {
      title: "Problem Solving (Basic)",
      provider: "HackerRank",
      issued: "February 2021",
      validity: "Verified Skills Assessment",
      category: "Language & Algorithmic Foundations",
      categoryKey: "core",
      badge: "Algorithms",
      icon: "🧩",
      skills: ["Data Structures", "Algorithms", "Time Complexity"]
    }
  ],

  experience: [
    {
      role: "Senior Staff Engineer / Systems Architect",
      company: "Nagarro",
      domain: "Global Commodities Intelligence Platform",
      period: "Feb 2022 – Present",
      tenureBadge: "Current • Staff Level",
      highlights: [
        "Architected centralized authentication and authorization infrastructure using Auth0 SaaS and OIDC with Duende IdentityServer.",
        "Engineered secure proxy session propagation services ensuring token handover and zero-trust verification across independent microservices.",
        "Designed high-throughput .NET 8 / .NET 10 distributed microservices processing low-latency financial market datasets.",
        "Formulated enterprise GenAI and RAG patterns with Qdrant vector retrieval and entitlement-aware context scoping.",
        "Governed engineering lifecycle across pods, authoring ADRs and automating TeamCity / Octopus CI/CD pipelines."
      ]
    },
    {
      role: "Development Engineer",
      company: "KAS Services (Kmart Australia)",
      domain: "Enterprise Merchandise Planning & Forecasting Platform",
      period: "Jan 2021 – Feb 2022",
      tenureBadge: "1 Year",
      highlights: [
        "Architected and engineered backend microservices utilizing .NET Core for large-scale retail logistics forecasting.",
        "Streamlined CI/CD automation pipelines, refactored database bottlenecks, and hardened service boundary contracts.",
        "Collaborated with product leadership and business analysts to translate complex inventory logic into scalable services."
      ]
    },
    {
      role: "Software Developer / Senior Developer",
      company: "Aptean",
      domain: "Enterprise Complaint Management & SLA Platform",
      period: "Feb 2018 – Jan 2021",
      tenureBadge: "3 Years",
      highlights: [
        "Migrated legacy enterprise monolith to .NET Core and AWS serverless (Lambda, API Gateway), reducing hosting overhead by ~30%.",
        "Developed configurable state-machine workflow systems for enterprise complaint resolution and SLA tracking.",
        "Integrated AI sentiment and text intelligence APIs to automatically categorize incoming customer tickets.",
        "Mentored developer squads and introduced automated unit/integration test suites across core repositories."
      ]
    },
    {
      role: "Software Engineer",
      company: "QuickMove Technologies",
      domain: "Enterprise CRM / ERP Relocation Management Platform",
      period: "May 2015 – Feb 2018",
      tenureBadge: "3 Years",
      highlights: [
        "Engineered core backend service layers and SQL Server relational schemas for enterprise logistics workflows.",
        "Built bidirectional real-time synchronization between mobile field clients and central database clusters.",
        "Coordinated API delivery standards across frontend, backend, and native mobile development squads."
      ]
    }
  ]
};

// Export for module systems (Node / ES6) and global window
if (typeof window !== "undefined") {
  window.ECOSYSTEM_CONFIG = ECOSYSTEM_CONFIG;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = ECOSYSTEM_CONFIG;
}
