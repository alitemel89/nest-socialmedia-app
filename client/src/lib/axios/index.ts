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

export const getRecentPosts = async (): Promise<any> => {
  try {
    const response = await axios.get("http://localhost:3000/posts");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllUsers = async (): Promise<any[]> => {
  try {
    const response = await axios.get("https://api.clerk.com/v1/users", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env
          .VITE_REACT_APP_CLERK_SECRET_KEY!}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    });
    return response.data.data; // Assuming user data is under the 'data' key
  } catch (error) {
    throw error;
  }
};
