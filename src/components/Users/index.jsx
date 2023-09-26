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
    <ul className="grid grid-cols-2 gap-6">
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link
              key={user.id}
              href={`users/${user.id}`}
              className="block p-4 shadow rounded-md hover:shadow-lg transition"
            >
              <h1 className="text-lg font-bold truncate">{user.name}</h1>
              <div className="text-gray-500 truncate">{user.email}</div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
