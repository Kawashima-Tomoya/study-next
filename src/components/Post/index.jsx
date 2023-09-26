import Head from "next/head";
import { CommentsByPostId } from "@/src/components/Comments/CommentsByPostId";
import { UserByUserId } from "@/src/components/User/UserByUserId";
import { usePost } from "@/src/hooks/usePost";
import { useRouter } from "next/router";

export const Post = () => {
  const router = useRouter();
  const { data, error, isLoading } = usePost(router.query.id);

  if (error) {
    return <div>{error.message}</div>;
  }
  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <h1 className="text-2xl font-bold mb-2">{data?.title}</h1>
      <p className="text-lg text-gray-800 mb-2">{data?.body}</p>
      <UserByUserId id={data.userId} />
      <h2 className="text-xl font-bold mb-2">コメント一覧</h2>
      <CommentsByPostId id={data.id} />
    </div>
  );
};
