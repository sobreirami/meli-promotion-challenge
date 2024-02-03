const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: `jsdom`,
  testMatch: [`**/__tests__/**/*.test.ts?(x)`],
  snapshotResolver: `<rootDir>/tests/jest-snapshot-resolver.ts`,
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
};

module.exports = createJestConfig(customJestConfig);
