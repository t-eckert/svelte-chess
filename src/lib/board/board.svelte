<script lang="ts">
	import Cell from './cell.svelte';
	import { createBoard } from './board-state.svelte';
	import { letters, numbers } from './board';
</script>

<div class="board">
	{#each numbers as num}
		{#each letters as letter}
			<Cell {letter} {num} />
		{/each}
	{/each}
</div>

<style>
	.board {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: repeat(8, 1fr);
		border: 0.5rem solid white;
	}
</style>
