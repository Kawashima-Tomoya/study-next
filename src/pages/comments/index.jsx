import Head from "next/head";
import { Header } from "@/src/components/Header";
import { Comments as PostComments } from "@/src/components/Comments";

const Comments = () => {
  return (
    <>
      <Head>
        <title>Comments Page</title>
      </Head>
      <Header />
      <PostComments />
    </>
  );
};

export default Comments;
