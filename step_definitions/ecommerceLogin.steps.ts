import EcommerceLogin from '../pages/ecommerceLogin.page';

const ecommerceLogin = new EcommerceLogin();
Given('User is in loginpage', async () => {
  ecommerceLogin.gotoLoginPage();
});

When('User enter username and password', () => {});

When('Click on login button', () => {});

When('Validate home page title', async () => {});
