module.exports = {
  test2: async function test1(browser, baseUrl) {
    //-------- second test ----------//
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    await page.goto(baseUrl);

    console.log('select two measurements from two different project\'s collections');

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
                      // element.click();

                      // return element.innerHTML;
                    });
                    console.log('MS el amount: ', element);
                  });
              })
              .then(async () => {
                const element = await page.waitForTimeout(500)
                  .then(async () => {
                    console.log('selet first MS');
                    const element = await page.evaluate(async () => {
                      const element = document.querySelector("#measurement > epiviz-measurement-browser").shadowRoot.querySelector("#cardElem").shadowRoot.querySelector("#cardContainer > paper-card:nth-child(2) > paper-icon-button");
                      element.click();
                      return element;
                    });
                  });
              })
              .then(async () => {
                const element = await page.waitForTimeout(600)
                  .then(async () => {
                    console.log('check amount of selected MS');
                    const element = await page.evaluate(async () => {
                      const element = document.querySelector("#measurement > epiviz-measurement-browser").shadowRoot.querySelector("#cardElem").shadowRoot.querySelectorAll("#selectedContainer > paper-listbox > paper-icon-item");

                      return element.length;
                    })
                      .catch((err) => {
                        console.log('[ERROR]', err);
                      })
                    console.log('amount of Selected MS: ', element);
                  });
              })
              .then(async () => {
                const element = await page.waitForTimeout(500)
                  .then(async () => {
                    console.log('choose another project ...');
                    const element = await page.evaluate(async () => {
                      const element = document.querySelector('epiviz-measurement-browser')
                        .shadowRoot.querySelector('paper-dialog')
                        .querySelector('.header paper-dropdown')
                        .shadowRoot.querySelector('paper-dropdown-menu')
                        .shadowRoot.querySelector('paper-menu-button paper-input');

                      element.click();

                      return element.innerHTML;
                    })
                    console.log('...: ', element);
                  });
              })
              .then(async () => {
                const element = await page.waitForTimeout(500)
                  .then(async () => {
                    console.log('awaiterd for project ufolded selector');
                    const element = await page.evaluate(async () => {
                      const projcets = document.querySelector("#measurement > epiviz-measurement-browser")
                        .shadowRoot.querySelectorAll("#collectionProject > paper-item");

                      projcets[1].click();

                      return projcets[1].innerHTML;
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
                    console.assert(element === 17, `\n\n[ASSERTION]test2\n${element} is not equal to 17;`);
                  });
              })
              .then(async () => {
                const element = await page.waitForTimeout(500)
                  .then(async () => {
                    console.log('selet first MS');
                    const element = await page.evaluate(async () => {
                      const element = document.querySelector("#measurement > epiviz-measurement-browser").shadowRoot.querySelector("#cardElem").shadowRoot.querySelector("#cardContainer > paper-card:nth-child(2) > paper-icon-button");
                      element.click();
                      return element;
                    });
                  });
              })
              .then(async () => {
                const element = await page.waitForTimeout(600)
                  .then(async () => {
                    console.log('check amount of selected MS');
                    const element = await page.evaluate(async () => {
                      const element = document.querySelector("#measurement > epiviz-measurement-browser").shadowRoot.querySelector("#cardElem").shadowRoot.querySelectorAll("#selectedContainer > paper-listbox > paper-icon-item");

                      return element.length;
                    })
                      .catch((err) => {
                        console.log('[ERROR]', err);
                      })
                      console.assert(element === 2, `\n\n[ASSERTION]test2\n${element} is not equal to 2;`);
                  });
              })
            console.log('project selector: ', element);

          });
      })
    return page;
  }
};