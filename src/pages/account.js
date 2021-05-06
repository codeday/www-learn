import Divider from '@codeday/topo/Atom/Divider';
import Page from '../components/page';
import Box from '@codeday/topo/Atom/Box';
import Image from "@codeday/topo/Atom/Image";
import Text, { Heading } from '@codeday/topo/Atom/Text';
import { Flex } from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/client";
import Content from '@codeday/topo/Molecule/Content';

export default function Account() {
  const [session, loading] = useSession();
  
  console.log(session);

  return (
    <Page slug="/account">
      {session &&
        <Content>
          <Flex>
            <Box textAlign="center">
              <Image src={session.user.picture} borderRadius="full" />
              <Text mb={0} fontSize={25}>Hello {session.user.given_name}!</Text>
              <Text mt={0} fontSize={13} textDecoration="underline"><a href="https://account.codeday.org/">Edit account</a></Text>
            </Box>
  
            <Box textAlign="center" w="100%">
              <Heading>Statistics</Heading>
              <Flex justifyContent="center" mt={5}>
                <StatisticsBox statName="Obtained Points" statValue="0"></StatisticsBox>

                <StatisticsBox statName="Completed Lessons" statValue="0"></StatisticsBox>

                <StatisticsBox statName="Completed Tracks" statValue="0"></StatisticsBox>
              </Flex>
            </Box>
          </Flex>

          <Divider/>
          
        </Content>
      }
    </Page>
  );
}

function StatisticsBox({ statName, statValue }) {
  return (
    <Box backgroundColor="#69B9FF" p={5} w={225} borderRadius={5} textAlign="left" ml={5}>
      <Heading fontSize={20}>{statName}</Heading>
      <Text mb={0}>{statValue}</Text>
    </Box>
  )
}