<script lang="ts">
	import { cellColor } from './cell';

	let { letter, num } = $props();
	let color = $derived(cellColor(letter, num));
</script>

<button class="cell" class:dark={color === 'dark'} class:light={color === 'light'}>
	<span>{letter}{num}</span>
</button>

<style>
	.cell {
		height: 5rem;
		width: 5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.cell.dark {
		color: white;
		background-color: #540f24;
	}

	.cell.light {
		color: #540f24;
		background-color: white;
	}
</style>
