import { AppStepFormPage } from './app.step.po';

describe('angular2-multicomponent-form App Step1 Tests: ', function() {
  let page: AppStepFormPage;
  
  beforeEach(() => {
    page = new AppStepFormPage('step1');
    page.navigateTo();
    // page.resetFields(['input_name', 'input_age_user']);
  });

  it('should display message saying `This is step1.`', (done) => {
    expect(page.getParagraphText()).toEqual('This is step1.');
    done();
  });

  // step1 form validation tests!

  it('should display error message `Required..` on input field `input_name` when empty', (done) => {
    page.clearInputTextField('input_name');
    expect(page.getErrorTextForField('input_name')).toEqual('Required..');
    expect(page.checkIfFieldHasError('input_name')).toBeTruthy();
    done();
  });

  it('should perform validation on field as input value changes', (done) => {
    page.setInputTextFieldValue('input_name', 'test');
    expect(page.checkIfFieldHasError('input_name')).toBeTruthy();
    expect(page.getErrorTextForField('input_name')).toEqual('Minimum length should be 5');
    done();
  });
 
  it('should not display error message on `input_name` field if validation passes.', (done) => {
    page.setInputTextFieldValue('input_name', 'hello test');
    expect(page.checkIfFieldHasError('input_name')).toBeFalsy();
    done();
  });

  // Sidebar tests!

  it('should display message `step1 is not complete.` (in red color) for sidebar step1, if any of form inputs validation fails.', (done) => {
    page.setInputTextFieldValue('input_name', 'test');
    page.setInputTextFieldValue('input_age_user', '160');
    expect(page.isStepCompleted()).toBeFalsy();
    expect(page.getStepStatusText()).toEqual('step1 is not complete.');
    done();
  });

  it('should display success message `step1 is complete.` for sidebar step1, if form validation passes.', (done) => {
    page.setInputTextFieldValue('input_name', 'hello world');
    page.setInputTextFieldValue('input_age_user', '25');
    expect(page.isStepCompleted()).toBeTruthy();
    expect(page.getStepStatusText()).toEqual('step1 is complete.');
    done();
  });

});
