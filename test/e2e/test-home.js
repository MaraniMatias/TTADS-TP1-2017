module.exports = {
  'Build the app': function (browser) {
    browser
      .url("http://localhost:8080")
      .waitForElementPresent('body', 1000)
      .waitForElementPresent('#app', 1000)
      .end();
  },
  'Movie Discover': function (browser) {
    browser
      .url("http://localhost:8080")
      .waitForElementPresent('.ui.container > h1', 1000)
      .waitForElementPresent('.card', 2000)
      .end();
  },
  'Card click': function (browser) {
    browser
      .url("http://localhost:8080")
      .waitForElementPresent('.card', 2000)
      .click('.card')// no hace click
      .waitForElementPresent('h1.ui.dividing.header',2000)
      .assert.urlContains('/movie/')
      .end();
  }
};
