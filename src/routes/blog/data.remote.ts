import { query } from '$app/server'

import {getPosts} from '$lib/api/posts'
import {type Post}  from '$lib/types'

export const getPostsRemote = query(async () => {
    const posts: Post[] = await getPosts()

    return posts
})