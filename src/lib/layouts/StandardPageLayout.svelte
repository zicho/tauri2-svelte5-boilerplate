<script lang="ts">
	import { getUiState } from '$lib/state/ui.svelte';
	import type { Snippet } from 'svelte';

	let { children, title }: { children: Snippet, title: string } = $props();

  getUiState().setCurrentPage(title);
</script>

<div class="flex flex-col prose lg:prose-xl p-4">
	{@render children?.()}
</div>
