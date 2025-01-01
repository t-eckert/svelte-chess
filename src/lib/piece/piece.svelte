<script lang="ts">
	import { type Piece } from './piece';
	import KingBlack from './icons/king-black.svelte';

	interface Props extends Piece {}

	let { role, color }: Props = $props();

	const pieceIcons = new Map([['king-black', KingBlack]]);

	let PieceIcon = pieceIcons.get(`${role}-${color}`);
</script>

<div class="piece">
	{#if PieceIcon}
		<div class="piece-icon">
			<PieceIcon></PieceIcon>
		</div>
	{:else}
		<span>{role}</span>
		<span>{color}</span>
	{/if}
</div>

<style>
	.piece {
		display: flex;
		flex-direction: column;
		font-size: 0.8rem;
	}
</style>
