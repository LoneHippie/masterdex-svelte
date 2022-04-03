<script lang="ts">
	import Layout from "./components/Layout/Layout.svelte";
	import NoGrid from "./components/NoGrid/NoGrid.svelte";
	import Grid from "./components/Grid/Grid.svelte";

	import { pokemonList, isLoading } from "./store";
</script>

<Layout>
	{#if $pokemonList.length && !$isLoading}
		<Grid pokemonList={pokemonList} />
	{:else}
		<NoGrid />
	{/if}
</Layout>

<style>
</style>