import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  viewportWidth: 1440,
  viewportHeight: 900,
  numTestsKeptInMemory: 1,
  env: {
    envName: 'prod',
    'shopping.baseUrl': 'https://www.fravega.com/',
    'checkout.url': 'https://www.fravega.com/chk-ui',
    'checkout.url.headless': 'https://www.fravega.com/chk-ui-headless'
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    reportFilename: 'test-results',
    overwrite: false,
    charts: true,
    html: true,
    json: false,
    timestamp: '_dd-mm-yyyy_HH.MM.ss',
  },
  retries: {
    runMode: 2,
    openMode: 1,
  },
  e2e: {
    baseUrl: 'https://www.fravega.com',
    specPattern: 'cypress/test/**/*.{js,jsx,ts,tsx}',
  },
})