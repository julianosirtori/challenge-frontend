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
  expect(page.getByTestId("results-search-item-0")).toBeTruthy();
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
    await page.locator('div[data-testid="results-search-item-1"]').count(),
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
  const suggestionElement = page.getByTestId("results-search-item-0");
  await suggestionElement.click();
  await page.waitForURL(/search\?q=/gm);
  expect(page.url()).toContain("/search?q=");
});

test("should have to navigate between suggestions by arrows keys when search input is focused", async ({
  page,
}) => {
  await page.goto("/");
  const inputElement = page.getByTestId("search-input");

  await inputElement.focus();
  await inputElement.fill("senhor dos aneis");
  await page.waitForTimeout(2000);
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowUp");
  const suggestionElement = page.getByTestId("results-search-item-2");
  expect(suggestionElement).toHaveCSS("background-color", "rgb(64, 106, 118)");
});

test("should have to navigate to search page when clicked enter and search input is focused", async ({
  page,
}) => {
  await page.goto("/");
  const inputElement = page.getByTestId("search-input");

  await inputElement.focus();
  await inputElement.fill("senhor dos aneis");
  await page.waitForTimeout(2000);
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowUp");
  await page.keyboard.press("Enter");
  await page.waitForURL(/search\?q=/gm);
  expect(page.url()).toContain("/search?q=");
});

test("should have to close suggestion when Escape is clicked", async ({
  page,
}) => {
  await page.goto("/");
  const inputElement = page.getByTestId("search-input");

  await inputElement.focus();
  await inputElement.fill("senhor dos aneis");
  await page.waitForTimeout(2000);
  await page.keyboard.press("Escape");
  await page.waitForTimeout(500);
  expect(
    await page.locator('div[data-testid="results-search-item-1"]').count(),
  ).toBe(0);
});
