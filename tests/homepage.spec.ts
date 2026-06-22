import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should load the homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/.*/);
  });

  test('should display the header', async ({ page }) => {
    await expect(page.getByTestId('header')).toBeVisible();
  });

  test('should display all main sections', async ({ page }) => {
    await expect(page.getByTestId('hero')).toBeVisible();
    await expect(page.getByTestId('intro-card')).toBeVisible();
    await expect(page.getByTestId('behind-lens')).toBeVisible();
    await expect(page.getByTestId('fez-section')).toBeVisible();
    await expect(page.getByTestId('marrakech-section')).toBeVisible();
    await expect(page.getByTestId('instagram-cards')).toBeVisible();
    await expect(page.getByTestId('closing-section')).toBeVisible();
    await expect(page.getByTestId('related-articles')).toBeVisible();
  });

  test('should display the footer', async ({ page }) => {
    await page.getByTestId('footer').scrollIntoViewIfNeeded();

    await expect(page.getByTestId('footer')).toBeVisible();
  });

  test('should scroll to the bottom of the page', async ({ page }) => {
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    await expect(page.getByTestId('footer')).toBeVisible();
  });
});