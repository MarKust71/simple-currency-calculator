import { renderHook } from '@testing-library/react-hooks';

import { useHistory } from './useHistory';

describe('useHistory', () => {
  test('returns a value', async () => {
    const { result } = renderHook(() => useHistory());

    expect(result.current).toEqual('1');
  });
});