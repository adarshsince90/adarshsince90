/**
 * scripts/verify-gates.js
 * Automated Quality & Architecture Verification Gates for Adarsh Pawaskar's Gateway
 * 
 * Gates:
 * 1. JavaScript Syntax & Data Contract Integrity
 * 2. HTML Markup & Anchor Integrity
 * 3. CSS Design Tokens & Syntactic Balance
 * 4. Performance Budget & Production Hygiene
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
let failed = false;

function pass(message) {
  console.log(`  ✔ [PASS] ${message}`);
}

function fail(message) {
  console.error(`  ✖ [FAIL] ${message}`);
  failed = true;
}

console.log('\n======================================================');
console.log('🏛️  RUNNING ARCHITECTURAL QUALITY GATES');
console.log('======================================================\n');

// -------------------------------------------------------------
// GATE 1: JavaScript Syntax & Data Contract Integrity
// -------------------------------------------------------------
console.log('▶ GATE 1: JavaScript Syntax & Data Contracts');
try {
  execSync('node -c ecosystem.config.js', { cwd: ROOT_DIR });
  execSync('node -c ecosystem-shell.js', { cwd: ROOT_DIR });
  pass('JavaScript files pass V8 syntax compilation without errors.');
} catch (e) {
  fail(`JavaScript syntax error: ${e.message}`);
}

try {
  const config = require(path.join(ROOT_DIR, 'ecosystem.config.js'));
  
  if (config.profile && config.profile.name && config.profile.primaryRole) {
    pass(`Profile identity contract verified (${config.profile.name} - ${config.profile.primaryRole}).`);
  } else {
    fail('ECOSYSTEM_CONFIG profile missing required fields.');
  }

  if (Array.isArray(config.projects) && config.projects.length >= 5) {
    const invalidProj = config.projects.find(p => !p.id || !p.name || !p.url);
    if (invalidProj) {
      fail(`Invalid project entry found: ${JSON.stringify(invalidProj)}`);
    } else {
      pass(`Projects data contract verified (${config.projects.length} systems configured).`);
    }
  } else {
    fail('Projects array missing or incomplete in ECOSYSTEM_CONFIG.');
  }

  if (Array.isArray(config.certifications) && config.certifications.length >= 10) {
    const invalidCert = config.certifications.find(c => !c.title || !c.provider || !c.category);
    if (invalidCert) {
      fail(`Invalid certification entry found: ${JSON.stringify(invalidCert)}`);
    } else {
      pass(`Certifications data contract verified (${config.certifications.length} verified credentials).`);
    }
  } else {
    fail('Certifications array missing or incomplete in ECOSYSTEM_CONFIG.');
  }

  if (Array.isArray(config.experience) && config.experience.length >= 4) {
    pass(`Experience chronology data contract verified (${config.experience.length} enterprise roles).`);
  } else {
    fail('Experience array incomplete in ECOSYSTEM_CONFIG.');
  }
} catch (e) {
  fail(`Data contract verification failed: ${e.message}`);
}

// -------------------------------------------------------------
// GATE 2: HTML Markup & Anchor Integrity
// -------------------------------------------------------------
console.log('\n▶ GATE 2: HTML Markup & Internal Anchor Navigation');
const htmlPath = path.join(ROOT_DIR, 'index.html');
if (!fs.existsSync(htmlPath)) {
  fail('index.html not found!');
} else {
  const html = fs.readFileSync(htmlPath, 'utf8');

  // Verify internal anchors
  const hrefRegex = /href="#([^"]+)"/g;
  let match;
  const anchors = new Set();
  while ((match = hrefRegex.exec(html)) !== null) {
    anchors.add(match[1]);
  }

  let brokenAnchors = 0;
  anchors.forEach(a => {
    if (!html.includes(`id="${a}"`)) {
      fail(`Broken internal anchor link: #${a} does not match any element ID in index.html.`);
      brokenAnchors++;
    }
  });

  if (brokenAnchors === 0) {
    pass(`All ${anchors.size} internal anchor links successfully resolve to DOM element IDs.`);
  }

  // Verify local relative assets
  const localAssetRegex = /(?:src|href)="\.\/([^"#?]+)"/g;
  let assetMatch;
  let missingAssets = 0;
  while ((assetMatch = localAssetRegex.exec(html)) !== null) {
    const file = assetMatch[1];
    if (!fs.existsSync(path.join(ROOT_DIR, file))) {
      fail(`Referenced asset does not exist on disk: ./${file}`);
      missingAssets++;
    }
  }

  if (missingAssets === 0) {
    pass('All local script, link, and asset references exist on disk.');
  }

  // Verify critical meta tags
  const requiredMeta = ['viewport', 'og:title', 'og:description', 'og:url', 'theme-color'];
  const missingMeta = requiredMeta.filter(m => !html.includes(m));
  if (missingMeta.length === 0) {
    pass('Critical OpenGraph and mobile viewport meta tags verified.');
  } else {
    fail(`Missing critical meta tags: ${missingMeta.join(', ')}`);
  }
}

// -------------------------------------------------------------
// GATE 3: CSS Design Tokens & Syntactic Balance
// -------------------------------------------------------------
console.log('\n▶ GATE 3: CSS Architecture & Design Tokens');
const cssPath = path.join(ROOT_DIR, 'styles.css');
if (!fs.existsSync(cssPath)) {
  fail('styles.css not found!');
} else {
  const css = fs.readFileSync(cssPath, 'utf8');

  // Check brace balance
  const openBraces = (css.match(/\{/g) || []).length;
  const closeBraces = (css.match(/\}/g) || []).length;
  if (openBraces === closeBraces) {
    pass(`CSS syntax balanced (${openBraces} rules parsed).`);
  } else {
    fail(`CSS syntax unbalanced: ${openBraces} '{' vs ${closeBraces} '}'.`);
  }

  // Check CSS variables
  const varUses = css.match(/var\(--[a-zA-Z0-9_-]+\)/g) || [];
  const varDefs = css.match(/--[a-zA-Z0-9_-]+(?=\s*:)/g) || [];
  const defSet = new Set(varDefs.map(v => v.trim()));
  defSet.add('--mouse-x');
  defSet.add('--mouse-y');

  const missingVars = new Set();
  varUses.forEach(u => {
    const v = u.replace(/^var\(/, '').replace(/\)$/, '').trim();
    if (!defSet.has(v)) {
      missingVars.add(v);
    }
  });

  if (missingVars.size === 0) {
    pass('Zero undefined CSS custom properties; all var(--*) tokens declared.');
  } else {
    fail(`Undefined CSS custom properties found: ${Array.from(missingVars).join(', ')}`);
  }

  // Check dual theme support
  if (css.includes('data-theme="light"')) {
    pass('Light theme token overrides verified.');
  } else {
    fail('Missing data-theme="light" token block in styles.css.');
  }

  // Check accessibility & media queries
  if (css.includes('prefers-reduced-motion') && css.includes('@media print')) {
    pass('Accessibility (prefers-reduced-motion) and PDF export (@media print) verified.');
  } else {
    fail('Missing prefers-reduced-motion or @media print stylesheets.');
  }
}

// -------------------------------------------------------------
// GATE 4: Performance Budget & Production Hygiene
// -------------------------------------------------------------
console.log('\n▶ GATE 4: Performance Budget & Production Hygiene');
const BUDGETS = {
  'index.html': 100 * 1024,      // 100 KB
  'styles.css': 80 * 1024,       // 80 KB
  'ecosystem-shell.js': 50 * 1024, // 50 KB
  'ecosystem.config.js': 30 * 1024 // 30 KB
};

Object.entries(BUDGETS).forEach(([file, limit]) => {
  const filePath = path.join(ROOT_DIR, file);
  if (fs.existsSync(filePath)) {
    const size = fs.statSync(filePath).size;
    const sizeKb = (size / 1024).toFixed(1);
    const limitKb = (limit / 1024).toFixed(0);
    if (size <= limit) {
      pass(`${file} size (${sizeKb} KB) within performance budget (${limitKb} KB limit).`);
    } else {
      fail(`${file} size (${sizeKb} KB) exceeds budget limit (${limitKb} KB).`);
    }
  }
});

// Check favicon
if (fs.existsSync(path.join(ROOT_DIR, 'favicon.ico'))) {
  pass('Binary favicon.ico present in root directory.');
} else {
  fail('favicon.ico missing from root directory.');
}

console.log('\n======================================================');
if (failed) {
  console.error('❌ GATE VERIFICATION FAILED. Review errors above.');
  console.log('======================================================\n');
  process.exit(1);
} else {
  console.log('✅ ALL ARCHITECTURAL QUALITY GATES PASSED DETERMINISTICALLY.');
  console.log('======================================================\n');
  process.exit(0);
}
