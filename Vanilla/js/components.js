// Component loader for header and footer
class ComponentLoader {
    static async loadComponent(elementId, componentPath) {
        try {
            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`Failed to load ${componentPath}`);
            }
            const html = await response.text();
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = html;
            }
        } catch (error) {
            console.error('Error loading component:', error);
        }
    }

    static setActiveMenuItem() {
        // Get current page filename
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        // Find all nav menu links
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        navLinks.forEach(link => {
            // Remove any existing active class
            link.classList.remove('active');
            
            // Add active class to current page link
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    static async init() {
        // Load header and footer
        await Promise.all([
            this.loadComponent('header-placeholder', 'components/header.html'),
            this.loadComponent('footer-placeholder', 'components/footer.html')
        ]);
        
        // Set active menu item after header is loaded
        this.setActiveMenuItem();
        
        // Dispatch custom event to signal components are loaded
        window.dispatchEvent(new Event('componentsLoaded'));
    }
}

// Initialize components when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ComponentLoader.init());
} else {
    ComponentLoader.init();
}
