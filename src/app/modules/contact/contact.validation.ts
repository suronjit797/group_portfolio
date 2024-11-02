import { z } from "zod";

export const contactCreateValidate = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    message: z.string(),
  }),
});

export const contactUpdateValidate = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    message: z.string().optional(),
  }),
});
