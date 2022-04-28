import { pokemonList, isLoading } from "@store/store";
import type { Pokemon } from "@typedefs";
import { genQuery, typeQuery, searchQuery, namesQuery, movePoolQuery } from "../../api/pokeapi";
import { clearSelectedPokemon } from "./pokemonHandler";

enum queryAction {
    GEN,
    TYPE,
    NAME
}

export const searchPokemon = {
    byGen: async (gen: number) => await genQuery(gen),
    byType: async (type: string) => await typeQuery(type),
    byName: async (name: string) => await searchQuery(name),

    getAllNames: async() => await namesQuery(),
    getMovePool: async(id: number) => await movePoolQuery(id)
}

const runSearch = async(action: queryAction, param: any): Promise<Pokemon[]> => {
    isLoading.set(true);
    clearSelectedPokemon();
    pokemonList.set([]);
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
    setTimeout(() => { //gives enough time to clear the DOM, find better fix later
        pokemonList.set(list)
        isLoading.set(false);
    }, 500);
}

const setByName = async(name: string) => runSearch(queryAction.NAME, name);
const setByGen = async(gen: number) => runSearch(queryAction.GEN, gen);
const setByType = async(type: string) => runSearch(queryAction.TYPE, type);

export { setByGen, setByName, setByType }