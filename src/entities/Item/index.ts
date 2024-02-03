export enum ItemAttributeType {
  String = 'string',
  NumberUnit = 'number_unit',
  List = 'list',
}

export type ItemPicture = {
  id: string;
  url: string;
};

type ItemAttributes = {
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
  original_price: number;
  currency: string;
  pictures?: ItemPicture[];
  description?: string;
  attributes: ItemAttributes[];
};

export type ItemDescription = {
  plain_text: string;
};
