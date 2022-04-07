<script lang="ts">
    import type { Pokemon } from "../../types";
    import useStyles from "../../hooks/useStyles";

    export let pokemon: Pokemon;

    const { backgroundColor, textColor } = useStyles(pokemon);

</script>

<div class="pokemon" style="background-color: {backgroundColor}">
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
        border: 2px solid var(--color-white);
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