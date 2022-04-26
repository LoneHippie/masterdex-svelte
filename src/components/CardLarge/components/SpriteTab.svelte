<script lang="ts">
    import type { Pokemon } from "@typedefs";

    export let pokemon: Pokemon;
</script>

<div class="sprite-container">
    <img 
        src={pokemon.sprite}
        alt={`sprite for ${pokemon.name}`}
        class="sprite-container--sprite"
    />
</div>

<style lang="scss">
    @import "../../../styles/variables";

    .sprite-container {
        position: relative;
        width: 50%;
        height: 55%;
        display: flex;
        align-items: center;
        justify-content: center;

        &--sprite {
            height: 85%;
            width: 85%;
            image-rendering: pixelated;

            // transform: translateY(-3.5%);
        }
    }
</style>