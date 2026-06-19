<script lang="ts">
    import { HardDrive, GitFork, Globe, Link } from '@lucide/svelte';

    const sources = [
        {
            id: 'local',
            icon: HardDrive,
            title: 'Local',
            hint: 'Directory on your machine'
        },
        {
            id: 'github',
            icon: GitFork,
            title: 'GitHub',
            hint: 'Link to a GitHub repository'
        },
    ];
</script>

<div class="home">
    <div class="header">
        <h1 class="title">Welcome to Archi</h1>
        <p class="subtitle">Choose a project source to get started</p>
    </div>

    <div class="grid">
        {#each sources as source}
            {@const Icon = source.icon}

            <button class="card">
                <Icon size={32} />
                <span class="card-title">{source.title}</span>
                <span class="card-hint">{source.hint}</span>
            </button>
        {/each}
    </div>
</div>

<style>
    .home {
        /* Box Model */

        padding: var(--space-xl);

        gap: var(--space-xl);

        /* Flex */

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
    }

    .header {
        /* Box Model */

        gap: var(--space-sm);

        /* Flex */

        display: flex;
        flex-direction: column;

        /* Visual */

        text-align: center;
    }

    .title {
        /* Typography */

        font-size: var(--text-xl);
        font-weight: 800;

        /* Visual */

        color: var(--accent);
    }

    .subtitle {
        /* Typography */

        font-size: var(--text-sm);

        /* Visual */

        color: var(--text-secondary);
    }

    .grid {
        /* Box Model */

        width: 100%;
        max-width: 480px;
        gap: var(--space-lg);

        /* Flex */

        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .card {
        /* Box Model */

        padding: var(--space-xl) var(--space-lg);
        gap: var(--space-md);

        /* Flex */

        display: flex;
        flex-direction: column;
        align-items: center;

        /* Typography */

        font-family: inherit;

        /* Visual */

        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: var(--bg-secondary);
        color: var(--text-secondary);
        cursor: pointer;
    }

    .card:hover {
        /* Visual */

        border-color: var(--accent);
        background: var(--bg-tertiary);
        color: var(--accent);
    }

    .card-title {
        /* Typography */

        font-size: var(--text-base);
        font-weight: 600;

        /* Visual */

        color: var(--text);
    }

    .card-hint {
        /* Typography */

        font-size: var(--text-xs);

        /* Visual */

        color: var(--text-secondary);
        text-align: center;
    }
</style>
