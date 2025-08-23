const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  webServer: {
    command: 'npm run start-prod',
    port: 5001,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:5001',
    headless: true,
  },
})
