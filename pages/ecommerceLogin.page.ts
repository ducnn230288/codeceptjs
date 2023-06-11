const { I } = inject();

export default class page {
  async gotoLoginPage() {
    I.amOnPage('https://admin-demo.nopcommerce.com/login');
    I.fillField('#Email', 'admin@yourstore.com');
    I.fillField('#Password', 'admin');

    I.click('[type="submit"]');
    I.wait(5);
    const title = await I.grabTitle();
    console.log(title);
    const assert = require('assert');
    await assert.equal('Dashboard / nopCommerce administration', title);
  }
};
