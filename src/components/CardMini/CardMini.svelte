<script lang="ts">
    import type { Pokemon } from "@typedefs";
    import { setSelectedPokemon } from "@store/actions/pokemonHandler";
    import { useStyles } from "@hooks";
    import CardMiniTop from "./components/CardMiniTop.svelte";

    import { fade, fly } from "svelte/transition";

    export let pokemon: Pokemon;

    let styles = {
        backgroundColor: "",
        textColor: "",
        typeIcons: [],
    }

    $: {
        const { backgroundColor, textColor, typeIcons } = useStyles(pokemon);
        styles.backgroundColor = backgroundColor;
        styles.textColor = textColor;
        styles.typeIcons = typeIcons
    }

</script>

<div 
    class="pokemon" 
    style="background: {styles.backgroundColor}" 
    in:fly={{x: 150, duration: 500}}
    out:fly={{x: -150, duration: 300, delay: 200}}
    on:click={() => setSelectedPokemon(pokemon)}
>
    <CardMiniTop 
        typeIcons={styles.typeIcons}
        textColor={styles.textColor}
        id={pokemon.id}
    />
    <img 
        src={pokemon.sprite}
        alt="default portrait"
        class="pokemon__sprite"
        transition:fade
        loading="lazy"
    />
    <span style="color: {styles.textColor}" >{pokemon.name}</span>
</div>

<style lang="scss">

    @import "../../styles/variables";
    @import "../../styles/mediaqueries";
    .pokemon {
        position: relative;
        display: flex;
        flex-direction: column;
        border-radius: 6px;
        box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.3);
        padding: 0.5rem;

        width: 11.25rem;
        height: 18.5rem;

        cursor: pointer;

        @include respond(largePhone) {
            padding: 0.75rem;
            width: 13rem;
            height: 20rem;
        }
        @include respond(landscapePhone) {
            height: 24rem;
            width: 16.5rem;
            padding: 1.5rem;
        }
        &__sprite {
            width: 85%;
            height: 75%;
            image-rendering: pixelated;

            @include respond(largePhone) {
                height: 80%;
            }
            @include respond(landscapePhone) {
                height: 85%;
            }
        }
    }
    span {
        font-size: 1.8rem;
        text-align: center;
        font-family: $font-pk;
        height: 10%;
        @include respond(largePhone) {
            height: 8.5%;
        }
        @include respond(landscapePhone) {
            height: 7.5%;
        }
    }
</style>