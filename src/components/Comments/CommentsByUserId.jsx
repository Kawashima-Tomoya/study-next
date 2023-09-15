import Link from "next/link";
import { useCommentsByUserId } from "@/src/hooks/useFetchArray";

export const CommentsByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByUserId(props.id);

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
