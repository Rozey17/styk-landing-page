import styles from './index.module.css';
import {
  Navbar,
  Hero,
  Blog,
  Motivation,
  Footer,
} from '@styk-landing-app/shared-ui-components';
import Head from 'next/head';

export function Index() {
  return (
    <>
      {/* <Head>
        <title>Easybank</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head> */}
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="hidden lg:block w-full h-full absolute">
          <div className="bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-auto bg-right-top -right-72 xl:-right-28"></div>
        </div>
        <Hero />
        <Motivation />
      </div>
      <Blog />
      <Footer />
    </>
  );
}

export default Index;
