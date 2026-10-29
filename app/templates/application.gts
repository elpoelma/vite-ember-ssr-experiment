import AuLink from '@appuniversum/ember-appuniversum/components/au-link';
import BasicDropdownWormhole from 'ember-basic-dropdown/components/basic-dropdown-wormhole';

<template>
  <nav>
    <AuLink @route="index">Home</AuLink>
    <AuLink @route="about">About</AuLink>
  </nav>
  <BasicDropdownWormhole />
  {{outlet}}
</template>
