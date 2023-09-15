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

const API_URL = "https://jsonplaceholder.typicode.com/";

export const useComments = () => {
  return useFetchArray(`${API_URL}comments`, fetcher);
};

export const usePosts = () => {
  return useFetchArray(`${API_URL}posts`, fetcher);
};

export const useUsers = () => {
  return useFetchArray(`${API_URL}users`, fetcher);
};

export const useCommentsByPostsId = (id) => {
  return useFetchArray(id ? `${API_URL}comments?postId=${id}` : null, fetcher);
};

export const usePostsByUserId = (id) => {
  return useFetchArray(id ? `${API_URL}posts?userId=${id}` : null, fetcher);
};

export const useCommentsByUserId = (id) => {
  return useFetchArray(id ? `${API_URL}comments?id=${id}` : null, fetcher);
};
