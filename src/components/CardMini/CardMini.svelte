<script lang="ts">
    import type { Pokemon } from "@typedefs";
    import { useStyles } from "@hooks";
    import CardMiniTop from "./components/CardMiniTop.svelte";

    export let pokemon: Pokemon;

    const { backgroundColor, textColor } = useStyles(pokemon);

</script>

<div class="pokemon" style="background-color: {backgroundColor}">
    <CardMiniTop pokemon={pokemon} />
    <img 
        src={pokemon.sprite}
        alt="default portrait"
        class="pokemon__sprite"
    />
    <span style="color: {textColor}" >{pokemon.name}</span>
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