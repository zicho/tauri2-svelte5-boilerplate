<script lang="ts">
  import '../app.css';
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import AppSidebar from '$lib/components/app-sidebar.svelte';
	import { Button } from '$lib/components/ui/button';
	
  let { children } = $props();
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<nav class="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between visible md:hidden">
			<div class="flex items-center">

				<Sidebar.Trigger class=" mr-4 md:mr-0" />
				<!-- Logo or Brand Name -->
				<a href="/" class="text-xl font-semibold ">Title</a>
			</div>
		</nav>
		<main>
			{@render children?.()}
		</main>
	</Sidebar.Inset>
</Sidebar.Provider>
