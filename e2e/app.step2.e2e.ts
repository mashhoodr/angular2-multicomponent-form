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

  it('should create and show fields in step2 depend on field value in step1 i.e., `input_number_of_children` field.', (done) => {
    page.clickOnField('step1-button'); // step1
    page.setInputFieldValue('input_number_of_children', '2');
    page.clickOnField('step2-button'); // step2
    page.expectNumberOfChildAgeFieldsToEqual(2);
    done();
  });

  // Tooltip tests
  
  it('should have/display tooltip with text `Enter number of dependants` when click/hover on field `input_dependants`', (done) => {
    page.clickOnField('input_dependants');
    expect(page.getFieldTooltip('input_dependants').isPresent()).toBeTruthy();
    expect(page.getFieldTooltipText('input_dependants')).toEqual('Enter number of dependants');
    done();
  });

  // step2 form validation tests!

  it('should display error message `Required..` on input field `input_savings` when empty', (done) => {
    page.clearInputField('input_savings');
    expect(page.getErrorTextForField('input_savings')).toEqual('Required..');
    expect(page.checkIfFieldHasError('input_savings')).toBeTruthy();
    done();
  });

  it('should perform validation on field as input value changes', (done) => {
    page.setInputFieldValue('input_savings', '0');
    expect(page.checkIfFieldHasError('input_savings')).toBeTruthy();
    expect(page.getErrorTextForField('input_savings')).toEqual('The savings needs to be a number greater than zero.');
    done();
  });
 
  it('should not display error message on `input_savings` field if validation passes.', (done) => {
    page.setInputFieldValue('input_savings', '50');
    expect(page.checkIfFieldHasError('input_savings')).toBeFalsy();
    done();
  });

  // Sidebar tests!

  it('should display message `step2 is not complete.` (in red color) for sidebar step2, if any of form inputs validation fails.', (done) => {
    page.setInputFieldValue('input_dependants', '5');
    page.setInputFieldValue('input_savings', '0');
    expect(page.isStepCompleted()).toBeFalsy();
    expect(page.getStepStatusText()).toEqual('step2 is not complete.');
    done();
  });

  it('should display success message `step2 is complete.` for sidebar step2, if form validation passes.', (done) => {
    page.setInputFieldValue('input_dependants', '5');
    page.setInputFieldValue('input_savings', '100');
    expect(page.isStepCompleted()).toBeTruthy();
    expect(page.getStepStatusText()).toEqual('step2 is complete.');
    done();
  });

});
