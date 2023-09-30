import { CommentsByUserId } from "@/src/components/Comments/CommentsByUserId";
import { PostsByUserId } from "@/src/components/Posts/PostsByUserId";
import { useUser } from "@/src/hooks/useUser";

export const UserComponent = () => {
  const { data, error, isLoading } = useUser();

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
          <li>mail: {data?.email}</li>
          <li>number: {data?.phone}</li>
          <li>address: {data?.address.city}</li>
        </ul>
      </div>
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-2">投稿</h2>
        <PostsByUserId id={data?.id} />
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">コメント</h2>
        <CommentsByUserId id={data?.id} />
      </div>
    </div>
  );
};
