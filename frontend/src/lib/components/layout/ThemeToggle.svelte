<script lang="ts">
    import { Sun, Moon } from '@lucide/svelte';
    import { getTheme, toggleTheme } from '$lib/stores/theme.svelte';

    let theme = $derived(getTheme());
</script>

<button
    class="toggle"
    onclick={toggleTheme}
    aria-label="Toggle theme"
>
    {#if theme === 'dark'}
        <Sun size={16} />
    {:else}
        <Moon size={16} />
    {/if}
</button>

<style>
    .toggle {
        /* Box Model */

        width: 2.25rem;
        height: 2.25rem;

        /* Flex */

        display: flex;
        align-items: center;
        justify-content: center;

        /* Visual */

        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--bg-tertiary);
        color: var(--text-secondary);
        cursor: pointer;

        /* Animation */

        transition: all var(--transition-fast);
    }

    .toggle:hover {
        /* Visual */

        color: var(--text);
        background: var(--border);
    }
</style>
