const {setHeadlessWhen, setCommonPlugins} = require('@codeceptjs/configure');
const glob = require('glob')
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      windowSize: '1440x1200',
      browser: 'chromium',
      fullPageScreenshots: true,
      restart: true,
      uniqueScreenshotNames: true,
      keepBrowserState: true,
      waitForNavigation: 'load',
      ignoreHTTPSErrors: true,
      video: true,
      keepVideoForPassedTests : true,
      chromium: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
    },
    PlaywrightHelper: {
      require: 'codeceptjs-configure/lib/helpers/playwright.helper.js',
      enabled: true,
    },
  },
  gherkin: {
    features: './features/*.feature',
    steps: glob.sync('./step_definitions/*.steps.ts'),
  },
  include: {},
  plugins: {
    allure: {
      enabled: true,
      outputDir: './output',
    },
    autoDelay: {
      enabled: true,
      delayBefore: 500,
      delayAfter: 500,
    },
    retryFailedStep: {
      enabled: true,
      retries: 8,
      minTimeout: 20000,
      maxTimeout: 50000,
    }
  },

  name: 'CodeceptjsBDD',
  fullPromiseBased: true
}
