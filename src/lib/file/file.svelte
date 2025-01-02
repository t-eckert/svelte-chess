<script lang="ts">
	import { getGameState } from '$lib/game-state.svelte';
	import { type Index } from '$lib/ruleset';

	interface Props {
		row: Index;
		col: Index;
	}

	let { row, col }: Props = $props();

	let file = getGameState().board.file({ row, col });
</script>

<button
	class="cell"
	onclick={() => file.onclick()}
	disabled={file.status === 'not-selectable'}
	class:light={file.color === 'light'}
	class:dark={file.color === 'dark'}
>
	<span>{row},{col}</span>
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

	.cell:hover {
		background-color: blue;
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
