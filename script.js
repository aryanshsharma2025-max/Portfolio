/* ============================================================
   ARYANSH SHARMA PORTFOLIO — script.js
   Features: Cursor, Navbar, Typing, Reveal, Counter,
             Skill Bars, GitHub API, Chatbot, Theme,
             Visitor Counter, Form UI
   ============================================================ */

'use strict';

// ── 1. CUSTOM CURSOR ──────────────────────────────────────────
(function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (!cursor || window.matchMedia('(hover: none)').matches) return;

  let mx = 0, my = 0, fx = 0, fy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  (function animateFollower() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top  = fy + 'px';
    requestAnimationFrame(animateFollower);
  })();

  // Grow cursor on interactive elements
  const interactives = 'a, button, input, textarea, .project-card, .achievement-card, .highlight-card';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactives)) {
      cursor.style.transform = 'translate(-50%, -50%) scale(2)';
      follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
      follower.style.opacity = '0.6';
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactives)) {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      follower.style.transform = 'translate(-50%, -50%) scale(1)';
      follower.style.opacity = '0.4';
    }
  });
})();


// ── 2. NAVBAR ────────────────────────────────────────────────
(function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Mobile toggle
  navToggle?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('active', open);
    navToggle.setAttribute('aria-expanded', open);
  });

  // Close on link click
  navLinks?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle?.classList.remove('active');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });
})();


// ── 3. THEME TOGGLE ──────────────────────────────────────────
(function initTheme() {
  const btn = document.getElementById('themeToggle');
  const html = document.documentElement;
  const saved = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', saved);

  btn?.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();


// ── 4. VISITOR COUNTER ────────────────────────────────────────
(function initVisitorCounter() {
  const el = document.getElementById('visitorCount');
  if (!el) return;
  let count = parseInt(localStorage.getItem('visitorCount') || '0');
  if (!sessionStorage.getItem('visited')) {
    count++;
    localStorage.setItem('visitorCount', count);
    sessionStorage.setItem('visited', '1');
  }
  el.textContent = count;
})();


// ── 5. TYPING EFFECT ─────────────────────────────────────────
(function initTyping() {
  const el = document.getElementById('typingText');
  if (!el) return;

  const phrases = [
    'Software Developer in the Making',
    'Artificial Intelligence Enthusiast',
    'Competitive Programmer',
    'Problem Solver & Builder',
    'CS Engineering Student · CSVTU',
  ];

  let phraseIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const phrase = phrases[phraseIdx];
    if (!deleting) {
      el.textContent = phrase.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === phrase.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
      setTimeout(type, 65);
    } else {
      el.textContent = phrase.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(type, 400);
        return;
      }
      setTimeout(type, 35);
    }
  }
  setTimeout(type, 900);
})();


// ── 6. SCROLL REVEAL ─────────────────────────────────────────
(function initReveal() {
  const targets = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  if (!targets.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || 0);
        setTimeout(() => entry.target.classList.add('revealed'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  targets.forEach(el => observer.observe(el));

  // Hero section — reveal immediately
  setTimeout(() => {
    document.querySelectorAll('.hero .reveal-up, .hero .reveal-right').forEach(el => {
      el.classList.add('revealed');
    });
  }, 100);
})();


// ── 7. COUNT-UP ANIMATION ────────────────────────────────────
(function initCountUp() {
  const stats = document.querySelectorAll('.stat-num');
  if (!stats.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const duration = 1200;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(ease * target);
          if (progress < 1) requestAnimationFrame(update);
          else el.textContent = target;
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(el => observer.observe(el));
})();


// ── 8. SKILL BAR ANIMATION ───────────────────────────────────
(function initSkillBars() {
  const fills = document.querySelectorAll('.skill-bar-fill');
  if (!fills.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(fill => observer.observe(fill));
})();


// ── 9. GITHUB API INTEGRATION ────────────────────────────────
(async function initGitHub() {
  const repoStatus  = document.getElementById('repoStatus');
  const githubDynamic = document.getElementById('githubDynamic');
  const username = 'aryanshsharma2025-max';

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    });

    if (!res.ok) throw new Error(`GitHub API: ${res.status}`);
    const repos = await res.json();

    if (repos && repos.length) {
      repoStatus.textContent = `✓ Loaded ${repos.length} repositories from GitHub`;

      const title = document.createElement('h3');
      title.style.cssText = 'font-family: var(--font-display); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); margin-bottom: 1rem; margin-top: 2rem;';
      title.textContent = '↓ Live from GitHub';
      githubDynamic.appendChild(title);

      repos.forEach((repo, i) => {
        const item = document.createElement('div');
        item.className = 'github-repo-item reveal-up';
        item.style.transitionDelay = `${i * 60}ms`;
        item.innerHTML = `
          <div>
            <div class="repo-name">${escapeHtml(repo.name)}</div>
            <div class="repo-desc">${escapeHtml(repo.description || 'No description')}</div>
          </div>
          <div class="repo-meta">
            ${repo.language ? `<span>📌 ${escapeHtml(repo.language)}</span>` : ''}
            <span>⭐ ${repo.stargazers_count}</span>
            <a href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener noreferrer" 
               style="color: var(--accent); font-size: 0.7rem;">View →</a>
          </div>
        `;
        githubDynamic.appendChild(item);

        // Trigger reveal for dynamically added elements
        requestAnimationFrame(() => {
          setTimeout(() => item.classList.add('revealed'), i * 80 + 200);
        });
      });
    } else {
      repoStatus.textContent = 'No public repositories found.';
    }
  } catch (err) {
    console.warn('GitHub fetch failed:', err.message);
    repoStatus.textContent = '⚡ GitHub repositories — connect internet to load live data.';
  }
})();

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}


