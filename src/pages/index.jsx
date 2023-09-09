import Head from "next/head";
import { Header } from "@/src/components/Header";

const Index = () => {
  return (
    <div class="text-center">
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>Next.js</h1>
      <p>テキストテキストテキストテキスト</p>
    </div>
  );
};

export default Index;
