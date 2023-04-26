<script setup lang="ts">

</script>

<template>
    <header>
      <h1 class="text-center pb-8">Canyon Voice Over</h1>
        <nav class="flex">
            <RouterLink to="/" class="self-center">Home</RouterLink>
            <RouterLink to="/about" class="self-center">About</RouterLink>
            <RouterLink to="/demos" class="self-center">Demos</RouterLink>
            <RouterLink to="/downloadCV" class="self-center">Download CV</RouterLink>
            <RouterLink to="/contact" class="self-center">Contact</RouterLink>
        </nav>
    </header>
</template>

<style scoped>
@media only screen and (max-width: 600px) {
    nav {
        display: flex;
        flex-direction: column;
    }

    a {
            padding: 1.5rem;
            margin-bottom: 1rem;
    }

    a:hover {
        background-color: var(--bold-coral);
        font-weight: bold;
        font-size: 1.4rem;
        color: var(--dark-muted-green);
    }

    .router-link-active {
    background-color: var(--bold-coral);
    font-weight: bold;
    font-size: 1.4rem;
    color: var(--dark-muted-green);
}
}


h1 {
    font-family: 'Segoe UI';
    font-size: 3.5rem;
    font-weight: bold;
}

a {
    width: 50%;
    text-align: center;
    border-radius: 1rem;
    font-size: 1.1rem;
    padding: 0.5rem;
    margin-left: 1rem;
}

a:hover {
    background-color: var(--bold-coral);
    font-weight: bold;
    font-size: 1.2rem;
    color: var(--dark-muted-green);
}

.router-link-active {
    background-color: var(--bold-coral);
    font-weight: bold;
    font-size: 1.2rem;
    color: var(--dark-muted-green);
}
</style>