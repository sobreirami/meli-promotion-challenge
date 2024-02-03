import { mockGetRequest } from '@test/mocks/server';
import { getItem, getItemDescription } from '@/services/item/client';

import { getItemWithDescription } from '@/services/item';
import { MOCK_RESPONSE_ITEM, MOCK_RESPONSE_ITEM_DESCRIPTION } from './mock';

describe('Service - Item', () => {
  const itemId = '123';

  beforeEach(() => {
    mockGetRequest({
      endpoint: `/items/${itemId}`,
      response: MOCK_RESPONSE_ITEM,
    });
    mockGetRequest({
      endpoint: `/items/${itemId}/description`,
      response: MOCK_RESPONSE_ITEM_DESCRIPTION,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('receive data from getItem', async () => {
    const result = await getItem({ itemId });
    expect(result).toEqual(MOCK_RESPONSE_ITEM);
  });

  it('receive data from getItemDescription', async () => {
    const result = await getItemDescription({ itemId });
    expect(result).toEqual(MOCK_RESPONSE_ITEM_DESCRIPTION);
  });

  it('should return complete item data getItem + getItemDescription', async () => {
    const result = await getItemWithDescription({ itemId });
    expect(result).toEqual({
      ...MOCK_RESPONSE_ITEM,
      description: MOCK_RESPONSE_ITEM_DESCRIPTION.plain_text,
    });
  });
});
