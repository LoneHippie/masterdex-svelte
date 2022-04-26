<script lang="ts">
    import type { Pokemon } from "@typedefs";
    import { clearSelectedPokemon } from "@store/actions/pokemonHandler";
    import { useStyles } from "@hooks";
    import { fly } from "svelte/transition";

    import SpriteTab from "./components/SpriteTab.svelte";
    import InfoTab from "./components/InfoTab.svelte";
    import DetailsToggle from "./components/DetailsToggle.svelte";
    import StatsTab from "./components/StatsTab.svelte";

    export let pokemon: Pokemon;

    let showMovesTab: boolean = false;
    const toggleShowMovesTab = () => showMovesTab = !showMovesTab;

    let styles = {
        backgroundColor: "",
        textColor: "",
        typeIcons: [],
        backgroundGradient: "",
        contrastColor: ""
    }

    $: {
        const { backgroundColor, textColor, typeIcons, backgroundGradient, contrastColor } = useStyles(pokemon);
        styles.backgroundColor = backgroundColor;
        styles.textColor = textColor;
        styles.typeIcons = typeIcons;
        styles.backgroundGradient = backgroundGradient;
        styles.contrastColor = contrastColor;
    }
</script>

<article 
    class="card" 
    style="background: {styles.backgroundGradient}"
    in:fly={{y: 800, duration: 300}}
    out:fly={{y: 800, duration: 200}}
>
    <button 
        class="card--close"
        on:click={clearSelectedPokemon}
    >X</button>

    <section class="card__module-container">
        <InfoTab 
            pokemon={pokemon} 
            textColor={styles.contrastColor}
            bgColor={styles.textColor}
        />
        <SpriteTab pokemon={pokemon} />

        <section class="card__module-container--details">
            <DetailsToggle 
                handleToggle={toggleShowMovesTab}
                textColor={styles.textColor}
                id={pokemon.id}
            />
            <div class="card__module-container--details-content">
                {#if showMovesTab}
                    <div>MOVES</div>
                {:else}
                    <StatsTab 
                        pokemon={pokemon} 
                        textColor={styles.textColor}
                        backgroundColor={styles.contrastColor}
                    />
                {/if}
            </div>
        </section>
    </section>

</article>

<style lang="scss">
    @import "../../styles/variables";
    @import "../../styles/mediaqueries";
    .card {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        z-index: 500;
    }

    .card__module-container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        &--details {
            display: flex;
            flex-direction: column;
            padding-top: 2.5%;
            height: 42.5%;
            width: 100%;
        }
        &--details-content {
            height: 40%;
            width: 100%;
            padding: 2rem 4rem;
        }
    }

    .card--close {
        position: absolute;
        top: 0;
        right: 0;
        padding-right: 2rem;
        padding-top: 2rem;
        font-size: 4rem;
        color: $color-white;
        text-shadow: 0px 0px 4px $color-text;
        background: transparent;
        border: none;
        &:hover {
            cursor: pointer;
        }

        z-index: 1000;
    }
</style>