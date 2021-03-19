import Box from '@codeday/topo/Atom/Box';
import Content from '@codeday/topo/Molecule/Content';
import Text, { Heading } from '@codeday/topo/Atom/Text';
import Button from '@codeday/topo/Atom/Button';
import { Flex } from "@chakra-ui/react";
import Image from "@codeday/topo/Atom/Image";
import List, { Item } from "@codeday/topo/Atom/List";
import { apiFetch } from "@codeday/topo/utils";
import Skelly from "@codeday/topo/Atom/Skelly";
import DifficultyBox from './DifficultyBox';
import PreviewProjects from './PreviewProject'

export default function BrowseTracks({ tracks }) {
  return (
    <Content textAlign="center">
        <Heading mb={5} as="h4">
          Pick a Track
        </Heading>
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
      <PreviewProjects project1ID={info.previewProjects[0]} project2ID={info.previewProjects[1]} project3ID={info.previewProjects[2]} />
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