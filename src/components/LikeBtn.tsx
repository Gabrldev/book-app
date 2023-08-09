import { cn } from "@/lib/utils";
import { Session, User, likes } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";

interface LikeBtnProps {
  likes: likes[];
  postId: string;
  session: Session & { user: User };
}

const LikeBtn: React.FC<LikeBtnProps> = ({ likes, postId,session }) => {

  
  const router = useRouter();
  const { mutate: like } = useMutation({

    
    mutationFn: async () => {

      const payload = {
        postId,
      }

      const isLiked = likes.find((like) => like.authorId === session?.user.id);
      if (isLiked) {
        await axios.delete(`/api/like`, { data: payload });
        return;
      }
      await axios.post(`/api/like`, payload);
    },

    onSuccess: () => {
      router.refresh();
    }
  });
 

  

  const coutLikes = likes.length;
  return (
    <div className="flex items-center gap-2">
      <Pencil className={cn("h-6 w-6 cursor-pointer",
        likes.find((like) => like.authorId === session?.user.id) && "text-blue-500"
      )} onClick={() => like()} />
      <span className="text-xs text-muted-foreground font-semibold">
        {coutLikes}
      </span>
    </div>
  );
};
export default LikeBtn;
