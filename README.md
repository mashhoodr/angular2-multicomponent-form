# angular2-multi-component-dynamic-form

A small playground using Angular2 which demonstrates a way to structure an application with a large dynamic form. There is routing so a form can be in multiple steps but the central form object in form of a service is persisted through the app. There are validations (default and custom) + additional customizations that might be needed and several other features.

## Functionality

- [x] **Angular 2.1 ready!** 
- [x] Dynamic rendering and customising for form fields
- [x] Support for Text, Select, Radio and Checkboxes
- [x] Large form broken over multiple components
- [x] Single FormService managing all the form fields (using FormGroup and FormControl)
- [x] Inter-dependant select fields (values in one are dependant on other)
- [x] Validations over multiple components, show custom error messages via service
- [x] Sidebar showing status of form in each component
- [x] Field visibility dependant on service
- [x] Control visibility using specific fields (via custom code in Compontent)
- [x] IE9 Support (with some hacks) [pending testing post 2.1 final update]
- [x] Clicking on text fields should empty them, if empty on blur restore the value
- [x] Tooltips on input fields
- [x] Upgrade to new forms module (RC5)
- [x] Upgrade to AngularCLI Webpack
- [ ] Injecting custom html blocks (non-form related) into components (ads, widgets etc)
- [ ] Highcharts integration
- [ ] Testing large forms (adding as we go along)

## How can I support developers?

- Star our GitHub repo ⭐
- Create pull requests, submit bugs, suggest new features or documentation updates 🔧
- Follow us on [Twitter](https://twitter.com/recurship) 🐾
- Like our page on [Facebook](http://facebook.com/recurship) 👍

## Can I hire you guys?

Yes! Visit our [homepage](http://recurship.com) or simply send a note to mashhoodr@recurship.com. We will be happy to work with you!

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

