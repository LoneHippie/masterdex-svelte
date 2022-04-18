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
        typeIcons: []
    }

    $: {
        const { backgroundColor, textColor, typeIcons } = useStyles(pokemon);
        styles.backgroundColor = backgroundColor;
        styles.textColor = textColor;
        styles.typeIcons = typeIcons;
    }

</script>

<div 
    class="pokemon" 
    style="background-color: {styles.backgroundColor}" 
    in:fly={{x: 150, duration: 500}}
    out:fly={{x: -150, duration: 500}}
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
    />
    <span style="color: {styles.textColor}" >{pokemon.name}</span>
</div>

<style>
    .pokemon {
        position: relative;
        height: 24rem;
        width: 16rem;
        display: flex;
        flex-direction: column;
        border-radius: 6px;
        box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.3);
        padding: 1.5rem;
    }
    .pokemon__sprite {
        width: 85%;
        height: 85%;
    }
    span {
        font-size: 1.8rem;
        margin-top: 1rem;
        text-align: center;
        height: 7.5%;
    }
</style>