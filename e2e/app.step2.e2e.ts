import { AppStepFormPage } from './app.step.po';

describe('angular2-multicomponent-form App Step2 Tests: ', function() {
  let page: AppStepFormPage;
  
  beforeEach(() => {
    page = new AppStepFormPage('step2');
    page.navigateTo();
    // page.resetFields(['input_dependants', 'input_number_of_children', 'input_savings']);
  });

  it('should display message saying `This is step2.`', (done) => {
    expect(page.getParagraphText()).toEqual('This is step2.');
    done();
  });

  // step2 form validation tests!

  it('should display error message `Required..` on input field `input_savings` when empty', (done) => {
    page.clearInputTextField('input_savings');
    expect(page.getErrorTextForField('input_savings')).toEqual('Required..');
    expect(page.checkIfFieldHasError('input_savings')).toBeTruthy();
    done();
  });

  it('should perform validation on field as input value changes', (done) => {
    page.setInputTextFieldValue('input_number_of_children', '10');
    expect(page.checkIfFieldHasError('input_number_of_children')).toBeTruthy();
    expect(page.getErrorTextForField('input_number_of_children')).toEqual('No of children must between (min: 0 - max: 9)');
    done();
  });
 
  it('should not display error message on `input_number_of_children` field if validation passes.', (done) => {
    page.setInputTextFieldValue('input_number_of_children', '5');
    expect(page.checkIfFieldHasError('input_number_of_children')).toBeFalsy();
    done();
  });

  // Sidebar tests!

  it('should display message `step2 is not complete.` (in red color) for sidebar step2, if any of form inputs validation fails.', (done) => {
    page.setInputTextFieldValue('input_dependants', '10');
    page.setInputTextFieldValue('input_number_of_children', '5');
    page.setInputTextFieldValue('input_savings', '100');
    expect(page.isStepCompleted()).toBeFalsy();
    expect(page.getStepStatusText()).toEqual('step2 is not complete.');
    done();
  });

  it('should display success message `step2 is complete.` for sidebar step2, if form validation passes.', (done) => {
    page.setInputTextFieldValue('input_dependants', '5');
    page.setInputTextFieldValue('input_number_of_children', '5');
    page.setInputTextFieldValue('input_savings', '100');
    expect(page.isStepCompleted()).toBeTruthy();
    expect(page.getStepStatusText()).toEqual('step2 is complete.');
    done();
  });

});
