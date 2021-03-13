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

const query = () => `{
  cms {
    pressPhotos(limit: 10) {
      items {
        photo {
          title
          url
          width
          height
        }
      }
    }
  }
}`;

export default function Header() {
  return (
    <Content textAlign="center">
      <BlobBackground />
      <Box
        w={450}
        p={2}
        mb={300}
        textAlign="left"
        fontWeight="bold"
        //textShadow="0 0 5px rgba(0,0,0,0.7)"
      >
        <Heading as="h1">
          <TextLoop interval={1000} fade="false">
            <span>Learn</span>
            <span>Build</span>
            <span>Create</span>
            <span>Make</span>
          </TextLoop>{' '}
          At Undescribable Speeds
        </Heading>
        <Text mb={0}>
          CodeDay Learn is a new program aimed on helping newcomers and
          experienced programmers continue learning by using Project-based
          learning
        </Text>
      </Box>
    </Content>
  );
}
