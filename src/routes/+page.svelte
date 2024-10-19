<script lang="ts">
	import { GlobalState } from '$lib';
	import { invoke } from '@tauri-apps/api/core';

	const greeting = new GlobalState().state;

	const handleSubmit = async () => {
		greeting.greet = await invoke('greet', { name: greeting.name });
	};
</script>

<div class="hero bg-base-200 min-h-screen">
	<div class="hero-content text-center">
		<div class="max-w-md">
			{#if greeting.greet}
				<h1 class="text-3xl font-bold mb-4">{greeting.greet}</h1>
			{:else}
				<h1 class="text-5xl font-bold mb-4">Hello World!</h1>
			{/if}
			<label class="form-control w-full max-w-xs">
				{#if !greeting.greet}
					<div class="label">
						<span class="label-text">What is your name?</span>
					</div>

					<form
						onsubmit={(e) => {
							e.preventDefault();
							greeting.name.length && handleSubmit();
						}}
					>
						<input
							bind:value={greeting.name}
							type="text"
							placeholder="Your name"
							class="input input-bordered w-full max-w-xs"
						/>

						<button class="btn btn-primary m-2">Submit to say hello</button>
					</form>
				{:else}
					<p class="text-sm">(comming from Rust side)</p>
				{/if}
			</label>
		</div>
	</div>
</div>
