import React from 'react';
import Divider from '@codeday/topo/Atom/Divider';
import Page from '../components/page';
import Header from '../components/Index/Header';
import Explainer from '../components/Index/Explainer';
import BrowseTracks from '../components/BrowseTracks';
import { IndexQuery } from './index.gql';

export default function Home({}) {
  return (
    <Page slug="/">
      <Header />

      <Explainer />

      <Divider />

      <BrowseTracks />

    </Page>
  );
}

export async function getStaticProps() {
  const data = await apiFetch(print(IndexQuery));
  return {
    props: {
      tracks: data?.learn?.tracks?.items || {},
      faqs: data?.cms?.faqs?.items || [],
      query: data,
      random: Math.random(),
    },
    revalidate: 300,
  };
}