import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/tailwind.css';
// import 'tailwindcss/tailwind.css';
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Styk Landing Page</title>
        <link rel="shortcut icon" href="photo_2021-09-15_17-19-51.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
