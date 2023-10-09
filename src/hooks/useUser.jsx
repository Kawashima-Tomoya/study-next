const { fetcher } = require("@/src/utils/fetcher");
const { useRouter } = require("next/router");
import { API_URL } from "@/src/utils/const";
import useSWRImmutable from "swr/immutable";

export const useUser = () => {
  const router = useRouter();
  const { data, error, isLoading } = useSWRImmutable(
    router.query.id ? `${API_URL}/users/${router.query.id}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
};
