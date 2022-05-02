<script lang="ts">
    import type { Move } from "@typedefs";
    import MoveMini from "./MoveMini.svelte";

    export let movePool: Move[];
    export let outlineColor: string;
</script>

<div class="moves-container">

    <div class="moves">
        {#each movePool as move}
            <MoveMini 
                move={move}
                outlineColor={outlineColor}
            />
        {/each}
    </div>

</div>

<style lang="scss">
    @import "../../../styles/variables";
    @import "../../../styles/mediaqueries";

    .moves-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .moves {
        padding: 1rem;
        margin-top: 1.2rem;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-gap: 0.5rem;
    }
</style>