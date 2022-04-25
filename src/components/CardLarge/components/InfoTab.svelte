<script lang="ts">
    import type { Pokemon } from "@typedefs";
    import { useStyles } from "@hooks"

    export let pokemon: Pokemon;
    export let textColor: string;
    export let bgColor: string;

    const { backgroundColorByType, textColorByType, contrastColorByTextColor } = useStyles(pokemon);
</script>

<div class="info-container" style="color: {textColor}">
    <div class="info-container__general--id">
        {`Game ID: #${pokemon.id}`}
    </div>
    <div class="info-container__general--height">
        {`Height: ${pokemon.height}cm`}
    </div>
    <div class="info-container__general--weight">
        {`Weight: ${pokemon.weight}kg`}
    </div>

    <div class="info-container__types">
        <span>Type:</span>
        <div>
            {#each pokemon.types as type}
                <div
                    class="info-container__types--type"
                    style="
                        border: 2px solid {textColor};
                        background: {backgroundColorByType(type.type.name)};
                        color: {textColorByType(type.type.name)};
                    "
                >
                    {type.type.name}
                </div>
            {/each}
        </div>
    </div>

    <div class="info-container__abilities">
        <span>Abilities:</span>
        {#each pokemon.abilities as ability}
            <div
                class="info-container__abilities--ability"
                style="
                    border: 2px solid {textColor};
                    background: {bgColor};
                "
            >
                {ability.ability.name}
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    @import "../../../styles/variables";

    .info-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 50%;
        height: 50%;
        order: 1;
        font-size: 3rem;
        font-family: $font-pk;
        padding-left: 0.75rem;

        &__types {

            &--type {
                display: inline-block;
                margin-top: 0.65rem;
                padding: 0.5rem;
                padding-left: 1rem;
                padding-right: 1rem;
                border-radius: 20px;
                text-align: center;
                font-size: 2.5rem;
                text-transform: capitalize;

                &:not(:last-child) {
                    margin-right: 1rem;
                }
            }
        }

        &__abilities {
            display: flex;
            flex-direction: column;
            backface-visibility: none;

            &--ability {
                display: inline-block;
                margin-top: 0.65rem;
                padding: 0.5rem;
                padding-left: 1rem;
                padding-right: 1rem;
                border-radius: 20px;
                text-align: center;
                font-size: 2.5rem;
                text-transform: capitalize;

                cursor: pointer;

                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                -webkit-tap-highlight-color: transparent;

                &:hover {
                    filter: contrast(130%);
                }
            }
        }
    }
</style>