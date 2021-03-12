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
    <Content color="white" textAlign="center">
      <BlobBackground position="absolute" top={0} left={0}/>
      <Box
        position="absolute"
        top={0}
        left={0}
        m="auto"
        textAlign="center"
        width="100%"
        height={512}
        duration={5}
        resize="contain"
        zIndex="-1"
      >
        <Image h="100%" opacity="70%" src="/images/blob-scatter.png" />
      </Box>
      <Box
        w="50%"
        textAlign="left"
        fontWeight="bold"
        textShadow="0 0 5px rgba(0,0,0,0.7)"
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
        <Text mb={330}>
          CodeDay Learn is a new program aimed on helping newcomers and
          experienced programmers continue learning by using Project-based
          learning
        </Text>
      </Box>
    </Content>
  );
}

function LearnSlides({ photos }) {
  return (
    <Slides
      position="absolute"
      top={80}
      left={0}
      m="auto"
      width="100%"
      height={512}
      duration={5}
      resize="contain"
      zIndex="-1"
    >
      {Object.keys(photos).map((key, index) => (
        <Image key={photos[key].photo.title} src={photos[key].photo.url}/>
      ))}
    </Slides>
  );
}
