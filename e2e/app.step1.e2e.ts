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

  it('should change input Area by changing input Region', (done) => {
    // default values set
    expect(page.getInputFieldValue('input_region')).toEqual('Greater London');
    expect(page.getInputFieldValue('input_area')).toEqual('Central London');
    
    page.setInputFieldValue('input_region', 'East of England');
    
    // check whether values have been changed?
    expect(page.getInputFieldValue('input_region')).toEqual('East of England');
    expect(page.getInputFieldValue('input_area')).toEqual('Bedford');
    done();
  });

  // Tooltip tests
  
  it('should have/display tooltip with text `Please enter your name` when click/hover on field `input_name`', (done) => {
    page.clickOnField('input_name');
    expect(page.getFieldTooltip('input_name').isPresent()).toBeTruthy();
    expect(page.getFieldTooltipText('input_name')).toEqual('Please enter your name');
    done();
  });

  
  it('should not have/display tooltip on field `input_region`', (done) => {
    page.clickOnField('input_region');
    expect(page.getFieldTooltip('input_region').isPresent()).toBeFalsy();
    done();
  });

  // step1 form validation tests!

  it('should display error message `Required..` on input field `input_name` when empty', (done) => {
    page.clearInputField('input_name');
    expect(page.getErrorTextForField('input_name')).toEqual('Required..');
    expect(page.checkIfFieldHasError('input_name')).toBeTruthy();
    done();
  });

  it('should perform validation on field as input value changes', (done) => {
    page.setInputFieldValue('input_name', 'test');
    expect(page.checkIfFieldHasError('input_name')).toBeTruthy();
    expect(page.getErrorTextForField('input_name')).toEqual('Minimum length should be 5');
    done();
  });
 
  it('should not display error message on `input_name` field if validation passes.', (done) => {
    page.setInputFieldValue('input_name', 'hello test');
    expect(page.checkIfFieldHasError('input_name')).toBeFalsy();
    done();
  });

  // Sidebar tests!

  it('should display message `step1 is not complete.` (in red color) for sidebar step1, if any of form inputs validation fails.', (done) => {
    page.setInputFieldValue('input_name', 'test');
    page.setInputFieldValue('input_age_user', '160');
    expect(page.isStepCompleted()).toBeFalsy();
    expect(page.getStepStatusText()).toEqual('step1 is not complete.');
    done();
  });

  it('should display success message `step1 is complete.` for sidebar step1, if form validation passes.', (done) => {
    page.setInputFieldValue('input_name', 'hello world');
    page.setInputFieldValue('input_age_user', '25');
    expect(page.isStepCompleted()).toBeTruthy();
    expect(page.getStepStatusText()).toEqual('step1 is complete.');
    done();
  });

});
