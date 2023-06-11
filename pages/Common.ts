import slug from 'slug';
const { I } = inject();

export default class Common {
  state = {};
  elements = {
    textButton: (text: string) => locate('button').withText(text),
    buttonConfirmPopover: () => locate('.ant-popover .ant-btn-primary'),
    messageSwal2: () => locate('div#swal2-html-container'),
    confirmSwal2: () => locate('.swal2-confirm'),

    forItemByName: (name: string) =>
      locate('.ant-form-item').withChild('.ant-form-item-label > label').withText(name),
    inputByName: (name: string) => this.elements.forItemByName(name).find('input'),
    errorByName: (name: string) =>
      this.elements.forItemByName(name).find('.ant-form-item-explain-error'),
  };
  clickSubmitPopover = async () => await I.grabNumberOfVisibleElements('.ant-popover .ant-btn-primary') && I.click(this.elements.buttonConfirmPopover())

  clickTextButton = async (text: string) => {
    I.click(this.elements.textButton(text))
    await this.clickSubmitPopover();
  };
  verifyMessageSwal2 = async (message: string) => {
    if (message.indexOf('_@') > -1 && message.indexOf('@_') > -1) {
      const arrayValue = message.match(/(_@[A-Z])\w+\s+\w+@_/g);
      arrayValue?.forEach((text, index) => {
        const val = this.state[text.replace('_@', '').replace('@_', '')];
        message = message.replace(text, val);
        if (arrayValue?.length - 1 === index) I.waitForText(message, 5,this.elements.messageSwal2());
      });
    } else I.waitForText(message, 5,this.elements.messageSwal2());
    if (await I.grabNumberOfVisibleElements(this.elements.confirmSwal2())) I.click(this.elements.confirmSwal2())
  };

  typeInputByName = async (type: inputType, name: string, text: string) => {
    I.typeRandom(this.elements.inputByName(name), text, type);
    this.state[slug(name)] = await I.grabValueFrom(this.elements.inputByName(name));
  };
  verifyErrorByName = (name: string, text: string) => I.waitForText(text, 5,this.elements.errorByName(name));
}
type inputType = 'text' | 'words' | 'number' | 'email' | 'percentage' | 'color' | 'phone';
