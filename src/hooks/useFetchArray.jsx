import { fetcher } from "@/src/utils/fetcher";
import useSWR from "swr";

const useFetchArray = (url) => {
  const { data, error, isLoading, isEmpty } = useSWR(url, fetcher);
  return {
    data,
    error,
    isLoading,
    isEmpty: data && data.length === 0,
  };
};

export const useComments = () => {
  return useFetchArray(
    "https://jsonplaceholder.typicode.com/comments",
    fetcher
  );
};
export const usePosts = () => {
  return useFetchArray("https://jsonplaceholder.typicode.com/posts", fetcher);
};
export const useUsers = () => {
  return useFetchArray("https://jsonplaceholder.typicode.com/users", fetcher);
};
