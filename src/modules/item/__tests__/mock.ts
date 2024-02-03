import {
  MOCK_RESPONSE_ITEM,
  MOCK_RESPONSE_ITEM_DESCRIPTION,
} from '@/services/item/__tests__/mock';

export const MOCK_ITEM_DETAIL = {
  ...MOCK_RESPONSE_ITEM,
  description: MOCK_RESPONSE_ITEM_DESCRIPTION.plain_text,
};
