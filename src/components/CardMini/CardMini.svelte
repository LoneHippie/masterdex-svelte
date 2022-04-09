<script lang="ts">
    import type { Pokemon } from "@typedefs";
    import { useStyles } from "@hooks";

    export let pokemon: Pokemon;

    const { backgroundColor, textColor, typeIcons } = useStyles(pokemon);

</script>

<div class="pokemon" style="background-color: {backgroundColor}">
    <section class="pokemon__top">
        <div class="pokemon__top__icons">
            {#each typeIcons as icon}
                <img 
                    src={icon}
                    class="pokemon__top__icons--icon"
                    style="border: 2px solid {textColor}"
                    alt="type icon"
                />
            {/each}
        </div>
        <div class="pokemon__top__id" style="color: {textColor}">#{pokemon.id}</div>
    </section>
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

    .pokemon__top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 7.5%;
    }

    .pokemon__top__icons {
        display: flex;
        flex-direction: row;
        width: 40%;
        justify-content: space-between;
    }

    .pokemon__top__icons--icon {
        height: 2.75rem;
        widows: 2.75rem;
        border-radius: 100%;
        padding: 0.25rem;
    }
    .pokemon__top__icons--icon:first-child {
        margin-right: 0.35rem;
    }

    .pokemon__top__id {
        font-size: 2.5rem;
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