/**
 * ecosystem-shell.js
 * Universal Web Components Suite for Adarsh Pawaskar's Architecture Ecosystem
 * 
 * Aesthetic: Quiet, Authoritative, Dignified Staff Engineer Standards
 * Provides:
 *   <adarsh-ecosystem-nav> - Monospace top status & project jump bar
 *   <adarsh-footer>        - Comprehensive architectural systems directory & signature
 */
(function () {
  'use strict';

  // Read from centralized ECOSYSTEM_CONFIG if loaded, or define solid defaults
  const CFG = (typeof window !== 'undefined' && window.ECOSYSTEM_CONFIG) ? window.ECOSYSTEM_CONFIG : {
    profile: {
      name: 'Adarsh Pawaskar',
      primaryRole: 'Staff Software Engineer & Cloud-Native Systems Architect',
      seniorityScope: 'Senior Staff Engineer • Technical Lead • Distributed Systems Architect',
      currentTitle: 'Senior Staff Engineer at Nagarro',
      tenure: '11+ YRS',
      bio: 'Architecting high-throughput distributed systems, event-driven messaging fabrics, multi-cloud container platforms, and first-principles browser runtime laboratories.',
      links: {
        github: 'https://github.com/adarshsince90',
        linkedin: 'https://www.linkedin.com/in/adarshpawaskar/',
        email: 'mailto:adarshsince90@gmail.com',
        gateway: 'https://adarshsince90.github.io/'
      }
    },
    projects: []
  };

  const PROFILE = {
    name: CFG.profile.name,
    role: CFG.profile.primaryRole,
    scope: CFG.profile.seniorityScope,
    currentRole: CFG.profile.currentTitle,
    summary: CFG.profile.bio,
    hubUrl: CFG.profile.links.gateway,
    githubUrl: CFG.profile.links.github,
    linkedinUrl: CFG.profile.links.linkedin,
    emailUrl: CFG.profile.links.email
  };

  const ECOSYSTEM_PROJECTS = (CFG.projects && CFG.projects.length > 0) ? CFG.projects : [
    {
      id: 'rag-dotnet',
      name: 'Conversational RAG Engine',
      navLabel: 'RAG Engine',
      code: 'rag-dotnet',
      stack: '.NET 10 • Qdrant',
      icon: '⚡',
      badge: '.NET 10 / GenAI',
      url: 'https://adarshsince90.github.io/rag-dotnet/#overview',
      repo: 'https://github.com/adarshsince90/rag-dotnet'
    },
    {
      id: 'ai-fullstack-architecture-hub',
      name: 'AI Full-Stack Architecture Hub',
      navLabel: 'AI Systems Hub',
      code: 'ai-arch-hub',
      stack: 'Vanilla JS • 9 Simulators',
      icon: '🏛️',
      badge: 'Systems Design',
      url: 'https://adarshsince90.github.io/ai-fullstack-architecture-hub/',
      repo: 'https://github.com/adarshsince90/ai-fullstack-architecture-hub'
    },
    {
      id: 'react-interview-prep',
      name: 'React 19 Runtime Portal',
      navLabel: 'React 19 Lab',
      code: 'react-prep',
      stack: 'Fiber • Concurrency',
      icon: '⚛️',
      badge: 'React 19 / Fiber',
      url: 'https://adarshsince90.github.io/react-interview-prep/',
      repo: 'https://github.com/adarshsince90/react-interview-prep'
    },
    {
      id: 'angular-interview-prep',
      name: 'Angular 19+ Architecture',
      navLabel: 'Angular 19+',
      code: 'angular-prep',
      stack: 'Signals • Zoneless',
      icon: '🅰️',
      badge: 'Angular 19+ / Signals',
      url: 'https://adarshsince90.github.io/angular-interview-prep/',
      repo: 'https://github.com/adarshsince90/angular-interview-prep'
    },
    {
      id: 'resumatch-ai',
      name: 'ResuMatch AI',
      navLabel: 'ResuMatch AI',
      code: 'resumatch-ai',
      stack: 'Client-Side AI • Zero-PII',
      icon: '🤖',
      badge: 'Client-Side AI',
      url: 'https://resumatch-ai-ruby.vercel.app/',
      repo: null
    }
  ];

  function isProjectActive(project) {
    if (typeof window === 'undefined') return false;
    const current = window.location.href.toLowerCase();
    const projUrl = project.url.toLowerCase();
    return current.includes(project.id) || current.startsWith(projUrl);
  }

  /* -------------------------------------------------------------
   * 1. <adarsh-ecosystem-nav>
   * ------------------------------------------------------------- */
  class AdarshEcosystemNav extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._menuOpen = false;
    }

    connectedCallback() {
      const current = document.documentElement.getAttribute('data-theme') || localStorage.getItem('adarsh_theme') || 'dark';
      this.setAttribute('data-theme', current);
      this.render();
      this.setupListeners();
      window.addEventListener('adarsh-theme-changed', (e) => {
        if (e.detail && e.detail.theme) {
          this.setAttribute('data-theme', e.detail.theme);
        }
      });
    }

    render() {
      const activeProj = ECOSYSTEM_PROJECTS.find(isProjectActive);
      const isGatewayHome = !activeProj && (
        window.location.pathname === '/' || 
        window.location.pathname.endsWith('/index.html') ||
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1'
      );

      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            position: sticky;
            top: 0;
            z-index: 999999;
            font-family: ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Monaco, Consolas, monospace;
            -webkit-font-smoothing: antialiased;
            width: 100%;
          }

          * {
            box-sizing: border-box;
          }

          .nav-bar {
            background: rgba(0, 0, 0, 0.88);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.09);
            color: #a1a1aa;
            padding: 0 20px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            font-size: 12px;
            transition: background 0.2s, border-color 0.2s, color 0.2s;
          }

          :host([data-theme="light"]) .nav-bar,
          :host-context([data-theme="light"]) .nav-bar {
            background: rgba(255, 255, 255, 0.94);
            border-bottom: 1px solid #e2e8f0;
            color: #334155;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
          }

          :host([data-theme="light"]) .brand-link,
          :host-context([data-theme="light"]) .brand-link {
            color: #0f172a;
          }

          :host([data-theme="light"]) .brand-link:hover,
          :host-context([data-theme="light"]) .brand-link:hover {
            color: #0284c7;
          }

          :host([data-theme="light"]) .hub-tag,
          :host-context([data-theme="light"]) .hub-tag {
            color: #64748b;
          }

          :host([data-theme="light"]) .theme-btn,
          :host-context([data-theme="light"]) .theme-btn {
            border-color: #cbd5e1;
            color: #334155;
            background: #ffffff;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          }

          :host([data-theme="light"]) .theme-btn:hover,
          :host-context([data-theme="light"]) .theme-btn:hover {
            border-color: #0284c7;
            color: #0284c7;
          }

          .brand-slot {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
          }

          .brand-link {
            color: #ffffff;
            text-decoration: none;
            font-weight: 700;
            letter-spacing: -0.01em;
            display: flex;
            align-items: center;
            gap: 6px;
          }

          .brand-link:hover {
            color: #ffffff;
            opacity: 0.85;
          }

          .hub-tag {
            color: #71717a;
            font-size: 11px;
          }

          .switcher-group {
            display: flex;
            align-items: center;
            gap: 6px;
            overflow-x: auto;
            scrollbar-width: none;
          }

          .switcher-group::-webkit-scrollbar {
            display: none;
          }

          .nav-item {
            color: #a1a1aa;
            text-decoration: none;
            padding: 5px 10px;
            border-radius: 6px;
            white-space: nowrap;
            transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
            font-size: 11.5px;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
          }

          .nav-item:hover {
            color: #ffffff;
            background: rgba(255, 255, 255, 0.09);
            border-color: rgba(255, 255, 255, 0.25);
            transform: translateY(-1px);
          }

          .nav-item.active {
            color: #ffffff;
            background: rgba(255, 255, 255, 0.14);
            border: 1px solid rgba(255, 255, 255, 0.4);
            font-weight: 600;
          }

          :host([data-theme="light"]) .nav-item,
          :host-context([data-theme="light"]) .nav-item {
            color: #334155;
            background: #f8fafc;
            border: 1px solid #cbd5e1;
          }

          :host([data-theme="light"]) .nav-item:hover,
          :host-context([data-theme="light"]) .nav-item:hover {
            color: #0284c7;
            background: #f0f9ff;
            border-color: #38bdf8;
          }

          :host([data-theme="light"]) .nav-item.active,
          :host-context([data-theme="light"]) .nav-item.active {
            color: #0284c7;
            background: #e0f2fe;
            border: 1px solid #0284c7;
            font-weight: 600;
          }

          .nav-item .nav-arrow {
            font-size: 10px;
            opacity: 0.5;
            transition: opacity 0.2s, transform 0.2s;
          }

          .nav-item:hover .nav-arrow {
            opacity: 1;
            transform: translate(1px, -1px);
          }

          .links-right {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
          }

          .external-link {
            color: #64748b;
            text-decoration: none;
            font-size: 11px;
            padding: 3px 6px;
            border-radius: 3px;
            transition: color 0.15s;
          }

          .theme-btn {
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: #d4d4d8;
            padding: 3px 7px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
            line-height: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: all 0.15s;
          }

          .theme-btn:hover {
            color: #ffffff;
            border-color: rgba(255, 255, 255, 0.4);
          }

          .mobile-btn {
            display: none;
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: #d4d4d8;
            padding: 4px 8px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 11px;
            font-family: inherit;
          }

          .mobile-drawer {
            display: none;
            position: absolute;
            top: 44px;
            left: 0;
            right: 0;
            background: #09090b;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding: 12px 16px;
            flex-direction: column;
            gap: 6px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.9);
          }

          .mobile-drawer.open {
            display: flex;
          }

          .drawer-link {
            color: #d4d4d8;
            text-decoration: none;
            font-size: 12px;
            padding: 7px 10px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .mobile-drawer:hover, .drawer-link:hover, .drawer-link.active {
            background: rgba(255, 255, 255, 0.08);
            color: #ffffff;
          }

          :host([data-theme="light"]) .mobile-btn,
          :host-context([data-theme="light"]) .mobile-btn {
            border-color: #cbd5e1;
            color: #334155;
          }

          :host([data-theme="light"]) .mobile-drawer,
          :host-context([data-theme="light"]) .mobile-drawer {
            background: #ffffff;
            border-bottom: 1px solid #e2e8f0;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }

          :host([data-theme="light"]) .drawer-link,
          :host-context([data-theme="light"]) .drawer-link {
            color: #334155;
          }

          :host([data-theme="light"]) .drawer-link:hover,
          :host-context([data-theme="light"]) .drawer-link:hover,
          :host([data-theme="light"]) .drawer-link.active,
          :host-context([data-theme="light"]) .drawer-link.active {
            background: rgba(224, 242, 254, 0.9);
            color: #0284c7;
          }

          :host([data-theme="light"]) .external-link,
          :host-context([data-theme="light"]) .external-link {
            color: #475569;
          }

          :host([data-theme="light"]) .external-link:hover,
          :host-context([data-theme="light"]) .external-link:hover {
            color: #0284c7;
          }

          @media (max-width: 980px) {
            .switcher-group { display: none; }
            .mobile-btn { display: block; }
          }

          @media (max-width: 560px) {
            .nav-bar { padding: 0 16px; }
            .hub-tag { display: none; }
            .external-link { display: none; }
          }
        </style>

        <div class="nav-bar">
          <div class="brand-slot">
            <a href="${PROFILE.hubUrl}" class="brand-link" title="Adarsh Pawaskar Central Gateway">
              <span>adarshsince90</span>
            </a>
            <span class="hub-tag">/ architecture-labs</span>
          </div>

          <div class="switcher-group">
            <a href="${PROFILE.hubUrl}" class="nav-item ${isGatewayHome ? 'active' : ''}" title="Central Architecture Gateway">
              <span>🌐 Gateway</span>
            </a>
            ${ECOSYSTEM_PROJECTS.map(p => {
              const active = activeProj && activeProj.id === p.id;
              const label = p.navLabel || p.name;
              return `
                <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="nav-item ${active ? 'active' : ''}" title="${p.name} (${p.stack}) — Opens in new tab">
                  <span class="nav-icon">${p.icon}</span>
                  <span class="nav-title">${label}</span>
                  <span class="nav-arrow">↗</span>
                </a>
              `;
            }).join('')}
          </div>

          <div class="links-right">
            <button class="theme-btn" id="themeToggle" title="Toggle Light / Dark Mode" aria-label="Toggle Theme">
              <span id="themeEmoji">☀️</span>
            </button>
            <a href="${PROFILE.githubUrl}" target="_blank" rel="noopener noreferrer" class="external-link" title="GitHub Profile">
              github
            </a>
            <a href="${PROFILE.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="external-link" title="LinkedIn Profile">
              linkedin
            </a>
            <button class="mobile-btn" id="toggleMenu" aria-label="Toggle Project Navigation Menu" aria-expanded="false">
              [projects]
            </button>
          </div>
        </div>

        <div class="mobile-drawer" id="mobileDrawer">
          <a href="${PROFILE.hubUrl}" class="drawer-link ${isGatewayHome ? 'active' : ''}">
            <span>🌐 Architecture Gateway Hub</span>
            <span style="color: #64748b;">root</span>
          </a>
          ${ECOSYSTEM_PROJECTS.map(p => {
            const active = activeProj && activeProj.id === p.id;
            return `
              <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="drawer-link ${active ? 'active' : ''}">
                <span>${p.icon} ${p.name}</span>
                <span style="color: #64748b;">${p.stack} ↗</span>
              </a>
            `;
          }).join('')}
        </div>
      `;
    }

    setupListeners() {
      const btn = this.shadowRoot.getElementById('toggleMenu');
      const drawer = this.shadowRoot.getElementById('mobileDrawer');
      if (btn && drawer) {
        btn.addEventListener('click', () => {
          this._menuOpen = !this._menuOpen;
          btn.setAttribute('aria-expanded', String(this._menuOpen));
          drawer.classList.toggle('open', this._menuOpen);
        });

        // Close on Escape key
        window.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && this._menuOpen) {
            this._menuOpen = false;
            btn.setAttribute('aria-expanded', 'false');
            drawer.classList.remove('open');
          }
        });
      }

      const themeBtn = this.shadowRoot.getElementById('themeToggle');
      const themeEmoji = this.shadowRoot.getElementById('themeEmoji');
      const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        if (document.body) {
          document.body.setAttribute('data-theme', theme);
        }
        document.querySelectorAll('adarsh-ecosystem-nav, adarsh-footer').forEach(el => {
          el.setAttribute('data-theme', theme);
        });
        if (themeEmoji) {
          themeEmoji.textContent = theme === 'light' ? '🌙' : '☀️';
        }
        window.dispatchEvent(new CustomEvent('adarsh-theme-changed', { detail: { theme } }));
      };

      // Initialize theme from storage or system preference
      const savedTheme = localStorage.getItem('adarsh_theme') || 
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
      
      applyTheme(savedTheme);

      if (themeBtn) {
        themeBtn.addEventListener('click', () => {
          const current = document.documentElement.getAttribute('data-theme') || 'dark';
          const next = current === 'light' ? 'dark' : 'light';
          localStorage.setItem('adarsh_theme', next);
          applyTheme(next);
        });
      }

      window.addEventListener('storage', (e) => {
        if (e.key === 'adarsh_theme' && e.newValue) {
          applyTheme(e.newValue);
        }
      });
    }
  }

  /* -------------------------------------------------------------
   * 2. <adarsh-footer>
   * ------------------------------------------------------------- */
  class AdarshFooter extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      const current = document.documentElement.getAttribute('data-theme') || localStorage.getItem('adarsh_theme') || 'dark';
      this.setAttribute('data-theme', current);
      this.render();
      window.addEventListener('adarsh-theme-changed', (e) => {
        if (e.detail && e.detail.theme) {
          this.setAttribute('data-theme', e.detail.theme);
        }
      });
    }

    render() {
      const year = new Date().getFullYear();

      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            width: 100%;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background: #000000;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: #a1a1aa;
            padding: 48px 24px 32px;
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            transition: background 0.2s, color 0.2s;
          }

          :host([data-theme="light"]),
          :host-context([data-theme="light"]) {
            background: #ffffff;
            border-top: 1px solid #e2e8f0;
            color: #334155;
          }

          :host([data-theme="light"]) .profile-identity h3,
          :host-context([data-theme="light"]) .profile-identity h3 {
            color: #0f172a;
          }

          :host([data-theme="light"]) .role-str,
          :host-context([data-theme="light"]) .role-str {
            color: #0284c7;
          }

          :host([data-theme="light"]) .bio-str,
          :host-context([data-theme="light"]) .bio-str {
            color: #475569;
          }

          :host([data-theme="light"]) .col h4,
          :host-context([data-theme="light"]) .col h4 {
            color: #0f172a;
          }

          :host([data-theme="light"]) .nagarro-badge,
          :host-context([data-theme="light"]) .nagarro-badge {
            background: #f8fafc;
            border-color: #cbd5e1;
            color: #1e293b;
          }

          :host([data-theme="light"]) .col a,
          :host-context([data-theme="light"]) .col a {
            color: #334155;
          }

          :host([data-theme="light"]) .col a:hover,
          :host-context([data-theme="light"]) .col a:hover {
            color: #0284c7;
          }

          :host([data-theme="light"]) .col .spec-item,
          :host-context([data-theme="light"]) .col .spec-item {
            color: #475569;
          }

          :host([data-theme="light"]) .col .spec-item strong,
          :host-context([data-theme="light"]) .col .spec-item strong {
            color: #0f172a;
          }

          :host([data-theme="light"]) .bottom-bar,
          :host-context([data-theme="light"]) .bottom-bar {
            border-top: 1px solid #e2e8f0;
            color: #64748b;
          }

          :host([data-theme="light"]) .bottom-bar a,
          :host-context([data-theme="light"]) .bottom-bar a {
            color: #475569;
          }

          :host([data-theme="light"]) .bottom-bar a:hover,
          :host-context([data-theme="light"]) .bottom-bar a:hover {
            color: #0284c7;
          }

          * {
            box-sizing: border-box;
          }

          .footer-wrap {
            max-width: 1160px;
            margin: 0 auto;
          }

          .footer-grid {
            display: grid;
            grid-template-columns: 2fr 1.3fr 1.1fr 1fr;
            gap: 40px;
            margin-bottom: 40px;
          }

          .profile-identity h3 {
            color: #ffffff;
            font-size: 17px;
            font-weight: 700;
            margin: 0 0 6px 0;
            letter-spacing: -0.015em;
          }

          .role-str {
            color: #d4d4d8;
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 12px;
          }

          .bio-str {
            color: #71717a;
            font-size: 13px;
            line-height: 1.6;
            margin: 0 0 16px 0;
            max-width: 440px;
          }

          .nagarro-badge {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            font-family: ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Monaco, Consolas, monospace;
            font-size: 11px;
            color: #d4d4d8;
            background: #111113;
            border: 1px solid #222224;
            padding: 5px 10px;
            border-radius: 6px;
          }

          .nagarro-badge .live-dot {
            width: 6px;
            height: 6px;
            background: #10b981;
            border-radius: 50%;
          }

          .col h4 {
            color: #ffffff;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-family: ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Monaco, Consolas, monospace;
            margin: 0 0 14px 0;
            font-weight: 700;
          }

          .col ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .col li {
            margin-bottom: 9px;
          }

          .col a {
            color: #a1a1aa;
            text-decoration: none;
            font-size: 13px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: color 0.15s ease;
          }

          .col a:hover {
            color: #ffffff;
          }

          .col .spec-item {
            color: #71717a;
            font-size: 12.5px;
            line-height: 1.5;
          }

          .col .spec-item strong {
            color: #e4e4e7;
            font-weight: 500;
          }

          .bottom-bar {
            padding-top: 24px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
            color: #52525b;
            flex-wrap: wrap;
            gap: 12px;
            font-family: ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Monaco, Consolas, monospace;
          }

          .bottom-bar a {
            color: #71717a;
            text-decoration: none;
          }

          .bottom-bar a:hover {
            color: #ffffff;
          }

          @media (max-width: 900px) {
            .footer-grid {
              grid-template-columns: 1fr 1fr;
              gap: 32px;
            }
          }

          @media (max-width: 580px) {
            .footer-grid {
              grid-template-columns: 1fr;
              gap: 28px;
            }
            .bottom-bar {
              flex-direction: column;
              align-items: flex-start;
            }
          }
        </style>

        <div class="footer-wrap">
          <div class="footer-grid">
            
            <div class="profile-identity">
              <h3>${PROFILE.name}</h3>
              <div class="role-str">${PROFILE.role}</div>
              <p class="bio-str">
                ${PROFILE.summary}
              </p>
              <div class="nagarro-badge">
                <span class="live-dot"></span>
                <span>${PROFILE.currentRole} • Technical Lead & Systems Architect</span>
              </div>
            </div>

            <div class="col">
              <h4>Architecture Suite</h4>
              <ul>
                ${ECOSYSTEM_PROJECTS.map(p => `
                  <li>
                    <a href="${p.url}" target="_blank" rel="noopener">
                      <span>${p.icon}</span> ${p.name}
                    </a>
                  </li>
                `).join('')}
              </ul>
            </div>

            <div class="col">
              <h4>Architectural Pillars</h4>
              <ul>
                <li class="spec-item">• <strong>Distributed Event Meshes & Sagas</strong></li>
                <li class="spec-item">• <strong>Multi-Cloud K8s & Serverless</strong></li>
                <li class="spec-item">• <strong>High-Performance .NET 10 Runtimes</strong></li>
                <li class="spec-item">• <strong>Federated Identity & Zero-Trust</strong></li>
                <li class="spec-item">• <strong>Fiber & Signals Browser Runtimes</strong></li>
              </ul>
            </div>

            <div class="col">
              <h4>Direct Channels</h4>
              <ul>
                <li><a href="${PROFILE.hubUrl}">🌐 Central Gateway</a></li>
                <li><a href="${PROFILE.hubUrl}#certifications">🏆 Certifications & Governance</a></li>
                <li><a href="${PROFILE.githubUrl}" target="_blank" rel="noopener">📦 GitHub Profile</a></li>
                <li><a href="${PROFILE.linkedinUrl}" target="_blank" rel="noopener">💼 LinkedIn Profile</a></li>
                <li><a href="${PROFILE.emailUrl}">✉️ adarshsince90@gmail.com</a></li>
              </ul>
            </div>

          </div>

          <div class="bottom-bar">
            <div>© ${year} Adarsh Pawaskar • adarshsince90.github.io</div>
            <div><span>W3C Native Web Components</span> • <span>Zero Tracking</span></div>
          </div>
        </div>
      `;
    }
  }

  if (!customElements.get('adarsh-ecosystem-nav')) {
    customElements.define('adarsh-ecosystem-nav', AdarshEcosystemNav);
  }
  if (!customElements.get('adarsh-footer')) {
    customElements.define('adarsh-footer', AdarshFooter);
  }

  /* ==========================================================================
   * Spotlight Radial Glow Cursor Engine (Linear / Raycast Liquid Glass Edition)
   * High-performance single delegated listener, rAF-debounced, touch-safe.
   * ========================================================================== */
  function initSpotlightSystem() {
    if (typeof window === 'undefined') return;
    // Guard against touch devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let activeCard = null;
    let cachedRect = null;
    let rafId = null;
    let clientX = 0;
    let clientY = 0;

    function updateSpotlight() {
      if (activeCard && cachedRect) {
        const x = clientX - cachedRect.left;
        const y = clientY - cachedRect.top;
        activeCard.style.setProperty('--mouse-x', `${x}px`);
        activeCard.style.setProperty('--mouse-y', `${y}px`);
      }
      rafId = null;
    }

    document.addEventListener(
      'pointermove',
      (e) => {
        const card = e.target.closest('.spotlight-card');

        if (!card) {
          if (activeCard) {
            activeCard = null;
            cachedRect = null;
          }
          return;
        }

        if (card !== activeCard) {
          activeCard = card;
          cachedRect = card.getBoundingClientRect();
        }

        clientX = e.clientX;
        clientY = e.clientY;

        if (!rafId) {
          rafId = requestAnimationFrame(updateSpotlight);
        }
      },
      { passive: true }
    );

    const invalidateRect = () => {
      if (activeCard) {
        cachedRect = activeCard.getBoundingClientRect();
      }
    };

    window.addEventListener('scroll', invalidateRect, { passive: true });
    window.addEventListener('resize', invalidateRect, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSpotlightSystem);
  } else {
    initSpotlightSystem();
  }
})();

