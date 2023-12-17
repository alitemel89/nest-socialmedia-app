// PostCard.tsx
import { Post } from "@/types";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  console.log(post);
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950 p-4">
      <div>
        <div className="p-8">
          <div className="flex items-center mb-8">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={post.user?.imageUrl}
              alt={post.user?.fullName!}
            />
            <div className="text-sm">
              <p className="text-white leading-none">{post.user?.fullName}</p>
            </div>
          </div>
          <div className="uppercase tracking-wide text-2xl text-indigo-500 font-semibold">
            {post.location}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-white hover:underline"
          >
            {post.title}
          </a>
          <p className="mt-2 text-gray-500">{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
