module.exports = {
  'Login and get projects list': function (browser) {
    browser
        .url('http://10.29.3.180:8080')
        .waitForElementVisible('body', 1000)
        .setValue('input[type=text]', 'Wang')
        .setValue('input[type=password]', '123')
        .waitForElementVisible('[type=submit]', 1000)
        .click('button[type=submit]')
        .pause(1000)
        .assert.containsText('.page-header h1', 'Projects')
  },
  'Click title go to project view': function (browser) {
    browser
        .click('.projects a:first-child')
        .pause(1000)
        .assert.containsText('.page-header h1', 'Capabilities of ketsu')
        .click('.col-md-3 > button')
        .assert.containsText('.panel-heading', 'Create New Capability')
        .execute('document.querySelector(".panel form .form-group:first-child select").options[1].selected=true')
        .execute('document.querySelector(".panel form .form-group:nth-child(2) select").options[1].selected=true')
        .click('.panel button[type=submit]')
        .pause(1000)
        .assert.containsText('#main > div > div > div > div.row > div.col-md-9 > section > table > thead > tr > th:nth-child(4)', 'api/javajersey')
        .assert.containsText('.vertical-timeline .periods li:first-child', 'create stack javajersey for api')
  },
  'Click stack show stack list': function (browser) {
    browser
        .click('.nav-pills li:nth-child(2) a')
        .pause(1000)
        .assert.elementPresent('.stack-container')
  },
  'Deprecate first stack': function (browser) {
    browser
        .moveToElement('.stack-container:first-child .stack-item:nth-child(2)', 10, 10)
        .click('.stack-container:first-child .stack-item:nth-child(2) .action')
        .pause(1000)
        .assert.containsText('.vertical-timeline .periods li:first-child', 'deprecate stack javajersey for api')
        .click('#bs-example-navbar-collapse-1 > ul > li:nth-child(3) > a')
        .pause(1000)
        .end();
  }
};
