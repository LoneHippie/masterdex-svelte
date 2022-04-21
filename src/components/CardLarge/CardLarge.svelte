<script lang="ts">
    import type { Pokemon } from "@typedefs";
    import { useStyles } from "@hooks";
    import { fly } from "svelte/transition";

    export let pokemon: Pokemon;
    let styles = {
        backgroundColor: "",
        textColor: "",
        typeIcons: [],
        backgroundGradient: "",
    }

    $: {
        const { backgroundColor, textColor, typeIcons, backgroundGradient } = useStyles(pokemon);
        styles.backgroundColor = backgroundColor;
        styles.textColor = textColor;
        styles.typeIcons = typeIcons;
        styles.backgroundGradient = backgroundGradient;
    }
</script>

<article 
    class="card" 
    style="background: {styles.backgroundGradient}"
    in:fly={{y: 800, duration: 300}}
    out:fly={{y: 800, duration: 200}}
>
    <div style="color: {styles.textColor}">{pokemon.name}</div>
</article>

<style lang="scss">
    @import "../../styles/variables";
    .card {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        padding-top: $header-height;

        z-index: 500;
    }
    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>