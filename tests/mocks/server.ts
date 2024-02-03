import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const mockAxios = new MockAdapter(axios);

interface MockRequestProps<T> {
  endpoint: string;
  status?: number;
  response: T;
}

export const mockGetRequest = <T>({
  endpoint,
  status = 200,
  response,
}: MockRequestProps<T>) => {
  mockAxios.onGet(endpoint).reply(status, response);
};
