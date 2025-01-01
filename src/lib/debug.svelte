<script lang="ts">
	import { getBoardState } from '$lib/board/board-state.svelte';

	let board = getBoardState();
</script>

<section class="debugger">
	<div class="pieces">
		{#each board.pieces.keys() as key}
			<div class="piece">
				<span>{JSON.stringify(key)}</span>
				<span>{JSON.stringify(board.pieces.get(key))}</span>
			</div>
		{/each}
	</div>
</section>

<style>
	.debugger {
		z-index: 10;
		position: absolute;
		bottom: 1rem;
		right: 1rem;
		padding: 0.25rem;
		background-color: white;
	}

	.pieces {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.piece {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		font-family: monospace;
	}
</style>
