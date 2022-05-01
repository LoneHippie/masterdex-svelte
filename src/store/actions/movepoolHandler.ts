import { movePool } from "@store/store";
import type { Move } from "@typedefs";
import { searchPokemon } from "./pokemonListHandler";

const setMovePool = async(pokemonId: number) => {
    movePool.set([]);
    searchPokemon.getMovePool(pokemonId)
        .then((moves: Move[]) => {
            const moveIds = moves.map(el => el.move.id)
            const filteredMoves = moves.filter((el: Move, index) => moveIds.includes(el.move.id, index + 1))
            movePool.update(state => {
                return state = filteredMoves
            })
        })
};

export { setMovePool };