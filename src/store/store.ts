import { writable, Writable } from 'svelte/store';
import type { Pokemon } from '@typedefs';

export const pokemonList: Writable<Pokemon[]>  = writable([]);
export const selectedPokemon: Writable<Pokemon> = writable(null);
export const namesList: Writable<string[]> = writable([]);
export const isLoading: Writable<boolean> = writable(false);