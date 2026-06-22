# Frontend Technical Test

Implementation of the frontend technical test provided by Yaakyi.

## Tech Stack

* Next.js
* TypeScript
* TailwindCSS
* BackstopJS (visual regression testing)
* Playwright (end-to-end testing)

## Features

* Pixel-perfect implementation based on the provided Figma design
* Responsive design (mobile, tablet, desktop)
* Reusable and maintainable components
* Visual regression testing with BackstopJS
* End-to-end testing with Playwright

## Project Structure

* `components/` - Reusable UI components
* `tests/` - Playwright end-to-end tests
* `backstop_data/` - BackstopJS visual testing assets

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at:

```bash
http://localhost:3000
```

## Visual Tests (BackstopJS)

Generate reference screenshots:

```bash
npx backstop reference
```

Run visual regression tests:

```bash
npx backstop test
```

Approve new visual references:

```bash
npx backstop approve
```

## End-to-End Tests (Playwright)

Run all tests:

```bash
npx playwright test
```

Open the HTML report:

```bash
npx playwright show-report
```

## Notes

This project was developed with a strong focus on:

* Pixel-perfect implementation
* Code quality and maintainability
* Responsive behavior
* Automated UI testing

## Repository

Repository URL:

https://github.com/UlrichDevp/test-photo-journey
