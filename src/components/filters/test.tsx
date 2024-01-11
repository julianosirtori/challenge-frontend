import { expect, test, afterEach, vi } from "vitest";
import { Filter } from "./";
import { screen, render, cleanup } from "@/utils/test-utils";

const mocks = vi.hoisted(() => {
  return {
    useWindowSize: vi.fn(() => ({
      width: 768,
    })),
  };
});

vi.mock("react-use", () => ({
  useWindowSize: mocks.useWindowSize,
}));

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

test("should have to render without crashing", () => {
  render(<Filter />);
  const contentFilterElement = screen.getByTestId("filter-content");
  expect(contentFilterElement).toBeTruthy();
});

test("should have render the mobile container when windows size is small then 768", () => {
  mocks.useWindowSize.mockReturnValue({
    width: 767,
  });
  render(<Filter />);
  const contentFilterElement = screen.getByTestId("container-mobile");
  expect(contentFilterElement).toBeTruthy();
});

test("should have render the desktop container when windows size is more or equal then 768", () => {
  mocks.useWindowSize.mockReturnValue({
    width: 768,
  });
  render(<Filter />);
  const contentFilterElement = screen.getByTestId("container-desktop");
  expect(contentFilterElement).toBeTruthy();
});
