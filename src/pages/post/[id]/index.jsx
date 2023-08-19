import Head from "next/head";
import { Header } from "@/src/components/Header";
import { useRouter } from "next/router";

const PostId = () => {
  const router = useRouter();
  console.log(router);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <div>{router.query.id}</div>
    </>
  );
};

export default PostId;
