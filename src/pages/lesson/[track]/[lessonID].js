import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router'
import Page from '../../../components/page';
import Content from '@codeday/topo/Molecule/Content';
import { Heading } from '@codeday/topo/Atom/Text';
import Text, { Link } from '@codeday/topo/Atom/Text';
import useSwr from 'swr';
import { useString, apiFetch } from '@codeday/topo/utils';


import Box from '@codeday/topo/Atom/Box';

const query = (trackName) => `{
  learn {
    tracks(where: { name: "${trackName}"}){
      ...TrackInformation
    }
  }
}`;



export default function Lesson() {
  const router = useRouter()
  const { track } = router.query

  const { data, error } = useSwr(
    query("Construct"),
    apiFetch,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  // Let pulled data from GraphQL be set equal to the lessons variable
  const lessons = data?.learn?.tracks?.items || {};
  if (lessons) console.log(lessons);



  return (
    <Page slug="/">
			<Content textAlign="center">
        <Box>
          <p>The track name is {track}</p>
        </Box>
			</Content>
		</Page>
  )
}