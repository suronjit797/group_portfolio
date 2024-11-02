import { z } from "zod";

export const workCreateValidate = z.object({
  body: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
  }),
});

export const workUpdateValidate = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    category: z.string(),
  }),
});
