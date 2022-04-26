<script lang="ts">
    import type { Pokemon } from "@typedefs";
    import { useStylesByType } from "@hooks"

    export let pokemon: Pokemon;
    export let textColor: string;
    export let bgColor: string;

    const { backgroundColorByType, textColorByType } = useStylesByType();
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
        <span>Types:</span>
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
    @import "../../../styles/mixins";
    @import "../../../styles/mediaqueries";

    .info-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 50%;
        height: 50%;
        order: 1;
        font-size: 2.5rem;
        font-family: $font-pk;
        padding-left: 0.75rem;

        &__types {

            &--type {
                @include infoLabel();

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
                @include infoLabel();

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