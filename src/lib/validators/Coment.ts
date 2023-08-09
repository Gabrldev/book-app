import { z } from "zod";

export const CommentValidator = z.object({
  text: z.string().min(3).max(128),
});

export type CommentRequest = z.infer<typeof CommentValidator>;
