import { writable, Writable } from 'svelte/store';

export const pokemonList: Writable<any[]>  = writable([]);
export const isLoading: Writable<boolean> = writable(false);