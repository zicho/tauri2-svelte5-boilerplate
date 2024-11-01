<script lang="ts">
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { getUiState, setUiState } from '$lib/state/ui.svelte';
	import '../app.css';

	let { children } = $props();
	setUiState();

	const uiState = getUiState();

	let open = $state(true);
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<nav
			class="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between visible md:hidden"
		>
			<div class="flex items-center">
				<Sidebar.Trigger class="mr-4 md:mr-0" />
				<!-- Logo or Brand Name -->
				<a href="/" class="text-xl font-semibold">{uiState.currentPage}</a>
			</div>
		</nav>
		<main>
			{@render children?.()}
		</main>
	</Sidebar.Inset>
</Sidebar.Provider>
