const { useRouter } = require("next/router");
import { API_URL } from "@/src/utils/const";
import { fetcher } from "@/src/utils/fetcher";
import useSWRImmutable from "swr/immutable";

export const useComment = () => {
  const router = useRouter();
  const { data, error, isLoading } = useSWRImmutable(
    router.query.id ? `${API_URL}comments/${router.query.id}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
};
