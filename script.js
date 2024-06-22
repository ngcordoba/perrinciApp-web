document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');

    menuIcon.addEventListener('click', function () {
        mobileNavLinks.classList.toggle('show');
    });

    const mobileLinks = document.querySelectorAll('.mobile-nav-links li');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileNavLinks.classList.remove('show');
        });
    });

    const links = document.querySelectorAll('.nav-links li');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSelector = this.querySelector('a').getAttribute('href');
            scrollToElement(targetSelector);
            mobileNavLinks.classList.remove('show'); 
        });
    });
});

function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToAppSection(event) {
    event.preventDefault(); 
    const appSection = document.getElementById('mobileapp');
    const yOffset = -60; 
    const y = appSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' }); 
}

