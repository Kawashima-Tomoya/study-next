const { useRouter } = require("next/router");
import { fetcher } from "@/src/utils/fetcher";
import useSWRImmutable from "swr/immutable";

export const useComment = () => {
  const router = useRouter();
  const { data, error, isLoading } = useSWRImmutable(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
      : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
};
