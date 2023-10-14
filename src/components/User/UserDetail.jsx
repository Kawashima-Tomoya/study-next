import { CommentsByUserId } from "@/src/components/Comment/CommentsByUserId";
import { PostListByUserId } from "@/src/components/Post/PostListByUserId";
import { useFetch } from "@/src/hooks/useFetch";
import { API_URL } from "@/src/utils/const";
import { useRouter } from "next/router";

export const UserDetail = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch(
    router.query.id ? `${API_URL}/users/${router.query.id}` : null
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <h1 className="text-3xl font-bold mb-10">{data?.name}</h1>
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-2">詳細</h2>
        <ul className="list-inside list-disc text-lg">
          <li>mail: {data.email}</li>
          <li>number: {data.phone}</li>
          <li>address: {data.address?.city}</li>
        </ul>
      </div>
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-2">投稿</h2>
        <PostListByUserId id={data?.id} />
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">コメント</h2>
        <CommentsByUserId id={data?.id} />
      </div>
    </div>
  );
};
