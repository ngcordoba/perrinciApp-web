document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');

    menuIcon.addEventListener('click', function () {
        mobileNavLinks.classList.toggle('show');
    });

    // Cierra el menú móvil al hacer clic en un enlace del menú
    const mobileLinks = document.querySelectorAll('.mobile-nav-links li');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileNavLinks.classList.remove('show');
        });
    });

    // Agrega el desplazamiento suave para los enlaces
    const links = document.querySelectorAll('.nav-links li');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSelector = this.querySelector('a').getAttribute('href');
            scrollToElement(targetSelector);
            mobileNavLinks.classList.remove('show'); // Cierra el menú en dispositivos móviles al hacer clic en un enlace
        });
    });
});

function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleMobileMenu() {
    const mobileNavLinks = document.querySelector('mobile-nav-links');
    mobileNavLinks.classList.toggle('show');
}

function scrollToAppSection() {
    var appSection = document.getElementById("mobileapp");
    appSection.scrollIntoView({ behavior: "smooth" });
}