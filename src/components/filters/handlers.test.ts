import { expect, test } from "vitest";

import { handlers } from "./handlers";
import { mockBook } from "@/mocks/books";

test("should return true if book is small then 30", () => {
  setAmountMockBook(0);
  const isMatch = handlers.byRangePrice0To30(mockBook);
  expect(isMatch).toBe(true);
});

test("should return true if book is equal be 30", () => {
  setAmountMockBook(30);
  const isMatch = handlers.byRangePrice0To30(mockBook);
  expect(isMatch).toBe(true);
});

test("should return false if book more then 30", () => {
  setAmountMockBook(31);
  const isMatch = handlers.byRangePrice0To30(mockBook);
  expect(isMatch).toBe(false);
});

test("should return false if book is more then 51", () => {
  setAmountMockBook(52);
  const isMatch = handlers.byRangePrice31To50(mockBook);
  expect(isMatch).toBe(false);
});

test("should return false if book is small then 31", () => {
  setAmountMockBook(30);
  const isMatch = handlers.byRangePrice31To50(mockBook);
  expect(isMatch).toBe(false);
});

test("should return true if book is between 31 and 50 ", () => {
  setAmountMockBook(42);
  const isMatch = handlers.byRangePrice31To50(mockBook);
  expect(isMatch).toBe(true);
});

test("should return false if book is more then 100", () => {
  setAmountMockBook(101);
  const isMatch = handlers.byRangePrice51To100(mockBook);
  expect(isMatch).toBe(false);
});

test("should return false if book is small then 51", () => {
  setAmountMockBook(50);
  const isMatch = handlers.byRangePrice51To100(mockBook);
  expect(isMatch).toBe(false);
});

test("should return true if book is between 51 and 100 ", () => {
  setAmountMockBook(88);
  const isMatch = handlers.byRangePrice51To100(mockBook);
  expect(isMatch).toBe(true);
});

test("should return true if book is more then 101", () => {
  setAmountMockBook(102);
  const isMatch = handlers.byRangePriceMoreThen101(mockBook);
  expect(isMatch).toBe(true);
});

test("should return true if book is equal be 101", () => {
  setAmountMockBook(101);
  const isMatch = handlers.byRangePriceMoreThen101(mockBook);
  expect(isMatch).toBe(true);
});

test("should return true if book is between 51 and 100 ", () => {
  setAmountMockBook(25);
  const isMatch = handlers.byRangePriceMoreThen101(mockBook);
  expect(isMatch).toBe(false);
});

test("should return true if saleability is available", () => {
  setSaleabilityMockBook("FOR_SALE");
  const isMatch = handlers.byAvailableToSell(mockBook);
  expect(isMatch).toBe(true);
});

test("should return false if saleability is not available", () => {
  setSaleabilityMockBook("NOT_FOR_SALE");
  const isMatch = handlers.byAvailableToSell(mockBook);
  expect(isMatch).toBe(false);
});

test("should return false if saleability is available", () => {
  setSaleabilityMockBook("FOR_SALE");
  const isMatch = handlers.byNotAvailableToSell(mockBook);
  expect(isMatch).toBe(false);
});

test("should return true if saleability is not available", () => {
  setSaleabilityMockBook("NOT_FOR_SALE");
  const isMatch = handlers.byNotAvailableToSell(mockBook);
  expect(isMatch).toBe(true);
});

test("should return true if epub is available", () => {
  mockBook.accessInfo.epub.isAvailable = true;
  const isMatch = handlers.byEpubFormat(mockBook);
  expect(isMatch).toBe(true);
});

test("should return false if epub is not available", () => {
  mockBook.accessInfo.epub.isAvailable = false;
  const isMatch = handlers.byEpubFormat(mockBook);
  expect(isMatch).toBe(false);
});

test("should return true if pdf is available", () => {
  mockBook.accessInfo.pdf.isAvailable = true;
  const isMatch = handlers.byPDFFormat(mockBook);
  expect(isMatch).toBe(true);
});

test("should return false if pdf is not available", () => {
  mockBook.accessInfo.pdf.isAvailable = false;
  const isMatch = handlers.byPDFFormat(mockBook);
  expect(isMatch).toBe(false);
});

function setAmountMockBook(amount: number) {
  if (mockBook.saleInfo.listPrice) {
    mockBook.saleInfo.listPrice.amount = amount;
  }
  return mockBook;
}

function setSaleabilityMockBook(saleability: "NOT_FOR_SALE" | "FOR_SALE") {
  mockBook.saleInfo.saleability = saleability;
}
