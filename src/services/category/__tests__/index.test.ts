import { mockGetRequest } from '@test/mocks/server';
import { act, customRenderHook, waitFor } from '@test/utils/render';
import { getCategories } from '@/services/category/client';

import { MOCK_RESPONSE_CATEGORY } from './mock';
import { useCategory } from '..';

describe('Service - Category', () => {
  const siteId = 'MLB';

  beforeEach(() => {
    mockGetRequest({
      endpoint: `/sites/${siteId}/categories`,
      response: MOCK_RESPONSE_CATEGORY,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('receive data from getCategories', async () => {
    const result = await getCategories({ siteId });
    expect(result).toEqual(MOCK_RESPONSE_CATEGORY);
  });

  test('should to must return data successfully from the hook useCategory', async () => {
    const { result } = customRenderHook(() => useCategory({ siteId }));

    await act(async () => {
      await waitFor(() => result.current.isSuccess);
    });

    if (!result.current.data) {
      return;
    }

    expect(result.current.data).toEqual(MOCK_RESPONSE_CATEGORY);
  });
});
