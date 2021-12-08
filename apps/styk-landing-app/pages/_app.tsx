import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/tailwind.css';
import 'antd/dist/antd.css';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import { messages } from '@styk-landing-app/utils';

const App = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();

  return (
    <IntlProvider
      // locale={locale ?? ''}
      locale="fr"
      messages={messages[locale ?? '']}
      defaultLocale={locale}
    >
      <Head>
        <title>Styk</title>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <Component {...pageProps} />
    </IntlProvider>
  );
};

export default App;
