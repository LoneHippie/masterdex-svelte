<script lang="ts">
    import type { Pokemon } from "@typedefs";

    export let pokemon: Pokemon;
    export let textColor: string;
    export let backgroundColor: string;

    const statNames = ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed", "Total"];
    const statMaxes = [255, 165, 230, 154, 230, 160, 720];
    const stats = pokemon.stats.map(el => el.baseStat);
    const statTotal = stats.reduce((acc, el) => acc + el);
    stats.push(statTotal);
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
                    <strong 
                        class="stat__content--value"
                        style="color: {textColor}"
                    >
                        {pkStat.stat}
                    </strong>
                </div>
            </div>
            <div class="stat__label" for={`stat-bar-${pkStat.name}-${pokemon.id}`} style="color: {textColor}">
                {pkStat.name}
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    @import "../../../styles/variables";

    $bar-height: 2.3rem;

    .stats-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-content: space-around;
    }

    .stat {
        display: flex;
        flex-direction: row;
        font-family: $font-pk;
        cursor: default;

        &:not(:last-child) {
            margin-bottom: 0.3rem;
        }

        &__content {
            width: 80%;
            height: $bar-height;
            border-radius: 10px;
            overflow: hidden;

            &--bar {
                height: $bar-height;
                border-radius: 0px 6px 8px 0px;
            }
            &--value {
                display: block;
                text-align: right;
                font-size: 1.8rem;
                margin-right: 0.5rem;
            }
        }
        &__label {
            width: 20%;
            margin-left: 0.75rem;
            font-size: 2rem;
        }
    }
</style>