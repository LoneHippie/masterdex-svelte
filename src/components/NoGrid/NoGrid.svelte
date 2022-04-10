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
        position: relative;
        height: calc(100vh - var(--header-height));
    }

    .container {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 3rem;
        border-radius: 10px;
        box-shadow: 2px 2px 17px 2px var(--color-black);
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