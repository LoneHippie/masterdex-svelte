import useSearch from "../../../api/useSearch";
const { setPokemon, searchPokemon } = useSearch();

const useSearchbar = () => {
    const handleSubmit = (search: string) => {
        setPokemon.byName(search)
    }

    const handleSelectName = (e: any) => {
        setPokemon.byName(e.target.innerText)
    }

    const filterTerms = (allNames: any[], search: string) => {
        return allNames.filter(name => name.includes(search.trim().toLowerCase()))
    }

    const setNamesList = async() => {
        const list: any[] = await searchPokemon.getAllNames();
        return list;
    }

    return {
        handleSubmit,
        setNamesList,
        handleSelectName,
        filterTerms
    }
}

export default useSearchbar;