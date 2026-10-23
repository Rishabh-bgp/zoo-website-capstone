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

## 🔗 Other repositories by Rishabh Aryan

| Repository | Description | Live |
|---|---|---|
| [100-days-of-python](https://github.com/Rishabh-bgp/100-days-of-python) | My original, offline, no-API-key solutions to all 100 projects of the 100 Days of Code Python bootcamp curriculum… | — |
| [Agentic-Engineering-Ebook](https://github.com/Rishabh-bgp/Agentic-Engineering-Ebook) | Agentic Engineering is a practical notebook-book on specifying, generating, verifying, and refining multi-tenant… | — |
| [beed-ml-study](https://github.com/Rishabh-bgp/beed-ml-study) | Provenance audit and leakage-aware benchmark of seizure-type classifiers on the Bangalore EEG Epilepsy Dataset — IIT… | — |
| [boston-house-price-prediction](https://github.com/Rishabh-bgp/boston-house-price-prediction) | Boston house price prediction with machine learning: scikit-learn gradient boosting, repeated K-fold CV, race… | [open](https://rishabh-bgp.github.io/boston-house-price-prediction/) |
| [Brain-Computer-Interfaces-and-Cognitive-Computing-An-Introduction](https://github.com/Rishabh-bgp/Brain-Computer-Interfaces-and-Cognitive-Computing-An-Introduction) | Brain–computer interfaces (BCIs) link neural activity to external devices, translating brain signals via algorithms… | — |
| [building-a-virtual-cell-in-python](https://github.com/Rishabh-bgp/building-a-virtual-cell-in-python) | A cell has a normal gene-activity pattern. Knock out one gene and that pattern changes. This project trains a small… | — |
| [Chronic-Kidney-Disease-Stage-Identification-in-HIV-Infected-Patients-Using-Supervised-ML](https://github.com/Rishabh-bgp/Chronic-Kidney-Disease-Stage-Identification-in-HIV-Infected-Patients-Using-Supervised-ML) | ML is transforming Chronic Kidney Disease (CKD) detection in HIV patients, catching early asymptomatic stages to… | — |
| [cobratate](https://github.com/Rishabh-bgp/cobratate) | Cobratate, an esoteric imperative programming language. Tate-flavored syntax, ordinary semantics, and a Python… | [open](https://rishabh-bgp.github.io/cobratate/) |
| [coda-synth](https://github.com/Rishabh-bgp/coda-synth) | CoDA-Synth: stylometric detection of LLM-rewritten dark-web documents with sparse TF-IDF + LinearSVC. Research lab,… | [open](https://shale-ember-delta-kite.grok.me/) |
| [IIT-ROPAR-GENAI-FOUNDATIONS](https://github.com/Rishabh-bgp/IIT-ROPAR-GENAI-FOUNDATIONS) | Free open-source Generative AI foundations ebooks (2026) covering Claude, Grok, Gemini, Cursor, OpenAI and more —… | — |
| [iris-classification](https://github.com/Rishabh-bgp/iris-classification) | Iris flower classification in Python: scikit-learn model comparison, tuning and evaluation, FastAPI /predict API,… | [open](https://rishabh-bgp.github.io/iris-classification/) |
| [kbc-game](https://github.com/Rishabh-bgp/kbc-game) | Kaun Banega Crorepati (KBC) quiz game for the terminal in Python: 16-question prize ladder, safe levels and 4… | — |
| [knn-classifier](https://github.com/Rishabh-bgp/knn-classifier) | Simple K-Nearest Neighbors classifier on the classic Iris dataset using scikit-learn. Loads data, trains the model,… | — |
| [linear-regression-model-](https://github.com/Rishabh-bgp/linear-regression-model-) | Supervised linear regression on the scikit-learn diabetes dataset. A single feature (BMI) is used to predict… | — |
| [logistic-regression](https://github.com/Rishabh-bgp/logistic-regression) | This graduate capstone applies multi-class logistic regression to the Iris dataset. It includes EDA, stratified… | — |
| [logistics-website-capstone](https://github.com/Rishabh-bgp/logistics-website-capstone) | Logistics website capstone: Kargonaut Logistics, a premium freight site mixing claymorphism, glassmorphism and… | [open](https://rishabh-bgp.github.io/logistics-website-capstone/) |
| [lovelight-leap](https://github.com/Rishabh-bgp/lovelight-leap) | 💖 Lovelight Leap: a love-themed 2D platformer in vanilla JS canvas. 4 worlds, a boss you cheer up, original… | [open](https://rishabh-bgp.github.io/lovelight-leap/) |
| [machine-learning-part-1](https://github.com/Rishabh-bgp/machine-learning-part-1) | Machine learning in Python with scikit-learn: heart disease classification and medical insurance cost regression… | — |
| [Meeting-of-Machines-Consumer-Agents-Seller-Agents-and-Hidden-Fulfilment-Risk-in-Online-Retail](https://github.com/Rishabh-bgp/Meeting-of-Machines-Consumer-Agents-Seller-Agents-and-Hidden-Fulfilment-Risk-in-Online-Retail) | Agentic commerce lets shopping and seller agents place orders without showing operational truth. This IS case argues… | — |
| [morocco-city-aware-load-forecasting](https://github.com/Rishabh-bgp/morocco-city-aware-load-forecasting) | City-aware short-term load forecasting and peak detection on high-resolution Moroccan smart-meter data (5 zones).… | — |
| [NIELIT-DATA-SCIENCE](https://github.com/Rishabh-bgp/NIELIT-DATA-SCIENCE) | Hands-on NumPy, Pandas, and Matplotlib Jupyter notebooks for the NIELIT Data Science curriculum — practical,… | — |
| [NIELIT-MACHINE-LEARNING-PROJECTS](https://github.com/Rishabh-bgp/NIELIT-MACHINE-LEARNING-PROJECTS) | Nineteen end-to-end machine learning projects: classification, regression, clustering, and recommendation, with… | — |
| [NIELIT-PYTHON-](https://github.com/Rishabh-bgp/NIELIT-PYTHON-) | Open-source Python teaching notebooks: a language reference and five capstone programs, with detailed documentation.… | — |
| [pan-cancer-classification](https://github.com/Rishabh-bgp/pan-cancer-classification) | Leakage, equivalence, conformal reliability and data efficiency on the UCI TCGA Pan-Cancer RNA-Seq dataset — IIT… | — |
| [Predicting-Hot-Events-in-the-Early-Period-through-Bayesian-Model-for-Social-Networks](https://github.com/Rishabh-bgp/Predicting-Hot-Events-in-the-Early-Period-through-Bayesian-Model-for-Social-Networks) | This notebook details the implementation and evaluation of a Bayesian perspective Early stage Event Prediction… | — |
| [prediction-as-power](https://github.com/Rishabh-bgp/prediction-as-power) | Laboratory and working paper on prediction as power in European electricity markets. A DE-like hourly simulator… | — |
| [real-estate-valuation-taiwan](https://github.com/Rishabh-bgp/real-estate-valuation-taiwan) | Taiwan real estate valuation (Xindian, New Taipei): house price per ping prediction with scikit-learn gradient… | [open](https://rishabh-bgp.github.io/real-estate-valuation-taiwan/) |
| [snakes-and-ladders](https://github.com/Rishabh-bgp/snakes-and-ladders) | 🐍🪜 Original Snakes & Ladders browser game: hand-drawn SVG snakes and ladders, 3D dice, 2-4 humans or bots, sound,… | [open](https://rishabh-bgp.github.io/snakes-and-ladders/) |
| [spam-scan](https://github.com/Rishabh-bgp/spam-scan) | Explainable spam, phishing & Indian-scam detector for SMS/email (English, Hindi, Hinglish): TF-IDF + Logistic… | [open](https://spam-scan.onrender.com) |
| [vedic-math-hybrid-kt](https://github.com/Rishabh-bgp/vedic-math-hybrid-kt) | Hybrid Vedic Math AI: rule-based sutras (Urdhva-Tiryagbhyam, Nikhilam, Yavadunam) plus RF classifier that cleans… | — |
| [wind-turbine-power-model](https://github.com/Rishabh-bgp/wind-turbine-power-model) | Single-turbine power curves + wind-farm simulation. Weibull wind stats, hourly NASA-style speed data, and… | — |
