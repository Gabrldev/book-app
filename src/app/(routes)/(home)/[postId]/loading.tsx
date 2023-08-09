import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Container>
      <div className="w-full h-full p-8">
        <Skeleton className="rounded-xl aspect-square" />
      </div>
    </Container>
  );
};

export default Loading;
