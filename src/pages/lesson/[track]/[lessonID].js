import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import Page from '../../../components/page';
import Content from '@codeday/topo/Molecule/Content';
import Text, { Heading, Link, CopyText } from '@codeday/topo/Atom/Text';
import { Tooltip } from "@chakra-ui/react"
import Button from '@codeday/topo/Atom/Button';
import Divider from '@codeday/topo/Atom/Divider';
import { Flex, Icon } from "@chakra-ui/core"
import { Item } from '@codeday/topo/Atom/List';
import { OrderedList, List, ListItem, ListIcon, MdCheckCircle } from "@chakra-ui/react"
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
    tracks(limit: 10 where:{name: "${trackName}"}) {
      items {
        lessons {
          items {
            nameHeader
            pageNumber
          }
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

  const capitalTrack = capitalizeFirstLetter("" + track);
  const { data, error } = useSwr(
    query(capitalTrack, lessonID),
    apiFetch,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  // Let pulled data from GraphQL be set equal to the lessons variable
  const lesson = data?.learn?.lessons?.items[0];
  const nextLessons = data?.learn?.tracks?.items[0]?.lessons?.items;

  console.log(nextLessons);
  return (
    <Page slug="/">
      <Content>
        <Flex size="100%" justify="left" alignItems="left" flexDirection="row" flexWrap="wrap">
          <Box w="25%" h={500} backgroundColor="#ffe8e9" borderRadius={20} mr={3}>
            {!(lesson) ? (
              <>
              <Skelly h={500}></Skelly>
              </>
            ) : (
              <>
              <Content mt={5}>
                <Tooltip label={lesson.difficulty.shortDescription} shouldWrapChildren fontSize="md" bg="gray.300" placement="bottom" hasArrow arrowSize={15}>
                  <DifficultyBox color={lesson.difficulty.hexCodeColor}>{lesson.difficulty.name} Lesson</DifficultyBox>
                </Tooltip>
                <Flex mt={2} justify="left" alignItems="left" flexDirection="column" flexWrap="wrap">
                {!(nextLessons) ? (
                  <>
                  <Text>Loading Lessons...</Text>
                  </>
                ) : Object.keys(nextLessons).map((key, index) => <CheckListItem key={nextLessons[key].nameHeader} info={nextLessons[key]} track={lesson.track.name} lessonID={lessonID}></CheckListItem> )}                
                </Flex>
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

function CheckListItem({ info, track, lessonID }) {
  const lessonLink = "http://localhost:3000/lesson/" + track + "/" + info.pageNumber;
  const isActive = (lessonID == info.pageNumber);
  return (
    <Button whiteSpace="pre-line" isActive={isActive} as="a" href={lessonLink} w="100%" borderRadius={0} backgroundColor="#ffe8e9" borderLeft="5px #ff9598 solid" _hover={{ bg: "#ffd7d9", borderColor: "#e35d61" }} _active={{borderColor: "#e35d61"}}>
      <Box textAlign="left" w="100%" >{info.nameHeader}</Box>
    </Button>
  );
}

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
