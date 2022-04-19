<script lang="ts">
</script>

<section class="nogrid">
    <div class="container">
        <h1>Welcome to Masterdex Svelte Edition!</h1>

        <p>Please use the searchbar above to start searching for pokemon and stuff!</p>
    </div>
</section>

<style>
    .nogrid {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .container {
        padding: 3rem;
        border-radius: 10px;
        box-shadow: 2px 2px 17px 2px var(--color-black);
        min-height: 30rem;
    }

    h1 {
        font-size: 5rem;
        text-align: center;
        color: var(--color-white);

        margin-bottom: 3rem;
    }

    p {
        font-size: 2.2rem;
        color: var(--color-white);
    }
</style>