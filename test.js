const {test1} = require('./1.js');
const {test2} = require('./2.js');
const {test3} = require('./3.js');

const puppeteer = require('puppeteer');
const baseUrl = 'http://127.0.0.1:8081/components/epiviz-mbrowser/demo/index2.html';

const extern_args = process.argv.slice(2);
console.log('extern_args: ', extern_args);
let headless = true;
let browserSettings = {};

if (extern_args[0] && extern_args[0] === '-h') {
  browserSettings = {
    headless: false,
    slowMo: 250 // slow down by 250ms
  };
}

(async () => {
  const browser = await puppeteer.launch(browserSettings);
  const page1 = test1(browser, baseUrl);
  const page2 = test2(browser, baseUrl);
  const page3 = test3(browser, baseUrl);
})();