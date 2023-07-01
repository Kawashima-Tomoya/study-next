import Head from "next/head";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useEffect, useState } from "react";

//煩雑冗長にならなければ外部に書く
// const handleClick = (e) => {
//   console.log(e.target.href);
//   e.preventDefault();
// };

export default function Home() {
  /* コンポーネント内部に定義したメソッドはサイレンダリングで再生成される。
    useCallback(関数, 依存配列)はサイレンダリング時の関数の再生成を防げるため、
    関数をコンポーネントの内部に記述してもパフォーマンスを保てる */
  const [count, setCount] = useState(10);

  const handleClick = (e) => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "teal";
    return () => {
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
