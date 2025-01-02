<script lang="ts">
	import Board from '$lib/board/board.svelte';
	import Debug from '$lib/debug.svelte';
	import { createGameState } from '$lib/game-state.svelte';

	createGameState();
</script>

<Board />
<Debug />
