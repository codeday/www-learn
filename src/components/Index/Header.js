import Box from '@codeday/topo/Atom/Box';
import Content from '@codeday/topo/Molecule/Content';
import Text, { Heading } from '@codeday/topo/Atom/Text';
import TextLoop from 'react-text-loop';
import Slides from '@codeday/topo/Molecule/Slides';
import Image from '@codeday/topo/Atom/Image';
import React from 'react';
import { apiFetch } from "@codeday/topo/utils";
import useSwr from 'swr';
import BlobBackground from './BlobBackground';

export default function Header() {
  return (
    <Content color="black" textAlign="center">
      <Box
        w={450}
        p={2}
        mb={300}
        textAlign="left"
        fontWeight="bold"
      >
        <Heading as="h1">
          <Text m={0} >Make the </Text>
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
    </Content>
  );
}
