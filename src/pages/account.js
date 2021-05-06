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
            <Box>
              <Image src={session.user.picture} borderRadius="full" />
            </Box>
  
            <Box>
              <Heading>Statistics</Heading>
            </Box>
          </Flex>

          <Divider/>
          
        </Content>
      }
    </Page>
  );
}