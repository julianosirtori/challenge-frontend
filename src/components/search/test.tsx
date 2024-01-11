import { afterAll, afterEach, beforeAll, expect, test } from "vitest";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import {
  screen,
  render,
  fireEvent,
  waitFor,
  cleanup,
} from "@/utils/test-utils";
import Search from "./index";

const books = [
  {
    id: "1",
    volumeInfo: {
      title: "Senhor dos aneis",
    },
  },
  {
    id: "2",
    volumeInfo: {
      title: "Harry potter: e a pedra filosofal",
    },
  },
  {
    id: "3",
    volumeInfo: {
      title: "Harry potter: e a pedra filosofal",
    },
  },
];

export const handlers = [
  http.get("https://www.googleapis.com/books/v1/volumes", ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    return HttpResponse.json({
      kind: "books#volumes",
      totalItems: 4,
      items: q === "senhor dos aneis" ? [books[0]] : books,
    });
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

const setup = () => {
  const utils = render(<Search />);
  const input = screen.getByLabelText("autocomplete-input") as HTMLInputElement;
  return {
    input,
    ...utils,
  };
};

test("should have to render without crashing", () => {
  const { input } = setup();
  expect(input).toBeTruthy();
});

test("should have show suggestions when type on input", async () => {
  const { input } = setup();
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "senhor dos aneis" } });

  await waitFor(() => screen.getByTestId("results-search"));
  expect(input.value).toBe("senhor dos aneis");
  expect(input).toBeTruthy();
});

test("should have close the  suggestions when the input lost focus", async () => {
  const { input } = setup();
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "senhor dos aneis" } });
  fireEvent.focusOut(input);
  await waitFor(() =>
    expect(screen.queryAllByTestId("results-search").length).toBe(0),
  );
});

test("should have change the suggestions when input changes values after 250ms", async () => {
  const { input } = setup();
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "senhor dos aneis" } });
  await waitFor(() =>
    expect(screen.getByTestId("results-search").childNodes.length).toBe(2),
  );
  fireEvent.change(input, { target: { value: "Harry Potter" } });
  await waitFor(() =>
    expect(screen.getByTestId("results-search").childNodes.length).toBe(4),
  );
});
