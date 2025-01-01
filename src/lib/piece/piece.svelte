<script lang="ts">
	import { type Piece } from './piece';

	interface Props extends Piece {}

	let { role, color }: Props = $props();
</script>

<div class="piece">
	<span>{role}</span>
	<span>{color}</span>
</div>

<style>
	.piece {
		display: flex;
		flex-direction: column;
		font-size: 0.8rem;
	}
</style>
