<script lang="ts">
    import Searchbar from "./components/Searchbar/Searchbar.svelte";  
    import Selectors from "./components/Selectors/Selectors.svelte"; 
</script>

<header>
    <Searchbar />
    <Selectors />
</header>

<style>
    header {
        height: var(--header-height);
        background: var(--color-pokedex-2);
        color: var(--color-white);
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 2rem;
    }
</style>