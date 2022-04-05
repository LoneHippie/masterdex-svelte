<script lang="ts">
    import type { Pokemon } from "../../types";

    export let pokemon: Pokemon;
</script>

<div class="pokemon">
    <img 
        src={pokemon.sprite}
        alt="default portrait"
        class="pokemon__sprite"
    />
    <span>{pokemon.name}</span>
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
        font-size: 2rem;
        margin-top: 1rem;
        text-align: center;
        height: 7.5%;
    }
</style>