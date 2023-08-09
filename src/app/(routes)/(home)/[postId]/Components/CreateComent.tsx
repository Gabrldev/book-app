"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CommentRequest, CommentValidator } from "@/lib/validators/Coment";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

interface CreateComentProps {}
const CreateComent: React.FC<CreateComentProps> = () => {
  const params = useParams();

  const postId = params.postId;

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(CommentValidator),
    defaultValues: {
      text: "",
    },
  });

  const { handleSubmit } = form;

  const { mutate: onSubmit } = useMutation({
    mutationFn: async ({ text }: CommentRequest) => {
      const payload = {
        text,
        postId,
      };
      const { data } = await axios.post("/api/coment", payload);

      return data;
    },
    onSuccess: () => {
      form.reset();
      router.refresh();
    },
  });

  return (
    <form
      onSubmit={handleSubmit(({ text }) => onSubmit({ text }))}
      className="flex items-end flex-col gap-2 min-w-[448px]"
    >
      <Textarea
        {...form.register("text")}
        className="w-full mt-5"
        placeholder="Ingresa tu comentario...."
      />
      <Button disabled={
        form.getValues().text === ""
      }>Comentar</Button>
    </form>
  );
};
export default CreateComent;
