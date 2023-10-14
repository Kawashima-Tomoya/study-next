import { useFetchArray } from "@/src/hooks/useFetchArray";
import { API_URL } from "@/src/utils/const";
import { fetcher } from "@/src/utils/fetcher";
import Link from "next/link";

export const PostListByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = useFetchArray(
    props.id ? `${API_URL}/users/${props.id}/posts` : null,
    fetcher
  );

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <ul className="space-y-4">
      {data?.map((post) => {
        return (
          <li key={post.id}>
            <Link key={post.id} href={`/posts/${post.id}`} className="group">
              <h1 className=" font-bold  group-hover:text-blue-600">
                {post.title}
              </h1>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
