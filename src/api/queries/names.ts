import type { Pokemon } from "@typedefs";

import { url, filters, queryOptions, pokeapiQuery, pokeapiNamespace } from "../utils";

export function namesQuery() {
    const namesQuery = `
        query {
            ${pokeapiNamespace}: pokemon_v2_pokemon(where: ${filters.standardVariantsOnly}) {
                name
            }
        }
    `;

    return pokeapiQuery<any[]>(
        queryOptions(namesQuery)
    );
}