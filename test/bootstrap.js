const puppeteer = require('puppeteer');
const { expect } = require('chai');
// const opn = require('opn');
// const cmd = require('node-cmd');
const { shadowDomSelector } = require('./test-helper.js');

// const _ = require('lodash');

// const globalVariables = _.pick(global, ['browser', 'expect', 'baseUrl']);

let opts = {};

if (false) {
  opts = {
    headless: false,
    slowMo: 100,
    timeout: 0,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--auto-open-devtools-for-tabs']
    // args: ['--start-maximized', '--window-size=1366,786'] 
  };
}

before(async () => {
  global.expect = expect;
  global.browser = await puppeteer.launch(opts);
  global.baseUrl = 'http://127.0.0.1:8081/components/epiviz-mbrowser/demo/index2.html';
  puppeteer.registerCustomQueryHandler('shadowDom', shadowDomSelector);

});


after(() => {
  browser.close();
  // setTimeout(() => { cmd.run('node server.js'); }, 5000)
  // setTimeout(() => {opn('http://localhost:9978');}, 2000);
  // open('./mochawesome-report/mochawesome.html');
  // global.browser = globalVariables.browser;
  // global.expect = globalVariables.expect;
  // global.baseUrl = globalVariables.baseUrl;
});
