// The step definitions will use the page objects
const { I } = inject();
import Common from '../pages/Common';

const common = new Common();
Before(() => {
  common.state = {};
});
Given('User go to login page', () => I.amOnPage('/vn/auth/login'));
When('Click "{}" button', common.clickTextButton);
Then('User look message "{}" popup', common.verifyMessageSwal2);
When('Enter "{}" in "{}" with "{}"', common.typeInputByName);
Then('Required message "{}" displayed under "{}" field', common.verifyErrorByName);
