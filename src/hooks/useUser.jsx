const { fetcher } = require("@/src/utils/fetcher");
const { useRouter } = require("next/router");
import useSWRImmutable from "swr/immutable";

export const useUser = () => {
  const router = useRouter();
  const { data, error, isLoading } = useSWRImmutable(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
};
