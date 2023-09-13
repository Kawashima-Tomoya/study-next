import { useUsers } from "@/src/hooks/useFetchArray";
import Link from "next/link";

export const Users = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

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
    <ol>
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link key={user.id} href={`users/${user.id}`}>
              <h3>{user.username}</h3>
              <p>{user.email}</p>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
