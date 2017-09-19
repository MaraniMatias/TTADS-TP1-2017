module.exports = {
  'Wikipedia should render': function(browser) {
    browser
      .url('https://en.wikipedia.org/wiki/Wikipedia')
      .waitForElementVisible('body')
      .assert.title('Wikipedia - Wikipedia')
      .end();
  }
};
