
const {Builder, By, until} = require('selenium-webdriver');


/*
let driver = new Builder()
    .forBrowser('chrome')
    .build();


driver.get('https://www.seleniumhq.org/');
driver.findElement(By.id('menu_about')).click();
driver.wait(until.titleIs('About'), 10000);
driver.findElement(By.id('q')).sendKeys('webdriver');
driver.findElement(By.id('submit')).click();
//driver.wait(until.titleIs('Google Custom Search'), 10000);
//driver.quit();
*/

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
      await driver.get('https://www.seleniumhq.org/');
      await driver.findElement(By.id('q')).sendKeys('webdriver');
      await driver.findElement(By.id('submit')).click();
      await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
      await driver.quit();
    }
  })();