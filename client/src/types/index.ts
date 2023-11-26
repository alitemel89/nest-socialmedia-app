export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};


export type Post = {
  _id: string;
  title: string;
  content: string;
  imageUrl?: string;
  location?: string;
  user?: {
    fullName: string | null | undefined;
    imageUrl: string | undefined;
  };
};


export type INewPost = {
  title: string;
  content: string;
  imageUrl?: string;
  location?: string;
  user: User | null | undefined;
};



export type User = {
  fullName: string | null | undefined;
  imageUrl: string | undefined;
};


export interface HomeProps {
  posts: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    location: string;
    user: {
      id: string;
      fullName: string;
      imageUrl: string;
    };
  }[];
}
