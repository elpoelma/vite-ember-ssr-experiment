import EmberApp from 'ember-strict-application-resolver';
import config from './config/environment.ts';
import Router from './router.ts';
import { setConfig } from 'ember-basic-dropdown/config';

// import 'ember-basic-dropdown/styles';
// import 'ember-power-select/styles';
// import "@appuniversum/ember-appuniversum/styles";
// Basic usage:
setConfig({
  //@ts-expect-error rootElement is undefined
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  rootElement: config.APP.rootElement, // config.APP.rootElement is by default 'undefined' and '#ember-testing' in tests
});

// Re-exporting `settled` lets the renderer await Ember's run loop, pending
// timers, and any registered test-waiters before capturing the DOM. See
// the Concepts section below for details.
export { settled } from '@ember/test-helpers';

class App extends EmberApp {
  modulePrefix = config.modulePrefix;
  modules = {
    './router': Router,
    ...import.meta.glob('./{routes,templates}/**/*.{ts,gts}', { eager: true }),
    ...import.meta.glob('./controllers/*.ts', { eager: true }),
    ...import.meta.glob('./services/*.ts', { eager: true }),
  };
}

export function createSsrApp() {
  return App.create({ ...config.APP, autoboot: false });
}
