import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Post } from "@prisma/client";
import { User } from "next-auth";
import Image from "next/image";

type PostType = Post & {
  author: User;
};
interface PostProps {
  post: PostType;
}
const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage
            src={post.author.image!}
            alt={post.author.name!}
            width={40}
            height={40}
          />
        </Avatar>
        <p className="text-sm text-gray-500">{post.author.name}</p>
      </CardHeader>
      <CardContent>
        <p>{post.text}</p>
        {post.image && (
          <Image src={post.image!} alt="image post" width={500} height={500} className="rounded-md" />
        )}
      </CardContent>
    </Card>
  );
};
export default Post;
