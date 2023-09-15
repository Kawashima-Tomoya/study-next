import Link from "next/link";
import { useCommentsByPostsId } from "@/src/hooks/useFetchArray";

export const CommentsByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostsId(props.id);

  if (error) {
    return <div>{error.message}</div>;
  }
  if (isLoading) {
    return <div>ローディング中です</div>;
  }
  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {data.map((comment) => {
        return (
          <li key={comment.id}>
            <Link key={comment.id} href={`${comment.id}`}>
              {comment.body}
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
