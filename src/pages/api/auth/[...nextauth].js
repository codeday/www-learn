import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import getConfig from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Auth0({
      clientId: serverRuntimeConfig.auth0.clientId,
      clientSecret: serverRuntimeConfig.auth0.clientSecret,
      domain: publicRuntimeConfig.auth0.domain,
    }),
    // ...add more providers here
  ],
  callbacks: {
    signIn: async (user, account, profile) => {
      return Promise.resolve(true);
    },
    redirect: async (url, baseUrl) => {
      return url.startsWith(baseUrl)
        ? Promise.resolve(url)
        : Promise.resolve(baseUrl);
    },
    jwt: async (token, user, account, profile, isNewUser) => {
      user && (token.user = profile);
      return Promise.resolve(token);
    },
    session: async (session, user, sessionToken) => {
      session.user = user.user;
      return Promise.resolve(session);
    },
  },
  // A database is optional, but required to persist accounts in a database
};

export default (req, res) => NextAuth(req, res, options);
