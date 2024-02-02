import { useQuery } from '@tanstack/react-query';

import { searchProducts } from './client';
import { RequestSearch } from './types';

export function useSearchProduct(data: RequestSearch) {
  return useQuery({
    queryKey: ['search', 'useSearchProduct', data.siteId, data.search],
    queryFn: () => searchProducts(data),
  });
}
