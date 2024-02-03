import { Item, ItemAttributeType } from '@/entities/Item';

export const MOCK_RESPONSE_ITEM: Item = {
  id: '123',
  title: 'title',
  thumbnail: 'thumbnail.jpg',
  price: 10.5,
  currency: 'BRL',
  pictures: [
    { id: '1', url: 'picture1.jpg' },
    { id: '2', url: 'picture2.jpg' },
  ],
  description: 'description.',
  attributes: [
    {
      id: '1',
      name: 'Color',
      value_name: 'Blue',
      value_type: ItemAttributeType.String,
    },
    {
      id: '2',
      name: 'Size',
      value_name: '1',
      value_type: ItemAttributeType.NumberUnit,
    },
  ],
  permalink: 'http://example.com/123',
};

export const MOCK_RESPONSE_ITEM_DESCRIPTION = {
  plain_text: 'description',
};
