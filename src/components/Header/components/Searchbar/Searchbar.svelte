<script lang="ts">
    import { onMount } from "svelte";
    import useSearchbar from "./useSearchbar";

    const { handleSubmit, setNamesList, handleSelectName, filterTerms } = useSearchbar();

    let searchText: string = "";
    let allNames: any[] = [];
    let showSuggestions: boolean = false;

    onMount(async() => {
        const res = await setNamesList();
        allNames = res.map(el => el.name);
    })

    $: searchSuggestions = searchText.length > 2 ? (
       filterTerms(allNames, searchText)
    ) : [];
    
</script>

<form
    class="searchbar__container"
    on:submit|preventDefault={() => handleSubmit(searchText)}
>
    <input 
        class="searchbar" 
        type="text" 
        bind:value={searchText} 
        on:blur={() => setTimeout(() => {
            showSuggestions = false
        }, 200)}
        on:focus={() => showSuggestions = true}
    />
    {#if searchSuggestions.length && showSuggestions}
        <ul class="suggestions">
            {#each searchSuggestions as searchSuggestion}
                <li 
                    class="suggestion" 
                    on:click={(e) => handleSelectName(e)}
                >
                    {searchSuggestion}
                </li>
            {/each}
        </ul>
    {/if}
</form>


<style>
    .searchbar__container {
        position: relative;
        width: 65%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .searchbar {
        width: 100%;
        font-size: 2rem;
        padding: 0.5rem 0.75rem;
        border-radius: 8px;

        transition: all 300ms;

        z-index: 100;
    }

    .searchbar:hover,
    .searchbar:active {
        outline: none;
        border-right: 2.5px solid var(--color-focus);
        border-bottom: 2.5px solid var(--color-focus);
        box-shadow: 0px 0px 10px 5px var(--color-focus);
        cursor: pointer;
    }

    .suggestions {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 1rem;
        padding-top: 5rem;
        background: var(--color-white);
        min-height: 7rem;
        max-height: 21rem;
        border-radius: 8px 8px 8px 8px;
        list-style: none;
        overflow-y: scroll;

        z-index: 50;
    }

    .suggestion {
        color: var(--color-black);
        font-size: 2.2rem;
        width: 100%;
    }

    .suggestion:hover {
        cursor: pointer;
    }
</style>