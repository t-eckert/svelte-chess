<script lang="ts">
	import { cellColor } from './cell';
	import Piece from '$lib/piece/piece.svelte';
	import { getBoardState } from '$lib/board/board-state.svelte';

	interface Props {
		row: number;
		col: number;
	}

	let { row, col }: Props = $props();
	let color = $derived(cellColor(row, col));

	let board = getBoardState();

	let { piece, status } = $derived(board.cell({ row, col }));

	let onclick = () => {
		console.log('clicked', row, col);
		if (status !== 'selected') {
			board.selectCell({ row, col });
		} else {
			board.unselectCell();
		}
	};
</script>

<button
	class="cell"
	class:dark={color === 'dark'}
	class:light={color === 'light'}
	disabled={status === 'not-selectable'}
	{onclick}
>
	{#if piece}
		<Piece {...piece} />
	{/if}
</button>

<style>
	.cell {
		height: 5rem;
		width: 5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border: solid 1px grey;
	}

	.cell.dark {
		color: white;
		background-color: #540f24;
	}

	.cell.light {
		color: #540f24;
		background-color: white;
	}

	.cell:enabled {
		border: solid 1px blue;
	}
</style>
