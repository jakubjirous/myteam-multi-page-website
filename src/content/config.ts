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

const teamsCollection = defineCollection({
	type: "content",
	schema: z.object({
		iconUrl: z.string(),
		title: z.string(),
		description: z.string()
	})
});

export const collections = {
	"stories": storiesCollection,
	"teams": teamsCollection
};
