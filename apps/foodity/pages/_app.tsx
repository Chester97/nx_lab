import { AppProps } from 'next/app';
import Head from 'next/head';
import { Components } from '@foodity/components';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to foodity-app!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
        <Components />
        <h2>dkfsanlfnlsi2</h2>
        <h2>dkfsanlfnlsi2</h2>
        <h2>dkfsanlfnlsi2</h2>
      </main>
    </>
  );
}

export default CustomApp;
