import CreatePost from "@/components/CreatePost";
import Container from "@/components/ui/container";

export default async function Home() {
  return (
    <Container className="mt-14">
      <CreatePost  />
    </Container>
  );
}
