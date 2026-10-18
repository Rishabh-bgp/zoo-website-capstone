<p align="center">
  <img src="screenshots/banner.jpg" alt="Zoo Website Capstone — Tamarind Grove Zoo hero section" width="100%">
</p>

<h1 align="center">Zoo Website Capstone</h1>

<p align="center">
  <b>One fictional zoo, built twice.</b> A beginner-style site and a premium modern site for <b>Tamarind Grove Zoo</b>,<br>
  written from scratch in plain HTML, CSS and JavaScript. No frameworks, no build step, no external services.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/License-MIT-f5b83d?style=for-the-badge" alt="MIT License">
  <img src="https://img.shields.io/badge/Lighthouse-100%20a11y-0b7a4b?style=for-the-badge&logo=lighthouse&logoColor=white" alt="Lighthouse accessibility 100">
</p>

<p align="center">
  <a href="https://rishabh-bgp.github.io/zoo-website-capstone/">Live demo</a> ·
  <a href="simple/">Simple version</a> ·
  <a href="advanced/">Advanced version</a>
</p>

---

## About the project

This is my capstone project for front-end web development. I wanted to show how the **same website** grows from a first, beginner-level build into a polished, production-quality one, using only the three core web languages.

- **`simple/`**: how a newcomer would build it. Seven separate pages, one stylesheet, one small script, and plenty of comments that explain each step.
- **`advanced/`**: the same zoo rebuilt as a cinematic single-page experience with a mobile-first layout, design tokens, dark/light themes, data-driven UI, accessible dialogs and a multi-step booking flow.

Tamarind Grove Zoo is a made-up zoo. All names, animals' stories, prices and events are fictional.

## Simple vs Advanced

| | **Simple** | **Advanced** |
|---|---|---|
| Pages | 7 separate HTML pages | 1 single-page app with sections |
| CSS | 1 file, floats and flexbox, 1 breakpoint | Custom properties, Grid and Flexbox, mobile-first, 3 breakpoints |
| JavaScript | ~140 lines, `var`, `getElementById`, beginner comments | Modular ES2015+, data arrays, rendering, event delegation |
| Navigation | Highlights the current page | Sticky glass header, animated hamburger menu, scroll-spy active link |
| Animals | Static cards | Rendered from data, with live search, category filter and a detail modal |
| Tickets | Price calculator | 3-step booking with validation, live price, add-ons and a confirmation summary |
| Gallery | Click to enlarge, with Previous/Next | `<dialog>` lightbox, ← → and Esc keys, focus return |
| Events | Static cards | Filterable list (Feeding, Talks, Kids, After dark) |
| Contact | Empty-field and email check | Inline errors, `aria-invalid`, status messages |
| Theme | Single light theme | Dark and light themes, saved in `localStorage`, respects system preference |
| Motion | None | Parallax hero, fireflies, text shimmer, scroll reveal, micro-interactions (honours `prefers-reduced-motion`) |
| Lighthouse (desktop) | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |

## Features

### Simple version
| Feature | How it works |
|---|---|
| Current page highlight | JS reads the file name from the URL and adds an `active` class to the matching menu link |
| Random animal fact | Button picks a random fact from an array |
| Ticket price calculator | Adults ₹300, children ₹150, seniors ₹200. Validates empty or negative input |
| Gallery viewer | Click a photo to open a full-screen view, with Previous, Next and Close (wraps around) |
| Contact form check | Shows an error for empty fields or a bad email, then a thank-you message (no backend) |
| Responsive | Header and cards stack on small screens |

### Advanced version
| Feature | How it works |
|---|---|
| Cinematic hero | Full-bleed photo with layered gradients, parallax on scroll, animated glow, CSS fireflies, shimmering display type, count-up stats |
| Dark / light mode | Toggle stores the choice in `localStorage`. A tiny pre-paint script prevents a theme flash |
| Responsive navigation | Mobile hamburger with `aria-expanded`, closes on link click or Esc. Desktop underline animation and scroll-spy |
| Animal explorer | Cards generated from a JS data array, with instant search (name, habitat, diet) and Mammals / Birds / Reptiles filters |
| Animal detail modal | Native `<dialog>` with diet, lifespan and conservation status. Esc or backdrop closes it, and focus returns to the card |
| Ticket booking | Step 1 date and time slot (blocks past dates and Mondays), step 2 quantities and add-ons, step 3 details, then confirmation with a booking reference. Live total in a sticky summary. No payment |
| Events | Rendered from data, with category filters |
| Gallery lightbox | Masonry-style grid. ← / → keys, on-screen arrows, counter, Esc to close |
| Contact form | Inline validation messages linked with `aria-describedby` |
| Accessibility | Skip link, landmarks, labels, visible focus rings, `aria-live` regions, alt text on every image, reduced-motion support |
| Performance | No external requests, optimised JPEGs (< 200 KB), lazy-loaded images, preloaded hero |

## Screenshots

