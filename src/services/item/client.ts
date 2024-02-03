import { apiMeli } from '@/libs/axios';

import { ItemDescription, Item } from '@/entities/Item';
import { RequestItem } from './types';

export async function getItem({ itemId }: RequestItem): Promise<Item> {
  const { data } = await apiMeli.get<Item>(`/items/${itemId}`);

  return data;
}

export async function getItemDescription({
  itemId,
}: RequestItem): Promise<ItemDescription> {
  const { data } = await apiMeli.get<ItemDescription>(
    `/items/${itemId}/description`
  );

  return data;
}
