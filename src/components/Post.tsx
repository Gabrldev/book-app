"use client";
import Image from "next/image";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { MessageCircle } from "lucide-react";
import LikeBtn from "./LikeBtn";
import { Post, Session, User, likes } from "@prisma/client";
import { useRouter } from "next/navigation";

interface PostProps {
  post: Post;
  author: User;
  totalComment: number;
  likes: likes[];
  session: Session & { user: User };
}
const Post: React.FC<PostProps> = ({ post, author, totalComment,likes,session }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Avatar>
          <AvatarImage src={author.image!} />
        </Avatar>
        <span>{author.name}</span>
      </div>
      <Card className="max-w-sm px-2 py-2 w-[500px]">
        <CardContent onClick={() => router.push(`/${post.id}`)}>
          <p>{post.text}</p>
          {post.image && (
            <Image
              src={post.image}
              alt=""
              className="object-cover rounded-md cursor-pointer mt-2"
              width={500}
              height={500}
            />
          )}
        </CardContent>

        <div className="flex gap-4 mt-2 text-muted-foreground">
          <LikeBtn likes={likes} postId={post.id} session={session} />
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => router.push(`${post.id}`)}
          >
            <MessageCircle className="h-6 w-6 cursor-pointer" />
            <span className="text-xs text-muted-foreground font-semibold">
              {totalComment} Comentarios
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default Post;
