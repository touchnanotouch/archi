let currentTheme = $state(getInitialTheme());


export function toggleTheme(): void {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', currentTheme);

    if (currentTheme === 'light') {
        document.documentElement.classList.add('light');
    } else {
        document.documentElement.classList.remove('light');
    }
}


export function setTheme(t: string): void {
    currentTheme = t;
    localStorage.setItem('theme', t);

    if (t === 'light') {
        document.documentElement.classList.add('light');
    } else {
        document.documentElement.classList.remove('light');
    }
}


export function getTheme(): string {
    return currentTheme;
}


function getInitialTheme(): string {
    if (typeof localStorage !== 'undefined') {
        return localStorage.getItem('theme') || 'dark';
    }

    return 'dark';
}
