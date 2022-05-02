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
    moves: Array<Move>;
}

export type Move = {
    move: {
        name: string;
        id: number;
        generation_id: number;
        move_damage_class_id: number;
        move_effect_chance?: number 
        move_effect_id: number;
        type_id: number;
        pp: number;
        power?: number;
        damageClass?: {
            name: string;
        }
        type: {
            name: string;
        }
    }
}