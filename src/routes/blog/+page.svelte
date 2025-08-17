<script lang="ts">
	import { createPostRemote, getPostsRemote } from './data.remote';
    import { showToast } from '$lib';
</script>

<form {...createPostRemote.enhance(async ({ form, data, submit}) => {
    try {
		await submit().updates(getPostsRemote());
		form.reset();

		showToast('Successfully published!');
	} catch (error) {
		showToast('Oh no! Something went wrong');
	}
})}>
	<label>
		<h2>Title</h2>
		<input name="title" />
	</label>

	<label>
		<h2>Write your post</h2>
		<textarea name="content"></textarea>
	</label>

	<button>Publish!</button>
</form>


<h1>Recent posts</h1>

<button class="bg-sky-500 hover:bg-sky-700" onclick={() => getPostsRemote().refresh()}>
	Check for new posts
</button>

<svelte:boundary>
	{#snippet pending()}
		<div class="text-center py-8">
			<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
			<p class="mt-2 text-gray-600">Loading posts...</p>
		</div>
	{/snippet}

	{#snippet failed(err: unknown)}
		<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
			<strong>Error loading posts:</strong> {err instanceof Error ? err.message : 'Unknown error'}
		</div>
	{/snippet}

	<div class="space-y-6">
		{#each await getPostsRemote() as post}
			<article class="bg-white rounded-lg shadow-md p-6 border border-gray-200">
				<h3 class="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
				<p class="text-gray-700 leading-relaxed mb-4">{post.content}</p>
			</article>
		{/each}
	</div>
</svelte:boundary>
