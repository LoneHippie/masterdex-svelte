import { writable, Writable } from 'svelte/store';
import type { Pokemon } from '../types';

export const pokemonList: Writable<Pokemon[]>  = writable([]);
export const isLoading: Writable<boolean> = writable(false);