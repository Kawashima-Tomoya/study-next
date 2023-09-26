import { usePostsByUserId } from "@/src/hooks/useFetchArray";
import Link from "next/link";

export const PostsByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = usePostsByUserId(props.id);

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
    <ul className="space-y-4 list-disc">
      {data.map((post) => {
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
