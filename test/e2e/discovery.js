module.exports = {
  beforeEach: function (browser) {
    browser.url("http://localhost:8080");
  },

  'Build the app': function (browser) {
    browser
      .waitForElementPresent('body', 1000)
      .waitForElementPresent('#app', 1000)
      .end();
  },
  'Movie Discover': function (browser) {
    browser
      .waitForElementPresent('.ui.container > h1', 1000)
      .useXpath() // every selector now must be xpath
      .waitForElementPresent('//div[@class="card"][1]', 2000)
      .end();
  },
  'Card click': function (browser) {
    browser
      .useXpath() // every selector now must be xpath
      .waitForElementPresent('//div[@class="card"][1]', 2000)
      .click('//div[@class="card"][1]')
      .useCss() // we're back to CSS now
      .waitForElementPresent('h1.ui.dividing.header', 3000)
      .assert.urlContains('/movie/')
      .end();
  }
};
