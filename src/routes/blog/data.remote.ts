import { query, form } from '$app/server'

import {createPost, getPosts} from '$lib/api/posts'
import {type Post}  from '$lib/types'

import {error} from '@sveltejs/kit'

export const getPostsRemote = query(async () => {
    const posts: Post[] = await getPosts()

    return posts
})

export const createPostRemote = form(async (data) => {
    const title = data.get('title')
    const content = data.get('content')

    if (typeof title !== 'string' || typeof content !== 'string') {
		error(400, 'Title and content are required');
	}

    await createPost({title, content})
})