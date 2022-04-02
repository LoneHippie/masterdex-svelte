import { pokemon } from "../store";
import { genQuery } from "./pokeapi";

const useSearch = () => {
    const searchPokemon = {
        byGen: async (gen: number) => await genQuery(gen)
    }

    const setPokemon = {
        byGen: async (gen: number) => {
            const res = await searchPokemon.byGen(gen);
            pokemon.set([]);
            pokemon.update(pokemon => {
                return pokemon = res;
            })
        }
    }

    return {
        setPokemon
    }
};

export default useSearch;