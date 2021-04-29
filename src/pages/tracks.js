import React from 'react';
import { print } from 'graphql';
import { apiFetch } from '@codeday/topo/utils';
import Page from '../components/page';
import BrowseTracks from '../components/BrowseTracks';
import { BrowseTracksQuery } from '../components/BrowseTracks.gql'

export default function Home({ tracks }) {
  return (
    <Page slug="/">
      <BrowseTracks tracks={tracks}/>
    </Page>
  );
}

export async function getStaticProps() {
  const data = await apiFetch(print(BrowseTracksQuery));
  return {
    props: {
      tracks: data?.learn?.tracks?.items || {},
    },
    revalidate: 300,
  };
}