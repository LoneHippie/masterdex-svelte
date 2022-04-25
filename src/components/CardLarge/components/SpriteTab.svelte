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
        order: 2;
        width: 50%;
        height: 50%;

        &--sprite {
            height: 85%;
            width: 80%;
            position: absolute;
            top: 10%;
            left: 0;
            image-rendering: pixelated;

            transform: translateY(-3.5%);
        }
    }
</style>