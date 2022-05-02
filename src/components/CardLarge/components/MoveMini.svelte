<script lang="ts">
    import type { Move } from "@typedefs";
    import { useStylesByType } from "@hooks";

    export let move: Move;
    export let outlineColor: string;

    const { textColorByType, backgroundColorByType } = useStylesByType();
    const textColor = textColorByType(move.move.type.name);
    const backgroundColor = backgroundColorByType(move.move.type.name);
</script>

<div 
    class="move" 
    style="
        border: 1.5px solid {outlineColor};
        background: {backgroundColor};
        color: {textColor};
    ">
    <div class="move__info">
        <span>lvl ...</span>
        <span>egg</span>
    </div>
    <div class="move__name">
        {move.move.name}
    </div>
    <div class="move__info">
        <span>{move.move.pp}</span>
        <span>{move.move.damageClass.name}</span>
    </div>
</div>

<style lang="scss">
    @import "../../../styles/variables";
    @import "../../../styles/mediaqueries";

    .move {
        height: 7.5rem;
        text-transform: capitalize;
        font-family: $font-pk;
        border-radius: 8px;
        overflow: hidden;

        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;

        cursor: pointer;

        &__name {
            font-size: 2rem;
            text-align: center;
            margin: 0 auto;
        }

        &__info {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 0 auto;
            width: 92%;
            font-size: 1.6rem;

            & > span {
                display: inline-block;
            }
        }
    }

</style>