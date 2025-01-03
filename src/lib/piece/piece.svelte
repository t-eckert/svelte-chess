<script lang="ts">
	import type { Role, Player } from '$lib/ruleset';

	import icons from './icons';

	interface Props {
		role: Role;
		player: Player;
	}

	let { role, player }: Props = $props();

	const Icon = icons.get(`${role}-${player}`);
</script>

<div class="piece">
	{#if Icon}
		<Icon />
	{:else}
		<span>{role} {player}</span>
	{/if}
</div>

<style>
	.piece {
		z-index: 10;
		display: flex;
		flex-direction: column;
		font-size: 0.8rem;
	}
</style>
