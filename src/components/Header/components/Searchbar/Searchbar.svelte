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
        placeholder="Pokemon Search"
        type="text" 
        bind:value={searchText} 
        on:blur={() => setTimeout(() => {
            showSuggestions = false
        }, 200)}
        on:focus={() => showSuggestions = true}
    />
    <span>Masterdex Svelte</span>
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
    @import "../../../../styles/mediaqueries";

    .searchbar__container {
        position: relative;
        width: 55%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @include respond(largePhone) {
            width: 55%;
        }
        @include respond(landscapePhone) {
            width: 60%;
        }

        @include respond(tablet) {
            width: 68%;
        }
    }

    .searchbar {
        width: 100%;
        font-family: $font-roboto;
        font-size: 2rem;
        padding: 0.5rem 0.75rem;
        border-radius: 8px;
        z-index: 500;

        transition: all 300ms;

        &:hover,
        &:active {
            outline: none;
            
            box-shadow: 0px 0px 10px 5px $color-focus;
            cursor: pointer;
        }
    }

    span {
        text-align: left;
        align-self: flex-start;
        margin-left: 0.5rem;
        margin-top: 0.75rem;
        font-size: 1.5rem;
        font-weight: 600;
        font-family: $font-pk;
        color: $color-text;

        @include respond(landscapePhone) {
            margin-top: 1rem;
            font-size: 1.9rem;
        }
    }

    .suggestions {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding-top: 5rem;
        background: $color-white;
        min-height: 7rem;
        max-height: 21rem;
        border-radius: 8px 8px 8px 8px;
        list-style: none;
        overflow-y: scroll;
    }

    .suggestion {
        padding: 0.5rem 1rem;
        color: $color-focus;
        font-size: 2rem;
        width: 100%;
        font-family: $font-roboto;
        &:hover,
        &:focus {
            background: $color-focus;
            color: $color-white;
            cursor: pointer;
        }
    }
</style>