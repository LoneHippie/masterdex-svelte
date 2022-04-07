import type { Pokemon, Type } from "../types";

const textColorByType = (type: string) => {
    if (type === 'grass' || type === 'water' || type === 'poison' || type === 'fighting' || type === 'dragon' || type === 'dark' || type === 'ghost' || type === 'psychic') {
        return 'rgba(220, 220, 220, 1)';
    } else {
        return 'rgba(47, 79, 79, 1)';
    };
};

const backgroundColorByType = (type: string) => {
    switch(true) {
        case type === 'normal':
            return "rgba(169, 169, 169)";
        case type === 'fire':
            return "rgba(238, 129, 48)";
        case type === 'water':
            return "rgba(99, 144, 240)";
        case type === 'electric':
            return "rgba(247, 208, 44)";
        case type === 'grass':
            return "rgba(122, 199, 76)";
        case type === 'ice':
            return "rgba(150, 217, 214)";
        case type === 'fighting':
            return "rgba(194, 46, 40)";
        case type === 'poison':
            return "rgba(163, 62, 161)";
        case type === 'ground':
            return "rgba(226, 191, 101)";
        case type === 'flying':
            return "rgba(169, 143, 243)";
        case type === 'psychic':
            return "rgba(249, 85, 135)";
        case type === 'bug':
            return "rgba(166, 185, 26)";
        case type === 'rock':
            return "rgba(182, 161, 54)";
        case type === 'ghost':
            return "rgba(115, 87, 151)";
        case type === 'dragon':
            return  "rgba(111, 53, 252)";
        case type === 'dark':
            return "rgba(112, 87, 70)";
        case type === 'steel':
            return "rgba(183, 183, 206)";
        case type === 'fairy':
            return "rgba(214, 133, 173)";
        default:
            return 'magenta'; //something ovbious in case of an error
    }
};

const useStyles = (pokemon: any) => {
    const primaryType = pokemon.types[0].type.name;

    const backgroundColor = backgroundColorByType(primaryType);
    const textColor = textColorByType(primaryType)

    return {
        backgroundColor,
        textColor
    }
}

export default useStyles;