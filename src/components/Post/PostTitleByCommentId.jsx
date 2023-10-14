import Link from "next/link";
import { useFetch } from "@/src/hooks/useFetch";
import { API_URL } from "@/src/utils/const";

export const PostTitleByCommentId = (props) => {
  const { data, error, isLoading } = useFetch(
    props.id ? `${API_URL}/posts/${props.id}` : null
  );

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
