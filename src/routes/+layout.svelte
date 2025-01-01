<script lang="ts">
	import '../normalize.css';
	import '../app.css';

	const { children } = $props();
</script>

<svelte:head>
	<title>Chess</title>
</svelte:head>

{@render children()}
