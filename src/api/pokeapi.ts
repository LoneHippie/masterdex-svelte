const url: string = "https://beta.pokeapi.co/graphql/v1beta"

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
        pokemon_v2_pokemonabilities {
            pokemon_v2_ability {
                name
                pokemon_v2_abilityeffecttexts(where: {language_id: {_eq: 9}}) {
                    short_effect
                }
            }
        }
        pokemon_v2_pokemonstats {
            base_stat
            stat_id
        }
        pokemon_v2_pokemontypes {
            pokemon_v2_type {
                name
                id
            }
        }
    `
}

export function namesQuery() {
    const namesQuery = `
        query {
            pokemon_v2_pokemon {
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
            pokemon_v2_pokemon(where: {name: {_eq: ${search}}}) {
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
            pokemon_v2_pokemon(where: {pokemon_v2_pokemonspecy: {pokemon_v2_generation: {id: {_eq: ${gen}}}}}) {
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
            pokemon_v2_pokemon(where: {pokemon_v2_pokemontypes: {pokemon_v2_type: {name: {_eq: ${type}}}}}) {
                ${queryBodies.pokemon_v2}
            }
        }
    `;

    return pokemonQuery(
        queryOptions(typeQuery)
    );
}

async function pokemonQuery(options: Object) {
    
    const pokemon = fetch(url, options)
        .then(handleResponse)
        .then(handleData)
        .catch(handleError);

    return pokemon;
};

function handleResponse(res: any) {
    return res.json().then((resJSON) => {
        return res.ok ? resJSON : Promise.reject(resJSON)
    });
};

function handleData(data: any) {
    return data.data.pokemon_v2_pokemon;
};

function handleError(err: Error) {
    console.log(err);
};