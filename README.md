# Rin Angularfire

A brilliant Angular 1 & Bootstrap 4 dashboard boilerplate with angularfire built in and ready to go.  It's structure follows [John Papa's Angular Style Guide](https://github.com/johnpapa/angular-styleguide) closely, but has some minor changes.  Sass for styling.

## Demo

Check it before giving it a go! [DEMO](https://rin-angularfire.firebaseapp.com/).

## Features
- [Angular](https://angularjs.org/) - HTML enhanced for web apps.
- [Angularfire](https://www.firebase.com/docs/web/libraries/angular/) - AngularFire is the officially supported AngularJS binding for Firebase. The combination of Angular and Firebase provides a three-way data binding between your HTML, your JavaScript, and the Firebase database.
- [Angular Bootstrap](https://angular-ui.github.io/bootstrap/) - Bootstrap components written in pure AngularJS by the AngularUI Team.
- [Angular Charts](http://jtblin.github.io/angular-chart.js/) - Reactive, responsive, beautiful charts for AngularJS based on Chart.js.
- [Angular UI-Router](http://angular-ui.github.io/ui-router/site) - The de-facto solution to flexible routing with nested views in AngularJS.
- [Bootstrap v4](http://v4-alpha.getbootstrap.com/) - Bootstrap is the most popular HTML, CSS, and JS framework in the world. (Currently v4.0.0-alpha).
- [Bootstrap Additions](https://github.com/mgcrea/bootstrap-additions) - CSS extension kit for Twitter Bootstrap 3.0+.
- [Firebase](https://www.firebase.com/) - A powerful platform for your mobile or web application
- [Gulp](http://gulpjs.com/) - The streaming build system.
- [Moment](http://momentjs.com/) - Parse, validate, manipulate, and display dates in JavaScript.
- [Toastr](http://codeseven.github.io/toastr/) - Simple javascript toast notifications.

## Getting Started

To begin, we need to create an account a free account on [Firebase](https://www.firebase.com/) and create a new app.  You'll need the url to your data, which should look something like this `https://rin-angularfire.firebaseio.com/`.  Keep that handy for a minute...

Now we run through our basic clone & install process:

1. Clone the repo `git clone https://github.com/mdchristians/rin.git`
2. navigate into the project `cd rin`
3. Install the firebase tools globally `sudo npm install -g firebase-tools`
4. Install the NodeJS dependencies: `npm install`.
5. Install the Bower dependencies: `bower install`.
6. Then, take that url from before and replace it with the temporary constant in `src/app/index.constants.js`.
7. Run gulp serve to begin our development: `gulp serve`.

## Gulp Commands

```sh
gulp serve            // Serves project from .tmp folder
gulp clean            // Removes any temporary folders
gulp serve:dist       // Serves project as it does for production builds
gulp builds           // Builds project to 'dist' folder
```

Enjoy!