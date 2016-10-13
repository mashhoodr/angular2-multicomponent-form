import { AppPage } from './app.po';

export class AppStepPage extends AppPage {
  step: string;
  
  constructor(step: string) {
    super();
    this.step = step;
  }

  /**
   * OVERRIDE FUNCTIONS
   */

  navigateTo() {
    super.navigateTo('/#/' + this.step);
  }

  getParagraphText() {
    return element(by.css('app-' + this.step + ' p')).getText();
  }

  /**
   * NEW FUNCTIONS
   */

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

  // Form
  
  resetFields(fields: Array<string>) {
    fields.forEach((fieldname) => {
      this.getInputField(fieldname).clear();
    });
  }

  getErrorForField(fieldId: string) {
    return element(by.css('#' + fieldId + '_error_block em.text-danger'));
  }

  getErrorTextForField(fieldId: string) {
    return this.getErrorForField(fieldId).getText();
  }

  checkIfFieldHasError(fieldId: string) {
    return this.getErrorForField(fieldId).isPresent();
  }

  getInputField(fieldId: string) {
    return element(by.css('#' + fieldId));
  }

  clearInputField(fieldId: string) {
    this.getInputField(fieldId).clear();
  }

  setInputFieldValue(fieldId: string, value: string) {
    this.getInputField(fieldId).sendKeys(value);
  }

  getInputFieldValue(fieldId: string) {
    return this.getInputField(fieldId).getAttribute('value');
  }

  expectNumberOfChildAgeFieldsToEqual(count: number) {
    let _this = this;

    for(let i: number = 1; i <= count; i++) {
      expect(_this.getInputField('input_child_age_' + i).isPresent()).toBeTruthy();
    }

  }

  // Tooltip
  
  clickOnField(fieldId: string) {
    this.getInputField(fieldId).click();
  }

  getFieldTooltip(fieldId: string) {
    return element(by.css('#' + fieldId + ' + tooltip-container .tooltip-inner'));
  }
  
  getFieldTooltipText(fieldId: string) {
    return this.getFieldTooltip(fieldId).getText();
  }

}
