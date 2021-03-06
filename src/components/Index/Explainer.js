import Box from '@codeday/topo/Atom/Box';
import Content from '@codeday/topo/Molecule/Content';
import Text, { Heading } from '@codeday/topo/Atom/Text';
import Button from '@codeday/topo/Atom/Button';
import TextLoop from "react-text-loop";
import { Flex, Spacer, Icon } from "@chakra-ui/react";
import Image from "@codeday/topo/Atom/Image";
import { FaLightbulb, FaRegLightbulb, FaBrain, FaHandsHelping } from 'react-icons/fa';
import { GiIsland } from 'react-icons/gi';

export default function Explainer(props) {
  return (
    <Box>
      <Content>
        <Box textAlign="center">
          <Heading as="h4">
            Discover your passion to code.
          </Heading>
          <Text>We have mentored, guided, and helped students personally discover their interests in tech for over 10 years.</Text>
        </Box>
      </Content>

      <Box>
        <Flex flexDirection="column">
          <ExplainerBox icon={FaLightbulb} alignContent="left">
            <Heading as="h1">Anything you want is possible.</Heading>
            <Text>Make things curated from top mentors and other people from the CodeDay community. We have tracks varying from discord bots all the way to websites, so anything you need is right here!</Text>
          </ExplainerBox>

          <ExplainerBox icon={FaBrain} alignContent="right">
            <Heading as="h6">Learn by Doing. Imagine it. Build it.</Heading>
            <Text>Have you been thinking of making the next big thing? Start your journey here and we can help you do just that!</Text>
          </ExplainerBox>

          <ExplainerBox icon={FaHandsHelping} alignContent="left">
            <Heading as="h6">Get Feedback on Code.</Heading>
            <Text>Join the community of over 55,000 alums and counting </Text>
          </ExplainerBox>

          <ExplainerBox icon={GiIsland} alignContent="right">
            <Heading as="h6">Land your Dream Job.</Heading>
            <Text>Unsure of the steps needed to get to your dream job? We have you covered, start here to get the job of you dreams.</Text>
          </ExplainerBox>
        </Flex>
      </Box>
    </Box>
  )
}

function ExplainerBox({icon, alignContent, children}) {
  return (
    <Flex flexDirection="row" mb={3} textAlign={alignContent} justifyContent="center" alignItems="baseline">
      {alignContent == "left" &&
        <Icon as={icon} w={8} h={8}></Icon>
      }

      <Flex w="55%" flexDirection="column">
        {children}
      </Flex>

      {alignContent == "right" &&
        <Icon ml={1} as={icon} w={8} h={8}></Icon>
      }
    </Flex>
  )
}