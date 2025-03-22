const navToggle = document.getElementById('nav-toggle');
const header = document.querySelector('header');

navToggle.addEventListener('change', () => {
    if (navToggle.checked) {
        header.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
        header.style.opacity = '0';
        header.style.visibility = 'hidden';
    } else {
        header.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
        header.style.opacity = '1';
        header.style.visibility = 'visible';
    }
});