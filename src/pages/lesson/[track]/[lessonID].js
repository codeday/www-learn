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

const query = (trackName, lessonID) => `{
  learn {
    lessons(where: {tags_contains_all: "${trackName}" pageNumber: ${lessonID}}) {
      items {
        nameHeader
        pageNumber
        hasNextPage
        content {
          json
        }
        track {
          name
          logo {
            url
          }
        }
        difficulty {
          name
          shortDescription
          hexCodeColor
        }
      }
    }
  }
}`;

export default function Lesson() {
  const router = useRouter()
  const { track, lessonID } = router.query
  console.log(track, lessonID);

  const { data, error } = useSwr(
    query(track, lessonID),
    apiFetch,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  // Let pulled data from GraphQL be set equal to the lessons variable
  const lesson = data?.learn?.lessons?.items[0] || {};
  if (lesson) console.log(lesson);

  return (
    <Page slug="/">
			<Content w="80%" textAlign="center">
        <Box>
          
        </Box>
			</Content>
		</Page>
  )
}