<script lang="ts">
    import type { Pokemon } from "@typedefs";

    export let pokemon: Pokemon;
</script>

<div class="info-container">
    <div class="info-container__general--id">
        {`Game ID: #${pokemon.id}`}
    </div>
    <div class="info-container__general--height">
        {`Height: ${pokemon.height}cm`}
    </div>
    <div class="info-container__general--weight">
        {`Weight: #${pokemon.weight}kg`}
    </div>

    <div class="info-container__types">

    </div>

    <div class="info-container__abilities">

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
        font-size: 3.5rem;
        font-family: $font-pk;
    }
</style>