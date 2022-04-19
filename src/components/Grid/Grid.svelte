<script lang="ts">
    import CardMini from "../CardMini/CardMini.svelte";
    import type { Pokemon } from "@typedefs";

    export let pokemonList: Pokemon[];
</script>

<div class="grid"> 
    {#each pokemonList as pokemon}
        <CardMini pokemon={pokemon} />
    {/each}
</div>

<style>
    .grid {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(5, auto);
        grid-gap: 3rem;
        padding: 2rem 0rem;

        overflow-y: scroll;
    }
</style>