// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCFhO1LXTpAQ-IClgQ_VD4KI7xXrEhNnd0',
    authDomain: 'heroes-app-83fc9.firebaseapp.com',
    databaseURL: 'https://heroes-app-83fc9.firebaseio.com',
    projectId: 'heroes-app-83fc9',
    storageBucket: 'heroes-app-83fc9.appspot.com',
    messagingSenderId: '306396928570'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
