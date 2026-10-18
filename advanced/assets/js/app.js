/* =========================================================
   Tamarind Grove Zoo — app logic
   Author: Rishabh Aryan
   Vanilla JS, no dependencies.
   ========================================================= */
"use strict";

(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const rupees = (n) => "₹" + n.toLocaleString("en-IN");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const escapeHTML = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Theme toggle (saved in localStorage) ---------- */
  const themeBtn = $(".theme-toggle");
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const toLight = theme === "dark";
    themeBtn.setAttribute("aria-label", toLight ? "Switch to light mode" : "Switch to dark mode");
    themeBtn.setAttribute("aria-pressed", String(theme === "light"));
    $('meta[name="theme-color"]').setAttribute("content", theme === "dark" ? "#06110c" : "#f5f0e3");
  }
  applyTheme(document.documentElement.getAttribute("data-theme") || "dark");
  themeBtn.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("tgz-theme", next); } catch (e) { /* ignore */ }
  });

  /* ---------- Header: scrolled state, hamburger, active link ---------- */
  const header = $(".site-header");
  const navToggle = $(".nav-toggle");
  const nav = $("#site-nav");
  const heroBg = $(".hero-bg");

  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 40);
    if (heroBg && !reduceMotion && y < window.innerHeight * 1.2) {
      heroBg.style.setProperty("--parallax", (y * 0.35).toFixed(1) + "px");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (open) header.classList.add("is-scrolled"); else onScroll();
  }
  navToggle.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  $$("a", nav).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); navToggle.focus(); }
  });

  const navLinks = $$(".site-nav a");
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) => {
        const active = a.getAttribute("href") === "#" + entry.target.id;
        a.classList.toggle("is-active", active);
        if (active) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach((s) => sectionObserver.observe(s));

  /* ---------- Scroll reveal ---------- */
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  function observeReveals(root = document) { $$(".reveal:not(.is-visible)", root).forEach((el) => revealObserver.observe(el)); }
  observeReveals();

  /* ---------- Hero stat counters ---------- */
  $$("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count);
    if (reduceMotion) return;
    const start = performance.now();
    const dur = 1400;
    el.textContent = "0";
    (function tick(now) {
      const p = Math.min(1, (now - start) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    })(start);
  });

  /* ---------- Animals: render, search, filter ---------- */
  const grid = $("#animal-grid");
  const search = $("#animal-search");
  const countEl = $("#animal-count");
  const emptyEl = $("#animal-empty");
  const filterChips = $$("#animals .chip");
  let currentFilter = "all";

  function renderAnimals() {
    const q = search.value.trim().toLowerCase();
    const list = ANIMALS.filter((a) => {
      const inCat = currentFilter === "all" || a.category === currentFilter;
      const hay = (a.name + " " + a.region + " " + a.diet + " " + a.category + " " + a.short).toLowerCase();
      return inCat && (!q || hay.includes(q));
    });
    grid.innerHTML = list.map((a, i) => `
      <li>
        <button class="animal-card" type="button" data-id="${a.id}" style="animation-delay:${i * 40}ms" aria-label="${escapeHTML(a.name)} — view details">
          <img src="${a.img}" alt="${escapeHTML(a.alt)}" loading="lazy" width="960" height="720">
          <span class="card-body">
            <span class="card-tag">${escapeHTML(a.region)}</span>
            <h3>${escapeHTML(a.name)}</h3>
            <p>${escapeHTML(a.short)}</p>
            <span class="card-more" aria-hidden="true">Discover →</span>
          </span>
        </button>
      </li>`).join("");
    emptyEl.hidden = list.length > 0;
    countEl.textContent = `Showing ${list.length} of ${ANIMALS.length} animals`;
  }
  search.addEventListener("input", renderAnimals);
  filterChips.forEach((chip) => chip.addEventListener("click", () => {
    currentFilter = chip.dataset.filter;
    filterChips.forEach((c) => { const on = c === chip; c.classList.toggle("is-active", on); c.setAttribute("aria-pressed", String(on)); });
    renderAnimals();
  }));
  renderAnimals();

  /* ---------- Animal detail modal ---------- */
  const modal = $("#animal-modal");
  let lastFocus = null;
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".animal-card");
    if (!card) return;
    const a = ANIMALS.find((x) => x.id === card.dataset.id);
    if (!a) return;
    lastFocus = card;
    $("#modal-img").src = a.img;
    $("#modal-img").alt = a.alt;
    $("#modal-region").textContent = a.region;
    $("#modal-title").textContent = a.name;
    $("#modal-about").textContent = a.about;
    $("#modal-diet").textContent = a.diet;
    $("#modal-life").textContent = a.lifespan;
    $("#modal-status").textContent = a.status;
    modal.showModal();
  });
  $(".modal-close").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });
  modal.addEventListener("close", () => { if (lastFocus) lastFocus.focus(); });

  /* ---------- Events list + filter ---------- */
  const eventList = $("#event-list");
  const eventChips = $$("#event-filters .chip");
  const typeLabel = { feeding: "Feeding", talks: "Talk", kids: "Kids", night: "After dark" };
  function renderEvents(type) {
    const list = EVENTS.filter((ev) => type === "all" || ev.type === type);
    eventList.innerHTML = list.map((ev, i) => `
      <li class="event" style="animation-delay:${i * 50}ms">
        <div class="event-when"><strong>${escapeHTML(ev.day)}</strong><span>${escapeHTML(ev.time)}</span></div>
        <div>
          <span class="event-meta">${typeLabel[ev.type]} · ${escapeHTML(ev.place)}</span>
          <h3>${escapeHTML(ev.title)}</h3>
          <p>${escapeHTML(ev.desc)}</p>
        </div>
      </li>`).join("");
  }
  eventChips.forEach((chip) => chip.addEventListener("click", () => {
    eventChips.forEach((c) => { const on = c === chip; c.classList.toggle("is-active", on); c.setAttribute("aria-pressed", String(on)); });
    renderEvents(chip.dataset.type);
  }));
  renderEvents("all");

  /* ---------- Gallery + lightbox ---------- */
  const galleryGrid = $("#gallery-grid");
  const lightbox = $("#lightbox");
  const lbImg = $("#lb-img");
  let lbIndex = 0;
  let galleryLastFocus = null;
  galleryGrid.innerHTML = ANIMALS.map((a, i) => `
    <li><button class="gallery-btn" type="button" data-index="${i}" aria-label="Open photo: ${escapeHTML(a.name)}">
      <img src="${a.img}" alt="${escapeHTML(a.alt)}" loading="lazy" width="960" height="720">
    </button></li>`).join("");

  function showPhoto(i) {
    lbIndex = (i + ANIMALS.length) % ANIMALS.length;
    const a = ANIMALS[lbIndex];
    lbImg.src = a.img;
    lbImg.alt = a.alt;
    $("#lb-caption").textContent = a.name;
    $("#lb-count").textContent = `${lbIndex + 1} / ${ANIMALS.length}`;
  }
  galleryGrid.addEventListener("click", (e) => {
    const btn = e.target.closest(".gallery-btn");
    if (!btn) return;
    galleryLastFocus = btn;
    showPhoto(Number(btn.dataset.index));
    lightbox.showModal();
  });
  $(".lb-prev").addEventListener("click", () => showPhoto(lbIndex - 1));
  $(".lb-next").addEventListener("click", () => showPhoto(lbIndex + 1));
  $(".lb-close").addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); showPhoto(lbIndex - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); showPhoto(lbIndex + 1); }
  });
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.close(); });
  lightbox.addEventListener("close", () => { if (galleryLastFocus) galleryLastFocus.focus(); });

  /* ---------- Multi-step booking ---------- */
  const form = $("#booking-form");
  const steps = $$(".step", form);
  const stepLabels = $$(".steps li", form);
  const backBtn = $("#step-back");
  const nextBtn = $("#step-next");
  const dateInput = $("#visit-date");
  const totalEl = $("#summary-total");
  let step = 1;

  // earliest bookable date = today (local)
  const today = new Date();
  const iso = (d) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  dateInput.min = iso(today);
  const max = new Date(today); max.setDate(max.getDate() + 90);
  dateInput.max = iso(max);

  const qty = (type) => Math.max(0, Math.min(20, parseInt($("#q-" + type).value, 10) || 0));

  function getBooking() {
    const people = { adult: qty("adult"), child: qty("child"), senior: qty("senior") };
    const headcount = people.adult + people.child + people.senior;
    const lines = [];
    let total = 0;
    const names = { adult: "Adult", child: "Child", senior: "Senior" };
    Object.keys(people).forEach((k) => {
      if (people[k] > 0) { const cost = people[k] * PRICES[k]; total += cost; lines.push([`${people[k]} × ${names[k]}`, cost]); }
    });
    if ($("#addon-safari").checked && headcount > 0) { const c = ADDONS.safari.price * headcount; total += c; lines.push([`Safari ride × ${headcount}`, c]); }
    if ($("#addon-parking").checked) { total += ADDONS.parking.price; lines.push(["Car parking", ADDONS.parking.price]); }
    const slot = (form.querySelector('input[name="slot"]:checked') || {}).value;
    return { people, headcount, lines, total, slot, date: dateInput.value, name: $("#b-name").value.trim(), email: $("#b-email").value.trim() };
  }

  function formatDate(value) {
    if (!value) return "Choose a date";
    const [y, m, d] = value.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
  }

  function linesHTML(b) {
    const rows = [["Date", formatDate(b.date)], ["Arrival", b.slot]].map(([k, v]) => `<li><span>${k}</span><span>${escapeHTML(v)}</span></li>`);
    b.lines.forEach(([k, v]) => rows.push(`<li><span>${escapeHTML(k)}</span><span>${rupees(v)}</span></li>`));
    if (!b.lines.length) rows.push("<li><span>Tickets</span><span>None yet</span></li>");
    return rows.join("");
  }

  let lastTotal = -1;
  function updateSummary() {
    const b = getBooking();
    $("#summary-lines").innerHTML = linesHTML(b);
    totalEl.textContent = rupees(b.total);
    if (b.total !== lastTotal && lastTotal !== -1 && !reduceMotion) {
      totalEl.classList.remove("bump"); void totalEl.offsetWidth; totalEl.classList.add("bump");
      setTimeout(() => totalEl.classList.remove("bump"), 300);
    }
    lastTotal = b.total;
  }

  $$(".qty-btn", form).forEach((btn) => btn.addEventListener("click", () => {
    const input = $("#q-" + btn.dataset.target);
    input.value = Math.max(0, Math.min(20, (parseInt(input.value, 10) || 0) + Number(btn.dataset.delta)));
    updateSummary();
  }));
  form.addEventListener("input", updateSummary);
  form.addEventListener("change", updateSummary);

  function setError(input, errEl, msg) {
    errEl.textContent = msg;
    if (input) input.setAttribute("aria-invalid", msg ? "true" : "false");
    return !msg;
  }
  const emailOK = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

  function validateStep(n) {
    const b = getBooking();
    if (n === 1) {
      let msg = "";
      if (!b.date) msg = "Please pick a visit date.";
      else if (b.date < dateInput.min) msg = "That date is in the past.";
      else if (b.date > dateInput.max) msg = "Bookings open up to 90 days ahead.";
      else {
        const [y, m, d] = b.date.split("-").map(Number);
        if (new Date(y, m - 1, d).getDay() === 1) msg = "We're closed on Mondays for animal care.";
      }
      const ok = setError(dateInput, $("#visit-date-error"), msg);
      if (!ok) dateInput.focus();
      return ok;
    }
    if (n === 2) {
      const ok = setError(null, $("#qty-error"), b.headcount === 0 ? "Add at least one ticket." : (b.people.adult + b.people.senior === 0 ? "Children must be booked with an adult or senior." : ""));
      return ok;
    }
    if (n === 3) {
      const okName = setError($("#b-name"), $("#b-name-error"), b.name.length < 2 ? "Please enter your full name." : "");
      const okEmail = setError($("#b-email"), $("#b-email-error"), !emailOK(b.email) ? "Please enter a valid email address." : "");
      if (!okName) $("#b-name").focus(); else if (!okEmail) $("#b-email").focus();
      return okName && okEmail;
    }
    return true;
  }

  function goTo(n) {
    step = n;
    steps.forEach((s) => { s.hidden = Number(s.dataset.step) !== n; });
    stepLabels.forEach((li, i) => {
      li.classList.toggle("is-current", i + 1 === n);
      li.classList.toggle("is-done", i + 1 < n);
      if (i + 1 === n) li.setAttribute("aria-current", "step"); else li.removeAttribute("aria-current");
    });
    backBtn.hidden = n === 1;
    nextBtn.textContent = n === 3 ? "Confirm booking" : "Continue";
    const legend = steps[n - 1].querySelector("legend");
    legend.setAttribute("tabindex", "-1");
    legend.focus({ preventScroll: true });
  }

  // "Continue" is the form's submit button, so Enter also moves forward
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateStep(step)) return;
    if (step < 3) { goTo(step + 1); return; }
    confirmBooking();
  });
  backBtn.addEventListener("click", () => goTo(step - 1));

  function confirmBooking() {
    const b = getBooking();
    const ref = "TGZ-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    $("#confirm-text").innerHTML = `Thanks, <strong>${escapeHTML(b.name.split(" ")[0])}</strong>! Your booking reference is <strong>${ref}</strong>. A copy would be sent to ${escapeHTML(b.email)} (demo only — nothing is actually sent).`;
    $("#confirm-lines").innerHTML = linesHTML(b);
    $("#confirm-total").textContent = rupees(b.total);
    $(".booking").hidden = true;
    const conf = $("#confirmation");
    conf.hidden = false;
    conf.focus();
  }

  $("#book-again").addEventListener("click", () => {
    form.reset();
    $$("[aria-invalid]", form).forEach((el) => el.setAttribute("aria-invalid", "false"));
    $$(".error", form).forEach((el) => { el.textContent = ""; });
    $("#confirmation").hidden = true;
    $(".booking").hidden = false;
    goTo(1);
    updateSummary();
  });

  updateSummary();

  /* ---------- Contact form validation ---------- */
  const contact = $("#contact-form");
  const status = $("#contact-status");
  contact.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#c-name"), email = $("#c-email"), msg = $("#c-message");
    const a = setError(name, $("#c-name-error"), name.value.trim().length < 2 ? "Please tell us your name." : "");
    const b = setError(email, $("#c-email-error"), !emailOK(email.value.trim()) ? "Please enter a valid email address." : "");
    const c = setError(msg, $("#c-message-error"), msg.value.trim().length < 10 ? "Message should be at least 10 characters." : "");
    status.className = "form-status";
    if (!(a && b && c)) {
      status.textContent = "Please fix the highlighted fields.";
      (!a ? name : !b ? email : msg).focus();
      return;
    }
    status.textContent = `Thanks, ${name.value.trim().split(" ")[0]}! Your message is ready — we'll reply within two working days. (Demo: nothing is sent.)`;
    status.classList.add("ok");
    contact.reset();
    $$("[aria-invalid]", contact).forEach((el) => el.setAttribute("aria-invalid", "false"));
  });
})();
