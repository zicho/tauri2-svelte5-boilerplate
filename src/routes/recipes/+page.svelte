<script>
	import StandardPageLayout from "$lib/layouts/StandardPageLayout.svelte";

  import { GlobalState, preventDefault } from '$lib';
  const gs = new GlobalState();
</script>



<StandardPageLayout title="Recipes">
  <h1>Recipes</h1>
  {gs.name}
</StandardPageLayout>