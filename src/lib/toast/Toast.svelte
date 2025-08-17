<script lang="ts">
	import type { Toast } from './types.js';
	import { removeToast } from './store.js';

	interface Props {
		toast: Toast;
	}

	let { toast }: Props = $props();

	function handleDismiss() {
		if (toast.dismissible) {
			removeToast(toast.id);
		}
	}

	function getToastStyles(type: string): string {
		const baseStyles = 'flex items-start p-4 rounded-lg shadow-lg border-l-4 transition-all duration-300 ease-in-out transform';
		
		switch (type) {
			case 'success':
				return `${baseStyles} bg-green-50 border-green-400 text-green-800`;
			case 'error':
				return `${baseStyles} bg-red-50 border-red-400 text-red-800`;
			case 'warning':
				return `${baseStyles} bg-yellow-50 border-yellow-400 text-yellow-800`;
			case 'info':
			default:
				return `${baseStyles} bg-blue-50 border-blue-400 text-blue-800`;
		}
	}

	function getIconForType(type: string): string {
		switch (type) {
			case 'success':
				return '✓';
			case 'error':
				return '✕';
			case 'warning':
				return '⚠';
			case 'info':
			default:
				return 'ℹ';
		}
	}
</script>

<div class={getToastStyles(toast.type)} role="alert">
	<div class="flex-shrink-0">
		<span class="text-lg font-bold" aria-hidden="true">
			{getIconForType(toast.type)}
		</span>
	</div>
	
	<div class="ml-3 flex-1">
		<h4 class="font-semibold text-sm">
			{toast.title}
		</h4>
		{#if toast.message}
			<p class="mt-1 text-sm opacity-90">
				{toast.message}
			</p>
		{/if}
	</div>

	{#if toast.dismissible}
		<button
			onclick={handleDismiss}
			class="ml-4 flex-shrink-0 text-lg hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-current rounded"
			aria-label="Dismiss notification"
		>
			×
		</button>
	{/if}
</div>
