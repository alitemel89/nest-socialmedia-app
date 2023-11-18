import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { INewPost } from "@/types";
import { QUERY_KEYS } from "./queryKeys";
import { createPost } from "../axios";

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