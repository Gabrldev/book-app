import FeedPost from "@/components/FeedPost";
import Container from "@/components/ui/container";

export default async function Home() {
  return (
    <Container>
      {/* Feed */}
      <FeedPost />
    </Container>
  );
}
