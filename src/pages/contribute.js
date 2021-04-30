import React from 'react';
import { print } from 'graphql';
import Box from '@codeday/topo/Atom/Box';

import { apiFetch } from '@codeday/topo/utils';
import Content from '@codeday/topo/Molecule/Content';
import Page from '../components/page';
import Text, { Heading } from '@codeday/topo/Atom/Text';
import { Flex, Icon } from '@chakra-ui/react';
import BrowseTracks from '../components/BrowseTracks';
import { IndexQuery } from './index.gql';

export default function Tracks({ tracks }) {
  return (
    <Page slug="/tracks">
      <Content>
        <Box textAlign="center" mb={50}>
          <Heading>Contributing is Easy</Heading>
          <Text>We believe that everyone should have the ability to help people learn by having them create their own projects.</Text>
        </Box>


        <Flex flexDirection="column" flexWrap="nowrap">
          <Flex flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="flex-start">
            <Heading borderRadius={25} pl={4} pr={4} pb={1} backgroundColor="black" color="white">1</Heading>
            <Text w="90%" ml={3} mb={0}>
              Fill out the form below, don't worry about grammar and spelling mistakes. As long as the general plan is down, the reviewers will look over the details 
              and make any nessecary changes.
            </Text>
          </Flex>

          <Flex mt={50} flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="flex-start">
            <Heading borderRadius={25} pl={4} pr={4} pb={1} backgroundColor="black" color="white">2</Heading>
            <Text w="90%" ml={3} mb={0}>
              Submit your work and wait for reviewers to look over your submission. After reviewing, they will send an email back to you letting you know that your
              contribution is being added to CodeDay Learn.
            </Text>
          </Flex>

          <Flex mt={50} flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="flex-start">
            <Heading borderRadius={25} pl={4} pr={4} pb={1} backgroundColor="black" color="white">3</Heading>
            <Text w="90%" ml={3} mb={0}>
              Have your work displayed and viewable on learn.codeday.org. Students will now be able to view, interact, and complete your project that you proposed.
            </Text>
          </Flex>
        </Flex>
        
        <Box m="auto" w="75%" textAlign="center">
          <Heading>Fill out the form below</Heading>
          <Box mt={5} backgroundColor="black" h={1000}></Box>
          <Text>Need help? Contact 
            <Text color="#508ec4"><a href="mailto:jacobc@codeday.org" > jacobc@codeday.org</a></Text>
          </Text>
        </Box>

      </Content>
    </Page>
  );
}

export async function getStaticProps() {
  const data = await apiFetch(print(IndexQuery));
  return {
    props: {
      tracks: data?.learn?.tracks?.items || {},
    },
    revalidate: 300,
  };
}