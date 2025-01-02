<script lang="ts">
	import { letters, numbers, type Index } from '$lib/ruleset';
	import File from '$lib/file/file.svelte';
</script>

<div class="board">
	<span class="corner"></span>
	{#each letters as letter}
		<span class="letter">{letter}</span>
	{/each}
	<span class="corner"></span>
	{#each numbers as num, row}
		<span class="number">{num}</span>
		{#each letters as _, col}
			<File row={row as Index} col={col as Index} />
		{/each}
		<span class="number">{num}</span>
	{/each}
	<span class="corner"></span>
	{#each letters as letter}
		<span class="letter">{letter}</span>
	{/each}
	<span class="corner"></span>
</div>

<style>
	.board {
		display: grid;
		grid-template-columns: 2fr repeat(8, 5fr) 2fr;
		grid-template-rows: 2fr repeat(8, 5fr) 2fr;
		border: 0.5rem solid var(--burgundy);
	}

	.letter {
		background: white;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 2rem;
	}

	.number {
		background: white;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 2rem;
	}

	.corner {
		background: white;
		height: 2rem;
		width: 2rem;
	}
</style>
