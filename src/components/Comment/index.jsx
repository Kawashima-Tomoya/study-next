import { PostByCommentId } from "@/src/components/Post/PostByCommentId";
import { useComment } from "@/src/hooks/useComment";

export const CommentComponent = () => {
  const { data, error, isLoading } = useComment();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-2xl mb-2">{data?.body}</h1>
        <div className="text-right">
          Created by. {data?.name} (mail: {data?.email})
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">元の記事</h2>
        <PostByCommentId id={data?.postId} />
      </div>
    </div>
  );
};
