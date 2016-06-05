export class AppStepFormPage {
  step: string;
  waitTime: number = 3000;

  constructor(step: string) {
    this.step = step;
  }

  navigateTo() {
    return browser.get('/' + this.step);
  }

  waitForField(field: string, text: string) {
    browser.wait(() => {
      return this.getErrorTextForField(field).then((errTxt) => {
        return errTxt === text;
      });
    }, this.waitTime);
  }

  hasClass(elementSelector: string, cls: string) {
    return element(by.css(elementSelector)).getAttribute('class').then((classes) => {
        return classes.split(' ').indexOf(cls) !== -1;
    });
  }

  // Sidebar

  getStepStatusText() {
    return element(by.css('p#sidebar-' + this.step + '-status')).getText();
  }

  isStepCompleted() {
    return this.hasClass('p#sidebar-'+ this.step + '-status', 'text-success');
  }  


  // form
  
  resetFields(fields: Array<string>) {
    fields.forEach((fieldname) => {
      this.getInputTextField(fieldname).clear();
    });
  }
  
  getParagraphText() {
    return element(by.css('app-' + this.step + ' p')).getText();
  }

  getErrorTextForField(fieldId: string) {
    return element(by.css('#' + fieldId + '_block span em.text-danger')).getText();
  }

  checkIfFieldHasError(fieldId: string) {
    return this.hasClass('#' + fieldId + '_block', 'has-error');
  }

  getInputTextField(fieldId: string) {
    return element(by.css('#' + fieldId + '_block input'));
  }

  getSelectField(fieldId: string) {
    return element(by.css('#' + fieldId + '_block select'));
  }

  clearInputTextField(fieldId: string) {
    this.getInputTextField(fieldId).clear();
  }

  setInputTextFieldValue(fieldId: string, value: string) {
    this.getInputTextField(fieldId).clear();
    this.getInputTextField(fieldId).sendKeys(value);
  }

  getInputTextFieldValue(fieldId: string) {
    return this.getInputTextField(fieldId).getAttribute('value');
  }
}
