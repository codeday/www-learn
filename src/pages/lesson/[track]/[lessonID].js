import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import Page from '../../../components/page';
import Content from '@codeday/topo/Molecule/Content';
import Text, { Heading, Link, CopyText } from '@codeday/topo/Atom/Text';
import { Tooltip } from "@chakra-ui/react"
import Button from '@codeday/topo/Atom/Button';
import { Flex, Icon } from "@chakra-ui/core"
import List, { Item } from '@codeday/topo/Atom/List';
import useSwr from 'swr';
import Skelly from '@codeday/topo/Atom/Skelly';
import { useString, apiFetch } from '@codeday/topo/utils';
import ContentfulRichText from '../../../components/ContentfulRichText'
import NewContentfulRichText, { options } from '../../../components/NewContentfulRichText'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
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
            entries {
              inline {
								sys {
									id
                }
                ...on LearnCodeBlock {
                  language
                  code
                }
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

  const nextLessonLink = "http://localhost:3000/lesson/" + track + "/" + (parseInt(lessonID) + 1);

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
  return (
    <Page slug="/">
      <Content>
        <Flex size="100%" justify="left" alignItems="left" flexDirection="row" flexWrap="wrap">
          <Box p="sticky" w="25%" h={500} backgroundColor="#ffe8e9" borderRadius={20} mr={3}>
            {!(lesson) ? (
              <>
              <Skelly h={500}></Skelly>
              </>
            ) : (
              <>
              <Content mt={5} textAlign="left">
                <Image w="25%" src={lesson.track.logo.url}/>
                <Text d="inline-block">Viewing Page {lesson.pageNumber} of {lesson.track.name}</Text>
                <br></br>
                <Tooltip label={lesson.difficulty.shortDescription} shouldWrapChildren fontSize="md" bg="gray.300" placement="bottom" hasArrow arrowSize={15}>
                  <DifficultyBox color={lesson.difficulty.hexCodeColor}>{lesson.difficulty.name}</DifficultyBox>
                </Tooltip>
              </Content>

              </>
            )}

          </Box>

          <Box w="70%" textAlign="left">
            {!(lesson) ? (
                skellyLines(25)
              ) : (
              <>
                  <Box>
                    <Heading as="h1">{lesson.nameHeader}</Heading>
                    {ContentfulRichText(lesson.content)}

                    {!(lesson.hasNextPage) ? (
                      <>
                        <Text>This is the last lesson of this track. Come back often to see if more are added.</Text>
                      </>
                    ) : (
                      <>
                      <Box textAlign="right">
                        <Button as="a" href={nextLessonLink} mt={2} variant="solid" variantColor="brand">Next Lesson</Button>
                      </Box>
                      </>
                    )}
                  </Box>
              </>
                  )
            }
          </Box>
        </Flex>
      </Content>
    </Page>
  )    
}

function skellyLines(numberOfLines) {
  var output = [];
  for (var i = 0; i < numberOfLines; i++) {
    output.push(<Item><Skelly/></Item>)
  }

  return (
    <List>
      {output}
    </List>
  );
}
