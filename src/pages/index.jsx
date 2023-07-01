import Head from "next/head";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  /* コンポーネント内部に定義したメソッドは再レンダリングで再生成される。
    useCallback(関数, 依存配列)は再レンダリング時の関数の再生成を防げるため、
    関数をコンポーネントの内部に記述してもパフォーマンスを保てる */
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  useEffect(() => {
    console.log(`マウント時:${count}`);
    document.body.style.backgroundColor = "teal";
    return () => {
      console.log(`アンマウント時:${count}`);
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />
      <h1>{count}</h1>
      <button href="./about" onClick={handleClick}>
        ボタン
      </button>
      <Main page="index" />
    </>
  );
}
