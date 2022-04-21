<script lang="ts">
    import Searchbar from "./components/Searchbar/Searchbar.svelte";  
    import Selectors from "./components/Selectors/Selectors.svelte"; 
</script>

<header>
    <div class="border"/>
    <nav>
        <Searchbar />
        <Selectors />
    </nav>
</header>

<style lang="scss">
    @import "../../styles/variables";
    @import "../../styles/mediaqueries";

    header {
        height: calc($header-height + 0.25rem);
        background: $color-text;
        color: $color-white;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 2rem 0.75rem;

        @include respond(tablet) {
            padding: 2rem;
        }

        z-index: 1000;
    }

    .border {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: $header-height;
        padding: 2rem;
        display: flex;
        justify-content: space-between;
        background-color: $color-pokedex-2;
        color: $color-white;

        z-index: -1;
    }

    nav {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 2rem;
    }
</style>