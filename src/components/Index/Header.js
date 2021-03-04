import Box from '@codeday/topo/Atom/Box';
import Content from '@codeday/topo/Molecule/Content';
import Text, { Heading } from '@codeday/topo/Atom/Text';
import Button from '@codeday/topo/Atom/Button';
import TextLoop from "react-text-loop";


export default function Header(props) {
  return (
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
  )
}