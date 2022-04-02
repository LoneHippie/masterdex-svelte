<script lang="ts">
    import useSearch from "../../api/useSearch";

    const { setPokemon } = useSearch();

    let searchText: string = "";
    let genSelect: number;
    
</script>

<header>
    <div class="searchbar__container">
        <input class="searchbar" type="text" bind:value={searchText} />
    </div>
    <div class="buttons__container">
        <div class="button_group">
            <select
                class="custom-select"
                id="gen-select"
                bind:value={genSelect}
                on:change={() => setPokemon.byGen(genSelect)}
            >
                <option value="default" disabled>GEN</option>
                <option value="1">Gen 1</option>
                <option value="2">Gen 2</option>
                <option value="3">Gen 3</option>
                <option value="4">Gen 4</option>
                <option value="5">Gen 5</option>
                <option value="6">Gen 6</option>
                <option value="7">Gen 7</option>
                <option value="8">Gen 8</option>
            </select>
        </div>
    </div>
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

    .searchbar__container {
        width: 65%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .searchbar {
        width: 90%;
        font-size: 2rem;
        padding: 0.5rem 0.75rem;
        border-radius: 8px;
    }

    .button_group {
        position: relative; 
        display: block;
    }

    .custom-select {
        appearance: none;
        padding: 0.75rem 2.5rem;
        font-size: 2rem;
        font-weight: 500;
        background-color: var(--color-white);
        color: var(--color-pokedex-2);
        border-radius: 8px;
        border-right: 2.5px solid var(--color-text);
        border-bottom: 2.5px solid var(--color-text);

        transition: all 300ms;   
    }

    .custom-select:hover,
    .custom-select:active {
        outline: none;
        border-right: 2.5px solid var(--color-focus);
        border-bottom: 2.5px solid var(--color-focus);
        box-shadow: 0px 0px 10px 5px var(--color-focus);
        cursor: pointer;
    }
</style>