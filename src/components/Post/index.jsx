import { usePost } from "@/src/hooks/usePost";
import Head from "next/head";

export const Post = () => {
  const { post, user, error, isLoading } = usePost();
  // console.log(
  //   `post :${post}, user: ${user}, error: ${error}, isLoading: ${isLoading}`
  // );
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      {user?.name ? <p>Created by. {user.name}</p> : null}
    </div>
  );
};
