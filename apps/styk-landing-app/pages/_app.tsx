import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/tailwind.css';
import 'antd/dist/antd.css';

// import { ChakraProvider } from '@chakra-ui/react';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Styk</title>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <Component {...pageProps} />
    </>
    // <ChakraProvider>
    // </ChakraProvider>
  );
}

export default App;
