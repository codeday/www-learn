import Box from '@codeday/topo/Atom/Box';
import Content from '@codeday/topo/Molecule/Content';
import Text, { Heading } from '@codeday/topo/Atom/Text';
import Button from '@codeday/topo/Atom/Button';
import TextLoop from "react-text-loop";
import Slides from "@codeday/topo/Molecule/Slides"
import Image from "@codeday/topo/Atom/Image";


export default function Header(props) {
  return (
    <Content color="white" textAlign="center">
      <Slides position="absolute" top={80} left={0} m="auto" width="100%" height={512} duration={5} resize='contain' zIndex="-1">
        <Image src="https://images.ctfassets.net/d5pti1xheuyu/4GiFvtLPYAw8GkzQd2qt09/13f73e4ab47a9c8b5ecd35f000f62f7d/splunk-shirts-1.jpg" />
        <Image src="https://images.ctfassets.net/d5pti1xheuyu/329iqmgKiCoR994R1jl8RZ/e5de3587b1ea84fa20712a572d1a23b2/856517_10151245044691332_118503399_o.jpg" />
        <Image src="https://images.ctfassets.net/d5pti1xheuyu/1Abq9YFsf3kExaM87mCyjv/ca47c0b6691cf9c8e0ab65945fb9a7d0/elect.jpg" />
      </Slides>

      <Box w="50%" textAlign="left" fontWeight="bold" textShadow="0 0 5px rgba(0,0,0,0.7)">
        <Heading as="h1">
          <TextLoop interval={1000} fade="false">
            <span>Learn</span>
            <span>Build</span>
            <span>Create</span>
            <span>Make</span>
          </TextLoop>{" "}
          At Undescribable Speeds
        </Heading>
        <Text mb={330}>
          CodeDay Learn is a new program aimed on helping newcomers and
          experienced programmers continue learning by using Project-based
          learning
        </Text>
      </Box>
    </Content>
  )
}