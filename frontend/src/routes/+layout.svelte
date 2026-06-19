<script lang="ts">
    import '../app.css';
    import TopBar from '$lib/components/layout/TopBar.svelte';

    let { children } = $props();
</script>

<div class="app">
    <TopBar />

    <main class="content">
        {@render children()}
    </main>
</div>

<style>
    .app {
        /* Box Model */

        width: 100%;
        height: 100vh;

        /* Flex */

        display: flex;
        flex-direction: column;
    }

    .content {
        /* Flex */

        flex: 1;

        /* Visual */

        overflow-y: auto;
    }
</style>
