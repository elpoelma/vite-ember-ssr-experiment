import EmberRouter from '@embroider/router';
import config from 'vite-ember-ssr-experiment/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('publicaties', { path: 'publicaties/:bestuurseenheid_id' });
});
