import Head from "next/head";
import { Header } from "@/src/components/Header";
import { Posts } from "@/src/components/Posts";

const Home = () => {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Posts />
    </>
  );
};

export default Home;
