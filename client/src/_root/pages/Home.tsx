import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import { useGetRecentPosts } from "@/lib/react-query/queries";
import { Post } from "@/types";

const Home = () => {
  const {
    data: posts,
    isLoading: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts();

  if (isErrorPosts) {
    return (
      <div className="flex flex-1">
        <p>Something bad happened</p>
      </div>
    );
  }

  if (isPostLoading) return <Loader />;

  return (
    <div className="flex flex-1 bg-black overflow-y-auto p-12">
      <div className="flex flex-col flex-1 gap-10">
        <div className="max-w-5xl flex gap-3 justify-start items-center w-full">
          <img
            src="/assets/icons/add-post.svg"
            width={36}
            height={36}
            alt="add"
          />
          <h2 className="text-2xl md:text-3xl text-white text-left w-full">
            Feed
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts?.map((post: Post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
