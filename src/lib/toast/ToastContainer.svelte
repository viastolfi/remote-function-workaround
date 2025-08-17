<script lang="ts">
	import { toasts } from './store.js';
	import Toast from './Toast.svelte';
</script>

{#if $toasts.length > 0}
	<div class="fixed top-4 right-4 z-50 space-y-3 max-w-sm">
		{#each $toasts as toast (toast.id)}
			<div class="animate-in slide-in-from-right-full duration-300">
				<Toast {toast} />
			</div>
		{/each}
	</div>
{/if}
