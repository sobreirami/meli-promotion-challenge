import { RequestMeliApi } from '@/entities/Meli';
import { Item } from '@/entities/Item';

export type ResponseSearch = {
  paging: {
    total: number;
    offset: number;
    limit: number;
  };
  results: Item[];
};

export type RequestSearch = RequestMeliApi & {
  search: string;
  offset: number;
  limit: number;
};
