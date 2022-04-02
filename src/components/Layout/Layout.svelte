<script lang="ts">
    import Header from "../Header/Header.svelte";
</script>

<main>
    <Header />
    <section class="content">
        <slot/>
    </section>
</main>

<style>
    main {
        background-color: var(--color-pokedex);
        padding: 0 10rem;
    }
    .content {
        margin-top: var(--header-height);
    }
</style>