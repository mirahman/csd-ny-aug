const {Builder, By, until} = require('selenium-webdriver');

let driver = new Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://www.seleniumhq.org/');
driver.findElement(By.id('menu_about')).click();
driver.wait(until.titleIs('About'), 10000);
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.id('submit')).click();
//driver.wait(until.titleIs('Google Custom Search'), 10000);
driver.quit();