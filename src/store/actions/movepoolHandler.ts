import { movePool } from "@store/store";
import type { Move } from "@typedefs";
import { searchPokemon } from "./pokemonListHandler";

const setMovePool = async(pokemonId: number) => {
    movePool.set([]);
    searchPokemon.getMovePool(pokemonId)
        .then((moves: Move[]) => {
            movePool.update(state => {
                return state = moves
            })
        })
};

export { setMovePool };