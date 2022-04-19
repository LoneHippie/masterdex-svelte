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

<style>
    header {
        height: calc(var(--header-height) + 0.25rem);
        background: var(--color-text);
        color: var(--color-white);
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 2rem;

        z-index: 1000;
    }

    .border {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: var(--header-height);
        padding: 2rem;
        display: flex;
        justify-content: space-between;
        background-color: var(--color-pokedex-2);
        color: var(--color-white);

        z-index: -1;
    }

    nav {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin-top: -2rem;
    }
</style>