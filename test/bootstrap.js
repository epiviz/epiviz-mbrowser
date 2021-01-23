const puppeteer = require('puppeteer');
const { expect } = require('chai');
const { shadowDomSelector } = require('./test-helper.js');
const {startServer} = require('polyserve');
const path = require('path');

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
  global.browser = await puppeteer.launch({
    args: ['--disable-web-security']
  });
  polyserve = await startServer({port:4444});

  global.baseUrl = 'http://127.0.0.1:4444/components/epiviz-mbrowser/demo/index2.html';
  puppeteer.registerCustomQueryHandler('shadowDom', shadowDomSelector);
});


after((done) => {
  browser.close();
  polyserve.close(done);
  // setTimeout(() => { cmd.run('node server.js'); }, 5000)
  // setTimeout(() => {opn('http://localhost:9978');}, 2000);
  // open('./mochawesome-report/mochawesome.html');
  // global.browser = globalVariables.browser;
  // global.expect = globalVariables.expect;
  // global.baseUrl = globalVariables.baseUrl;
});
