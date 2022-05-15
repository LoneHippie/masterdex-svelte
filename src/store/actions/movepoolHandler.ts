import { movePool } from "@store/store";
import type { Move } from "@typedefs";
import { searchPokemon } from "./pokemonListHandler";

const setMovePool = async(pokemonId: number) => {
    movePool.set([]);
    searchPokemon.getMovePool(pokemonId)
        .then((moves: Move[]) => {
            const uniqueSet = new Set(moves.map(el => JSON.stringify(el)));
            const filteredMoves = Array.from(uniqueSet).map(el => JSON.parse(el));
            movePool.update(state => {
                return state = filteredMoves
            })
        })
};

export { setMovePool };