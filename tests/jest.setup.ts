import '@testing-library/jest-dom';

import { queryClient } from '@/app/providers/tanstackProvider';
import { mockAxios } from './mocks/server';
import './mocks/router';

afterEach(() => {
  mockAxios.resetHandlers();
  queryClient.clear();
});
