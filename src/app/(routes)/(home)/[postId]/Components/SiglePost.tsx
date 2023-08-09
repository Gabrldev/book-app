import { Post as PostType, User, Comment } from "@prisma/client";
import Coments from "./Coments";
import CreateComent from "./CreateComent";
import Post from "./Post";

export type Comentents = Comment & {
  author: User;
};
interface SiglePostProps {
  post: PostType & {
    author: User;
  };
  comentents: Comentents[];
}
const SiglePost: React.FC<SiglePostProps> = ({ comentents, post }) => {
  return (
    <div className="max-w-md">
      <Post post={post} />
      <CreateComent />
      <Coments comentents={comentents} />
    </div>
  );
};
export default SiglePost;
