import Route from '@ember/routing/route';
import {
  fetchBestuurseenheidById,
  fetchZittingenByBestuurseenheid,
  type Bestuurseenheid,
  type Zitting,
} from 'vite-ember-ssr-experiment/utils/queries';

export interface PublicatiesModel {
  bestuurseenheid: Bestuurseenheid;
  zittingen: Zitting[];
}

export default class PublicatiesRoute extends Route {
  async model(params: {
    bestuurseenheid_id: string;
  }): Promise<PublicatiesModel> {
    const bestuurseenheid = await fetchBestuurseenheidById(
      params.bestuurseenheid_id
    );
    const zittingen = await fetchZittingenByBestuurseenheid(
      params.bestuurseenheid_id
    );
    return {
      bestuurseenheid,
      zittingen,
    };
  }
}
