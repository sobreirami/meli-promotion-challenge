import { useQuery } from '@tanstack/react-query';

import { RequestMeliApi } from '@/entities/Meli';
import { getCategories } from './client';

export function useCategory(data: RequestMeliApi) {
  return useQuery({
    queryKey: ['category', 'useCategory', data.siteId],
    queryFn: () => getCategories(data),
  });
}
