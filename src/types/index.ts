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

interface PkType {
    name: string;
    id: number;
}

export type Pokemon = {
    abilities: Array<Ability>;
    height: Number;
    id: Number;
    name: string;
    stats: Array<Stat>;
    types: Array<PkType>;
    weight: Number;
    sprite: string | null;
}