// ── 10. CONTACT FORM ─────────────────────────────────────────
(function initContactForm() {
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name  = form.name.value.trim();
    const email = form.email.value.trim();
    const msg   = form.message.value.trim();

    if (!name || !email || !msg) {
      note.textContent = '⚠ Please fill in all fields.';
      note.style.color = 'var(--accent-3)';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      note.textContent = '⚠ Please enter a valid email.';
      note.style.color = 'var(--accent-3)';
      return;
    }

    // Simulate submission (no backend)
    const btn = form.querySelector('.form-submit span');
    btn.textContent = 'Sending...';
    setTimeout(() => {
    note.textContent = `✓ Thanks ${name}! Your message has been received. Aryansh will get back to you soon.`;
    note.style.color = 'var(--accent)';
    form.reset();
    btn.textContent = 'Send Message';
    }, 1200);
    // Open email client
    const mailtoLink = `mailto:aryanshsharma2005@gmail.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${msg}`;

    window.location.href = mailtoLink;

    // UI feedback
    note.textContent = `✓ Redirecting to email...`;
    note.style.color = 'var(--accent)';

    form.reset();
    btn.textContent = 'Send Message';
  });
})();


// ── 11. AI CHATBOT (FIXED VERSION) ───────────────────────────
(function initChatbot() {
  const toggle  = document.getElementById('chatbotToggle');
  const window_ = document.getElementById('chatbotWindow');
  const closeBtn= document.getElementById('chatbotClose');
  const input   = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSend');
  const msgs    = document.getElementById('chatMessages');
  const qrBtns  = document.querySelectorAll('.qr-btn');

  if (!toggle || !window_ || !input || !sendBtn || !msgs) {
    console.error("Chatbot elements missing");
    return;
  }

  // ✅ PERSONAL DATA (DEFINED FIRST)
  const PERSONAL_DATA = {
    basic: {
      name: "Aryansh Sharma",
      phone: "XXXXXXXXXX",
      email: "aryanshsharma2005@gmail.com",
      location: "Raipur, Chhattisgarh"
    },
    family: {
      father: "Kailash Sharma",
      mother: "Preeti Sharma",
      siblings: "Aayushman Sharma"
    },
    education: {
      college: "SSITPM",
      university: "CSVTU",
      year: "1st Year (2nd Sem)"
    },
    goals: "To become a skilled software developer and secure top placements"
  };

  // ✅ KNOWLEDGE BASE
  const KB = {
  greeting: ['hello','hi','hey','namaste'],
  about: ['who is aryansh','about you','about aryansh','tell me about you','who are you'],
  skills: ['skills','programming','languages','what do you know'],
  projects: ['projects','work','what have you built'],
  contact: ['contact','email'],
  phone: ['phone','number'],
  family: ['family','father','mother'],
  education: ['education','college','study'],
  goals: ['goal','future']
  };

  // ✅ ANSWERS
  const ANSWERS = {
    greeting: "Hey 👋 I'm Aryansh's assistant!",
    about: "Aryansh Sharma is a CSE student from Raipur.He is passionate about software development and AI.He is currently learning DSA and building projects like chatbots and web apps.",
    skills: "C, Python, C++ and learning DSA.",
    projects: "Check the projects section below 👇",
    contact: `Email: ${PERSONAL_DATA.basic.email}`,
    phone: `Phone: ${PERSONAL_DATA.basic.phone}`,
    family: `Father: ${PERSONAL_DATA.family.father}, Mother: ${PERSONAL_DATA.family.mother}`,
    education: `Studying at ${PERSONAL_DATA.education.college}, ${PERSONAL_DATA.education.university}`,
    goals: PERSONAL_DATA.goals,
    default: "I didn't understand that 🤔"
  };

  // ✅ ADD MESSAGE
  function addMsg(text, type) {
    const div = document.createElement('div');
    div.className = `chat-msg ${type}`;
    div.innerText = text;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  // ✅ RESPONSE LOGIC
  function getResponse(text) {
  const q = text.toLowerCase();

  for (let key in KB) {
    for (let word of KB[key]) {
      if (q.includes(word)) {
        return ANSWERS[key];
      }
    }
  }

  // fallback smart guesses
  if (q.includes("who") || q.includes("about")) {
    return ANSWERS.about;
  }

  if (q.includes("skill") || q.includes("language")) {
    return ANSWERS.skills;
  }

  return "I didn't fully understand, but you can ask about Aryansh's skills, projects, or background 😊";
  }

  // ✅ HANDLE QUERY
  function handleQuery(text) {
    const userText = text.trim();
    if (!userText) return;

    addMsg(userText, "user");

    const reply = getResponse(userText);
    setTimeout(() => addMsg(reply, "bot"), 300);

    input.value = "";
  }

  // ✅ OPEN / CLOSE
  function openChat() {
    window_.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');

    if (!msgs.children.length) {
      addMsg("Hi! Ask me anything about Aryansh 🚀", "bot");
    }
  }

  function closeChat() {
    window_.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  // ✅ EVENTS
  toggle.addEventListener('click', () => {
    window_.classList.contains('open') ? closeChat() : openChat();
  });

  closeBtn?.addEventListener('click', closeChat);

  sendBtn.addEventListener('click', () => handleQuery(input.value));

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') handleQuery(input.value);
  });

  qrBtns.forEach(btn => {
    btn.addEventListener('click', () => handleQuery(btn.dataset.query));
  });

})();

