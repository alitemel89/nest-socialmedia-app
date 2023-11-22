import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

import { INewPost } from "@/types";
import { QUERY_KEYS } from "./queryKeys";
import { createPost, getAllUsers, getRecentPosts } from "../axios";
import { useAuth } from "@clerk/clerk-react";
import { UseQueryOptions, UseQueryResult } from "@tanstack/react-query";


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

 
interface UseClerkQueryProps {
  queryKey: any;
  queryFn: () => Promise<any>;
}

export default function useClerkQuery({ queryKey, queryFn }: UseClerkQueryProps): UseQueryResult<any, Error> {
  const { getToken } = useAuth();

  const options: UseQueryOptions = {
    queryKey,
    async queryFn() {
      const apiUrl = await queryFn();

      const res = await fetch(apiUrl, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });

      if (!res.ok) {
        throw new Error('Network response error');
      }

      return res.json();
    },
  };

  return useQuery(options);
}

export const useGetAllUsers = () => {
  return useClerkQuery({
    queryKey: [QUERY_KEYS.GET_USERS],
    queryFn: getAllUsers,
  });
};