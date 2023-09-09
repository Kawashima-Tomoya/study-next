import Head from "next/head";
import { Header } from "@/src/components/Header";
import styles from "@/src/styles/Home.module.css";

const Index = () => {
  return (
    <div className={styles.container}>
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
