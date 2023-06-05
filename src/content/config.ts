import { defineCollection, z } from "astro:content";

const storiesCollection = defineCollection({
	type: "content",
	schema: z.object({
		name: z.string(),
		job: z.string(),
		quote: z.string(),
		avatarUrl: z.string(),
	}),
});

const teamsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		iconUrl: z.string(),
	}),
});

const clientsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		logoUrl: z.string(),
		url: z.string(),
	}),
});

const directorsCollection = defineCollection({
	type: "content",
	schema: z.object({
		name: z.string(),
		job: z.string(),
		quote: z.string(),
		avatarUrl: z.string(),
		socials: z.array(
			z.object({
				title: z.string(),
				url: z.string(),
				iconName: z.string(),
			})
		),
	}),
});

const asksCollection = defineCollection({
	type: "content",
	schema: z.object({
		description: z.string(),
		iconUrl: z.string(),
	}),
});

export const collections = {
	stories: storiesCollection,
	teams: teamsCollection,
	clients: clientsCollection,
	directors: directorsCollection,
	asks: asksCollection,
};
