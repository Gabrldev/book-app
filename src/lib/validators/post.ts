import { z } from "zod";

export const PostValidator = z.object({
  text: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" })
    .max(128, { message: "Title must be at most 128 characters long" }),
  imageUrl: z.string().optional(),
});

export type PostRequest = z.infer<typeof PostValidator>;
