export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};

type UserProperties = {
  fullName: string | null | undefined;
  imageUrl: string | undefined;
  id: string | undefined;
};

export type INewPost = {
  title: string;
  content: string;
  imageUrl?: string;
  location?: string;
  user?: UserProperties | null | undefined;
};

export interface Post {
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
}

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
