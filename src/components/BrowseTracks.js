import Box from '@codeday/topo/Atom/Box';
import Content from '@codeday/topo/Molecule/Content';
import Text, { Heading } from '@codeday/topo/Atom/Text';
import Button from '@codeday/topo/Atom/Button';
import { Flex } from "@chakra-ui/react";
import IconBox, {
  HeaderIcon,
  HeaderText,
  Body,
} from "@codeday/topo/Molecule/IconBox";
import useSwr from 'swr';
import Image from "@codeday/topo/Atom/Image";
import List, { Item } from "@codeday/topo/Atom/List";
import { apiFetch } from "@codeday/topo/utils";
import Skelly from "@codeday/topo/Atom/Skelly";

const query = () => `{
  learn {
    tracks {
      items {
        name
        description
        previewProjects
        difficulty {
          name
          hexCodeColor
        }
      }
    }
  }
}`;

export default function BrowseTracks() {
  const { data, error } = useSwr(
    query(),
    apiFetch,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  const tracks = data?.learn?.tracks?.items || {};

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
            flexDirection="row"
            flexWrap="wrap"
          >
            {!tracks ? (
              <>
                <Item>
                  <Skelly />
                </Item>
                <Item>
                  <Skelly />
                </Item>
                <Item>
                  <Skelly />
                </Item>
                <Item>
                  <Skelly />
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
                <TrackBox
                  key={tracks[key].name}
                  info={tracks[key]}
                ></TrackBox>
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

function TrackBox({ info }) {
  const link = "lesson/" + info.name.replace(" ", "-").toLowerCase() + "/1";
  return (
    <IconBox mb={2} mr={2} textAlign="left" maxWidth={325}>
      <HeaderIcon h={75}>
        <Image w="25%" src={info.logo.url} />
      </HeaderIcon>
      <HeaderText>{info.name}</HeaderText>
      <Body>
        {info.description}
        <br></br>
        <Button as="a" href={link} mt={2} variant="solid" variantColor="brand">
          Start
        </Button>
      </Body>
    </IconBox>
  );
}