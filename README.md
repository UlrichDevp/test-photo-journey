# Frontend Technical Test — Yaakyi

Implementation of the frontend technical assessment provided by Yaakyi.

---

## Overview

This project reproduces the provided Figma design using modern frontend technologies, with a focus on:

- Pixel-perfect implementation
- Responsive design (mobile, tablet, desktop)
- Component reusability
- Code maintainability
- Automated visual and end-to-end testing

---

## Tech Stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **TailwindCSS**
- **BackstopJS**
- **Playwright**

---

## Features

- Pixel-perfect implementation based on the provided Figma design
- Fully responsive layouts: Mobile, Tablet, Desktop
- Reusable and modular components
- Visual regression testing with BackstopJS
- End-to-end testing with Playwright (Chromium, Firefox, WebKit)

---

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

> ⚠️ **Important — Required for BackstopJS**
>
> On a fresh machine, install the browser required by Puppeteer (used by BackstopJS):
>
> ```bash
> npx puppeteer browsers install chrome
> ```
>
> This step is required to avoid Chrome launch errors on CI or new environments.

---

## Development

Start the development server:

```bash
npm run dev
```

The application is available at: [http://localhost:3000](http://localhost:3000)

---

## Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## Visual Regression Testing — BackstopJS

> ⚠️ Make sure the dev server is running before executing these commands.

**Generate reference screenshots:**

```bash
npm run backstop:reference
```

**Run visual regression tests:**

```bash
npm run backstop:test
```

**Approve intentional UI changes:**

```bash
npx backstop approve
```


**Some tests are in the ./backstop_data  folder**

---

## End-to-End Testing — Playwright

**Run all E2E tests:**

```bash
npm run test:e2e
```

**Open interactive UI mode:**

```bash
npm run test:e2e:ui
```

**Open the HTML report:**

```bash
npx playwright show-report
```


**Some test are in the  ./test-results folder**

---

## Test Coverage

### BackstopJS — Visual Regression

Viewports covered:

- Mobile
- Tablet
- Desktop

### Playwright — E2E Tests

Tests cover:

- Homepage load
- Header visibility
- All main sections rendering
- Footer visibility
- Scroll behavior

Browsers tested:

- Chromium
- Firefox
- WebKit

---

## Project Structure

```
.
├── app/
├── components/
├── tests/
├── public/
├── backstop_data/
├── backstop.json
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Repository

[https://github.com/UlrichDevp/test-photo-journey](https://github.com/UlrichDevp/test-photo-journey)

---

## Notes for Reviewers

This project has been designed with a strong focus on:

- Pixel-perfect UI reproduction
- Cross-browser compatibility
- Automated testing (visual + E2E)
- Component modularity and maintainability
- Production-ready structure

---

## Quick Start — Summary

To run this project from scratch:

```bash
npm install
npx puppeteer browsers install chrome
npm run dev
npm run backstop:reference
npm run test:e2e
```

---

## Author

**SOH NGNEGHAJI ULRICH BOLIVAN**