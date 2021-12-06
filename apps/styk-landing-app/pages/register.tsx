import styles from './index.module.css';
import {
  Navbar,
  Hero,
  Blog,
  Motivation,
  Footer,
  RegisterCandidateComponent,
} from '@styk-landing-app/shared-ui-components';
import Head from 'next/head';

export function Index() {
  return (
    <>
      <Head>
        <title>{`Page d'enregistrement `}</title>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <Navbar />

      <div className="mb-10 mt-28">
        <RegisterCandidateComponent />
      </div>

      <Footer />
    </>
  );
}

export default Index;
