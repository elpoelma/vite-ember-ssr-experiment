import AuCard from '@appuniversum/ember-appuniversum/components/au-card';
import Component from '@glimmer/component';
import type { ModelForRoute } from '@glint/ember-tsc/types';
import type PublicatiesRoute from 'vite-ember-ssr-experiment/routes/publicaties';

type Signature = {
  Args: {
    model: ModelForRoute<PublicatiesRoute>;
  };
};
// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class extends Component<Signature> {
  <template>
    <h1>Zittingen van Gemeente ...</h1>
    {{#each @model.zittingen as |zitting|}}
      <AuCard as |c|>
        <c.header>{{zitting.attributes.uri}}</c.header>
        <c.content>{{zitting.attributes.geplande-start}}</c.content>
      </AuCard>
    {{/each}}
  </template>
}
