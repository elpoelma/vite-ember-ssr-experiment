const ENV = {
  modulePrefix: 'test-app',
  environment: import.meta.env?.DEV ? 'development' : 'production',
  rootURL: '/',
  locationType: 'history',
  EmberENV: {},
  APP: {},
  BACKEND: 'https://publicatie.gelinkt-notuleren.vlaanderen.be',
};

export default ENV;
