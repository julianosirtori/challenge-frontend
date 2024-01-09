import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Árvore/);
});

test("should have search and show results", async ({ page }) => {
  await page.goto("/");
  const inputElement = page.getByTestId("search-input");

  await inputElement.focus();
  await inputElement.fill("senhor dos aneis");
  await expect(page.getByTestId("results-search")).toBeVisible();
  expect(
    await page.locator('div[data-testid="results-search-item"]').count(),
  ).toBe(10);
});

test("should have to close results if focus out ", async ({ page }) => {
  await page.goto("/");
  const inputElement = page.getByTestId("search-input");

  await inputElement.focus();
  await inputElement.fill("senhor dos aneis");
  await page.waitForTimeout(2000);
  await inputElement.blur();
  await page.waitForTimeout(500);
  expect(
    await page.locator('div[data-testid="results-search-item"]').count(),
  ).toBe(0);
});

test("should have to navigate to search page when click on the suggestions ", async ({
  page,
}) => {
  await page.goto("/");
  const inputElement = page.getByTestId("search-input");

  await inputElement.focus();
  await inputElement.fill("senhor dos aneis");
  await page.waitForTimeout(2000);
  const firstSuggestion = page
    .locator('div[data-testid="results-search-item"]')
    .first();
  await firstSuggestion.click();
  await page.waitForURL(/search\?q=/gm);
  expect(page.url()).toContain("/search?q=");
});
