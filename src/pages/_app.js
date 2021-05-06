import Theme from "@codeday/topo/Theme";
import { Provider } from "next-auth/client";

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Theme brandColor="red">
        <Component {...pageProps} />
      </Theme>
    </Provider>
  );
}
