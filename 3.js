module.exports = {
  test3: async function test3(browser, baseUrl) {
    //-------- second test ----------//
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    await page.goto(baseUrl);

    page.waitForTimeout(1000)
      .then(async () => {
        const textContent = await page.evaluate(() => {
          document.querySelector('epiviz-measurement-browser').shadowRoot.querySelector('paper-button').click()
          return document.querySelector('epiviz-measurement-browser').shadowRoot.querySelector('paper-button').innerHTML;
        });
        console.log('button: ', textContent);


        await page.waitForTimeout(500)
          .then(async () => {
            console.log('awaiterd for the dialog')
            const element = await page.evaluate(async () => {
              const element = document.querySelector('epiviz-measurement-browser')
                .shadowRoot.querySelector('paper-dialog')
                .querySelector('.header paper-dropdown')
                .shadowRoot.querySelector('paper-dropdown-menu')
                .shadowRoot.querySelector('paper-menu-button paper-input');

              element.click();

              return element.innerHTML;
            })
              .then(async () => {
                const element = await page.waitForTimeout(500)
                  .then(async () => {
                    console.log('awaiterd for project ufolded selector');
                    const element = await page.evaluate(async () => {
                      const projcets = document.querySelector("#measurement > epiviz-measurement-browser")
                        .shadowRoot.querySelectorAll("#collectionProject > paper-item");

                      projcets[0].click();

                      return projcets[0].innerHTML;
                    });
                    console.log('first project: ', element);
                  });
              })
              .then(async () => {
                const element = await page.waitForTimeout(500)
                  .then(async () => {
                    console.log('awaiterd for collection request');
                    const element = await page.evaluate(async () => {
                      const element = document.querySelector("#measurement > epiviz-measurement-browser").shadowRoot.querySelector("#collectionElement").shadowRoot.querySelector("#dropdownMenu").shadowRoot.querySelector("#menuButton > div > paper-input").shadowRoot.querySelector("#input-3");

                      element.click();

                      return element.innerHTML;
                    });
                    console.log('collection unfold selector: ', element);
                  });
              })
              .then(async () => {
                const element = await page.waitForTimeout(500)
                  .then(async () => {
                    console.log('awaiterd for collection ufolded selector');
                    const element = await page.evaluate(async () => {
                      const element = document.querySelector("#measurement > epiviz-measurement-browser").shadowRoot.querySelector("#collectionElement > paper-item");

                      element.click();

                      return element.innerHTML;
                    });
                    console.log('collection first el: ', element);
                  });
              })
              .then(async () => {
                const element = await page.waitForTimeout(500)
                  .then(async () => {
                    console.log('awaiterd for ms elements');
                    const element = await page.evaluate(async () => {
                      const elements = document.querySelector("#measurement > epiviz-measurement-browser").shadowRoot.querySelector("#cardElem").shadowRoot.querySelectorAll("#cardContainer > paper-card");
                      return elements.length;
                    });
                    console.log('MS el amount: ', element);
                  });
              })
              .then(async () => {
                const element = await page.waitForTimeout(500)
                  .then(async () => {
                    console.log('awaiterd for ...');
                    const element = await page.evaluate(async () => {
                      const element = document.querySelector("#measurement > epiviz-measurement-browser").shadowRoot.querySelector("#modal > div.header > div:nth-child(2) > paper-dropdown").shadowRoot.querySelector("#dropdownMenu").shadowRoot.querySelector("#menuButton > div > paper-input").shadowRoot.querySelector("#container")
                      element.click();//open selector
                      return element;
                    });
                  });
              })
              .then(async () => {
                const element = await page.waitForTimeout(500)
                  .then(async () => {
                    console.log('awaiterd for ...');
                    const element = await page.evaluate(async () => {
                      const elements = document.querySelector("#measurement > epiviz-measurement-browser").shadowRoot.querySelectorAll("#modal > div.header > div:nth-child(2) > paper-dropdown > paper-item");
                      console.log('elements', elements);

                      elements[7].click();
                      return elements.length;
                    });
                    console.log('charts amount: ', element);
                  });
              })
              .then(async () => {
                const element = await page.waitForTimeout(500)
                  .then(async () => {
                    console.log('awaiterd for ms elements');
                    const element = await page.evaluate(async () => {
                      const elements = document.querySelector("#measurement > epiviz-measurement-browser").shadowRoot.querySelector("#cardElem").shadowRoot.querySelectorAll("#cardContainer > paper-card");
                      return elements.length;
                    });
                    console.assert(element === 1, `\n\n[ASSERTION]test3\n${element} is not equal to 1;`);
                    console.log('MS el amount: ', element);
                  });
              })

          })
      })
  }
};