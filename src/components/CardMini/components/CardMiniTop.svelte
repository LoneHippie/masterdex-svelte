<script lang="ts">
    
    export let typeIcons: any;
    export let textColor: string;
    export let id: number;

</script>

<section class="pokemon__top">
    <div class="pokemon__top__icons">
        {#each typeIcons as typeIcon}
            <img 
                src={typeIcon.icon}
                class="pokemon__top__icons--icon"
                style="background: {typeIcon.background}"
                alt="type icon"
            />
        {/each}
    </div>
    <div 
        class="pokemon__top--id" 
        style="color: {textColor}"
    >
        #{id}
    </div>
</section>

<style lang="scss">
    @import "../../../styles/variables";
    @import "../../../styles/mediaqueries";
    
    .pokemon__top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 10%;
        @include respond(largePhone) {
            height: 8.5%;
        }
        @include respond(landscapePhone) {
            height: 7.5%;
        }
        &__icons {
            display: flex;
            flex-direction: row;
            width: 40%;
            justify-content: space-between;

            &--icon {
                height: 2rem;
                width: 2rem;
                border-radius: 100%;
                padding: 0.25rem;
                &:first-child {
                    margin-right: 0.22rem;
                }

                @include respond(landscapePhone) {
                    height: 2.75rem;
                    width: 2.75rem;

                    &:first-child {
                        margin-right: 0.35rem;
                    }
                }
            }
        }
        &--id {
            font-size: 1.6rem;
            font-family: $font-pk;

            @include respond(landscapePhone) {
                font-size: 2.5rem;
            }
        }
    }
</style>