//const BINPATH = './node_modules/nightwatch/bin/';
const BINPATH = './test/e2e/bin/';

module.exports = {
  src_folders: [
    "test/e2e/test-home.js"
  ],
  output_folder: "./test/e2e/reports",
  selenium: {
    //launch_url: "http://localhost:8080",
    log_path: './test/e2e/reports',
    start_process: true,
    server_path: BINPATH + "selenium-server.jar",
    silent: false,
    host: "127.0.0.1",
    port: 4444, // standard selenium port
    cli_args: {
      "webdriver.chrome.driver": BINPATH + "chromedriver",
      "webdriver.gecko.driver": BINPATH + "geckodriver"
    }
  },
  test_settings: {
    default: {
      globals: {
        waitForConditionTimeout: 5000 // sometimes internet is slow so wait.
      },
      desiredCapabilities: {
        browserName: "firefox",
        javascriptEnabled: true,
        acceptSslCerts: true,
        marionette: true
      }
    },
    chrome: {
      desiredCapabilities: {
        javascriptEnabled: true,
        acceptSslCerts: true,
        browserName: "chrome"
      }
    }
  }
};
