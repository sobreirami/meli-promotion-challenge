import { RequestMeliApi } from '@/entities/Meli';
import { Product } from '@/entities/Product';

export type ResponseSearch = {
  paging: {
    total: number;
    offset: number;
    limit: number;
  };
  results: Product[];
};

export type RequestSearch = RequestMeliApi & {
  search: string;
  offset: number;
  limit: number;
};
