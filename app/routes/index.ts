import Route from '@ember/routing/route';
import {
  fetchClassificatieCodes,
  type ClassificatieCode,
} from 'vite-ember-ssr-experiment/utils/queries';

export interface IndexModel {
  classificatieCodes: ClassificatieCode[];
}

export default class IndexRoute extends Route {
  async model(): Promise<IndexModel> {
    const classificatieCodes = await fetchClassificatieCodes();
    return {
      classificatieCodes,
    };
  }
}
