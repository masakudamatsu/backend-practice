const path = require('path');

module.exports = {
  clearMocks: true, // run jest.clearAllMocks() after each test
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/pages/_*.js',
    '!**/pages/index.js',
    '!**/*.test.js',
    '!**/*.spec.js',
    '!src/utils/GlobalStyle.js',
  ], // https://jestjs.io/docs/en/configuration#collectcoveragefrom-array
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
    './src/components/TopAppBar.js': {
      statements: 55,
      branches: 0,
      functions: 73,
      lines: 55,
    },
  },
  moduleDirectories: [
    'node_modules',
    __dirname,
    path.join(__dirname, '../src'), // allow imports with absolute paths
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'jest-axe/extend-expect',
    'jest-styled-components',
  ],
  testPathIgnorePatterns: ['<rootDir>/cypress/', '<rootDir>/node_modules/'],
};
