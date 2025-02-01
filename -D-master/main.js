function toggleDarkMode() {
    const body = document.body;

    body.classList.toggle('dark-mode');
    
    const button = document.querySelector('button');
    button.classList.toggle('dark-mode');
}
