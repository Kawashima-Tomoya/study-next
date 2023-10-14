import { fetcher } from "@/src/utils/fetcher";
import useSWRImmutable from "swr/immutable";

export const useFetchArray = (url) => {
  const { data, error, isLoading, isEmpty } = useSWRImmutable(url, fetcher);
  return {
    data,
    error,
    isLoading,
    isEmpty: data && data.length === 0,
  };
};
