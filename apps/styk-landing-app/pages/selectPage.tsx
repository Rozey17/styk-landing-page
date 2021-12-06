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
import { useRouter } from 'next/router';

export function Index() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="text-center uppercase font-semibold mt-20 text-neutral-grayish-blue">
        <span>Vous êtes ?</span>
        <div className="mb-10 mt-20 flex justify-center ">
          <button
            onClick={() => router.push('/register')}
            className="bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness mb-7 focus:outline-none focus:ring ring-green-400 mx-10"
          >
            Un candidat
          </button>
          <button className="bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness mb-7 focus:outline-none focus:ring ring-green-400 mx-10">
            Une auto école
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
