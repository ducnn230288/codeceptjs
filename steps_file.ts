const I = actor();
import assert = require("assert");

module.exports = function() {
  return actor({
    checkPhoneNumberFormat: async function (locator: string): Promise<void> {
      const phoneNumberFormat = /\+\d\-\d{3}\-\d{3}\-\d{4}/;
      const listOfPhoneNumbers = await I.grabTextFromAll(locator);
      const isMatched = listOfPhoneNumbers.every(phone => phoneNumberFormat.test(phone));
      assert.equal(isMatched, true);
    }

  });
}
