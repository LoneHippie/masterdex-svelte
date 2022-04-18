import { pokemonList, isLoading } from "@store/store";
import { genQuery, typeQuery, searchQuery, namesQuery} from "../api/pokeapi";
import type { Pokemon } from "@typedefs";

enum queryAction {
    GEN,
    TYPE,
    NAME
}

const useSearch = () => {
    const searchPokemon = {
        byGen: async (gen: number) => await genQuery(gen),
        byType: async (type: string) => await typeQuery(type),
        byName: async (name: string) => await searchQuery(name),

        getAllNames: async() => await namesQuery()
    }

    const runSearch = async(action: queryAction, param: any): Promise<Pokemon[]> => {
        isLoading.set(true);
        let res: any;
        switch(action) {
            case queryAction.GEN:
                res = await searchPokemon.byGen(param);
                break;
            case queryAction.TYPE:
                res = await searchPokemon.byType(param);
                break;
            case queryAction.NAME:
                res = await searchPokemon.byName(param);
                break;
            default:
                return;
        }
        const list: Pokemon[] = res.map((el: any) => {
            return {...el, sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${el.id}.png`}
        })
        pokemonList.set([]);
        pokemonList.update(state => {
            return state = list;
        })
        isLoading.set(false);
    }

    const setPokemon = {
        byName: async (name: string) => runSearch(queryAction.NAME, name),
        byGen: async (gen: number) => runSearch(queryAction.GEN, gen),
        byType: async (type: string) => runSearch(queryAction.TYPE, type)
    }

    return {
        setPokemon,
        searchPokemon
    }
};

export default useSearch;