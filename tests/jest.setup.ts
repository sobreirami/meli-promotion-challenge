import '@testing-library/jest-dom';

import { queryClient } from '@/app/providers/tanstackProvider';
import { mockAxios } from './mocks/server';
import './mocks/router';
import './mocks/image';
import './mocks/markdown';

afterEach(() => {
  queryClient.clear();
});

afterAll(() => {
  mockAxios.resetHandlers();
});
