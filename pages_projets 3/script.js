let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const track = document.querySelector(".carousel-track");
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    let index = 0;
    
    function updateCarousel() {
        // On récupère la largeur d'une slide dynamiquement
        const slideWidth = slides[0].clientWidth;
        // CORRECTION ICI : Ajout des backticks ``
        track.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
        index++;
        if (index >= slides.length) {
            index = 0;
        }
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        index--;
        if (index < 0) {
            index = slides.length - 1;
        }
        updateCarousel();
    });

    // Optionnel : Gérer le redimensionnement de la fenêtre
    window.addEventListener("resize", updateCarousel);
});