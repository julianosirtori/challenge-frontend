import { test, expect } from "@playwright/test";

test("should have show results of search", async ({ page }) => {
  await page.goto("/search?q=inauthor:%22J%C3%BAlio%20Verne%22");
  const inputElement = page.getByTestId("search-input");

  expect(await inputElement.inputValue()).toEqual('inauthor:"Júlio Verne"');
  await page.waitForTimeout(2000);
  expect(await page.getByTestId("book-item").count()).toBe(20);
});

test("should have fetch again if scrolling until the end of page and show items on screen", async ({
  page,
}) => {
  await page.goto("/search?q=inauthor:%22J%C3%BAlio%20Verne%22");
  await page.waitForTimeout(2000);
  await page.getByTestId("button-load-more").scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000);
  expect(await page.getByTestId("book-item").count()).toBe(40);
});

test("should have apply filter when clicked on filter item", async ({
  page,
}) => {
  await page.goto("/search?q=inauthor:%22J%C3%BAlio%20Verne%22");
  const filterComponent = page.getByTestId("filter-checkbox-byRangePrice0To30");
  filterComponent.click();
  await page.waitForTimeout(2000);
  expect(await page.getByTestId("book-item").count()).toBe(14);
});

test("should have show filters items actives if has search params", async ({
  page,
}) => {
  await page.goto("/search?q=inauthor%3A%22J%C3%BAlio+Verne%22&byPDFFormat=1");
  await page.waitForTimeout(3000);
  expect(await page.getByTestId("book-item").count()).toBe(16);
});

test("shouldn't have show the filters if is mobile viewport", async ({
  page,
}) => {
  page.setViewportSize({
    width: 375,
    height: 667,
  });
  await page.goto("/search?q=inauthor:%22J%C3%BAlio%20Verne%22");
  const elementContainerMobile = page.getByTestId("container-mobile");
  expect(elementContainerMobile).not.toBeVisible();
});

test("should apply filter if is mobile viewport", async ({ page }) => {
  page.setViewportSize({
    width: 375,
    height: 667,
  });

  await page.goto("/search?q=inauthor:%22J%C3%BAlio%20Verne%22");
  const buttonShowFilter = page.getByTestId("button-show-filter");
  await buttonShowFilter.click();
  const elementContainerMobile = page.getByTestId("container-mobile");
  await expect(elementContainerMobile).toBeVisible();
  const filterComponent = page.getByTestId("filter-checkbox-byRangePrice0To30");
  filterComponent.click();
  await page.waitForTimeout(2000);
  expect(await page.getByTestId("book-item").count()).toBe(14);
});
