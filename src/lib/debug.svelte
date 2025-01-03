<script lang="ts">
	import { getGameState } from '$lib/game-state.svelte';

	let game = getGameState();
</script>

<section class="debugger">
	<div class="pieces"></div>
</section>

<style>
	.debugger {
		position: fixed;
		background-color: white;
		padding: 0.25rem;
		bottom: 0.5rem;
		right: 0.5rem;
	}

	.pieces {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
