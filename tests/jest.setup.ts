import '@testing-library/jest-dom';

import { afterEach } from 'node:test';

import { queryClient } from '@/app/providers/tanstackProvider';
import { server } from './mocks/server';

// Establish API mocking before all tests.
beforeAll(() =>
  server.listen({
    onUnhandledRequest: `bypass`,
  })
);

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers();
  queryClient.clear();
});

// Clean up after the tests are finished.
afterAll(() => server.close());