### Simple version
<table>
  <tr>
    <td width="50%"><img src="screenshots/simple-home.jpg" alt="Simple version home page"><p align="center"><sub>Home with the random fact button</sub></p></td>
    <td width="50%"><img src="screenshots/simple-tickets.jpg" alt="Simple version ticket price calculator"><p align="center"><sub>Ticket price calculator</sub></p></td>
  </tr>
  <tr>
    <td width="50%"><img src="screenshots/simple-gallery.jpg" alt="Simple version photo gallery"><p align="center"><sub>Photo gallery</sub></p></td>
    <td width="50%"><img src="screenshots/simple-gallery-lightbox.jpg" alt="Simple version enlarged photo viewer"><p align="center"><sub>Click-to-enlarge viewer with Previous and Next</sub></p></td>
  </tr>
</table>

### Advanced version
<table>
  <tr>
    <td width="50%"><img src="screenshots/advanced-hero-dark.jpg" alt="Advanced version hero in dark mode"><p align="center"><sub>Cinematic hero (dark mode)</sub></p></td>
    <td width="50%"><img src="screenshots/advanced-animals-light.jpg" alt="Advanced version animal section in light mode"><p align="center"><sub>Light mode</sub></p></td>
  </tr>
  <tr>
    <td width="50%"><img src="screenshots/advanced-animals-filter.jpg" alt="Advanced version animal cards filtered to mammals"><p align="center"><sub>Animal search and category filter</sub></p></td>
    <td width="50%"><img src="screenshots/advanced-animal-modal.jpg" alt="Advanced version animal detail modal for the Bengal tiger"><p align="center"><sub>Animal detail modal</sub></p></td>
  </tr>
  <tr>
    <td width="50%"><img src="screenshots/advanced-booking.jpg" alt="Advanced version ticket booking step 2 with live price summary"><p align="center"><sub>Multi-step booking with live price</sub></p></td>
    <td width="50%"><img src="screenshots/advanced-booking-confirmed.jpg" alt="Advanced version booking confirmation summary"><p align="center"><sub>Booking confirmation</sub></p></td>
  </tr>
  <tr>
    <td width="50%"><img src="screenshots/advanced-gallery.jpg" alt="Advanced version masonry gallery"><p align="center"><sub>Gallery</sub></p></td>
    <td width="50%"><img src="screenshots/advanced-lightbox.jpg" alt="Advanced version keyboard-friendly lightbox"><p align="center"><sub>Lightbox with keyboard navigation</sub></p></td>
  </tr>
  <tr>
    <td width="50%"><img src="screenshots/advanced-events-light.jpg" alt="Advanced version events list filtered to kids events in light mode"><p align="center"><sub>Events filter</sub></p></td>
    <td width="50%"><img src="screenshots/landing.jpg" alt="Project landing page linking to both versions"><p align="center"><sub>Project landing page</sub></p></td>
  </tr>
</table>

### Mobile
<p align="center">
  <img src="screenshots/advanced-mobile-hero.jpg" alt="Advanced version on mobile, hero" width="22%">
  &nbsp;
  <img src="screenshots/advanced-mobile-menu.jpg" alt="Advanced version on mobile with the hamburger menu open" width="22%">
  &nbsp;
  <img src="screenshots/advanced-mobile-booking.jpg" alt="Advanced version on mobile, booking form" width="22%">
  &nbsp;
  <img src="screenshots/simple-mobile.jpg" alt="Simple version on mobile" width="22%">
</p>

## How to run

No installation needed.

**Option 1:** open `index.html`, `simple/index.html` or `advanced/index.html` directly in your browser.

**Option 2:** run a local server (recommended):

```bash
git clone https://github.com/Rishabh-bgp/zoo-website-capstone.git
cd zoo-website-capstone
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Folder structure

```
zoo-website-capstone/
├── index.html              # landing page linking to both versions
├── simple/
│   ├── index.html          # home
│   ├── animals.html
│   ├── visit.html
│   ├── tickets.html        # price calculator
│   ├── events.html
│   ├── gallery.html        # click-to-enlarge viewer
│   ├── contact.html        # form validation
│   ├── css/style.css
│   ├── js/script.js
│   └── images/
├── advanced/
│   ├── index.html
│   └── assets/
│       ├── css/styles.css
│       ├── js/theme-init.js   # applies saved theme before paint
│       ├── js/data.js         # animals, events, prices
│       ├── js/app.js          # all interactivity
│       └── img/
├── screenshots/
├── LICENSE
└── README.md
```

## What I learned

- Planning the same content for two skill levels, and refactoring repeated HTML into data-driven rendering
- Mobile-first responsive layout with CSS Grid, Flexbox and custom properties
- Theming with CSS variables and persisting user preferences
- Accessible patterns: native `<dialog>`, focus management, ARIA states, form error messaging
- Building multi-step forms with validation and live calculations in vanilla JavaScript
- Performance basics: image optimisation, lazy loading and avoiding render-blocking third-party assets

## Author

**Rishabh Aryan** · [@Rishabh-bgp](https://github.com/Rishabh-bgp)

## License

Released under the [MIT License](LICENSE). © 2026 Rishabh Aryan
