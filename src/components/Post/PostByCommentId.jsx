import Link from "next/link";
import { usePost } from "@/src/hooks/usePost";

export const PostByCommentId = (props) => {
  const { data, error, isLoading } = usePost(props.id);

  if (error) {
    return <div>{error.message}</div>;
  }
  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  return (
    <Link href={`/posts/${data.id}`}>
      <h2 className="text-lg font-bold text-gray-600 hover:text-blue-500">
        {data?.title}
      </h2>
    </Link>
  );
};
