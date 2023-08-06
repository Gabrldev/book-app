"use client";
import { useForm } from "react-hook-form";
import ImageUpload from "./ImageUpload";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Textarea } from "./ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostValidator } from "@/lib/validators/post";


interface CreatePostProps {
}

const CreatePost:React.FC<CreatePostProps> = () => {
  const form = useForm({
    resolver: zodResolver(PostValidator),
    defaultValues: {
      imageUrl: "",
      text: "",
    },
  });

  const { control, handleSubmit, getValues } = form;

  const { imageUrl, text } = getValues();

  const loading = false;

  const isLoadingCreate = loading;

  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <div className="max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <FormField
            control={control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Ingresa tu contenido"
                    disabled={isLoadingCreate}
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
                      disabled={isLoadingCreate}
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
