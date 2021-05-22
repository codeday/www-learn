module.exports = {
  serverRuntimeConfig: {
    auth0: {
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
    },
    contentful: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      token: process.env.CONTENTFUL_TOKEN,
    },
  },
  publicRuntimeConfig: {
    auth0: {
      domain: process.env.AUTH0_DOMAIN,
    },
    appUrl: process.env.APP_URL,
  },
};