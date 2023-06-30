import Head from "next/head";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useCallback } from "react";

//煩雑冗長にならなければ外部に書く
// const handleClick = (e) => {
//   console.log(e.target.href);
//   e.preventDefault();
// };

export default function Home() {
  const foo = 1;
  /* コンポーネント内部に定義したメソッドはサイレンダリングで再生成される。
    useCallback(関数, 依存配列)はサイレンダリング時の関数の再生成を防げるため、
    関数をコンポーネントの内部に記述してもパフォーマンスを保てる */
  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />
      <a href="./about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="index" />
    </>
  );
}
