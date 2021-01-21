var assert = require('assert');
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

  it('erase selected measurements after reopen dialog', async () => {
    await page.waitForSelector('shadowDom/epiviz-measurement-browser|paper-button');
    const { button_text, visibility } = await page.$eval('shadowDom/epiviz-measurement-browser|paper-button ', (button) => {
      button.click();
      return {
        button_text: button.textContent.trim(),
        visibility: button.getComputedStyleValue('visibility'),
      };
    });
    console.log(`button "${button_text}" with visibility "${visibility}" clicked`);
    assert.equal(visibility, 'visible');

    await page.waitForSelector('shadowDom/#measurement > epiviz-measurement-browser|#cardElem|#cardContainer > paper-card');
    const measurements = await page.$$eval('shadowDom/#measurement > epiviz-measurement-browser|#cardElem@#cardContainer > paper-card', (measurements) => {
      measurements[0].querySelector('paper-icon-button').click();
      measurements[1].querySelector('paper-icon-button').click();
      console.log('measurements', measurements);
      return measurements.length;
    });
    assert.strictEqual(measurements > 1, true);
    console.log(`measurements length "${measurements}" `);

    await page.waitForSelector('shadowDom/#measurement > epiviz-measurement-browser|#cardElem|#selectedContainer > paper-listbox > paper-icon-item');
    let selected_measurements = await page.$$eval('shadowDom/#measurement > epiviz-measurement-browser|#cardElem@#selectedContainer > paper-listbox > paper-icon-item', (measurements) => {
      return measurements.length;
    });
    assert.strictEqual(selected_measurements, 2);
    console.log(`selected measurements length "${selected_measurements}" `);

    await page.waitForSelector('shadowDom/epiviz-measurement-browser|paper-dialog paper-button');
    const close_button = await page.$eval('shadowDom/epiviz-measurement-browser|paper-dialog paper-button', (button) => {
      button.click();

      console.log('button', button);
      return button.textContent.trim();
    });
    console.log(`close button "${close_button}" `);

    await page.waitForSelector('shadowDom/epiviz-measurement-browser|paper-button');
    const opend_dialog_button = await page.$eval('shadowDom/epiviz-measurement-browser|paper-button ', (button) => {
      button.click();
      return button.textContent.trim();
    });
    console.log(`button "${opend_dialog_button}" clicked`);

    await page.waitForSelector('shadowDom/#measurement > epiviz-measurement-browser|#cardElem|#selectedContainer > div:nth-child(2)');
    const label_text = await page.$eval('shadowDom/#measurement > epiviz-measurement-browser|#cardElem|#selectedContainer > div:nth-child(2)', (label) => {
      return label.innerText;
    });
    chai.assert.equalIgnoreCase(label_text, "No measurements selected", "selected items container sn't empty");
    return page;

  })
  it('measurement according to project/collection/chart', async () => {
    await page.waitForSelector('shadowDom/epiviz-measurement-browser|paper-button');
    const { button_text, visibility } = await page.$eval('shadowDom/epiviz-measurement-browser|paper-button ', (button) => {
      button.click();
      return {
        button_text: button.textContent.trim(),
        visibility: button.getComputedStyleValue('visibility'),
      };
    });
    console.log(`button "${button_text}" with visibility "${visibility}" clicked`);
    assert.equal(visibility, 'visible');
    await page.waitForSelector('shadowDom/#measurement > epiviz-measurement-browser|#cardElem|#cardContainer > paper-card');
    const measuremnt_data = await page.$$eval('shadowDom/#measurement > epiviz-measurement-browser|#cardElem@#cardContainer > paper-card', (measurements) => {
      const first_measurement_text = measurements[0].querySelector('.header-card').innerText;
      const project_name = document.querySelector("#measurement > epiviz-measurement-browser").shadowRoot.querySelector("#collectionProject").shadowRoot.querySelector("#menuButton > div > paper-input").shadowRoot.querySelector("#input-1 > input[type=text]").value;
      const collection_name = document.querySelector("#measurement > epiviz-measurement-browser").shadowRoot.querySelector("#collectionElement").shadowRoot.querySelector("#menuButton > div > paper-input").shadowRoot.querySelector("#input-2 > input[type=text]").value;
      const chart_type = document.querySelector("#measurement > epiviz-measurement-browser").shadowRoot.querySelector("#modal > div.header > div:nth-child(3) > paper-dropdown-menu").shadowRoot.querySelector("#menuButton > div > paper-input").shadowRoot.querySelector("#input-3 > input[type=text]").value
                         
      return {
        amount: measurements.length,
        first_measurement_text,
        project_name,
        collection_name,
        chart_type,
      }
    });
    assert.strictEqual(measuremnt_data.amount > 1, true);
    chai.assert.equalIgnoreCase('LHX2 enhancers', measuremnt_data.first_measurement_text);
    chai.assert.equalIgnoreCase('Microglia epigenetic data from Nott et al.', measuremnt_data.project_name);
    chai.assert.equalIgnoreCase('Microglia epigenetic data from Nott et al.', measuremnt_data.collection_name);
    chai.assert.equalIgnoreCase('StackedBlocksTrack', measuremnt_data.chart_type);
  })
  it('initialize m-browser with project and collection, we expect the chart type to be automatically selected based on the measurements', async () => {
    await page.waitForSelector('shadowDom/epiviz-measurement-browser|paper-button');
    const { button_text, visibility } = await page.$eval('shadowDom/epiviz-measurement-browser|paper-button ', (button) => {
      button.click();
      return {
        button_text: button.textContent.trim(),
        visibility: button.getComputedStyleValue('visibility'),
      };
    });
    console.log(`button "${button_text}" with visibility "${visibility}" clicked`);
    chai.assert.equalIgnoreCase('add chart', button_text);

    {
      await page.waitForSelector('shadowDom/#measurement > epiviz-measurement-browser|#cardElem|#cardContainer > paper-card');
      const measuremnt_data = await page.$$eval('shadowDom/#measurement > epiviz-measurement-browser|#cardElem@#cardContainer > paper-card', (measurements) => {
        const first_measurement_text = measurements[0].querySelector('.header-card').innerText;
        const project_name = document.querySelector("#measurement > epiviz-measurement-browser").shadowRoot.querySelector("#collectionProject").shadowRoot.querySelector("#menuButton > div > paper-input").shadowRoot.querySelector("#input-1 > input[type=text]").value;
        const collection_name = document.querySelector("#measurement > epiviz-measurement-browser").shadowRoot.querySelector("#collectionElement").shadowRoot.querySelector("#menuButton > div > paper-input").shadowRoot.querySelector("#input-2 > input[type=text]").value;
        const chart_type = document.querySelector("#measurement > epiviz-measurement-browser").shadowRoot.querySelector("#modal > div.header > div:nth-child(3) > paper-dropdown-menu").shadowRoot.querySelector("#menuButton > div > paper-input").shadowRoot.querySelector("#input-3 > input[type=text]").value
        return {
          amount: measurements.length,
          first_measurement_text,
          project_name,
          collection_name,
          chart_type,
        }
      });
      assert.strictEqual(measuremnt_data.amount > 1, true);
      chai.assert.equalIgnoreCase('LHX2 enhancers', measuremnt_data.first_measurement_text, 'measurement');
      chai.assert.equalIgnoreCase('Microglia epigenetic data from Nott et al.', measuremnt_data.project_name, 'project');
      chai.assert.equalIgnoreCase('Microglia epigenetic data from Nott et al.', measuremnt_data.collection_name, 'collection');
      chai.assert.equalIgnoreCase('StackedBlocksTrack', measuremnt_data.chart_type, 'chart type');
    }

    await page.waitForSelector('shadowDom/epiviz-measurement-browser|#collectionProject|#menuButton > div > paper-input');
    await page.$eval('shadowDom/epiviz-measurement-browser|#collectionProject|#menuButton > div > paper-input', (project_selection) => project_selection.click());

    await page.waitForSelector('shadowDom/epiviz-measurement-browser|#collectionProject > paper-listbox > paper-item');
    await page.$$eval('shadowDom/epiviz-measurement-browser@#collectionProject > paper-listbox > paper-item', (projects) => projects[1].click());

    await page.waitForTimeout(1000)//todo replace after implementing "loading spinner"
    await page.waitForSelector('shadowDom/#measurement > epiviz-measurement-browser|#cardElem|#cardContainer > paper-card');
    const measuremnt_data = await page.$$eval('shadowDom/#measurement > epiviz-measurement-browser|#cardElem@#cardContainer > paper-card', (measurements) => {
      const first_measurement_text = measurements[0].querySelector('.header-card').innerText;
      const project_name = document.querySelector("#measurement > epiviz-measurement-browser").shadowRoot.querySelector("#collectionProject").shadowRoot.querySelector("#menuButton > div > paper-input").shadowRoot.querySelector("#input-1 > input[type=text]").value;
      const collection_name = document.querySelector("#measurement > epiviz-measurement-browser").shadowRoot.querySelector("#collectionElement").shadowRoot.querySelector("#menuButton > div > paper-input").shadowRoot.querySelector("#input-2 > input[type=text]").value;
      const chart_type = document.querySelector("#measurement > epiviz-measurement-browser").shadowRoot.querySelector("#modal > div.header > div:nth-child(3) > paper-dropdown-menu").shadowRoot.querySelector("#menuButton > div > paper-input").shadowRoot.querySelector("#input-3 > input[type=text]").value
      return {
        amount: measurements.length,
        first_measurement_text,
        project_name,
        collection_name,
        chart_type,
      }
    });
    assert.strictEqual(measuremnt_data.amount > 1, true);
    chai.assert.equalIgnoreCase('Brain tracks from epigenome roadmap', measuremnt_data.project_name, 'project after');
    chai.assert.equalIgnoreCase('Brain tracks from epigenome roadmap', measuremnt_data.collection_name, 'collection after');
    chai.assert.equalIgnoreCase('MultiStackedLineTrack', measuremnt_data.chart_type, 'chart type after');
    chai.assert.equalIgnoreCase('Neurosphere_Cultured_Cells_Cortex_Derived H3K4me3', measuremnt_data.first_measurement_text, 'measurement after');
  });
  // it('test blank', async () => {
  // });
});