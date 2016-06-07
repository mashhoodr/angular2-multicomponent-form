# angular2-multi-component-dynamic-form

A small playground using Angular2 RC1 which demonstrates a way to structure an application with a large dynamic form. There is routing so a form can be in multiple steps but the central form object in form of a service is persisted through the app. There are validations (default and custom) + additional customizations that might be needed and several other features.

## Functionality

- [x] Large form broken over multiple components
- [x] Single FormService managing all the data
- [x] Custom trigger events for each type of field
- [x] Custom component for rendering different types of fields (based on type) (using NgModel)
- [x] Inter-dependant select fields
- [ ] IE9 Support
- [ ] Validations over multiple components, show custom error messages via service
- [ ] Sidebar showing status of form in each component
- [ ] Field visibility dependant on service
- [ ] Control visibility using specific fields
- [ ] Tooltips on input fields
- [ ] Injecting custom html blocks (non-form related) into components (ads, widgets etc)
- [ ] Testing large forms


## Setup

- Make sure you have node >= `4.0` & npm >= `3.0` installed on your machine? If you don't have, then install from [here](https://nodejs.org/en/download/).
- Clone this repo: `$ git clone https://github.com/recurship/angular2-multicomponent-form.git`
- Install npm dependencies: `$ npm install`
- Install *angular-cli*: `$ npm install angular-cli -g`

## Run

- `$ ng serve`
- `http://localhost:4200/`

## e2e Tests

For running e2e tests you must need [protractor](http://www.protractortest.org/) and [webdriver-manager](https://github.com/angular/webdriver-manager) globally installed on your machine.
Follow up these commands if you don't have installed yet.

```
# Install webdriver-manager
$ npm install -g webdriver-manager

# Setting up a Selenium Server (By default it will download the selenium server jar and chromedriver binary.)
$ webdriver-manager update

# Install protractor
$ npm install -g protractor
```

After then, you need to first start selenium server anf then run tests:

- Starting the Selenium Server: `$ webdriver-manager start`
i.e., By default, the selenium server will run on `http://localhost:4444/wd/hub`.

- run e2e tests: `$ ng e2e`

