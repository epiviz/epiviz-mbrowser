var chai = require('chai');
chai.use(require('chai-string'));

describe('mbrowser test', async () => {
    let page, start;

    before(async () => {
        start = new Date()
        
        page = await browser.newPage();
        await page.goto(baseUrl);
        // await page.setViewport({ width: 1920, height: 1040 });
    });

    after(async function () {
        await page.close();
        console.log('elapsed time: ', (new Date()) - start);
    });

    // it('test blank', async () => {
    // });
});