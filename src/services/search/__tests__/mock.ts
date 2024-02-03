import { MOCK_RESPONSE_ITEM } from '@/services/item/__tests__/mock';
import { ResponseSearch } from '@/services/search/types';

export const MOCK_RESPONSE_SEARCH: ResponseSearch = {
  results: [MOCK_RESPONSE_ITEM],
  paging: {
    total: 1,
    offset: 0,
    limit: 10,
  },
};
