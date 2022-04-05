import type { Pokemon } from "../types";

const url: string = "https://beta.pokeapi.co/graphql/v1beta"


const standardOnly = true;

const filters = {
    standardVariantsOnly: `{is_default: {_eq: ${standardOnly}}}`
}

const queryOptions = (query: string) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
        })
    }
};

const queryBodies = {
    pokemon_v2: `
        name
        id
        height
        weight
        abilities: pokemon_v2_pokemonabilities {
            ability: pokemon_v2_ability {
                name
                effects: pokemon_v2_abilityeffecttexts(where: {language_id: {_eq: 9}}) {
                    shortEffect: short_effect
                }
            }
        }
        stats: pokemon_v2_pokemonstats {
            baseStat: base_stat
            statId: stat_id
        }
        types: pokemon_v2_pokemontypes {
            type: pokemon_v2_type {
                name
                id
            }
        }
    `
}

export function namesQuery() {
    const namesQuery = `
        query {
            pokemon_v2_pokemon(where: ${filters.standardVariantsOnly}) {
                name
            }
        }
    `;

    return pokemonQuery(
        queryOptions(namesQuery)
    );
}

export function searchQuery(search: string) {
    const searchQuery = `
        query {
            pokemon_v2_pokemon(where: {name: {_eq: ${search}}, _and: ${filters.standardVariantsOnly}}) {
                ${queryBodies.pokemon_v2}
            }
        }
    `;

    return pokemonQuery(
        queryOptions(searchQuery)
    );
}

export function genQuery(gen: number) {
    const genQuery = `
        query {
            pokemon_v2_pokemon(where: {pokemon_v2_pokemonspecy: {pokemon_v2_generation: {id: {_eq: ${gen}}}}, _and: ${filters.standardVariantsOnly}}) {
                ${queryBodies.pokemon_v2}
            }
        }
    `;

    return pokemonQuery(
        queryOptions(genQuery)
    );
}

export function typeQuery(type: string) {
    const typeQuery = `
        query {
            pokemon_v2_pokemon(where: {pokemon_v2_pokemontypes: {pokemon_v2_type: {name: {_eq: ${type}}}}, _and: ${filters.standardVariantsOnly}}) {
                ${queryBodies.pokemon_v2}
            }
        }
    `;

    return pokemonQuery(
        queryOptions(typeQuery)
    );
}

async function pokemonQuery(options: Object): Promise<void | Pokemon | any> {
    
    const pokemon = fetch(url, options)
        .then(handleResponse)
        .then(handleData)
        .catch(handleError);

    return pokemon;
};

function handleResponse(res: any) {
    return res.json().then((resJSON: JSON) => {
        return res.ok ? resJSON : Promise.reject(resJSON)
    });
};

function handleData(data: any): Pokemon {
    return data.data.pokemon_v2_pokemon;
};

function handleError(err: Error) {
    console.log(err);
};