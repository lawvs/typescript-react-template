import type { Config } from '@jest/types'
// eslint-disable-next-line import/no-extraneous-dependencies
import { defaults as tsjPreset } from 'ts-jest/presets'

const jestConfig: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    ...tsjPreset.transform,
  },
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['./src/**/*.{js,ts,tsx}'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
}

export default jestConfig
