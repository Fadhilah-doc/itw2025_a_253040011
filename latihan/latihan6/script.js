const menutoogle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menutoogle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});