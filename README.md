# Angular 2.0

Sample dashboard application for processing work items and changing settings.

### Folder Structure

The folder structure of the JS files reflects a standard Angular 2.0 folder structure, so if you are not familiar with Angular check out the [official documentation](https://angular.io/).

* `src/app`: Contains the application source code.
    * `app.module`: Contains all the components, imports, services, providers and other pieces that make up the dashboard module.
    * `app.routing`: Contains all the defined routes.
    * `app.component`: The main application component which is the bootstrap component in the app.module.
    * `header.component`: Header component which contains dashboard navigation.

* `src/app/server` 
    * `fakeRequests`: XMLHttpRequest wrapper.
    * `fakeServer`: Responds to the fake HTTP requests and pretends to be a real server.

* `src/app/settingdetail`
    * `settingdetail.component`: Component allowing the editing of a specific setting.

* `src/app/settings` 
    * `setting.component`: Component displaying all the settings.

* `src/app/shared`: Contains data models and services.
    * `settings.model`: Contains all models for settings.
    * `settings.service`: Setting service implementation.
    * `workitems.model`: Contains all models for the work items.
    * `workitems.service`: WorkItems service implementation.

* `src/app/workdetails`: Components allowind the editing of a specific work item.
    * `workdetails.component`: Contains all the components, imports, services, providers and other pieces that make up the dashboard module.
    * `workstep.component`: Contains all the components, imports, services, providers and other pieces that make up the dashboard module.

* `src/app/workitems`
    * `workitems.component`: Components displaying all current work items.

## Getting started

1. Clone this repo using `git clone git@github.com:vinceharmon/Dashboard`.
2. Run `npm install -g angular-cli` to install Angular (If not installed).
3. Run `npm install -g typescript` to install Typescript (If not installed).
4. Run `npm install` to install the dependencies.
5. Run `npm start` to start the local web server.
6. Go to `http://localhost:4200` and you should see the app running!


## Code description






## License

This project is licensed under the MIT license, Copyright (c) 2015 Maximilian Stoiber. For more information see `LICENSE.md`.

