<script lang="ts">
    import { Search } from '@lucide/svelte';
    import ThemeToggle from './ThemeToggle.svelte';
</script>

<header class="topbar">
    <div class="left">
        <span class="logo">Archi</span>
    </div>

    <div class="center">
        <!-- <div class="picker">
            <input
                class="input"
                type="text"
                placeholder="/path/to/project"
            />
            <button class="btn">
                <Search size={16} />
                Scan
            </button>
        </div> -->
    </div>

    <div class="right">
        <ThemeToggle />
    </div>
</header>

<style>
    .topbar {
        /* Box Model */

        height: 3rem;
        padding: 0 var(--space-lg);
        gap: var(--space-lg);

        /* Flex */

        flex-shrink: 0;
        display: flex;
        align-items: center;

        /* Visual */

        background: var(--bg-secondary);
        border-bottom: 1px solid var(--border);
    }

    .left {
        /* Flex */

        display: flex;
        align-items: center;
    }

    .logo {
        /* Typography */

        font-size: var(--text-lg);
        font-weight: 700;

        /* Visual */

        color: var(--accent);
        white-space: nowrap;
    }

    .center {
        /* Flex */

        flex: 1;
        display: flex;
        justify-content: center;
    }

    .right {
        /* Flex */

        display: flex;
        align-items: center;
        gap: var(--space-sm);
    }

    .picker {
        /* Box Model */

        width: 100%;
        max-width: 600px;
        gap: var(--space-sm);

        /* Flex */

        display: flex;
    }

    .input {
        /* Box Model */

        flex: 1;
        padding: var(--space-sm) var(--space-md);

        /* Typography */

        font-size: var(--text-base);
        font-family: var(--font-mono);

        /* Visual */

        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--bg);
        color: var(--text);
        outline: none;
    }

    .input:focus {
        /* Visual */

        border-color: var(--accent);
    }

    .btn {
        /* Box Model */

        padding: var(--space-sm) var(--space-lg);
        gap: 0.375rem;

        /* Flex */

        display: inline-flex;
        align-items: center;

        /* Typography */

        font-size: var(--text-base);

        /* Visual */

        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--accent);
        color: #fff;
        cursor: pointer;
        white-space: nowrap;
    }

    .btn:hover {
        /* Visual */

        background: var(--accent-hover);
    }
</style>
