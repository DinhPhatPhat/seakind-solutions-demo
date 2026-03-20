// ============================================================
// NEXAMANAGE — Shared JS (nav, scroll, animations)
// ============================================================

// ── Inject Navbar ─────────────────────────────────────────
function buildNav(activePage) {
  const currentPage = activePage || "";
  const nav = document.getElementById("navbar");
  if (!nav) return;

  const links = SITE.nav.map(item => {
    const isActive = item.href === currentPage ? "active" : "";
    const isCta = item.label === "Industries";
    return `<a href="${item.href}" class="${isActive}${isCta ? " nav-cta" : ""}">${item.label}</a>`;
  }).join("");

  const mobileLinks = SITE.nav.map(item =>
    `<a href="${item.href}">${item.label}</a>`
  ).join("");
  nav.innerHTML = `
    <div class="container nav-inner">
      <a href="index.html" class="nav-logo">
        <div class="nav-logo-mark">SK</div>
        <span class="nav-logo-text">Seakind Solutions</span>
      </a>
      <nav class="nav-links">${links}</nav>
      <div class="hamburger" id="hamburger">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;

  // Mobile menu
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) mobileMenu.innerHTML = mobileLinks;

  // Scroll effect
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 10);
  });

  // Hamburger toggle
  document.getElementById("hamburger")?.addEventListener("click", () => {
    if (mobileMenu) {
      const open = mobileMenu.style.display === "flex";
      mobileMenu.style.display = open ? "none" : "flex";
    }
  });
}

// ── Inject Footer ─────────────────────────────────────────
function buildFooter() {
  const el = document.getElementById("footer");
  if (!el) return;

  const navLinks = SITE.nav.slice(0, 4).map(n =>
    `<li><a href="${n.href}">${n.label}</a></li>`
  ).join("");

  const manageLinks = SITE.nav.slice(4).map(n =>
    `<li><a href="${n.href}">${n.label}</a></li>`
  ).join("");

  el.innerHTML = `
    <div class="container">
      <div class="footer-inner">
        <div>
          <div class="footer-logo-text">${SITE.brand.name}</div>
          <p class="footer-desc">${SITE.brand.description}</p>
        </div>
        <div class="footer-col">
          <h4>Pages</h4>
          <ul>${navLinks}</ul>
        </div>
        <div class="footer-col">
          <h4>Management</h4>
          <ul>${manageLinks}</ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 ${SITE.brand.name} · Demo by <a href="mailto:${SITE.developer.email}">${SITE.developer.name}</a></span>
        <span>Built with ♥ in Ho Chi Minh City</span>
      </div>
    </div>
  `;
}

// ── Scroll Reveal ──────────────────────────────────────────
function initScrollReveal() {
  const els = document.querySelectorAll(".fade-up");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

// ── Run on DOM ready ───────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initScrollReveal();
});
