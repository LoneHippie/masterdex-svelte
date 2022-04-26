<script lang="ts">
    export let id: number;
    export let textColor: string;
    export let handleToggle: () => void;
</script>

<div class="tab_toggle" style="color: {textColor}">
    <span class="tab_label">Stats</span>
    <input 
        type="checkbox" 
        id={`switch-${id}`} 
        class="switch"
        on:change={handleToggle}
    />
    <label for={`switch-${id}`} class="switch_label"></label>
    <span class="tab_label">Moves</span>
</div>

<style lang="scss">
    @import "../../../styles/variables";
    @import "../../../styles/mediaqueries";

    .tab_toggle {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10%;

        cursor: default;
    }

    .tab_label {
        padding: 0rem 1rem;
        font-size: 2rem;
        font-family: $font-pk;
        font-weight: 600;
        // @include respond(tablet-1) {
        //     font-size: 2.75rem;
        // }
    }

    .switch_label {
        cursor: pointer;
        text-indent: -9999px;
        width: 10rem; //everything must be 50% of this
        height: 3rem;
        background-color: rgba($color-white, 0.4);
        display: block;
        border-radius: 100px;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            top: 0.15rem;
            left: 0.15rem;
            width: 2.7rem;
            height: 2.7rem;
            background: $color-white;
            border-radius: 90px;
            transition: 0.3s ease-out;
        }
    }

    .switch {
        height: 0;
        width: 0;
        visibility: hidden;

        &:checked + label {
            background-color: rgba($color-white, 0.4);
        }

        &:checked + label:after {
            left: calc(100% - 0.25rem);
            transform: translateX(-100%);
        }

        &:active:after {
            width: 6.5rem;
        }
    }
</style>