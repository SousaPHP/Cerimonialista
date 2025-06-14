// JavaScript para o menu responsivo (hambúrguer)
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fechar o menu ao clicar em um link (em mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // JavaScript para o Lightbox (Modal)
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    let currentImageIndex = 0;
    let images = []; // Array para armazenar os caminhos das imagens

    // Coleta todas as imagens da galeria e seus data-full-src
    galleryItems.forEach(item => {
        images.push(item.getAttribute('data-full-src'));
    });

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            lightboxModal.classList.add('active');
            currentImageIndex = index;
            lightboxImage.src = images[currentImageIndex];
        });
    });

    lightboxClose.addEventListener('click', () => {
        lightboxModal.classList.remove('active');
    });

    lightboxModal.addEventListener('click', (e) => {
        // Fecha o modal se clicar no fundo (fora da imagem e dos controles)
        if (e.target === lightboxModal) {
            lightboxModal.classList.remove('active');
        }
    });

    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation(); // Impede que o clique se propague para o fundo do modal
        currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
        lightboxImage.src = images[currentImageIndex];
    });

    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation(); // Impede que o clique se propague para o fundo do modal
        currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
        lightboxImage.src = images[currentImageIndex];
    });

    // Opcional: Navegação via teclado (setas esquerda/direita)
    document.addEventListener('keydown', (e) => {
        if (lightboxModal.classList.contains('active')) {
            if (e.key === 'ArrowLeft') {
                lightboxPrev.click();
            } else if (e.key === 'ArrowRight') {
                lightboxNext.click();
            } else if (e.key === 'Escape') {
                lightboxClose.click();
            }
        }
    });
});