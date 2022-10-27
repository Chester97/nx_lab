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
        <h1>elo?</h1>
        <Components />
      </main>
    </>
  );
}

export default CustomApp;
