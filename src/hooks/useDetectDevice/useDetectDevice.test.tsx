import { renderHook } from '@testing-library/react-hooks';

import { useDetectDevice } from './useDetectDevice';

describe('useDetectDevice', () => {
  test('returns a value', async () => {
    const { result } = renderHook(() => useDetectDevice());

    expect(result.current).toEqual('1');
  });
});
