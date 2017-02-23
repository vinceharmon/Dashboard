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

* `src/app/workdetails`: Components allowing the editing of a specific work item.
    * `workdetails.component`: Component allowing the editing of the top-level work item.
    * `workstep.component`: Component that is embedded inside of the workdetails.component, allowing for editing of the multiple steps associated with each work item.

* `src/app/workitems`
    * `workitems.component`: Component displaying all current work items.

## Getting started

1. Clone this repo using `git clone git@github.com:vinceharmon/Dashboard`.
2. Run `npm install -g angular-cli` to install Angular (If not installed).
3. Run `npm install -g typescript` to install Typescript (If not installed).
4. Run `npm install` to install the dependencies.
5. Run `npm start` to start the local web server.
6. Go to `http://localhost:4200` and you should see the app running!


## Code description

The application is a typical dashboard view with a header section for navigation and a landing section to display different views.  

The default view displays all the work items currently waiting to be processed.  The work items have been retrieved from a RESTful API.
The work items can then be deleted, viewed in detail and updated.  The detail view of each work items shows the embedding of components 
and the mechanisms for cross component communication.  Validation is applied to the proper fields.

The setting view displays all the current settings (name/value pairs) and allows for editing.  Validation is applied to the proper fields.

All updates and deletes call a RESTful API.


## License

This project is licensed under the MIT license, Copyright (c) 2015 Maximilian Stoiber. For more information see `LICENSE.md`.

