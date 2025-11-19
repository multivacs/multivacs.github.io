import { defineCollection, z } from "astro:content";
// z = zod schema

const posts = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        date: z.date(),
        categories: z.array(z.string()),
        tags: z.array(z.string()),
        pin: z.boolean(),
        image: z.object({
            path: z.string(),
            alt: z.string()
        })
    })
})

export const collections = { posts }