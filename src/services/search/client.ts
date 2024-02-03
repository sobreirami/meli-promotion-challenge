import { apiMeli } from '@/libs/axios';

import { RequestSearch, ResponseSearch } from './types';

export async function searchItems({
  limit,
  offset,
  search,
  siteId,
}: RequestSearch): Promise<ResponseSearch> {
  const { data } = await apiMeli.get<ResponseSearch>(
    `/sites/${siteId}/search`,
    {
      params: {
        q: search,
        offset,
        limit,
      },
    }
  );

  return data;
}
