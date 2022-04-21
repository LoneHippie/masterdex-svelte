<script lang="ts">
    import { setByName } from "@store/actions/pokemonListHandler";
    import { setNamesList } from "@store/actions/namesListHandler";
    import { namesList } from "@store/store";
    import { onMount } from "svelte";

    let searchText: string = "";
    let showSuggestions: boolean = false;
    let searchSuggestions: string[];

    onMount(() => {
        if ($namesList.length) return;
        setNamesList()
    })

    const filterTerms = (allNames: string[], search: string) => {
        return allNames.filter(name => name.includes(search.trim().toLowerCase()))
    }
    const handleSelectName = (e: any) => {
        setByName(e.target.innerText)
    }

    $: {
        searchSuggestions = searchText.length > 2 && $namesList.length ? (
            filterTerms($namesList, searchText)
        ) : [];
    }
</script>

<form
    class="searchbar__container"
    on:submit|preventDefault={() => setByName(searchText)}
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


<style lang="scss">
    @import "../../../../styles/variables";

    .searchbar__container {
        position: relative;
        width: 60%;
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
        z-index: 500;

        transition: all 300ms;

        &:hover,
        &:active {
            outline: none;
            border-right: 2.5px solid $color-focus;
            border-bottom: 2.5px solid $color-focus;
            box-shadow: 0px 0px 10px 5px $color-focus;
            cursor: pointer;
        }
    }

    .suggestions {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 1rem;
        padding-top: 5rem;
        background: $color-white;
        min-height: 7rem;
        max-height: 21rem;
        border-radius: 8px 8px 8px 8px;
        list-style: none;
        overflow-y: scroll;
    }

    .suggestion {
        color: $color-focus;
        font-size: 2.2rem;
        width: 100%;

        &:hover {
            cursor: pointer;
        }
    }
</style>