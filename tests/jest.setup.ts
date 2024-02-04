import '@testing-library/jest-dom';

import { queryClient } from '@/providers/TanstackProvider';
import { mockAxios } from './mocks/server';
import './mocks/router';
import './mocks/image';
import './mocks/markdown';

afterEach(() => {
  jest.clearAllMocks();
  mockAxios.resetHandlers();
  queryClient.clear();
});
