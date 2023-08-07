import { db } from "@/lib/db";
import Post from "./Post";

const FeedPost = async () => {
  const posts = await db.post.findMany({
    include: {
      author: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="mx-auto flex justify-center items-center mt-2 flex-col gap-y-10">
      {posts.map((post) => (
        <Post key={post.id} post={post} author={post.author} />
      ))}
    </div>
  );
  1;
};
export default FeedPost;
