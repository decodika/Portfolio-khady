if (carousel && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
        // Défile vers la droite de la largeur du conteneur
        carousel.scrollBy({ left: carousel.offsetWidth, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        // Défile vers la gauche
        carousel.scrollBy({ left: -carousel.offsetWidth, behavior: 'smooth' });
    });
}
