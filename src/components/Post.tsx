'use client'
import Image from "next/image";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { MessageCircle } from "lucide-react";
import LikeBtn from "./LikeBtn";
import { Post, User } from "@prisma/client";
import { useRouter } from "next/navigation";


interface PostProps {
  post: Post
  author: User

}
const Post: React.FC<PostProps> = ({ post,author}) => {


  const router = useRouter();
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Avatar>
          <AvatarImage src={author.image!}  />
        </Avatar>
        <span>{author.name}</span>
      </div>
      <Card className="max-w-sm px-2 py-2">
        <CardContent>{post.text}</CardContent>
        <Image
          src={post.image}
          alt=""
          className="object-cover rounded-md"
          width={500}
          height={500}
          onClick={() => router.push(`/${post.id}`)}
        />
        <div className="flex gap-4 mt-2 text-muted-foreground">
          <LikeBtn likes={0} />
          <div className="flex items-center gap-2">
            <MessageCircle className="h-6 w-6 cursor-pointer" />
            <span className="text-xs text-muted-foreground font-semibold">
              {0} Comentarios
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default Post;
