import type { Move } from "@typedefs";

import { queryOptions, pokeapiNamespace, pokeapiQuery } from "../utils";

export function movePoolQuery(id: number) {
    const movePoolQuery = `
        query {
            ${pokeapiNamespace}: pokemon_v2_pokemonmove(where: {pokemon_v2_pokemon: {id: {_eq: ${id}}}}) {
                move: pokemon_v2_move {
                    name
                    id
                    generation_id
                    move_damage_class_id
                    move_effect_chance
                    move_effect_id
                    type_id
                    pp
                    power
                }
            }
        }
    `;

    return pokeapiQuery<Move[]>(
        queryOptions(movePoolQuery)
    );
}