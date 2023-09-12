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
      <h3>{data.body}</h3>
      <ul>
        <br />
        <li>name : {data.name}</li>
        <li>e-mail : {data.email}</li>
      </ul>
    </div>
  );
};
