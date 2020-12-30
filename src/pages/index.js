
import { Heading } from '@codeday/topo/Atom/Text';
import Content from '@codeday/topo/Molecule/Content';
import Divider from '@codeday/topo/Atom/Divider';
import Text, { Link } from '@codeday/topo/Atom/Text';
import Box from '@codeday/topo/Atom/Box';
import Button from '@codeday/topo/Atom/Button';
import Page from '../components/page';
import IconBox, {HeaderIcon, HeaderText, Body} from '@codeday/topo/Molecule/IconBox';
import Image from '@codeday/topo/Atom/Image';

const boxWidth = 330;
const boxTextAlignment = "left";

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

			<Content textAlign="center">
				<Text>Not sure which track to start on? Take a fun little quiz to start learning!</Text>
				<Box mb={5}><Button>Take Quiz</Button></Box>

				<IconBox mb={2} mr={2} textAlign={boxTextAlignment} maxWidth={boxWidth} d="inline-block">
					<HeaderIcon><Image src="https://placekitten.com/64/64" borderRadius="full" /></HeaderIcon>
					<HeaderText>Construct</HeaderText>
					<Body>Start here if you're a complete begineer and finish by making your own game!
						<br></br>
						<Button variant="solid" variantColor="brand" href="/construct">Start</Button>
					</Body>
    		</IconBox>

				<IconBox textAlign={boxTextAlignment} maxWidth={boxWidth} d="inline-block">
					<HeaderIcon d="inline-block"><Image src="https://placekitten.com/64/64" borderRadius="full" /></HeaderIcon>
					<HeaderText d="inline-block">Discord Bot</HeaderText>
					<Body>Create your very own discord bot! Don't worry, you can pick your programming language!
						<br></br>
						<Button variant="solid" variantColor="brand">Start</Button>
					</Body>
    		</IconBox>

				<IconBox textAlign={boxTextAlignment} maxWidth={boxWidth} d="inline-block">
					<HeaderIcon><Image src="https://placekitten.com/64/64" borderRadius="full"/></HeaderIcon>
					<HeaderText>Unity</HeaderText>
					<Body>Take yourself to the next step and learn the fundamentals of using the Unity Engine
						<br></br>
						<Button variant="solid" variantColor="brand">Start</Button>
					</Body>
    		</IconBox>

				<IconBox textAlign={boxTextAlignment} maxWidth={boxWidth} d="inline-block">
					<HeaderIcon><Image src="https://placekitten.com/64/64" borderRadius="full"/></HeaderIcon>
					<HeaderText>Unreal</HeaderText>
					<Body>Take yourself to the next step and learn the fundamentals of using the Unreal Engine
						<br></br>
						<Button variant="solid" variantColor="brand">Start</Button>
					</Body>
    		</IconBox>

				<IconBox textAlign={boxTextAlignment} maxWidth={boxWidth} d="inline-block">
					<HeaderIcon><Image src="https://placekitten.com/64/64" borderRadius="full"/></HeaderIcon>
					<HeaderText>Python</HeaderText>
					<Body>Learn to program with Python, which is a simple and powerful language for begineers
						<br></br>
						<Button variant="solid" variantColor="brand">Start</Button>
					</Body>
    		</IconBox>

				<IconBox textAlign={boxTextAlignment} maxWidth={boxWidth} d="inline-block">
					<HeaderIcon><Image src="https://placekitten.com/64/64" borderRadius="full"/></HeaderIcon>
					<HeaderText>Java</HeaderText>
					<Body>Learn to program with Java, which has been tried and tested to be one of the best languages out there!
						<br></br>
						<Button variant="solid" variantColor="brand">Start</Button>
					</Body>
    		</IconBox>

				<IconBox textAlign={boxTextAlignment} maxWidth={boxWidth} d="inline-block">
					<HeaderIcon><Image src="https://placekitten.com/64/64" borderRadius="full"/></HeaderIcon>
					<HeaderText>Web Development</HeaderText>
					<Body>Learn the fundamentals of HTML, CSS, and JavaScript as you create your own website.
						<br></br>
						<Button variant="solid" variantColor="brand">Start</Button>
					</Body>
    		</IconBox>
			</Content>
		</Page>
	)
}