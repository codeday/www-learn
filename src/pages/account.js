import React from 'react';
import { print } from 'graphql';
import { apiFetch } from '@codeday/topo/utils';
import Divider from '@codeday/topo/Atom/Divider';
import Page from '../components/page';
import Header from '../components/Index/Header';
import Explainer from '../components/Index/Explainer';
import BrowseTracks from '../components/BrowseTracks';
import { IndexQuery } from './index.gql';
import { signIn, useSession } from "next-auth/client";
import Content from '@codeday/topo/Molecule/Content';

export default function Account() {
  const [session, loading] = useSession();

  if (session) {
    console.log(session.user);
  }

  return (
    <Page slug="/account">
      <Content>
        
      </Content>
    </Page>
  );
}