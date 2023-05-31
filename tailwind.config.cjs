const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		screens: {
			// sm: "640px",
			// md: "768px",
			// lg: "1024px",
			// xl: "1280px",
			// "2xl": "1536px",

			tablet: "768px",
			desktop: "1440px"
		},
		extend: {
			colors: {
				// primary
				sherpa: "#014E56",
				flory: "#F67E7E",

				// secondary
				baked: "#79C8C7",
				casul: "#2C6269",
				cyprus: "#004047",
				daintree: "#012F34",
				swamp: "#002529"
			},
			fontFamily: {
				livvic: ["Livvic", ...defaultTheme.fontFamily.sans]
			},
			fontSize: {
				10: ["0.625rem", { lineHeight: "1.125rem" }],
				13: ["0.813rem", { lineHeight: "1.125rem" }],
				15: ["0.938rem", { lineHeight: "1.563rem" }],
				18: ["1.125rem", { lineHeight: "1.75rem" }],
				32: ["2rem", { lineHeight: "2rem" }],
				40: ["2.5rem", { lineHeight: "2.5rem" }],
				48: ["3rem", { lineHeight: "3rem" }],
				64: ["4rem", { lineHeight: "3.5rem" }],
				100: ["6.25rem", { lineHeight: "6.25rem" }]
			}
		}
	},
	plugins: []
};
