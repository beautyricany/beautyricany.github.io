/**
 * Initializes the image lightbox functionality
 * Handles opening, closing, and navigation of the lightbox modal
 */
export function initializeLightbox() {
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImage = document.getElementById('lightbox-image') as HTMLImageElement;
    const closeBtn = document.querySelector('.lightbox-close');

    // Gather all clickable images
    const clickableImages = document.querySelectorAll('.clickable-image');
    
    clickableImages.forEach((img) => {
        img.addEventListener('click', function(this: HTMLElement) {
            const imageSrc = this.dataset.src || '';
            openLightbox(imageSrc);
        });
    });

    function openLightbox(imageSrc: string) {
        if (lightbox && lightboxImage) {
            lightboxImage.src = imageSrc;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeLightbox() {
        if (lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Close button
    closeBtn?.addEventListener('click', closeLightbox);

    // Close on overlay click
    lightbox?.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox?.classList.contains('active') && e.key === 'Escape') {
            closeLightbox();
        }
    });
}
