<script lang="ts">
    import Header from "../Header/Header.svelte";
</script>

<main>
    <Header />
    <section class="content">
        <slot/>
    </section>
</main>

<style lang="scss">
    @import "../../styles/variables";

    main {
        background-color: $color-pokedex;
        padding: 0 8rem;
    }
    .content {
        padding-top: $header-height;
        height: 100vh;
    }
</style>