import styles from './index.module.css';
import {
  Navbar,
  Hero,
  Blog,
  Motivation,
  Footer,
  RegisterComponent,
} from '@styk-landing-app/shared-ui-components';
import Head from 'next/head';

export function Index() {
  return (
    <>
      <Head>
        <title>Easybank</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Navbar />
      <div className="mb-10 mt-20">
        <RegisterComponent />
      </div>

      <Footer />
    </>
  );
}

export default Index;
