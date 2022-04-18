import { searchPokemon } from "./pokemonListHandler";
import { namesList } from "@store/store";
import type { Pokemon } from "@typedefs";

const setNamesList = async() => {
    searchPokemon.getAllNames()
        .then(list => {
            return list.map((el: Pokemon) => el.name)
        })
        .then((resList: string[]) => {
            namesList.update(state => {
                return state = resList
            })
        })
}

export { setNamesList };