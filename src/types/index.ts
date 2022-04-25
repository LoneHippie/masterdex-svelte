interface Effect {
    shortEffect: string;
}

interface Ability {
    ability: {
        name: string;
        effects: Array<Effect>
    }
}

interface Stat {
    baseStat: number;
    id: number;
}

export interface Type {
    type: {
        name: string;
        id: number;
    }
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
    height: number;
    color: Color;
    id: number;
    name: string;
    stats: Array<Stat>;
    types: Array<Type>;
    weight: number;
    sprite: string | null;
    specs: Specs;
}