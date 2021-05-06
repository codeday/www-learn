import Divider from '@codeday/topo/Atom/Divider';
import Page from '../components/page';
import Box from '@codeday/topo/Atom/Box';
import Image from "@codeday/topo/Atom/Image";
import Button from '@codeday/topo/Atom/Button';
import Text, { Heading } from '@codeday/topo/Atom/Text';
import { Flex } from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/client";
import { Tooltip } from "@chakra-ui/react"
import Content from '@codeday/topo/Molecule/Content';
import { QuestionIcon } from '@chakra-ui/icons'


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
              <Flex justifyContent="center" flexDirection="row" flexWrap="wrap" mt={5}>
                <StatisticsBox statName="Obtained Points" statValue="0" tooltipLabel="Earned by completing lessons and tracks."/>

                <StatisticsBox statName="Completed Lessons" statValue="0"></StatisticsBox>

                <StatisticsBox statName="Completed Tracks" statValue="0"></StatisticsBox>
                
                <Box w="100%">
                  <Button as="a" href="/shop" variant="solid" variantColor="blue" mt={2} color="black">Spend Points</Button>
                </Box>
              </Flex>
            </Box>
          </Flex>

          <Divider/>
          
          <Flex flexDirection="column">
            <Box>
              <Heading>Recommended Tracks</Heading>
              <Text>Our algorithims have determined that these tracks could be a good fit for you!</Text>
            </Box>

            <Box>
              <Heading>Completed Tracks</Heading>
              <Text>We thought it could be useful for you to see how much you have completed so far. You are doing great!</Text>
            </Box>

            <Box>
              <Heading>Completed Lessons</Heading>
              <Text>Lets be honest, not all of us can finish a track in one sitting. This area shows you which lessons in each track you have completed.</Text>
            </Box>
          </Flex>
        </Content>
      }
    </Page>
  );
}

function StatisticsBox({ statName, statValue, tooltipLabel }) {
  return (
    <Box backgroundColor="#69B9FF" p={5} w={225} borderRadius={5} textAlign="left" ml={5}>
      <Flex alignItems="baseline" flexDirection="row" flexWrap="nowrap" >
        <Heading fontSize={20}>{statName}</Heading>
        {tooltipLabel && 
          <Tooltip label={tooltipLabel} fontSize="md">
            <QuestionIcon ml={2} />
          </Tooltip>
        }
      </Flex>
      <Text mb={0}>{statValue}</Text>
    </Box>
  )
}