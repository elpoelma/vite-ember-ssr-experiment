import Route from '@ember/routing/route';
import {
  fetchZittingenByBestuurseenheid,
  type Zitting,
} from 'vite-ember-ssr-experiment/utils/queries';

export interface PublicatiesModel {
  zittingen: Zitting[];
}

export default class PublicatiesRoute extends Route {
  async model(params: {
    bestuurseenheid_id: string;
  }): Promise<PublicatiesModel> {
    const zittingen = await fetchZittingenByBestuurseenheid(
      params.bestuurseenheid_id
    );
    return {
      zittingen,
    };
  }
}
