import { defineCollection, z } from "astro:content";

const storiesCollection = defineCollection({
	type: "content",
	schema: z.object({
		name: z.string(),
		job: z.string(),
		quote: z.string(),
		avatarUrl: z.string()
	})
});

export const collections = {
	"stories": storiesCollection
};
