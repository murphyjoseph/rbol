/* eslint-disable max-len */
module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  testMatch: [
    '**/__tests__/**/*.test.+(ts|tsx)',
    '**/?(*.)test.+(ts|tsx)'
  ],
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
      allowJs: true,
      babelConfig: true,
    },
  },
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/config/jest/stylesMock.js',
  },
  transform: {
    '^.+\\.(ts|html|tsx)$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': './config/jest/assetsTransformer.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx'
  ],
  setupFiles: [
    './config/jest/setupEnzyme.js',
    './config/jest/setupEnv.js'
  ],
  preset: 'ts-jest',
  coveragePathIgnorePatterns: ['/node_modules', '/*/*.test.tsx'],
};
