// ==========send email=====
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        if (!contactForm.checkValidity()) {
            return;
        }

        event.preventDefault();

        const name = document.querySelector('#name')?.value.trim();
        const email = document.querySelector('#email')?.value.trim();
        const phone = document.querySelector('#phone')?.value.trim();
        const subject = document.querySelector('#subject')?.value.trim();
        const message = document.querySelector('#message')?.value.trim();

        const bodyLines = [
            `Name: ${name}`,
            `Email: ${email}`,
            phone ? `Phone: ${phone}` : null,
            '',
            message
        ].filter(Boolean);

        const mailto = `mailto:manuraj082004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
        window.location.href = mailto;
        contactForm.reset();
    });
}


//========================= menuicon navbar=============
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


//========================= scroll section active link=============
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    // = ==========sticky navbar===============
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);


    // remove menu click navbar link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


// -----------------------swiper--------------------------
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// ===========dark light mode===================
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    darkModeIcon.classList.toggle('bx-moon');
    document.body.classList.toggle('dark-mode');
};


// ============scroll reveal=============
ScrollReveal({
    // reset:true,
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
// ScrollReveal instance
const sr = ScrollReveal();

// Revealing elements from the top
sr.reveal('.home-content, .heading', {
  origin: 'top'
});

// Revealing elements from the bottom
sr.reveal('.services-container, .portfolio-box, .testimonial-wrapper, .contact form', {
  origin: 'bottom'
});

// Revealing images from the bottom
sr.reveal('.home-img img', {
  origin: 'bottom'
});

// Revealing elements from the left
sr.reveal('.home-content h1, .about-img img, .home-content p', {
  origin: 'left'
});

// Revealing elements from the right
sr.reveal('.about-content', {
  origin: 'right'
});

// Service details popup
const serviceButtons = document.querySelectorAll('.service-btn');
const servicePopup = document.getElementById('service-popup');
const servicePopupBody = document.getElementById('service-popup-body');
const serviceClose = servicePopup ? servicePopup.querySelector('.experience-popup-close') : null;

const closeServicePopup = () => {
    if (!servicePopup) return;
    servicePopup.classList.remove('open');
    if (servicePopupBody) {
        servicePopupBody.innerHTML = '';
    }
    document.body.style.overflow = '';
};

serviceButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (!servicePopup || !servicePopupBody) return;
        const targetId = button.getAttribute('data-service');
        const template = document.getElementById(targetId);
        if (!template) return;
        servicePopupBody.innerHTML = '';
        servicePopupBody.appendChild(template.content.cloneNode(true));
        servicePopup.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
});

if (serviceClose) {
    serviceClose.addEventListener('click', closeServicePopup);
}

if (servicePopup) {
    servicePopup.addEventListener('click', (e) => {
        if (e.target === servicePopup) {
            closeServicePopup();
        }
    });
}

// Experience details popup
const expButtons = document.querySelectorAll('.experience-btn');
const expPopup = document.getElementById('experience-popup');
const expPopupBody = expPopup ? expPopup.querySelector('.experience-popup-body') : null;
const expClose = expPopup ? expPopup.querySelector('.experience-popup-close') : null;

const closeExperiencePopup = () => {
    if (!expPopup) return;
    expPopup.classList.remove('open');
    if (expPopupBody) {
        expPopupBody.innerHTML = '';
    }
    document.body.style.overflow = '';
};

expButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (!expPopup || !expPopupBody) return;
        const targetId = button.getAttribute('data-exp');
        const template = document.getElementById(targetId);
        if (!template) return;
        expPopupBody.innerHTML = '';
        expPopupBody.appendChild(template.content.cloneNode(true));
        expPopup.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
});

if (expClose) {
    expClose.addEventListener('click', closeExperiencePopup);
}

if (expPopup) {
    expPopup.addEventListener('click', (e) => {
        if (e.target === expPopup) {
            closeExperiencePopup();
        }
    });
}
  