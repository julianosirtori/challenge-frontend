import { expect, test, afterEach } from "vitest";
import { renderHook, waitFor, cleanup } from "@testing-library/react";

import { useDebounce } from "./index";

afterEach(() => {
  cleanup();
});

test("should updated the value after 250ms", async () => {
  let value = 0;
  const { result, rerender } = renderHook(() => useDebounce(value, 250));
  value = 1;
  rerender();
  await waitFor(() => expect(result.current).toBe(1), { timeout: 500 });
});

test("should not updated the value immediately", async () => {
  let value = 0;
  const { result, rerender } = renderHook(() => useDebounce(value, 250));
  value = 1;
  rerender();
  expect(result.current).not.toBe(1);
});
