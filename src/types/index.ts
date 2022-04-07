interface Effect {
    shortEffect: string;
}

interface Ability {
    name: string;
    effects: Array<Effect>
}

interface Stat {
    baseStat: number;
    id: number;
}

export interface Type {
    name: string;
    id: number;
}

interface Color {
    name: string;
}

interface Specs {
    color: {
        name: string;
    }
}

export type Pokemon = {
    abilities: Array<Ability>;
    height: Number;
    color: Color;
    id: Number;
    name: string;
    stats: Array<Stat>;
    types: Array<Type>;
    weight: Number;
    sprite: string | null;
    specs: Specs;
}