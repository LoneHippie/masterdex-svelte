<script lang="ts">
	import Layout from "./components/Layout/Layout.svelte";
	import NoGrid from "./components/NoGrid/NoGrid.svelte";
	import Grid from "./components/Grid/Grid.svelte";

	import { pokemonList, isLoading, selectedPokemon } from "@store/store";
	import CardLarge from "./components/CardLarge/CardLarge.svelte";
</script>

<Layout>
	{#if $pokemonList.length && !$isLoading}
		<Grid 
			pokemonList={$pokemonList} 
		/>
	{:else}
		<NoGrid />
	{/if}

	{#if $selectedPokemon}
		<CardLarge pokemon={$selectedPokemon} />
	{/if}
</Layout>