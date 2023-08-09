import { db } from "@/lib/db";
import Post from "./Post";
import { getAuthSession } from "@/lib/auth";

const FeedPost = async () => {
  const posts = await db.post.findMany({
    include: {
      author: true,
      comments: true,
      likes: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const session = await getAuthSession();
  console.log(posts)
  return (
    <div className="mx-auto flex justify-center items-center mt-2 flex-col gap-y-10">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          author={post.author}
          totalComment={post.comments.length}
          likes={post.likes}
          session={session}
        />
      ))}
    </div>
  );
  1;
};
export default FeedPost;
