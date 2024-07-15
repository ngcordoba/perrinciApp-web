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


function formatDateToYYYYMMDD(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
}

/// SINGIN
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const formData = new FormData(this); 

    const userType = sessionStorage.getItem('userType'); 
    let url;
    let data;

    if (userType === 'DOG_OWNER') {
        url = 'https://perrincibe.onrender.com/create/dog/owner';
        data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            phone: formData.get('phone'),
            dni: formData.get('dni'),
            userName: formData.get('userName'),
            userBorn: formatDateToYYYYMMDD(formData.get('born')),
            email: formData.get('email'),
            password: formData.get('password'),
            addresses: [
                {
                    street: formData.get('street'),
                    number: formData.get('number'),
                    department: formData.get('department'),
                    city: formData.get('city'),
                    state: formData.get('state')
                }
            ],
            type: 'DOG_OWNER',
            dogs: [
                {
                    name: formData.get('dogName'),
                    born: formatDateToYYYYMMDD(formData.get('dogBorn')),
                    breed: formData.get('breed'),
                    weight: formData.get('weight')
                }
            ]
        };
    } else if (userType === 'WALKER') {
        url = 'https://perrincibe.onrender.com/create/walker';
        data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            phone: formData.get('phone'),
            dni: formData.get('dni'),
            userName: formData.get('userName'),
            userBorn: formatDateToYYYYMMDD(formData.get('born')),
            email: formData.get('email'),
            password: formData.get('password'),
            addresses: [
                {
                    street: formData.get('street'),
                    number: formData.get('number'),
                    department: formData.get('department'),
                    city: formData.get('city'),
                    state: formData.get('state')
                }
            ],
            type: 'WALKER',
            cbu: formData.get('cbu'),
            alias: formData.get('alias')
        };
    } else {
        console.error('Invalid user type');
        return;
    }

    console.log('Datos del formulario:', data);
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        window.location.href = 'registerSuccessfully.html';
    })
    .catch((error) => {
        console.error('Error:', error);
        window.location.href = 'registerError.html';
    });
});
