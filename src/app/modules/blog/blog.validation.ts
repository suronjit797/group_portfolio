import { z } from "zod";

export const blogCreateValidate = z.object({
  body: z.object({
    title: z.string(),
    blog: z.string(),
  }),
});

export const blogUpdateValidate = z.object({
  body: z.object({
    title: z.string().optional(),
    blog: z.string().optional(),
  }),
});
