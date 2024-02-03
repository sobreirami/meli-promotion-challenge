export enum ItemAttributeType {
  String = 'string',
  NumberUnit = 'number_unit',
  List = 'list',
}

export type ItemPicture = {
  id: string;
  url: string;
};

export type ItemAttribute = {
  id: string;
  name: string;
  value_name: string;
  value_type: ItemAttributeType;
};

export type Item = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  currency: string;
  pictures?: ItemPicture[];
  description?: string;
  attributes: ItemAttribute[];
  permalink: string;
};

export type ItemDescription = {
  plain_text: string;
};
