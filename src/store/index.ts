import { writable, Writable } from 'svelte/store';
import { Pokemon } from '../types';

export const pokemonList: Writable<Pokemon[]>  = writable([]);
export const isLoading: Writable<boolean> = writable(false);