module.exports = {
  'Login and get profile page': function (browser) {
    browser
        .url('http://10.29.3.180:8080')
        .waitForElementVisible('body', 1000)
        .setValue('input[type=text]', 'shanchuan')
        .setValue('input[type=password]', '123')
        .waitForElementVisible('[type=submit]', 1000)
        .click('button[type=submit]')
        .pause(1000)
        .assert.containsText('.personal-info', 'Xu Shanchuan')
        .assert.elementPresent('.qualification-list-view')
        .assert.elementPresent('.evaluation-list-view');
  },
  'Apply a new evaluation': function (browser) {
    browser
        .click('#main > div > div > div > div:nth-child(2) > div > ul > ul:nth-child(1) > li:nth-child(4) > button')
        .pause(1000)
        .assert.elementPresent('#capabilityChooser')
        .pause(1000)
        .click('#capabilityChooser > div > div > div.modal-body > ul > li:nth-child(1) > button')
        .pause(1000)
        .assert.elementPresent('#main > div > div > div > div.row.evaluation-list-view > div')
        .end();
  }
};
