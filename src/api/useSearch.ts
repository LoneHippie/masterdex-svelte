import { pokemonList, isLoading } from "../store";
import { genQuery, typeQuery, searchQuery, namesQuery} from "./pokeapi";

const useSearch = () => {
    const searchPokemon = {
        byGen: async (gen: number) => await genQuery(gen),
        byType: async (type: string) => await typeQuery(type),
        byName: async (name: string) => await searchQuery(name),

        getAllNames: async() => await namesQuery()
    }

    const setPokemon = {
        byName: async (name: string) => {
            isLoading.set(true);
            const res = await searchPokemon.byName(name);
            const list = res.map(el => {
                return {...el, sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${el.id}.png`}
            })
            pokemonList.set([]);
            pokemonList.update(state => {
                return state = list;
            })
            isLoading.set(false);
        },
        byGen: async (gen: number) => {
            isLoading.set(true);
            const res = await searchPokemon.byGen(gen);
            const list = res.map(el => {
                return {...el, sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${el.id}.png`}
            })
            pokemonList.set([]);
            pokemonList.update(state => {
                return state = list;
            })
            isLoading.set(false);
        },
        byType: async (type: string) => {
            isLoading.set(true);
            const res = await searchPokemon.byType(type);
            const list = res.map(el => {
                return {...el, sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${el.id}.png`}
            })
            pokemonList.set([]);
            pokemonList.update(state => {
                return state = list;
            })
            isLoading.set(false);
        }
    }

    return {
        setPokemon,
        searchPokemon
    }
};

export default useSearch;