module.exports = {
  // transform: {
  //   '^.+\\.(ts|tsx)$': 'ts-jest',
  //   '^.+\\.(js|jsx)$': 'babel-jest',
  // },
  // testMatch: [
  //   '**/__tests__/**/*.ts?(x)',
  //   '**/?(*.)+(spec|test).ts?(x)',
  // ],
  setupFilesAfterEnv: [
    './jest.setup.js',
    '@testing-library/jest-native/extend-expect',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native)(?!@react-navigation|react-navigation)(?!react-redux)',
  ],
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // setupFilesAfterEnv: ['@testing-library/react-native/cleanup-after-each'],

};
