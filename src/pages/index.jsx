import Head from "next/head";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  /* コンポーネント内部に定義したメソッドは再レンダリングで再生成される。
    useCallback(関数, 依存配列)は再レンダリング時の関数の再生成を防げるため、
    関数をコンポーネントの内部に記述してもパフォーマンスを保てる */
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);

  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
      setCount((prevcount) => prevcount + 1);
    }
  }, [count]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      return;
    }
    setText(e.target.value);
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素がすでに存在しています！");
        return prevArray;
      }
      setText("");
      return [...prevArray, text];
    });
  }, [text]);

  const handleDisplay = useCallback(() => {
    setIsShow((previsShow) => !previsShow);
    // isShow ? false : true);
  }, []);

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
      {isShow ? <h1>{count}</h1> : null}
      <button href="./about" onClick={handleClick}>
        ボタン
      </button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" name="name" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />
    </>
  );
}
