import axios from "axios";
import { INewPost } from "@/types";

export const createPost = async (postData: INewPost): Promise<any> => {
  try {
    const response = await axios.post("http://localhost:3000/posts", postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
