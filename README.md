# Angular 2.0

Sample dashboard application for processing work items and changing settings.

### Folder Structure

The folder structure of the JS files reflects a standard Angular 2.0 folder structure, so if you are not familiar with Angular check out the [official documentation](https://angular.io/).

* `src/app`: Contains the application source code.
    * `src/app/app.module`: Contains all the components, imports, services, providers and other pieces that make up the dashboard module.
    * `src/app/app.routing`: Contains all the defined routes.
    * `src/app/app.component`: The main application component which is the bootstrap component in the app.module.
    * `src/app/header.component`: Header component which contains dashboard navigation.

* `src/app/server`: Contains a fake XMLHttpRequest wrapper. fakeServer responds to the fake HTTP requests and pretends to be a real server.  Replace with HTTP rest api calls.
* `src/app/settingdetail`: Component allowing the editing of a specific setting.  
* `src/app/settings`: Component displaying all the settings.  
* `src/app/shared`: Contains data models and services.
* `src/app/workdetails`: Components allowind the editing of a specific work item.
* `src/app/workitems`: Components displaying all current work items.

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

