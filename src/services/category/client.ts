import { apiMeli } from '@/libs/axios';

import { RequestMeliApi } from '@/entities/Meli';
import { ResponseCategory } from './types';

export async function getCategories({
  siteId,
}: RequestMeliApi): Promise<ResponseCategory[]> {
  const { data } = await apiMeli.get<ResponseCategory[]>(
    `${siteId}/categories`
  );

  return data;
}
