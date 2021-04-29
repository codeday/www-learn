import React from 'react';
import { print } from 'graphql';
import { apiFetch } from '@codeday/topo/utils';
import Page from '../components/page';
import BrowseTracks from '../components/BrowseTracks';
import { IndexQuery } from './index.gql';

export default function Tracks({ tracks }) {
  return (
    <Page slug="/tracks">
      <BrowseTracks tracks={tracks}/>
    </Page>
  );
}

export async function getStaticProps() {
  const data = await apiFetch(print(IndexQuery));
  return {
    props: {
      tracks: data?.learn?.tracks?.items || {},
    },
    revalidate: 300,
  };
}