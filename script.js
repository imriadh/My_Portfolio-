/* ============================================================================
   RIAD HOSSAIN — PORTFOLIO BEHAVIOR
   Vanilla JS only. No libraries. Respects prefers-reduced-motion.

   Sections:
     1. Profile engine   (reads ACTIVE_PROFILE from config.js)
     2. Header & navigation
     3. Reveal on scroll
     4. Blog list loader (blogs.html)
     5. Contact form     (Web3Forms — unchanged integration)
============================================================================ */

(function () {
  "use strict";

  var REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ========================================================================
     1. PROFILE ENGINE
     Priority: ?profile= query param (preview only, never persisted)
               → ACTIVE_PROFILE from config.js (source of truth)
  ======================================================================== */
  var VALID_MODES = ["ai", "data", "devops"];

  function resolveProfile() {
    try {
      var q = new URLSearchParams(window.location.search).get("profile");
      if (q && VALID_MODES.indexOf(q.toLowerCase()) !== -1) return q.toLowerCase();
    } catch (e) { /* older browsers */ }
    if (typeof ACTIVE_PROFILE !== "undefined" && VALID_MODES.indexOf(ACTIVE_PROFILE) !== -1) {
      return ACTIVE_PROFILE;
    }
    return "devops"; // fail-safe default
  }

  function applyProfile(mode) {
    // PROFILES/SITE come from config.js (index.html). The blog page loads
    // script.js without them — skip profile work gracefully in that case.
    if (typeof PROFILES === "undefined") return;
    var p = PROFILES[mode] || PROFILES.ai;

    // Hero -------------------------------------------------------------
    setText("heroKicker", p.kicker);
    var headline = document.getElementById("heroHeadline");
    if (headline) headline.innerHTML = p.headline; // trusted local content, not user input
    var role = document.getElementById("heroRole");
    if (role) role.innerHTML = "<b>" + escapeHtml(p.title) + "</b> — " + escapeHtml(p.kicker);
    setText("heroIntro", p.intro);

    // Availability (accurate only) ---------------------------------------
    var chip = document.getElementById("availChip");
    if (chip) {
      if (typeof SITE !== "undefined" && SITE.available) {
        var dot = chip.querySelector(".avail-dot");
        chip.innerHTML = "";
        if (dot) chip.appendChild(dot);
        chip.appendChild(document.createTextNode(SITE.availabilityText));
        chip.hidden = false;
      } else {
        chip.hidden = true;
      }
    }

    // CTAs ----------------------------------------------------------------
    setText("ctaWork", p.ctaPrimary);

    // Work section label ---------------------------------------------------
    setText("workLabel", p.workLabel);

    // About ----------------------------------------------------------------
    setText("aboutLede", p.aboutLede);
    setText("aboutBody", p.aboutBody);

    // Focus / skills ---------------------------------------------------------
    setText("focusHeading", p.focusHeading);
    setText("focusNote", p.focusNote);
    renderSkills(p.skills);

    // Projects: ordering + profile-specific descriptions -------------------
    applyProjectOrder(mode);

    // Expose current mode for debugging / testing
    document.documentElement.setAttribute("data-profile", mode);
  }

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el && typeof value === "string") el.textContent = value;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function renderSkills(groups) {
    var wrap = document.getElementById("skillGroups");
    if (!wrap || !groups) return;
    wrap.innerHTML = "";
    groups.forEach(function (g) {
      var div = document.createElement("div");
      div.className = "skill-group";
      var h = document.createElement("h3");
      h.textContent = g.group;
      var ul = document.createElement("ul");
      ul.className = "skill-list";
      g.items.forEach(function (item) {
        var li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      div.appendChild(h);
      div.appendChild(ul);
      wrap.appendChild(div);
    });
  }

  function applyProjectOrder(mode) {
    var list = document.getElementById("projectList");
    if (!list || typeof PROJECT_ORDER === "undefined" || typeof PROJECTS === "undefined") return;

    var order = PROJECT_ORDER[mode] || PROJECT_ORDER.ai;
    var byId = {};
    Array.prototype.forEach.call(list.children, function (child) {
      if (child.dataset && child.dataset.project) byId[child.dataset.project] = child;
    });

    order.forEach(function (id) {
      if (byId[id]) list.appendChild(byId[id]); // re-append = reorder, DOM nodes preserved
    });

    // Profile-specific descriptions
    if (typeof PROJECTS !== "undefined") {
      PROJECTS.forEach(function (proj) {
        var el = list.querySelector('[data-project="' + proj.id + '"] .project-desc');
        if (el && proj.desc && proj.desc[mode]) el.textContent = proj.desc[mode];
      });
    }

    // Renumber 01..N after reorder
    Array.prototype.forEach.call(list.querySelectorAll(".project-num"), function (num, i) {
      num.textContent = pad(i + 1);
    });

    // Archive
    if (typeof ARCHIVE_PROJECTS !== "undefined") {
      var archive = document.getElementById("archiveList");
      if (archive && !archive.querySelector(".archive-row")) {
        ARCHIVE_PROJECTS.forEach(function (a) {
          var row = document.createElement("a");
          row.className = "archive-row";
          row.href = a.url;
          row.target = "_blank";
          row.rel = "noopener noreferrer";
          var n = document.createElement("span"); n.className = "archive-name"; n.textContent = a.name;
          var l = document.createElement("span"); l.className = "archive-line"; l.textContent = a.line;
          var s = document.createElement("span"); s.className = "archive-stack"; s.textContent = a.stack;
          var ar = document.createElement("span"); ar.className = "archive-arrow"; ar.textContent = "↗";
          row.appendChild(n); row.appendChild(l); row.appendChild(s); row.appendChild(ar);
          archive.appendChild(row);
        });
      }
    }
  }

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  /* ========================================================================
     2. HEADER & NAVIGATION
  ======================================================================== */
  function initHeader() {
    var header = document.querySelector(".site-header");
    var toggle = document.getElementById("navToggle");
    var menu = document.getElementById("mobileMenu");

    function onScroll() {
      if (!header) return;
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    function closeMenu() {
      if (!menu || !toggle) return;
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        var open = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        document.body.style.overflow = open ? "hidden" : "";
      });
      menu.addEventListener("click", function (e) {
        if (e.target.closest("a")) closeMenu();
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeMenu();
      });
    }

    // Smooth in-page scrolling with header offset
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        var id = link.getAttribute("href");
        if (!id || id === "#" || id.length < 2) return;
        var target = document.getElementById(id.slice(1));
        if (!target) return;
        e.preventDefault();
        var offset = header ? header.offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset - 12;
        window.scrollTo({ top: top, behavior: REDUCED_MOTION ? "auto" : "smooth" });
        closeMenu();
      });
    });

    // Active nav link while scrolling
    var sections = document.querySelectorAll("main section[id]");
    var navLinks = document.querySelectorAll(".nav-link[href^='#']");
    if ("IntersectionObserver" in window && sections.length && navLinks.length) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (l) {
            l.classList.toggle("is-active", l.getAttribute("href") === "#" + entry.target.id);
          });
        });
      }, { rootMargin: "-40% 0px -55% 0px" });
      sections.forEach(function (s) { spy.observe(s); });
    }
  }

  /* ========================================================================
     3. REVEAL ON SCROLL
  ======================================================================== */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    if (REDUCED_MOTION || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ========================================================================
     4. BLOG LIST (blogs.html) — same data source as before: blogs/blogs.json
  ======================================================================== */
  function initBlog() {
    var grid = document.getElementById("blogGrid");
    if (!grid) return;

    function render(blogs, cat) {
      var filtered = cat === "all" ? blogs : blogs.filter(function (b) { return b.category === cat; });
      if (!filtered.length) {
        grid.innerHTML = "";
        var empty = document.createElement("p");
        empty.className = "blog-empty";
        empty.textContent = "No posts in this category yet.";
        grid.appendChild(empty);
        return;
      }
      grid.innerHTML = filtered.map(function (b) {
        return (
          '<a class="blog-card" href="blogs/' + encodeURIComponent(b.slug) + '.html">' +
            '<div class="blog-card-media"><img src="' + escapeHtml(b.image || "") + '" alt="Cover illustration for: ' + escapeHtml(b.title) + '" loading="lazy" width="800" height="450"></div>' +
            '<div class="blog-card-body">' +
              '<span class="blog-card-cat">' + escapeHtml(b.category) + "</span>" +
              '<h2 class="blog-card-title">' + escapeHtml(b.title) + "</h2>" +
              '<p class="blog-card-excerpt">' + escapeHtml(b.excerpt) + "</p>" +
              '<div class="blog-card-meta"><span>' + escapeHtml(b.date) + "</span><span>" + escapeHtml(b.readTime || "") + " · " + escapeHtml(b.language || "") + "</span></div>" +
            "</div>" +
          "</a>"
        );
      }).join("");
    }

    fetch("blogs/blogs.json")
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then(function (blogs) {
        render(blogs, "all");
        var buttons = document.querySelectorAll(".filter-btn");
        buttons.forEach(function (btn) {
          btn.addEventListener("click", function () {
            buttons.forEach(function (b) { b.classList.remove("is-active"); });
            btn.classList.add("is-active");
            render(blogs, btn.getAttribute("data-category") || "all");
          });
        });
      })
      .catch(function (err) {
        console.error("Blog list failed to load:", err);
        grid.innerHTML = '<p class="blog-empty">Blog posts are loading from <code>blogs/blogs.json</code> — if you see this message, open the site through a web server (not the file:// protocol).</p>';
      });
  }

  /* ========================================================================
     5. CONTACT FORM — Web3Forms (integration preserved exactly as before)
  ======================================================================== */
  function initContactForm() {
    var form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var button = form.querySelector('button[type="submit"]');
      var original = button ? button.textContent : "Send message";
      if (button) { button.disabled = true; button.textContent = "Sending…"; }

      fetch(form.action, { method: "POST", body: new FormData(form) })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data && data.success) {
            toast("Thank you — your message has been sent. I'll get back to you soon!", false);
            form.reset();
          } else {
            throw new Error("Submission failed");
          }
        })
        .catch(function (err) {
          console.error("Contact form error:", err);
          toast("Something went wrong. Please email me directly at " + (typeof SITE !== "undefined" ? SITE.email : ""), true);
        })
        .then(function () {
          if (button) { button.disabled = false; button.textContent = original; }
        });
    });

    function toast(message, isError) {
      var t = document.createElement("div");
      t.className = "toast" + (isError ? " toast--error" : "");
      t.setAttribute("role", "status");
      t.setAttribute("aria-live", "polite");
      t.textContent = message;
      document.body.appendChild(t);
      setTimeout(function () { t.remove(); }, 5200);
    }
  }

  /* ========================================================================
     BOOT
  ======================================================================== */
  function boot() {
    // Each subsystem is independent: one failure must not break the rest.
    try { applyProfile(resolveProfile()); } catch (e) { console.error("Profile engine:", e); }
    try { initHeader(); } catch (e) { console.error("Header:", e); }
    try { initReveal(); } catch (e) { console.error("Reveal:", e); }
    try { initBlog(); } catch (e) { console.error("Blog list:", e); }
    try { initContactForm(); } catch (e) { console.error("Contact form:", e); }

    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
