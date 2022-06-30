import Head from "next/head";
import Layout from "../components/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import nProgress from "nprogress";

import "../styles/globals.css";
import "../public/nprogress.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`);
      nProgress.start();
    };
    const handleStop = () => {
      nProgress.done();
    };
    const handleDone = (url) => {
      nProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleDone);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleDone);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router.events]);

  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
