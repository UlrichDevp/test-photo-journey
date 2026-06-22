# Frontend Technical Test - Yaakyi

Implementation of the frontend technical assessment provided by Yaakyi.

## Overview

This project reproduces the provided Figma design using modern frontend technologies while focusing on:

* Pixel-perfect implementation
* Responsive design
* Component reusability
* Code maintainability
* Automated visual and end-to-end testing

## Tech Stack

* Next.js (App Router)
* React
* TypeScript
* TailwindCSS
* BackstopJS
* Playwright

## Features

* Pixel-perfect implementation based on the provided Figma design
* Responsive layouts for:

  * Mobile
  * Tablet
  * Desktop
* Reusable and maintainable components
* Automated visual regression testing with BackstopJS
* End-to-end testing with Playwright

## Installation

Install dependencies:

```bash
npm install
```

## Run the development server

```bash
npm run dev
```

Application available at:

```bash
http://localhost:3000
```

## Production Build

Create a production build:

```bash
npm run build
```

Run production server:

```bash
npm start
```

## Visual Regression Testing (BackstopJS)

Generate reference screenshots:

```bash
npm run backstop:reference
```

Run visual regression tests:

```bash
npm run backstop:test
```

Update visual references:

```bash
npx backstop approve
```

## End-to-End Testing (Playwright)

Run all E2E tests:

```bash
npm run test:e2e
```

Open interactive Playwright UI:

```bash
npm run test:e2e:ui
```

Open the HTML report:

```bash
npx playwright show-report
```

## Test Coverage

### BackstopJS

Visual regression tests cover:

* Mobile viewport
* Tablet viewport
* Desktop viewport

### Playwright

E2E tests validate:

* Homepage accessibility
* Header rendering
* Main sections rendering
* Footer rendering
* Page scrolling behavior

Tests are executed on:

* Chromium
* Firefox
* WebKit

## Project Structure

```text
.
├── app/
├── components/
├── public/
├── tests/
├── backstop_data/
├── backstop.json
├── playwright.config.ts
└── README.md
```

## Repository

Repository URL:

https://github.com/UlrichDevp/test-photo-journey

## Author

SOH NGNEGHAJI ULRICH BOLIVAN
