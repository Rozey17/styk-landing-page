import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/tailwind.css';
// import { ChakraProvider } from '@chakra-ui/react';

function App({ Component, pageProps }: AppProps) {
  return (
    // <ChakraProvider>
      <Component {...pageProps} />
    // </ChakraProvider>
  );
}

export default App;
