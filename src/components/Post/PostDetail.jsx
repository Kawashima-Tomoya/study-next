import Head from "next/head";
import { CommentListByPostId } from "@/src/components/Comment/CommentListByPostId";
import { UserNameByUserId } from "@/src/components/User/UserNameByUserId";
import { useRouter } from "next/router";
import { useFetch } from "@/src/hooks/useFetch";
import { API_URL } from "@/src/utils/const";

export const PostDetail = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch(
    router.query.id ? `${API_URL}/posts/${router.query.id}` : null
  );

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
      <UserNameByUserId id={data.userId} />
      <h2 className="text-xl font-bold mb-2">コメント一覧</h2>
      <CommentListByPostId id={data.id} />
    </div>
  );
};
