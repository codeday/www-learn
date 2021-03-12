import React from 'react';
import Divider from '@codeday/topo/Atom/Divider';
import Page from '../components/page';
import Header from '../components/Index/Header';
import Explainer from '../components/Index/Explainer';
import BrowseTracks from '../components/BrowseTracks';

export default function Home() {
  return (
    <Page slug="/">
      <Header />

      <Explainer />

      <Divider />

      <BrowseTracks />

    </Page>
  );
}
