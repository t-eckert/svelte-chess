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
	let square = $derived(game.square({ row, col }));
	let piece = $derived(game.pieceAt({ row, col }));
	let status = $derived(square.status);

	let onclick = () => {
		if (square.status === 'selectable') {
			game.selectSquare({ row, col });
		} else if (square.status === 'selected') {
			game.unselectSquare({ row, col });
		}
	};
</script>

<button
	{onclick}
	class="square"
	disabled={status === 'not-selectable'}
	class:selected={status === 'selected'}
	class:selectable={status === 'selectable'}
	class:not-selected={status === 'not-selected'}
	class:light={square.color === 'light'}
	class:dark={square.color === 'dark'}
>
	{#if piece}
		<span class="piece">
			<Piece role={piece.role} player={piece.player} />
		</span>
	{/if}
</button>

<style>
	.square {
		height: 5rem;
		width: 5rem;
		display: grid;
		grid-template: 1;
		justify-content: center;
		align-items: center;
		border: solid 1px grey;
	}

	.square:enabled {
		border: solid 1px blue;
	}

	.square.dark.selected,
	.square.light.selected {
		background-color: green;
	}

	.piece {
		grid-column: 1;
		grid-row: 1;
	}

	.square.dark.selectable:enabled:hover,
	.square.light.selectable:enabled:hover {
		background-color: blue;
	}

	.square.dark {
		color: white;
		background-color: #540f24;
	}

	.square.light {
		color: #540f24;
		background-color: white;
	}
</style>
