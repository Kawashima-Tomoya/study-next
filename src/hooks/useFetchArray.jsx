import { API_URL } from "@/src/utils/const";
import { fetcher } from "@/src/utils/fetcher";
import useSWRImmutable from "swr/immutable";

const useFetchArray = (url) => {
  const { data, error, isLoading, isEmpty } = useSWRImmutable(url, fetcher);
  return {
    data,
    error,
    isLoading,
    isEmpty: data && data.length === 0,
  };
};

/* posts */
export const usePosts = () => {
  return useFetchArray(`${API_URL}posts`, fetcher);
};

export const usePostsByUserId = (id) => {
  return useFetchArray(id ? `${API_URL}posts?userId=${id}` : null, fetcher);
};

/* users */
export const useUsers = () => {
  return useFetchArray(`${API_URL}users`, fetcher);
};

/* comments */
export const useComments = () => {
  return useFetchArray(`${API_URL}comments`, fetcher);
};

export const useCommentsByPostId = (id) => {
  return useFetchArray(id ? `${API_URL}comments?postId=${id}` : null, fetcher);
};

export const useCommentsByUserId = (id) => {
  return useFetchArray(id ? `${API_URL}comments?id=${id}` : null, fetcher);
};
