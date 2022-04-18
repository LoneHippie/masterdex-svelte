<script lang="ts">
    import CardMini from "../CardMini/CardMini.svelte";
    import type { Writable } from "svelte/store";
    import type { Pokemon } from "@typedefs";

    export let pokemonList: Writable<Pokemon[]>;
</script>

<div class="grid"> 
    {#each $pokemonList as pokemon}
        <CardMini pokemon={pokemon} />
    {/each}
</div>

<style>
    .grid {
        height: calc(100vh - var(--header-height));
        display: grid;
        grid-template-columns: repeat(5, auto);
        grid-gap: 3rem;
        padding: 2rem 0rem;

        overflow-y: scroll;
    }
</style>