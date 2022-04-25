import type { Pokemon } from "@typedefs";

const textColorByType = (type: string): string => {
    if (type === 'grass' || type === 'water' || type === 'poison' || type === 'fighting' || type === 'dragon' || type === 'dark' || type === 'ghost' || type === 'psychic') {
        return '#dcdcdc';
    } else {
        return '#2f4f4f';
    };
};

const contrastColorByTextColor = (textColor: string): string => {
    if (textColor === "#dcdcdc") {
        return "#2f4f4f"
    } else {
        return "#dcdcdc"
    }
}

const backgroundColorByType = (type: string): string => {
    switch(true) {
        case type === 'normal':
            return "#a9a9a9";
        case type === 'fire':
            return "#ee8130";
        case type === 'water':
            return "#6390f0";
        case type === 'electric':
            return "#f7d02c";
        case type === 'grass':
            return "#7ac74c";
        case type === 'ice':
            return "#96d9d6";
        case type === 'fighting':
            return "#c22e28";
        case type === 'poison':
            return "#a33ea1";
        case type === 'ground':
            return "#e2bf65";
        case type === 'flying':
            return "#a98ff3";
        case type === 'psychic':
            return "#f95587";
        case type === 'bug':
            return "#a6b91a";
        case type === 'rock':
            return "#b6a136";
        case type === 'ghost':
            return "#735797";
        case type === 'dragon':
            return  "#6f35fc";
        case type === 'dark':
            return "#705746";
        case type === 'steel':
            return "#b7b7ce";
        case type === 'fairy':
            return "#d685ad";
        default:
            return 'magenta'; //something ovbious in case of an error
    }
};

const doubleGradientByType = (typeColor: string, contrastColor: string): string => {
    return `linear-gradient(122deg, ${contrastColor} 0%, ${contrastColor} 36.75%, transparent 37%), linear-gradient(${typeColor}, ${typeColor})`;
};

interface TypeIcon {
    icon: string;
    background: string;
}

const iconsByType = (pokemon: Pokemon): Array<TypeIcon> => {
    const types = pokemon.types.map((el: any) => el.type.name);
    return types.map((el: string) => {
        return {
            icon: `https://raw.githubusercontent.com/LoneHippie/masterdex_v2/master/src/images/${el}.svg`,
            background: backgroundColorByType(el)
        }
    });
}

const useStyles = (pokemon: Pokemon) => {
    const primaryType = pokemon.types[0].type.name;

    const typeIcons = iconsByType(pokemon);
    const backgroundColor = backgroundColorByType(primaryType);
    const textColor = textColorByType(primaryType);
    const contrastColor = contrastColorByTextColor(textColor);
    const backgroundGradient = doubleGradientByType(backgroundColor, textColor);

    return {
        backgroundColor,
        textColor,
        contrastColor,
        typeIcons,
        backgroundGradient,
        textColorByType,
        backgroundColorByType,
        contrastColorByTextColor
    }
}

export default useStyles;