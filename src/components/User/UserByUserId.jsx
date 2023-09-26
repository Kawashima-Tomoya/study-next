import { fetcher } from "@/src/utils/fetcher";
import useSWR from "swr";

export const UserByUserId = (props) => {
  const { data, error, isLoading } = useSWR(
    props.id ? `https://jsonplaceholder.typicode.com/users/${props.id}` : null,
    fetcher
  );

  if (isLoading) {
    return <div>ローディング中です</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return <div className="text-right  mb-10">Created by. {data?.name}</div>;
};
