import { pokemonList, isLoading } from "../store";
import { genQuery, typeQuery, searchQuery, namesQuery} from "./pokeapi";

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

    const runQuery = async(action: queryAction, param: any) => {
        isLoading.set(true);
        let res;
        switch(action) {
            case queryAction.GEN:
                res = await searchPokemon.byGen(param);
                break;
            case queryAction.TYPE:
                res = await searchPokemon.byType(param);
                break;
            case queryAction.NAME:
                res = await searchPokemon.byName(param);
            default:
                return;
        }
        const list = res.map(el => {
            return {...el, sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${el.id}.png`}
        })
        pokemonList.set([]);
        pokemonList.update(state => {
            return state = list;
        })
        isLoading.set(false);
    }

    const setPokemon = {
        byName: async (name: string) => runQuery(queryAction.NAME, name),
        byGen: async (gen: number) => runQuery(queryAction.GEN, gen),
        byType: async (type: string) => runQuery(queryAction.TYPE, type)
    }

    return {
        setPokemon,
        searchPokemon
    }
};

export default useSearch;