// ── 12. SMOOTH SCROLL FOR ANCHOR LINKS ───────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// ── 13. ACTIVE NAV HIGHLIGHT ON SCROLL ───────────────────────
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}`
            ? 'var(--accent)' : '';
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
})();

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  document.querySelectorAll("[data-speed]").forEach(el => {
    const speed = el.getAttribute("data-speed");
    const y = scrollY * speed;

    el.style.transform = `translateY(${y}px)`;
  });
});
// ── 14. PROJECT CARD HOVER TILT ──────────────────────────────
(function initTilt() {
  if (window.matchMedia('(hover: none)').matches) return;
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rx = ((y - cy) / cy) * 4;
      const ry = ((x - cx) / cx) * -4;
      card.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();


// ── 15. PAGE LOAD ANIMATION ──────────────────────────────────
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
});
const items = document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.8;

  items.forEach(item => {
    const top = item.getBoundingClientRect().top;

    if (top < trigger) {
      item.classList.add("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  function handleScroll() {
    const trigger = window.innerHeight * 0.85;

    items.forEach(item => {
      const top = item.getBoundingClientRect().top;

      if (top < trigger && top > 0) {
        item.classList.add("active");
      } else {
        item.classList.remove("active"); // reverse on scroll up
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
});
// ===== TRAIN + PROGRESS =====

// ===== SMOOTH TRAIN ANIMATION =====

document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.querySelector(".timeline");
  const progress = document.getElementById("timelineProgress");
  const train = document.getElementById("train");

  let current = 0; // smooth value

  function update() {
    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let target = (windowHeight - rect.top) / (rect.height + windowHeight);
    target = Math.max(0, Math.min(target, 1));

    // Smooth interpolation (IMPORTANT)
    current += (target - current) * 0.08;

    const height = current * 100;

    progress.style.height = height + "%";
    train.style.top = height + "%";

    requestAnimationFrame(update);
  }

  update();
});
const canvas = document.getElementById("cursor-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = { x: 0, y: 0 };
let trail = [];

window.addEventListener("mousemove", e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function animateCursor() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  trail.push({ x: mouse.x, y: mouse.y });

  if (trail.length > 20) trail.shift();

  trail.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, i * 0.4, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(100,255,218,${i / 20})`;
    ctx.fill();
  });

  requestAnimationFrame(animateCursor);
}

animateCursor();
document.querySelectorAll(".feature-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) / 10;
    const moveY = (y - rect.height / 2) / 10;

    card.style.transform = `rotateX(${-moveY}deg) rotateY(${moveX}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});
function glitchText(element) {
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  let iterations = 0;
  const original = element.innerText;

  const interval = setInterval(() => {
    element.innerText = original
      .split("")
      .map((letter, index) => {
        if (index < iterations) return original[index];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    if (iterations >= original.length) clearInterval(interval);
    iterations += 1 / 2;
  }, 30);
}

glitchText(document.querySelector(".features h1"));