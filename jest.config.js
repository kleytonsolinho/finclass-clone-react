module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/.vercel'],
  setupFilesAfterEnv: [
    '<rootDir>/src/tests/setupTests.js',
  ],
  testEnvironment: 'jsdom',
};
