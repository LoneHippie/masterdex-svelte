<script lang="ts">
    import type { Pokemon } from "@typedefs";

    export let pokemon: Pokemon;
    export let textColor: string;
    export let backgroundColor: string;

    const statNames = ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed", "Total"];
    const statMaxes = [255, 165, 230, 154, 230, 160, 720];
    const stats = pokemon.stats.map(el => el.baseStat);
    const pokemonStats = stats.map((el, index) => {
        return {
            stat: el,
            name: statNames[index],
            percentage: `${(el / statMaxes[index]) * 100}%`
        }
    })
</script>

<div class="stats-container">
    {#each pokemonStats as pkStat}
        <div class="stat">
            <div class="stat__content" style="border: 2px solid {textColor}">
                <div 
                    class="stat__content--bar"
                    style="
                        width: {pkStat.percentage}; 
                        background: {backgroundColor};
                    "
                >
                    <strong class="stat__content--value">{pkStat.stat}</strong>
                </div>
            </div>
            <div class="stat__label" for={`stat-bar-${pkStat.name}-${pokemon.id}`}>
                {pkStat.name}
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    @import "../../../styles/variables";

    .stats-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-bottom: 3rem;
    }

    .stat {
        display: flex;
        flex-direction: row;
        font-family: $font-pk;
        cursor: default;

        &__content {
            width: 80%;
            height: 3rem;
            border-radius: 8px;
            overflow: hidden;

            &--bar {
                height: 3rem;
            }
            &--value {
                display: block;
                text-align: right;
                font-size: 2.2rem;
                margin-right: 0.5rem;
            }
        }
        &__label {
            width: 20%;
            margin-left: 0.75rem;
            font-size: 2.2rem;
        }
    }
</style>