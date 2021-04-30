import React from 'react';
import { print } from 'graphql';
import { apiFetch } from '@codeday/topo/utils';
import Text, { Heading } from '@codeday/topo/Atom/Text';
import Divider from '@codeday/topo/Atom/Divider';
import Page from '../components/page';
import Header from '../components/Index/Header';
import Explainer from '../components/Index/Explainer';
import BrowseTracks from '../components/BrowseTracks';
import { IndexQuery } from './index.gql';

export default function Home({ tracks, displayProjects, random }) {
  return (
    <Page slug="/">
      <Header displayProjects={displayProjects} random={random} />

      <Explainer />

      <Divider />

      <BrowseTracks tracks={tracks} hasHeader={true}/>

    </Page>
  );
}

export async function getStaticProps() {
  const data = await apiFetch(print(IndexQuery));
  return {
    props: {
      tracks: data?.learn?.tracks?.items || {},
      displayProjects: data,
      random: Math.random(),
    },
    revalidate: 300,
  };
}