
import { Heading } from '@codeday/topo/Atom/Text';
import Content from '@codeday/topo/Molecule/Content';
import Divider from '@codeday/topo/Atom/Divider';
import Text, { Link } from '@codeday/topo/Atom/Text';
import Box from '@codeday/topo/Atom/Box';
import Button from '@codeday/topo/Atom/Button';
import Page from '../components/page';
import IconBox, {HeaderIcon, HeaderText, Body} from '@codeday/topo/Molecule/IconBox';
import Image from '@codeday/topo/Atom/Image';

export default function Home() {
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

			<Content>
				<Text>Not sure which track to start on? Take a quiz to find your interests!</Text>
				<Box w="100%"><Button>Take Quiz</Button></Box>

				<IconBox maxWidth={300} d="inline-block">
					<HeaderIcon><Image src="https://placekitten.com/64/64" borderRadius="full" /></HeaderIcon>
					<HeaderText>Construct</HeaderText>
					<Body>Start here if you're a complete begineer and finish by making your own game!</Body>
    		</IconBox>

				<IconBox maxWidth={300} d="inline-block">
					<HeaderIcon><Image src="https://placekitten.com/64/64" borderRadius="full"/></HeaderIcon>
					<HeaderText>Unity</HeaderText>
					<Body>Take yourself to the next step and learn the fundamentals of using the Unity Engine</Body>
    		</IconBox>

				<IconBox maxWidth={300} d="inline-block">
					<HeaderIcon><Image src="https://placekitten.com/64/64" borderRadius="full"/></HeaderIcon>
					<HeaderText>Unreal</HeaderText>
					<Body>Take yourself to the next step and learn the fundamentals of using the Unreal Engine</Body>
    		</IconBox>

				<IconBox maxWidth={300} d="inline-block">
					<HeaderIcon><Image src="https://placekitten.com/64/64" borderRadius="full"/></HeaderIcon>
					<HeaderText>Python</HeaderText>
					<Body>Learn to program with Python, which is a simple and powerful language for begineers</Body>
    		</IconBox>

				<IconBox maxWidth={300} d="inline-block">
					<HeaderIcon><Image src="https://placekitten.com/64/64" borderRadius="full"/></HeaderIcon>
					<HeaderText>Java</HeaderText>
					<Body>Learn to program with Java, which has been tried and tested to be one of the best languages out there!</Body>
    		</IconBox>

				<IconBox maxWidth={300} d="inline-block">
					<HeaderIcon><Image src="https://placekitten.com/64/64" borderRadius="full"/></HeaderIcon>
					<HeaderText>Web Development</HeaderText>
					<Body>Learn the fundamentals of HTML, CSS, and JavaScript as you create your own website.</Body>
    		</IconBox>
			</Content>
		</Page>
	)
}