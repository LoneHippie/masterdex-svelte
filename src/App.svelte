<script lang="ts">
	import Layout from "./components/Layout/Layout.svelte";
	import NoGrid from "./components/NoGrid/NoGrid.svelte";
	import Grid from "./components/Grid/Grid.svelte";

	import { pokemon } from "./store";
</script>

<Layout>
	{#if $pokemon.length}
		<Grid pokemon={pokemon} />
	{:else}
		<NoGrid />
	{/if}
</Layout>

<style>
</style>