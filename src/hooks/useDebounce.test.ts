import { useDebounce } from './useDebounce'
import { renderHook, waitFor } from '@testing-library/react';

describe('useDebounce', () => {
  it('should updated the value after 250ms', async () => {
    let value = 0;
    const { result, rerender } = renderHook(() => useDebounce(value, 250));
    value = 1;
    rerender()
    await waitFor(() => expect(result.current).toBe(value), {timeout: 300})
  });

  it('should not updated the value immediately', async () => {
    let value = 0;
    const { result, rerender } = renderHook(() => useDebounce(value, 250));
    value = 1;
    rerender()
    expect(result.current).not.toBe(value)
  });

})