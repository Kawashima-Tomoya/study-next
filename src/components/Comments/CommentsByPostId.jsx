import Link from "next/link";
import { useCommentsByPostId } from "@/src/hooks/useFetchArray";

export const CommentsByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

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
    <ul className="space-y-2">
      {data?.map((comment) => {
        return (
          <li key={comment.id} className="border-b pb-2">
            <Link key={comment.id} href={`/comments/${comment.id}`}>
              <p className="block hover:text-blue-500">{comment.body}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
