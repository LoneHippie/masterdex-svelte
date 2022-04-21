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
    @import "../../styles/mediaqueries";
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    :global(html) {
        font-size: 62.5%;

        @include respond(tablet) {
            font-size: 70%;
        }
        @include respond(laptop) {
            font-size: 80%;
        }
        @include respond(desktop) {
            font-size: 85%;
        }

        scroll-behavior: smooth;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }
    :global(body) {
        box-sizing: border-box;
        background-color: $color-pokedex-2;
    }
    main {
        background-color: $color-pokedex;
    }
</style>