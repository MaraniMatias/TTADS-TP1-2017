module.exports = {
  beforeEach: function (browser) {
    browser.url("http://localhost:8080");
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
