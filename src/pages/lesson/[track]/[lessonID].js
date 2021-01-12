import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router'
import Page from '../../../components/page';
import Content from '@codeday/topo/Molecule/Content';
import Text, { Heading, Link, CopyText } from '@codeday/topo/Atom/Text';
import { Tooltip } from "@chakra-ui/react"
import List, { Item } from '@codeday/topo/Atom/List';
import useSwr from 'swr';
import Skelly from '@codeday/topo/Atom/Skelly';
import { useString, apiFetch } from '@codeday/topo/utils';
import ContentfulRichText from '../../../components/ContentfulRichText'
import Image from '@codeday/topo/Atom/Image';
import DifficultyBox from '../../../components/DifficultyBox';
import Box from '@codeday/topo/Atom/Box';

const query = (trackName, lessonID) => `{
  learn {
    lessons(limit: 1 where: {tags_contains_all: "${trackName}" pageNumber: ${lessonID}}) {
      items {
        nameHeader
        pageNumber
        hasNextPage
        content {
          json
          links {
            assets {
              block {
                sys {
                  id
                }
                contentType
                url
              }
            }
          }
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
  const lesson = data?.learn?.lessons?.items[0];

  console.log(lesson);
  return (
    <Page slug="/">
      <Content textAlign="left">
        {!(lesson) ? (
            <>
              <List>
                <Item><Skelly/></Item>
                <Item><Skelly/></Item>
                <Item><Skelly/></Item>
                <Item><Skelly/></Item>
              </List>
            </>
          ) : (
          <>
              <Box>
                <Image w="5%" src={lesson.track.logo.url}/>
                <Text d="inline-block">Viewing page {lesson.pageNumber} of {lesson.track.name}</Text>
                <DifficultyBox color={lesson.difficulty.hexCodeColor}>{lesson.difficulty.name}</DifficultyBox>

                <Tooltip label={lesson.difficulty.shortDescription} shouldWrapChildren fontSize="md" bg="gray.300"  placement="bottom" hasArrow arrowSize={15}>
                </Tooltip>
              </Box>

              <Box>
                {ContentfulRichText(lesson.content)}
              </Box>
          </>
              )
        }
      </Content>
    </Page>
  )    
}
