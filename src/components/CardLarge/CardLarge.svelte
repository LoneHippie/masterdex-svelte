<script lang="ts">
    import type { Pokemon } from "@typedefs";
    import { useStyles } from "@hooks";

    export let pokemon: Pokemon;
    let styles = {
        backgroundColor: "",
        textColor: "",
        typeIcons: []
    }

    $: {
        const { backgroundColor, textColor, typeIcons } = useStyles(pokemon);
        styles.backgroundColor = backgroundColor;
        styles.textColor = textColor;
        styles.typeIcons = typeIcons;
    }
</script>

<article class="card" style="background-color: {styles.backgroundColor}">
    <div style="color: {styles.textColor}">{pokemon.name}</div>
</article>

<style>
    .card {
        position: absolute;
        bottom: 0;
        left: 0;
        height: calc(100vh - var(--header-height));
        width: 100%;

        z-index: 500;
    }
    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>