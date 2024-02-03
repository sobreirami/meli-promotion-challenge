const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: `jsdom`,
  testMatch: [`**/__tests__/**/*.test.ts?(x)`],
  snapshotResolver: `<rootDir>/tests/jest-snapshot-resolver.ts`,
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@home/(.*)$': '<rootDir>/src/modules/home/$1',
    '^@item/(.*)$': '<rootDir>/src/modules/item/$1',
    '^@test/(.*)$': '<rootDir>/tests/$1',
  },
  cacheDirectory: `.jest-cache`,
  testTimeout: 10000,
};

module.exports = createJestConfig(customJestConfig);
