import { db } from "@/lib/db";
import Container from "@/components/ui/container";
import SiglePost from "./Components/SiglePost";

const page = async ({
  params,
}: {
  params: {
    postId: string;
  };
}) => {
  const post = await db.post.findUnique({
    where: {
      id: params.postId,
    },
    include:{
      author: true
    }
  });

  const comentents = await db.comment.findMany({
    where: {
      postId: params.postId,
    },
    include: {
      author: true,
    },
  });

  return (
    <Container className="flex items-center justify-center flex-col">
      {post && <SiglePost comentents={comentents} post={post} />}
      {!post && <p>Post no encontrado</p>}
    </Container>
  );
};
export default page;
