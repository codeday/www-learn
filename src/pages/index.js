import { Heading } from "@codeday/topo/Atom/Text";
import Content from "@codeday/topo/Molecule/Content";
import Divider from "@codeday/topo/Atom/Divider";
import { Flex, Icon } from "@chakra-ui/core";
import Text, { Link } from "@codeday/topo/Atom/Text";
import List, { Item } from "@codeday/topo/Atom/List";
import { apiFetch } from "@codeday/topo/utils";
import Box from "@codeday/topo/Atom/Box";
import Button from "@codeday/topo/Atom/Button";
import Page from "../components/page";
import IconBox, {
  HeaderIcon,
  HeaderText,
  Body,
} from "@codeday/topo/Molecule/IconBox";
import Image from "@codeday/topo/Atom/Image";
import TextLoop from "react-text-loop";

export default function Home({ tracks }) {
  console.log(tracks);
  return (
    <Page slug="/">
      <Content textAlign="center">
        <Heading as="h1">
          <TextLoop interval={1000} fade="false">
            <span>Learn</span>
            <span>Build</span>
            <span>Create</span>
            <span>Make</span>
          </TextLoop>{" "}
          At Undescribable Speeds
        </Heading>
        <Text>
          CodeDay Learn is a new program aimed on helping newcomers and
          experienced programmers continue learning by using Project-based
          learning
        </Text>
      </Content>

      <Divider />

      <Content>
        <Box textAlign="center">
          <Heading mb={0} as="h4">
            Pick a Track
          </Heading>
        </Box>
      </Content>

      <Content textAlign="center">
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
    </Page>
  );
}

function TrackBox({ info }) {
  // Go to tracks/construct/lesson/1.js</a>
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

const query = () => `{
	learn {
    tracks {
      items {
        name
				description
				logo {
					url
				}
      }
    }
  }
}`;

export async function getStaticProps() {
  const data = await apiFetch(query());
  return {
    props: {
      tracks: data?.learn?.tracks?.items || null,
    },
    revalidate: 120,
  };
}
