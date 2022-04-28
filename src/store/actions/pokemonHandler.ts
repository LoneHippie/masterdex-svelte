import type { Pokemon } from "@typedefs";
import { selectedPokemon } from "@store/store";

const setSelectedPokemon = async(pokemon: Pokemon) => {
    selectedPokemon.update(state => {
        return state = pokemon;
    })
}

const clearSelectedPokemon = () => {
    selectedPokemon.set(null)
};

export { setSelectedPokemon, clearSelectedPokemon };