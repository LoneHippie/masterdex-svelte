export const url: string = "https://beta.pokeapi.co/graphql/v1beta"
export const pokeapiNamespace = `pokeRes`;

const standardOnly = true;

export const filters = {
    standardVariantsOnly: `{is_default: {_eq: ${standardOnly}}}`
}

export const queryOptions = (query: string) => {
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

export async function pokeapiQuery<Type>(options: Object): Promise<void | Type> {
    const handleResponse = (res: any) => {
        return res.json().then((resJSON: JSON) => {
            return res.ok ? resJSON : Promise.reject(resJSON)
        });
    };
    const handleData = (data: any): Type => {
        return data.data[pokeapiNamespace];
    };
    const handleError = (err: Error): void => {
        console.log(err);
    };

    const pokeData = fetch(url, options)
        .then(handleResponse)
        .then(handleData)
        .catch(handleError);

    return pokeData;
}