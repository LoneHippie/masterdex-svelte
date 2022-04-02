<script lang="ts">
    import CardMini from "../CardMini/CardMini.svelte";
    import type { Writable } from "svelte/store";

    export let pokemon: Writable<any[]>;
</script>

<div class="grid">
    {#each $pokemon as pokemonEntry}
        <CardMini pokemon={pokemonEntry} />
    {/each}
</div>

<style>
    .grid {
        height: calc(100vh - var(--header-height));
        border: 2px solid green;
        display: grid;
        grid-template-columns: repeat(5, auto);
        grid-gap: 3rem;

        overflow-y: scroll;
    }
</style>