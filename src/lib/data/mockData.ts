import type { Post } from '../types.js';

export const mockPosts: Post[] = [
	{
		id: 1,
		title: "Getting Started with SvelteKit Remote Functions",
		content: "Remote functions in SvelteKit allow you to call server-side functions directly from your client code. This is a powerful feature that simplifies data fetching and server interactions.",
	},
	{
		id: 2,
		title: "Building Modern Web Apps",
		content: "Modern web development has evolved significantly with frameworks like SvelteKit. The introduction of remote functions bridges the gap between client and server code seamlessly.",
	},
	{
		id: 3,
		title: "TypeScript Best Practices",
		content: "TypeScript provides excellent type safety for both frontend and backend development. When working with remote functions, proper typing ensures better developer experience.",
	},
	{
		id: 4,
		title: "State Management in Svelte 5",
		content: "Svelte 5 introduces new reactive paradigms that work beautifully with remote functions. The combination provides a smooth development experience for complex applications.",
	}
];

let nextId = 5;

export function getNextId(): number {
	return nextId++;
}

export function simulateNetworkDelay(min = 100, max = 500): Promise<void> {
	const delay = Math.random() * (max - min) + min;
	return new Promise(resolve => setTimeout(resolve, delay));
}
