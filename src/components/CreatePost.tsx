"use client";
import { useForm } from "react-hook-form";
import ImageUpload from "./ImageUpload";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Textarea } from "./ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostRequest, PostValidator } from "@/lib/validators/post";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface CreatePostProps {}

const CreatePost: React.FC<CreatePostProps> = () => {
  const form = useForm({
    resolver: zodResolver(PostValidator),
    defaultValues: {
      imageUrl: "",
      text: "",
    },
  });

  const { control, handleSubmit, getValues } = form;

  const { imageUrl, text } = getValues();

  const { isLoading, mutate: onSubmit } = useMutation({
    mutationFn: async ({ text, imageUrl }: PostRequest) => {
      const payload = {
        text,
        imageUrl,
      };

      const { data } = await axios.post("/api/post", payload);

      return data;
    },
    onError: (error) => {},
    onSuccess: () => {
      form.reset();
    },
  });

  return (
    <div className="max-w-md mx-auto">
      <Form {...form}>
        <form
          onSubmit={handleSubmit(({ imageUrl, text }) =>
            onSubmit({ text, imageUrl })
          )}
        >
          <FormField
            control={control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Ingresa tu contenido"
                    disabled={false}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center">
            <FormField
              control={control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <ImageUpload
                      value={field.value ? [field.value] : []}
                      disabled={false}
                      onChange={(url) => field.onChange(url)}
                      onRemove={() => field.onChange("")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="ml-auto"
              type="submit"
              disabled={text === "" && imageUrl === ""}
              isLoading={isLoading}
            >
              Create
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default CreatePost;
