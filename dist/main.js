// Main TypeScript file for Permanent Beauty website
// Handles navigation, form validation, gallery filtering, and interactivity
class PermanentBeautyWebsite {
    constructor() {
        this.menuToggle = document.querySelector('.menu-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.contactForm = document.querySelector('#contactForm');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.galleryItems = document.querySelectorAll('.gallery-item');
        this.init();
    }
    init() {
        this.setupMobileMenu();
        this.setupSmoothScroll();
        this.setupFormValidation();
        this.setupGalleryFilter();
        this.setupScrollAnimations();
    }
    // Mobile Menu Toggle
    setupMobileMenu() {
        if (this.menuToggle && this.navMenu) {
            this.menuToggle.addEventListener('click', () => {
                this.navMenu?.classList.toggle('active');
                this.animateMenuIcon();
            });
            // Close menu when clicking on a link
            const navLinks = this.navMenu.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.navMenu?.classList.remove('active');
                });
            });
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                const target = e.target;
                if (!target.closest('.navbar') && this.navMenu?.classList.contains('active')) {
                    this.navMenu.classList.remove('active');
                }
            });
        }
    }
    animateMenuIcon() {
        if (this.menuToggle) {
            this.menuToggle.classList.toggle('active');
        }
    }
    // Smooth Scrolling for anchor links
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href && href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }
    // Form Validation
    setupFormValidation() {
        if (!this.contactForm)
            return;
        this.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.validateForm()) {
                this.submitForm();
            }
        });
        // Real-time validation
        const inputs = this.contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
        });
    }
    validateForm() {
        if (!this.contactForm)
            return false;
        let isValid = true;
        const formData = {};
        // Name validation
        const nameInput = this.contactForm.querySelector('#name');
        if (!this.validateField(nameInput))
            isValid = false;
        else
            formData.name = nameInput.value;
        // Email validation
        const emailInput = this.contactForm.querySelector('#email');
        if (!this.validateField(emailInput))
            isValid = false;
        else
            formData.email = emailInput.value;
        // Phone validation
        const phoneInput = this.contactForm.querySelector('#phone');
        if (!this.validateField(phoneInput))
            isValid = false;
        else
            formData.phone = phoneInput.value;
        // Service validation
        const serviceInput = this.contactForm.querySelector('#service');
        if (!this.validateField(serviceInput))
            isValid = false;
        else
            formData.service = serviceInput.value;
        return isValid;
    }
    validateField(field) {
        const value = field.value.trim();
        const errorElement = document.querySelector(`#${field.id}Error`);
        // Clear previous error
        if (errorElement) {
            errorElement.textContent = '';
        }
        field.style.borderColor = '';
        // Required field check
        if (field.hasAttribute('required') && !value) {
            this.showError(field, errorElement, 'This field is required');
            return false;
        }
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                this.showError(field, errorElement, 'Please enter a valid email address');
                return false;
            }
        }
        // Phone validation
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(value) || value.length < 10) {
                this.showError(field, errorElement, 'Please enter a valid phone number');
                return false;
            }
        }
        // Name validation
        if (field.id === 'name' && value) {
            if (value.length < 2) {
                this.showError(field, errorElement, 'Name must be at least 2 characters');
                return false;
            }
        }
        return true;
    }
    showError(field, errorElement, message) {
        if (errorElement) {
            errorElement.textContent = message;
        }
        field.style.borderColor = 'var(--color-primary)';
    }
    submitForm() {
        if (!this.contactForm)
            return;
        // Simulate form submission
        const formData = new FormData(this.contactForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log('Form submitted:', data);
        // Show success message
        const successMessage = document.querySelector('#formSuccess');
        if (successMessage) {
            successMessage.style.display = 'block';
            this.contactForm.reset();
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }
        // In a real application, you would send this data to a server
        // Example:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // });
    }
    // Gallery Filtering
    setupGalleryFilter() {
        if (this.filterButtons.length === 0)
            return;
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                // Update active button
                this.filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                // Filter gallery items
                this.filterGalleryItems(filter);
            });
        });
    }
    filterGalleryItems(filter) {
        this.galleryItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filter === 'all' || filter === category) {
                item.style.display = 'block';
                item.style.animation = 'fadeInUp 0.5s ease';
            }
            else {
                item.style.display = 'none';
            }
        });
    }
    // Scroll Animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        // Observe elements
        const animateElements = document.querySelectorAll(`
            .feature-card,
            .service-card,
            .team-member,
            .value-item,
            .process-step,
            .testimonial-card,
            .faq-item
        `);
        animateElements.forEach(el => observer.observe(el));
    }
}
// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PermanentBeautyWebsite();
});
// Add fade-in animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    .feature-card,
    .service-card,
    .team-member,
    .value-item,
    .process-step,
    .testimonial-card,
    .faq-item {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);
// Export for use in other modules if needed
export { PermanentBeautyWebsite };
