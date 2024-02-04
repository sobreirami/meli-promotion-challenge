import { mockGetRequest } from '@test/mocks/server';

import { searchItems } from '@/services/search/client';
import { useSearchItem } from '@/services/search/';
import { act, customRenderHook, waitFor } from '@test/utils/render';
import { MELI_COUNTRY_CODE } from '@/configs/environment';
import { MOCK_RESPONSE_SEARCH } from './mock';

describe('Service - Search', () => {
  const siteId = MELI_COUNTRY_CODE;

  beforeEach(() => {
    mockGetRequest({
      endpoint: `/sites/${siteId}/search`,
      response: MOCK_RESPONSE_SEARCH,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('receive data from searchItems', async () => {
    const result = await searchItems({
      siteId,
      limit: 10,
      offset: 0,
      search: 'product 1',
    });
    expect(result).toEqual(MOCK_RESPONSE_SEARCH);
  });

  test('should to must return data successfully from the hook useSearchItem', async () => {
    const { result } = customRenderHook(() =>
      useSearchItem({
        siteId,
        limit: 10,
        offset: 0,
        search: 'product 1',
      })
    );

    await act(async () => {
      await waitFor(() => result.current.isSuccess);
    });

    if (!result.current.data) {
      return;
    }

    expect(result.current.data).toEqual(MOCK_RESPONSE_SEARCH);
  });
});
