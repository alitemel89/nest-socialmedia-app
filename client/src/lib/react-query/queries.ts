import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

import { INewPost } from "@/types";
import { QUERY_KEYS } from "./queryKeys";
import { createPost, getRecentPosts } from "../axios";

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (post: INewPost) => createPost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
      });
    },
  });
};

export const useGetRecentPosts = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
    queryFn: getRecentPosts,
  });
};
