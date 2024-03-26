import type { Config } from "jest";

const config: Config = {
  // The test environment that will be used for testing, jsdom for browser environment
  // https://jestjs.io/docs/configuration#testenvironment-string
  testEnvironment: "jsdom",

  // https://jestjs.io/docs/configuration#roots-arraystring
  roots: ["<rootDir>/src/"],

  // https://jestjs.io/docs/configuration#testmatch-arraystring
  testMatch: [
    "**/*.test.ts?(x)",
    "**/*.test.js?(x)"
  ],

  // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
  transform: {
    "^.+\\.ts?(x)?$": [
      "ts-jest",
      {
        diagnostics: {
          ignoreCodes: [1343]
        },
        astTransformers: {
          before: [
            {
              path: "node_modules/ts-jest-mock-import-meta",
              options: { metaObjectReplacement: { url: "https://www.url.com" } }
            }
          ]
        }
      }],
    "^.+\\.js?(x)?$": "ts-jest"
  },

  // https://jestjs.io/docs/configuration#setupfilesafterenv-array
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // https://jestjs.io/docs/configuration#collectcoveragefrom-array
  coverageDirectory: "<rootDir>/coverage/",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,jsx,ts,tsx}",
    "!**/__mocks__/**",
    "!**/node_modules/**"
  ],

  // https://jestjs.io/fr/docs/configuration#modulenamemapper-objectstring-string--arraystring
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    "^.+\\.module\\.(css|sass|scss|less)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss|less)$": "<rootDir>/__mocks__/styleMock.js",

    // Handle static assets
    // https://jestjs.io/docs/webpack#handling-static-assets
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg|ttf|woff|woff2)$": `<rootDir>/__mocks__/fileMock.js`
  },

  verbose: true,
  testTimeout: 30000
};

export default config;
