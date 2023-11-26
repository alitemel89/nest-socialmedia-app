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
    <div className="flex flex-1 bg-black overflow-y-auto">
      <div className="flex flex-col flex-1 items-center gap-10 py-10 px-5 md:px-8 lg:p-14">
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
        <div>
          {posts?.map((post: Post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>

      {/* <div className="flex flex-col gap-3 items-end mr-10">
        {users?.map((user: UserProperties) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div> */}
    </div>
  );
};

export default Home;
