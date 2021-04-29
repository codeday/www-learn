import Box from '@codeday/topo/Atom/Box';
import Content from '@codeday/topo/Molecule/Content';
import Text, { Heading } from '@codeday/topo/Atom/Text';
import TextLoop from 'react-text-loop';
import { Flex } from "@chakra-ui/react";
import Image from '@codeday/topo/Atom/Image';
import React from 'react';
import BlobBackground from './BlobBackground';
import PastProjects from '../PastProjects';

export default function Header({ displayProjects, random }) {
  return (
    <Content color="black" mb={125}>
      <Flex
        size="100%"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
        flexWrap="wrap"
        mt={2}
      >
      <Box
        w={450}
        p={2}
        mr={5}
        textAlign="left"
        fontWeight="bold"
      >
        <Heading as="h1">
          <Text m={0}>Make the</Text>
          <TextLoop w="100%" interval={2000} fade="false">
            <span>Platformer Game</span>
            <span>Discord Bot</span>
            <span>Android App</span>
            <span>3D Model</span>
            <span>Story & Dialogue</span>
            <span>Personal Website</span>
            <span>Sounds</span>
            <span>Animations</span>
          </TextLoop>{' '}
        <Text m={0}>of your dreams</Text>
        </Heading>
        <Text mb={0}>
          CodeDay Learn is a program aimed on helping newcomers 
          and beginner programmers get inspired by computer science 
          using project-based learning
        </Text>
      </Box>

      <PastProjects query={displayProjects} random={random} />
    </Flex>


    </Content>
  );
}
