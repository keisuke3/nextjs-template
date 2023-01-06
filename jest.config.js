const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text-summary'],
  moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx', 'json'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
}

module.exports = createJestConfig(customJestConfig)
