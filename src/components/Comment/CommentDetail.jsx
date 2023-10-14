import { PostTitleByCommentId } from "@/src/components/Post/PostTitleByCommentId";
import { useFetch } from "@/src/hooks/useFetch";
import { API_URL } from "@/src/utils/const";
import { useRouter } from "next/router";

export const CommentDetail = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch(
    router.query.id ? `${API_URL}/comments/${router.query.id}` : null
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-2xl mb-2">{data.body}</h1>
        <div className="text-right">
          Created by. {data.name} (mail: {data.email})
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">元の記事</h2>
        <PostTitleByCommentId id={data?.postId} />
      </div>
    </div>
  );
};
