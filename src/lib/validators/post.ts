import { z } from "zod";

export const PostValidator = z.object({
  text: z.string().min(10).max(255),
  imageUrl: z.string().optional(),
});

export type PostValidatorType = z.infer<typeof PostValidator>;
