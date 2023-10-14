import { useFetchArray } from "@/src/hooks/useFetchArray";
import { API_URL } from "@/src/utils/const";
import Link from "next/link";

export const PostList = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`${API_URL}/posts`);

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
            <Link key={post.id} href={`posts/${post.id}`} className="group">
              <h1 className="text-xl font-bold  group-hover:text-blue-600">
                {post.title}
              </h1>
              <p className="text-gray-500 group-hover:text-blue-500">
                {post.body}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
