<script lang="ts">
    import { setByGen, setByType } from "@store/actions/pokemonListHandler";

    let genSelect: number | string;
    let typeSelect: string;

</script>

<div class="buttons__container">
    <div class="button_group">
        <select
            class="custom-select"
            id="gen-select"
            bind:value={genSelect}
            on:change={() => {
                setByGen(Number(genSelect))
                typeSelect = "default";
            }}
        >
            <option value="default" disabled>GEN</option>
            <option value="1">Gen 1</option>
            <option value="2">Gen 2</option>
            <option value="3">Gen 3</option>
            <option value="4">Gen 4</option>
            <option value="5">Gen 5</option>
            <option value="6">Gen 6</option>
            <option value="7">Gen 7</option>
            <option value="8">Gen 8</option>
        </select>
    </div>
    <div class="button_group">
        <select
            class="custom-select" 
            id="type-select"
            bind:value={typeSelect}
            on:change={() => {
                setByType(typeSelect)
                genSelect = "default"
            }}
        >
            <option value="default" disabled>TYPE</option>
            <option value="fire">FIR</option>
            <option value="water">WTR</option>
            <option value="electric">ELE</option>
            <option value="grass">GRS</option>
            <option value="ice">ICE</option>
            <option value="fighting">FGT</option>
            <option value="poison">PSN</option>
            <option value="ground">GRN</option>
            <option value="flying">FLY</option>
            <option value="psychic">PSY</option>
            <option value="bug">BUG</option>
            <option value="rock">RCK</option>
            <option value="ghost">GHO</option>
            <option value="dragon">DRA</option>
            <option value="dark">DRK</option>
            <option value="ground">GRN</option>
            <option value="steel">STL</option>
            <option value="fairy">FRY</option>
        </select>
    </div>
</div>

<style lang="scss">
    @import "../../../../styles/variables";
    @import "../../../../styles/mediaqueries";

    .buttons__container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 40%;

        @include respond(largePhone) {
            width: 33%;
        }
        @include respond(landscapePhone) {
            width: 27.5%;
        }
        @include respond(tablet) {
            width: 25%;
        }
    }

    .button_group {
        position: relative; 
        display: block;
    }

    .custom-select {
        appearance: none;
        padding: 0.75rem 1rem;
        font-size: 1.75rem;
        font-family: $font-roboto;
        font-weight: 500;
        background-color: $color-white;
        color: $color-pokedex-2;
        border-radius: 8px;
        border-right: 2.5px solid $color-text;
        border-bottom: 2.5px solid $color-text;
        border-top: none;
        border-left: none;

        transition: all 300ms; 

        @include respond(landscapePhone) {
            padding: 0.75rem 1.5rem;
        }
        @include respond(tablet) {
            padding: 0.75rem 2rem;
        }
        @include respond(laptop) {
            padding: 0.75rem 2.5rem;
        }
        
        &:hover,
        &:active {
            outline: none;
            border-right: 2.5px solid $color-focus;
            border-bottom: 2.5px solid $color-focus;
            box-shadow: 0px 0px 10px 5px $color-focus;
            cursor: pointer;
        }
    }
</style>