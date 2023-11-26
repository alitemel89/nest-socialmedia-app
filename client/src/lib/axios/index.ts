import { INewPost, User } from "@/types";
import axios from "axios";

const backendApiUrl = "http://localhost:5000"

export const createPost = async (postData: INewPost): Promise<any> => {
  try {
    const response = await axios.post(`${backendApiUrl}/posts`, postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRecentPosts = async (): Promise<any> => {
  try {
    const response = await axios.get(`${backendApiUrl}/posts`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const createUser = async (userData: User): Promise<any> => {
  try {
    const response = await axios.post(`${backendApiUrl}/users`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

