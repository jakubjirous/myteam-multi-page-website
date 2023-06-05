import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	integrations: [react(), tailwind(), image(), mdx()],
	output: "server",
	root: "./",
	adapter: vercel(),
	outDir: "/dist"
});
