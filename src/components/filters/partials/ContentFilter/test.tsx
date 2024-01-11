import { expect, test, afterEach } from "vitest";
import { ContentFilter } from "./";
import { screen, render, cleanup, fireEvent } from "@/utils/test-utils";
import { render as renderNative } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
});

test("should have to render without crashing", () => {
  render(<ContentFilter />);
  const contentFilterElement = screen.getByTestId("filter-content");
  expect(contentFilterElement).toBeTruthy();
});

test("should click on filter item and add a queryParam on url", () => {
  const memoryRouter = createMemoryRouter(
    [
      {
        path: "/",
        element: <ContentFilter />,
      },
    ],
    {
      initialEntries: ["/"],
    },
  );
  renderNative(<RouterProvider router={memoryRouter} />);
  fireEvent.click(screen.getByTestId("filter-checkbox-byRangePrice0To30"));
  expect(memoryRouter.state.location.search).toBe("?byRangePrice0To30=1");
});

test("should remove the filter if clicked twice time on filter", () => {
  const memoryRouter = createMemoryRouter(
    [
      {
        path: "/",
        element: <ContentFilter />,
      },
    ],
    {
      initialEntries: ["/"],
    },
  );
  renderNative(<RouterProvider router={memoryRouter} />);
  fireEvent.click(screen.getByTestId("filter-checkbox-byRangePrice0To30"));
  fireEvent.click(screen.getByTestId("filter-checkbox-byRangePrice0To30"));
  expect(memoryRouter.state.location.search).toBe("");
});

test("should have click on differentes filter to combine theirs", () => {
  const memoryRouter = createMemoryRouter(
    [
      {
        path: "/",
        element: <ContentFilter />,
      },
    ],
    {
      initialEntries: ["/"],
    },
  );
  renderNative(<RouterProvider router={memoryRouter} />);
  fireEvent.click(screen.getByTestId("filter-checkbox-byRangePrice0To30"));
  fireEvent.click(screen.getByTestId("filter-checkbox-byNotAvailableToSell"));
  expect(memoryRouter.state.location.search).toBe(
    "?byRangePrice0To30=1&byNotAvailableToSell=1",
  );
});

test("should clear the filters if click on button clear filters", () => {
  const memoryRouter = createMemoryRouter(
    [
      {
        path: "/",
        element: <ContentFilter />,
      },
    ],
    {
      initialEntries: ["/"],
    },
  );
  renderNative(<RouterProvider router={memoryRouter} />);
  fireEvent.click(screen.getByTestId("filter-checkbox-byRangePrice0To30"));
  fireEvent.click(screen.getByTestId("filter-checkbox-byNotAvailableToSell"));
  fireEvent.click(screen.getByTestId("btn-clear-filters"));
  expect(memoryRouter.state.location.search).toBe("");
});

test("should not show the clear button if don't have filters activated", () => {
  const memoryRouter = createMemoryRouter(
    [
      {
        path: "/",
        element: <ContentFilter />,
      },
    ],
    {
      initialEntries: ["/"],
    },
  );
  renderNative(<RouterProvider router={memoryRouter} />);
  expect(screen.queryAllByTestId("btn-clear-filters").length).toBe(0);
});
