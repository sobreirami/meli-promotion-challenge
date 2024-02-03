import { Item } from '@/entities/Item';
import { RequestItem } from './types';
import { getItem, getItemDescription } from './client';

export async function getItemWithDescription({
  itemId,
}: RequestItem): Promise<Item> {
  try {
    const [itemResponse, itemDescriptionResponse] = await Promise.all([
      getItem({ itemId }),
      getItemDescription({ itemId }),
    ]);

    const description = itemDescriptionResponse.plain_text;

    const item: Item = {
      ...itemResponse,
      description,
    };

    return item;
  } catch (error) {
    throw error;
  }
}
