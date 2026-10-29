import config from '../config/environment.ts';

export type ClassificatieCode = {
  id: string;
  attributes: { uri: string; label: string };
};

export const fetchClassificatieCodes = async () => {
  const response = await fetch(
    new URL('/bestuurseenheid-classificatie-codes?sort=label', config.BACKEND),
    {
      method: 'GET',
    }
  );
  const json = (await response.json()) as {
    data: ClassificatieCode[];
  };
  return json.data;
};

export type Bestuurseenheid = {
  id: string;
  attributes: {
    uri: string;
    naam: string;
  };
  relationships: {
    classificatie: {
      data: {
        id: string;
      };
    };
  };
};

export const fetchBestuurseenhedenByCode = async (codeId: string) => {
  const response = await fetch(
    new URL(
      `/bestuurseenheden?filter[classificatie][id]=${codeId}&sort=naam&page[size]=3000`,
      config.BACKEND
    ),
    {
      method: 'GET',
    }
  );
  const json = (await response.json()) as {
    data: Bestuurseenheid[];
  };
  return json.data;
};

export type Zitting = {
  id: string;
  attributes: {
    uri: string;
    'geplande-start': string;
  };
};

export const fetchZittingenByBestuurseenheid = async (
  _bestuurseenheidId: string
) => {
  const response = await fetch(
    new URL(
      `zittingen?page[number]=0&page[size]=5&sort=-geplande-start`,
      config.BACKEND
    ),
    {
      method: 'GET',
    }
  );
  const json = (await response.json()) as {
    data: Zitting[];
  };
  return json.data;
};
