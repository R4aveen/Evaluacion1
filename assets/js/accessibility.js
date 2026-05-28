document.addEventListener('DOMContentLoaded', () => {
    const btnToggle = document.getElementById('btn-accesibilidad-toggle');
    const dropdown = document.getElementById('acc-dropdwon');
    const menuContainer = document.getElementById('acc-menu-container');

    const btnIncreaseFont = document.getElementById('btn-increase-font');
    const btnDecreaseFont = document.getElementById('btn-decrease-font');
    const btnDarkMode = document.getElementById('btn-dark-mode');
    const btnReset = document.getElementById('btn-reset-acc');

    btnToggle?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle('d-none');
    });

    document.addEventListener('click', (e) => {
        if (dropdown && !dropdown.classList.contains('d-none') && !menuContainer.contains(e.target)) {
            dropdown.classList.add('d-none');
        }
    });

    dropdown?.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    const applyTheme = (isDark) => {
        if (isDark) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        applyTheme(true);
    }

    btnDarkMode?.addEventListener('click', () => {
        const isDark = !document.body.classList.contains('dark-mode');
        applyTheme(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    let currentFontSize = parseInt(localStorage.getItem('fontSize')) || 100;

    const updateFont = () => {
        document.documentElement.style.fontSize = `${currentFontSize}%`;
        localStorage.setItem('fontSize', currentFontSize);
    };

    if (currentFontSize !== 100) {
        updateFont();
    }

    btnIncreaseFont?.addEventListener('click', () => {
        if (currentFontSize < 150) {
            currentFontSize += 10;
            updateFont();
        }
    });

    btnDecreaseFont?.addEventListener('click', () => {
        if (currentFontSize > 80) {
            currentFontSize -= 10;
            updateFont();
        }
    });

    btnReset?.addEventListener('click', () => {
        applyTheme(false);
        localStorage.removeItem('theme');

        currentFontSize = 100;
        updateFont();
    });
});
