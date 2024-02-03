import '@testing-library/jest-dom';

import { queryClient } from '@/app/providers/tanstackProvider';

import { mockAxios } from './mocks/server';

afterEach(() => {
  mockAxios.resetHandlers();
  queryClient.clear();
});
