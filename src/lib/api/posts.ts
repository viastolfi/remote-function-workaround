import type { Post, CreatePostData, UpdatePostData } from '../types.js';
import { mockPosts, getNextId, simulateNetworkDelay } from '../data/mockData.js';

export async function getPosts(
	filters?: {
		author?: string;
		tag?: string;
		search?: string;
	}
): Promise<Post[]> {
	await simulateNetworkDelay();

	let filteredPosts = [...mockPosts];

	if (filters) {
		if (filters.search) {
			const searchTerm = filters.search.toLowerCase();
			filteredPosts = filteredPosts.filter(post =>
				post.title.toLowerCase().includes(searchTerm) ||
				post.content.toLowerCase().includes(searchTerm)
			);
		}
	}

	return filteredPosts;
}

export async function getPost(id: number): Promise<Post | null> {
	await simulateNetworkDelay();

	const post = mockPosts.find(p => p.id === id);
	return post || null;
}

export async function createPost(data: CreatePostData): Promise<Post> {
	await simulateNetworkDelay();

	const newPost: Post = {
		id: getNextId(),
		...data,
	};

	mockPosts.push(newPost);
	return newPost;
}

export async function updatePost(data: UpdatePostData): Promise<Post | null> {
	await simulateNetworkDelay();

	const index = mockPosts.findIndex(p => p.id === data.id);
	if (index === -1) {
		return null;
	}

	const updatedPost: Post = {
		...mockPosts[index],
		...data
	};

	mockPosts[index] = updatedPost;
	return updatedPost;
}

export async function deletePost(id: number): Promise<boolean> {
	await simulateNetworkDelay();

	const index = mockPosts.findIndex(p => p.id === id);
	if (index === -1) {
		return false;
	}

	mockPosts.splice(index, 1);
	return true;
}

