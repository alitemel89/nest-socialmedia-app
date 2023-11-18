import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { INewPost } from "@/types";
import { QUERY_KEYS } from "./queryKeys";

export const useCreatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
      // mutationFn: (post: INewPost) => createPost(post),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
        });
      },
    });
  };