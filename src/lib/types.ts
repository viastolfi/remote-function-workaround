export interface Post {
	id: number;
	title: string;
	content: string;
}

export interface CreatePostData {
	title: string;
	content: string;
}

export interface UpdatePostData extends Partial<CreatePostData> {
	id: number;
}
