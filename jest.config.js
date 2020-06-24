/**
 * @type {import('@jest/types').Config.InitialOptions}
 * See https://jestjs.io/docs/en/configuration
 */
const jestConfig = {
  preset: 'ts-jest',
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['./src/**/*.{js,ts,tsx}'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
}

module.exports = jestConfig
