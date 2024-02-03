import { mockGetRequest } from '@test/mocks/server';
import { getCategories } from '@/services/category/client';

import { MOCK_RESPONSE_CATEGORY } from './mock';

describe('Service - Category', () => {
  it('receive data from getCategories', async () => {
    const siteId = 'MLB';

    mockGetRequest({
      endpoint: `/sites/${siteId}/categories`,
      response: MOCK_RESPONSE_CATEGORY,
    });

    const result = await getCategories({ siteId });

    expect(result).toEqual(MOCK_RESPONSE_CATEGORY);
  });
});
