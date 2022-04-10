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

<style>
    .pokemon__top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 7.5%;
    }
    .pokemon__top__icons {
        display: flex;
        flex-direction: row;
        width: 40%;
        justify-content: space-between;
    }
    .pokemon__top__icons--icon {
        height: 2.75rem;
        widows: 2.75rem;
        border-radius: 100%;
        padding: 0.25rem;
    }
    .pokemon__top__icons--icon:first-child {
        margin-right: 0.35rem;
    }
    .pokemon__top--id {
        font-size: 2.5rem;
    }
</style>