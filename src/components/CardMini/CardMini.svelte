<script lang="ts">
    export let pokemon: any;
</script>

<div class="pokemon">
    <span>{pokemon.name}</span>
</div>

<style>
    .pokemon {
        height: 24rem;
        width: 16rem;
        display: flex;
        flex-direction: column;
        border: 2px solid var(--color-white);
    }

    span {
        font-size: 2.2rem;
        margin-top: 3rem;
        text-align: center;
    }
</style>