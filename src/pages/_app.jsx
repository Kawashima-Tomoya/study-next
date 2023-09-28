import "tailwindcss/tailwind.css";
import { Layout } from "@/src/components/Layout";
import Head from "next/head";
import { SWRConfig } from "swr";

const fetcher = async (...args) => {
  const res = await fetch(...args);
  const json = await res.json();
  return json;
};

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig value={{ fetcher: fetcher }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
};

export default App;
