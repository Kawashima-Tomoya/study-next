import Head from "next/head";
import { PostList } from "@/src/components/Post/PostList";

const Posts = () => {
  return (
    <>
      <Head>
        <title>Posts Page</title>
      </Head>
      <PostList />
    </>
  );
};

export default Posts;
