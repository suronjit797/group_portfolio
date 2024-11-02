import { z } from "zod";

export const teamCreateValidate = z.object({
  body: z.object({
    name: z.string(),
    designation: z.string(),
    description: z.string(),
    image: z.string(),
    social: z.array(z.object({ name: z.string(), icon: z.string(), link: z.string() })),
  }),
});

export const teamUpdateValidate = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    designation: z.string().optional(),
    image: z.string().optional(),
    social: z.array(z.object({ name: z.string(), icon: z.string(), link: z.string() })).optional(),
  }),
});
