import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/tailwind.css';
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
