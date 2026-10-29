import AuFormRow from '@appuniversum/ember-appuniversum/components/au-form-row';
import AuHeading from '@appuniversum/ember-appuniversum/components/au-heading';
import AuLinkExternal from '@appuniversum/ember-appuniversum/components/au-link';
import { SearchIcon } from '@appuniversum/ember-appuniversum/components/icons/search';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type { ModelForRoute } from '@glint/ember-tsc/types';
import PowerSelect from 'ember-power-select/components/power-select';
import { not, or } from 'ember-truth-helpers';
import { getPromiseState } from 'reactiveweb/get-promise-state';
import type IndexRoute from 'vite-ember-ssr-experiment/routes';
import {
  fetchBestuurseenhedenByCode,
  type Bestuurseenheid,
  type ClassificatieCode,
} from 'vite-ember-ssr-experiment/utils/queries';

type Signature = {
  Args: {
    model: ModelForRoute<IndexRoute>;
  };
};

export default class extends Component<Signature> {
  @tracked selectedCode?: ClassificatieCode;
  @tracked selectedEenheid?: Bestuurseenheid;

  selectCode = (code?: ClassificatieCode) => {
    this.selectedCode = code;
    this.selectedEenheid = undefined;
  };

  selectBestuurseenheid = (eenheid?: Bestuurseenheid) => {
    this.selectedEenheid = eenheid;
  };

  get bestuurseenheden() {
    const selectedCode = this.selectedCode;
    return getPromiseState(async () => {
      if (!selectedCode) {
        return [];
      }
      return fetchBestuurseenhedenByCode(selectedCode.id);
    });
  }

  get bestuurseenhedenInputDisabled() {
    return !this.selectedCode || !this.bestuurseenheden.resolved;
  }

  <template>
    <AuHeading @level="1" @skin="2">Zoek naar gepubliceerde agenda's, besluiten
      en notulen van een bestuur</AuHeading>
    <AuHeading @level="2" @skin="3">
      Stap 1: Kies het type bestuurseenheid
    </AuHeading>
    <form class="au-c-form">
      <AuFormRow>
        <PowerSelect
          class="au-u-1-2"
          @placeholder="Selecteer Type Bestuurseenheid"
          @options={{@model.classificatieCodes}}
          @selected={{this.selectedCode}}
          @searchEnabled={{true}}
          @searchField="attributes.label"
          @allowClear={{true}}
          @onChange={{this.selectCode}}
          as |code|
        >
          {{code.attributes.label}}
        </PowerSelect>
      </AuFormRow>
      <AuHeading @level="2" @skin="3">
        Stap 2: Kies de bestuurseenheid
      </AuHeading>
      <AuFormRow>
        <PowerSelect
          class="au-u-1-2"
          @placeholder="Selecteer Bestuurseenheid"
          @options={{this.bestuurseenheden.resolved}}
          @selected={{this.selectedEenheid}}
          @disabled={{or
            (not this.selectedCode)
            (not this.bestuurseenheden.resolved)
          }}
          @onChange={{this.selectBestuurseenheid}}
          @searchEnabled={{true}}
          @searchField="attributes.naam"
          @allowClear={{true}}
          as |bestuurseenheid|
        >
          {{bestuurseenheid.attributes.naam}}
        </PowerSelect>
      </AuFormRow>
      {{#if this.selectedEenheid}}
        <AuFormRow>
          <AuLinkExternal
            @icon={{SearchIcon}}
            @skin="button"
            @route="publicaties"
            @model={{this.selectedEenheid.id}}
          >
            Zoek publicaties
          </AuLinkExternal>
        </AuFormRow>
      {{/if}}
    </form>
  </template>
}
