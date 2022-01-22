import { renderHook } from '@testing-library/react-hooks';

import { useCurrencies } from './useCurrencies';

describe('useCurrencies', () => {
  test('returns a value', async () => {
    const { result } = renderHook(() => useCurrencies());

    expect(result.current).toEqual('1');
  });
});