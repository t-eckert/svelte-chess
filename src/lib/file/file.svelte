<script lang="ts">
	import { getGameState } from '$lib/game-state.svelte';
	import Piece from '$lib/piece/piece.svelte';
	import { type Index } from '$lib/ruleset';

	interface Props {
		row: Index;
		col: Index;
	}

	let { row, col }: Props = $props();

	let game = getGameState();
	let file = game.board.file({ row, col });
	let piece = $derived(game.pieceAt({ row, col }));

	let onclick = () => {
		game.movePiece('king', 'black', { row, col });
	};
</script>

<button
	class="file"
	{onclick}
	class:light={file.color === 'light'}
	class:dark={file.color === 'dark'}
>
	<span class="file-id">{row},{col}</span>
	{#if piece}
		<span class="piece">
			<Piece />
		</span>
	{/if}
</button>

<style>
	.file {
		height: 5rem;
		width: 5rem;
		display: grid;
		grid-template: 1;
		justify-content: center;
		align-items: center;
		border: solid 1px grey;
	}

	.file-id {
		grid-column: 1;
		grid-row: 1;
	}

	.piece {
		grid-column: 1;
		grid-row: 1;
	}

	.file.dark:hover,
	.file.light:hover {
		background-color: blue;
	}

	.file.dark {
		color: white;
		background-color: #540f24;
	}

	.file.light {
		color: #540f24;
		background-color: white;
	}

	.file:enabled {
		border: solid 1px blue;
	}
</style>
