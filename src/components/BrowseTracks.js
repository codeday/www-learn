import React, { useState } from 'react';
import Box from '@codeday/topo/Atom/Box';
import Content from '@codeday/topo/Molecule/Content';
import Text, { Heading } from '@codeday/topo/Atom/Text';
import Button from '@codeday/topo/Atom/Button';
import { Flex } from "@chakra-ui/react";
import Image from "@codeday/topo/Atom/Image";
import Input from '@codeday/topo/Atom/Input/Text';
import List, { Item } from "@codeday/topo/Atom/List";
import { apiFetch } from "@codeday/topo/utils";
import Skelly from "@codeday/topo/Atom/Skelly";
import DifficultyBox from './DifficultyBox';
import UiSearch from '@codeday/topocons/Icon/UiSearch';


export default function BrowseTracks({ tracks, hasHeader, hasSearch }) {
  const [search, setSearch] = useState();

  return (
    <Content textAlign="center">
      {hasHeader && hasSearch ? (
        <Flex mb={50} justifyContent="space-between">
          <Heading>Pick a Track</Heading>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (search) {
              // eslint-disable-next-line no-undef
              window.location.href = `/projects/all/contains=${search}`;
            }
          }}
          >
            <Box d="flex">
              <Input placeholder="Search Tracks" value={search} onChange={(e) => setSearch(e.target.value)} mr={2} />
              <Button size="md" fontSize="xl" type="submit">
                <UiSearch style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                />
              </Button>
            </Box>
          </form>
        </Flex>
      ) : (
        hasHeader && <Heading mb={25}>Pick a Track</Heading> 
      ) 
      }

      <Box>
        <List>
          <Flex
            size="100%"
            justify="left"
            alignItems="left"
            flexDirection="column"
            flexWrap="wrap"
          >
            {!tracks ? (
              <>
                <Item w="100%" h={50}>
                  <Skelly w="100%" h={50} />
                </Item>
                <Item>
                  <Skelly />
                </Item>
                <Item>
                  <Skelly />
                </Item>
              </>
            ) : (
              Object.keys(tracks).map((key, index) => (
                <Track
                  key={tracks[key].name}
                  info={tracks[key]}
                ></Track>
              ))
            )}
          </Flex>
        </List>
      </Box>

      <Box mt={2}>
        <Text>
          We are always working on adding more tracks, keep checking back to
          keep learning!
        </Text>
      </Box>
    </Content>
  )
}

function Track({ info }) {
  console.log(info);
  const link = "lesson/" + info.name.replace(" ", "-").toLowerCase() + "/1";
  return (
    <Flex
      size="100%"
      justify="left"
      alignItems="left"
      flexDirection="column"
      flexWrap="wrap"
    >
      <TrackHeader name={info.name} difficulty={info.difficulty} />
      <Flex
        size="100%"
        justify="left"
        alignItems="left"
        flexDirection="row"
        flexWrap="wrap"
        mt={2}
      >
        <Image border="2px solid #508ec4" backgroundColor="#508ec4" src={info.previewProjects[0].media[0].image} h={40} mr={5} borderRadius={5} />
        <Image border="2px solid #508ec4" backgroundColor="#508ec4" src={info.previewProjects[1].media[0].image} h={40} mr={5} borderRadius={5}/>
        <Image border="2px solid #508ec4" backgroundColor="#508ec4" src={info.previewProjects[2].media[0].image} h={40} borderRadius={5} />
      </Flex>

      <Button variant="solid" variantColor="green" mt={1} w={150}>GO >></Button>
    </Flex>
  );
}

function TrackHeader({ name, difficulty }) {
  return (
    <Flex
      size="100%"
      justify="left"
      alignItems="baseline"
      flexDirection="row"
      flexWrap="wrap"
    >
    <Heading mr={5}>{name}</Heading>
    <DifficultyBox color={difficulty.hexCodeColor}>
      {difficulty.name}
    </DifficultyBox>
  </Flex>
  )
}