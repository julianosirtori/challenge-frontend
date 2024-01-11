import { expect, test, afterEach } from "vitest";
import { render } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { InfiniteData } from "react-query";

import { BooksList } from "./";
import { screen, cleanup } from "@/utils/test-utils";
import { infiniteBookList } from "@/mocks/books";
import { FetchVolumesResponse } from "@/services/books/types";

afterEach(() => {
  cleanup();
});

const setupComponentWithRouter = (
  initialEntries: string[] = ["/"],
  data?: InfiniteData<FetchVolumesResponse>,
) => {
  const memoryRouter = createMemoryRouter(
    [
      {
        path: "/",
        element: <BooksList data={data} />,
      },
    ],
    {
      initialEntries,
    },
  );
  render(<RouterProvider router={memoryRouter} />);
  return memoryRouter;
};

test("should have to render without crashing", () => {
  setupComponentWithRouter();
  const contentFilterElement = screen.getByTestId("books-list");
  expect(contentFilterElement).toBeTruthy();
});

test("should not render any item when data is null", () => {
  setupComponentWithRouter();
  expect(screen.queryAllByTestId("book-item").length).toBe(0);
});

test("should render all books when is not have filter active", () => {
  setupComponentWithRouter(["/?q=senhor+dos+aneis"], infiniteBookList);
  expect(screen.queryAllByTestId("book-item").length).toBe(40);
});

test("should filter books when have a filter active", () => {
  setupComponentWithRouter(
    ["/?q=senhor+dos+aneis&byRangePrice31To50=1"],
    infiniteBookList,
  );
  expect(screen.queryAllByTestId("book-item").length).toBe(8);
});

test("should filter books when have many filters active", () => {
  setupComponentWithRouter(
    ["/?q=senhor+dos+aneis&byEpubFormat=1&byAvailableToSell=1&byPDFFormat=1"],
    infiniteBookList,
  );
  expect(screen.queryAllByTestId("book-item").length).toBe(12);
});
