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

        overflow-y: scroll;

        @include respond(landscapePhone) {
            grid-gap: 1.5rem;
        }

        @include respond(tablet) {
            grid-template-columns: repeat(4, auto);
        }  
        @include respond(desktop) {
            grid-template-columns: repeat(5, auto);
        }
    }
</style>