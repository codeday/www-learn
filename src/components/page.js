import { DefaultSeo } from 'next-seo';
import Box from '@codeday/topo/Atom/Box';
import Header, { SiteLogo, Menu } from '@codeday/topo/Organism/Header';
import Text, { Link } from '@codeday/topo/Atom/Text';
import Footer from '@codeday/topo/Organism/Footer';
import Button from '@codeday/topo/Atom/Button';
import { CodeDay } from '@codeday/topo/Atom/Logo';

// TODO: Set production domain
const DOMAIN = 'https://learn.codeday.org';

export default ({ children, title, darkHeader, slug }) => (
  <>
    <DefaultSeo
      title={`${title ? `${title} ~ ` : ''}CodeDay Learn`}
      description="Continue your coding adventure"
      canonical={`https://learn.codeday.org${slug}`}
      openGraph={{
        type: 'website',
        locale: 'en_US',
        site_name: 'CodeDay Learn',
        url: `https://learn.codeday.org${slug}`,
      }}
      twitter={{
        handle: '@codeday',
        site: '@codeday',
        cardType: 'summary_large_image',
      }}
    />
    <Box position="relative">
      <Header darkBackground={darkHeader} gradAmount={darkHeader && 'lg'} underscore position="relative" zIndex={1000}>
        <SiteLogo>
          <a href="/">
            <CodeDay withText />
          </a>
          <a href="/">
            <Text
              as="span"
              d="inline"
              letterSpacing="-2px"
              fontFamily="heading"
              position="relative"
              top={1}
              ml={1}
              textDecoration="underline"
              bold
            >
              Learn
            </Text>
          </a>
        </SiteLogo>
        <Menu>
          <Button variant="ghost" variantColor="brand" as="a" href="/sponsor">Tracks</Button>
          <Button variant="ghost" variantColor="brand" as="a" href="/volunteer">Contact</Button>
        </Menu>
      </Header>
      {children}
      <Footer />
    </Box>
  </>
);
