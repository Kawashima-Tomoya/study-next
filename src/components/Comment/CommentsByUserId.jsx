import { useFetchArray } from "@/src/hooks/useFetchArray";
import { API_URL } from "@/src/utils/const";
import { fetcher } from "@/src/utils/fetcher";
import Link from "next/link";

export const CommentsByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = useFetchArray(
    props.id ? `${API_URL}/comments?id=${props.id}` : null,
    fetcher
  );

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
