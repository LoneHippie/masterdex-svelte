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

<style lang="scss">
    @import "../../styles/mediaqueries";
    .grid {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-gap: 0.3rem;
        justify-items: center;

        padding: 1.5rem 0.5rem;

        overflow-y: scroll;

        @include respond(largePhone) {
            grid-gap: 0.45rem;
        }
        @include respond(landscapePhone) {
            grid-gap: 1.75rem;
        }
        @include respond(tablet) {
            grid-gap: 2rem;
            grid-template-columns: repeat(4, auto);
        }  
        @include respond(laptop) {
            grid-gap: 3rem;
            padding: 2rem 3.5rem;
        }
        @include respond(desktop) {
            grid-template-columns: repeat(5, auto);
        }
    }
</style>