
import { Heading } from '@codeday/topo/Atom/Text';
import Content from '@codeday/topo/Molecule/Content';
import Divider from '@codeday/topo/Atom/Divider';
import { Flex, Icon } from "@chakra-ui/core"
import Text, { Link } from '@codeday/topo/Atom/Text';
import List, { Item } from '@codeday/topo/Atom/List';
import { apiFetch } from '@codeday/topo/utils';
import Box from '@codeday/topo/Atom/Box';
import Button from '@codeday/topo/Atom/Button';
import Page from '../components/page';
import IconBox, {HeaderIcon, HeaderText, Body} from '@codeday/topo/Molecule/IconBox';
import Image from '@codeday/topo/Atom/Image';

const boxWidth = 330;
const boxTextAlignment = "left";

export default function Home({ tracks }) {
	console.log(tracks);
	return (
		<Page slug="/">
			<Content textAlign="center">
				<Heading as="h1">Learn At Undescribable Speeds</Heading>
				<Text>CodeDay Learn is a new program aimed on helping newcomers and experienced programmers continue learning.</Text>
			</Content>

			<Divider/>

			<Content>
				<Box textAlign="center">
					<Heading as="h4">Browse the available tracks you can master</Heading>
				</Box>
			</Content>

			<Divider/>

			<Content textAlign="center">
				<Text>Not sure which track to start on? Take a fun little quiz to start learning!</Text>
				<Box mb={5}><Button>Take Quiz</Button></Box>

				<Box>
					<List>
						<Flex size="100%" justify="left" alignItems="left" flexDirection="row" flexWrap="wrap">
							{!(tracks) ? (
								<>
									<Item><Skelly /></Item>
									<Item><Skelly /></Item>
									<Item><Skelly /></Item>
									<Item><Skelly /></Item>
									<Item><Skelly /></Item>
									<Item><Skelly /></Item>
								</>
							) : Object.keys(tracks).map((key, index) => <TrackBox key={tracks[key].name} info={tracks[key]}></TrackBox> )}
						</Flex>
					</List>
			</Box>
			</Content>
		</Page>
	)
}

function TrackBox({ info }) {
  return (
		<IconBox mb={2} mr={2} textAlign="left" maxWidth={325}>
			<HeaderIcon h={75}><Image w="25%" src={info.logo.url} /></HeaderIcon>
			<HeaderText>{info.name}</HeaderText>
			<Body>{info.description}
				<br></br>
				<Button mt={2} variant="solid" variantColor="brand" href="/">Start</Button>
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
	}
};