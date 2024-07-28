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

  