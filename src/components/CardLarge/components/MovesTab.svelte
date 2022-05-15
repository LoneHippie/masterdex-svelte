<script lang="ts">
    import type { Move } from "@typedefs";
    import MoveMini from "./MoveMini.svelte";

    export let movePool: Move[];
    export let outlineColor: string;
    export let contrastColor: string;

    enum LearnMethods {
        LVL = "level-up",
        TUTOR = "tutor",
        EGG = "egg",
        TM = "machine"
    }

    const movePoolNatural = movePool.filter(el => el.learnMethod.name === LearnMethods.LVL).sort((a, b) => {
        return Number(a.level) - Number(b.level);
    })
    const movePoolMachine = movePool.filter(el => el.learnMethod.name === LearnMethods.TM)
    const movePoolTutor = movePool.filter(el => el.learnMethod.name === LearnMethods.TUTOR)
</script>

<div class="moves-container">

    <section>
        <div class="move-section-title" style="color: {outlineColor}; background-color: {contrastColor};">Natural</div>

        <div class="moves">
            {#each movePoolNatural as move}
                <MoveMini 
                    move={move}
                    outlineColor={outlineColor}
                />
            {/each}
        </div>
    </section>

    <section>
        <div class="move-section-title" style="color: {outlineColor}; background-color: {contrastColor};">TM/HM</div>

        <div class="moves">
            {#each movePoolMachine as move}
                <MoveMini 
                    move={move}
                    outlineColor={outlineColor}
                />
            {/each}
        </div>
    </section>

    <section>
        <div class="move-section-title" style="color: {outlineColor}; background-color: {contrastColor};">Tutored</div>

        <div class="moves">
            {#each movePoolTutor as move}
                <MoveMini 
                    move={move}
                    outlineColor={outlineColor}
                />
            {/each}
        </div>
    </section>

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

        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }

    .move-section-title {
        font-size: 3.7rem;
        text-align: center;
        font-family: $font-pk;
        position: sticky;
        top: 0;
        z-index: 10;
        overflow: hidden;
    }

    .moves {
        padding: 0rem 1rem;
        margin-bottom: 0;
        width: 100%;
        height: fit-content;
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-gap: 0.5rem;
    }
</style>