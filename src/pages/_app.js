import Theme from '@codeday/topo/Theme';

export default function App({ Component, pageProps }) {
  return (
    <Theme  brandColor="red">
      <Component {...pageProps} />
    </Theme>
  );
}
