import { Heart } from "lucide-react";
import { useState } from "react";

interface LikeBtnProps {
  likes: number;
}

const LikeBtn: React.FC<LikeBtnProps> = ({ likes }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="flex items-center gap-2">
      <Heart
        className="h-6 w-6 cursor-pointer"
        onClick={() => setLiked(!liked)}
      />
      <span className="text-xs text-muted-foreground font-semibold">
      {liked ? likes + 1 : likes}
      </span>
    </div>
  );
};
export default LikeBtn;
