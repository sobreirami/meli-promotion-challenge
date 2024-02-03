import { useQuery } from '@tanstack/react-query';

import { searchItems } from './client';
import { RequestSearch } from './types';

export function useSearchItem(data: RequestSearch) {
  return useQuery({
    queryKey: ['search', 'useSearchItem', data.siteId, data.search],
    queryFn: () => searchItems(data),
  });
}
