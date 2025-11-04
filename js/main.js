document.addEventListener('DOMContentLoaded', () => {

    // DOM Elements
    const htmlElement = document.documentElement; // Target the <html> tag for data-theme
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const sections = document.querySelectorAll('section[id]');
    const modeToggle = document.getElementById('mode-toggle'); // New button
    
    // Select all elements that should fade in (now using the unified class)
    const animatedElements = document.querySelectorAll('.animated-item');

    // Select container elements for staggered animation
    const staggerContainers = [
        document.querySelector('.cards-grid'), 
        document.querySelector('.why-cards'), 
        document.querySelector('.tours-row'), 
        document.querySelector('.testimonials-row')
    ].filter(el => el != null); 
    
    // Add initial animations to hero section children
    const heroInner = document.querySelector('.hero-inner');
    if (heroInner) {
      heroInner.classList.add('fade-in');
    }
    
    // Preload background images (rest of existing setup)
    // ...

    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ===================================
    // DARK MODE LOGIC (NEW)
    // ===================================
    
    /**
     * Sets the theme, updates the <html> attribute, and saves to localStorage.
     * @param {string} theme - 'light' or 'dark'
     */
    const setTheme = (theme) => {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        // Update button icon
        if (theme === 'dark') {
            modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    };

    // Check saved preference or system preference on load
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Determine initial theme: saved > system > default (light)
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);

    // Event listener for the toggle button
    modeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    // ===================================
    // INTERSECTION OBSERVER FOR ANIMATIONS (Updated for Staggering)
    // ===================================

    const observerOptions = {
        root: null,
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px'
    };

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;

                if (staggerContainers.includes(target)) {
                    // Stagger animation for containers (grids)
                    const children = target.querySelectorAll('.animated-item');
                    children.forEach((child, i) => {
                        // Apply delay via style for staggering
                        child.style.animationDelay = `${i * 100}ms`; 
                        child.classList.add('fade-in');
                    });
                } else {
                    // Single element fade-in
                    target.classList.add('fade-in');
                }
                
                observer.unobserve(target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    // Observe all single animated elements AND all stagger containers
    animatedElements.forEach(el => {
        // Only observe if it's NOT a child of one of the stagger containers, 
        // OR if it IS a stagger container itself. This prevents observing children twice.
        const isChildOfContainer = staggerContainers.some(container => container.contains(el) && container !== el);
        
        if (!isChildOfContainer) {
            observer.observe(el);
        }
    });

    staggerContainers.forEach(container => observer.observe(container));


    // ===================================
    // REST OF EXISTING CODE (Navigation, Form Submission)
    // ===================================
    
    // --- Navigation Toggle and Smooth Scrolling (code remains the same) ---
if (navToggle && navLinks) {
navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Toggles the .active class on the navLinks
    });

    // THIS PART IS ALSO NEEDED TO CLOSE THE MENU
    navLinks.addEventListener('click', (e) => {
        // Check if a link inside the nav was clicked
        if (e.target.closest('a')) { 
            navLinks.classList.remove('active'); // Always close menu after click
        }
    });
}
    
    // --- Navbar scroll behavior (Shadow & Hide) ---
    let lastScroll = 0;
    window.addEventListener('scroll', () => { /* ... */ });
    
    // --- Active navigation highlight (code remains the same) ---
    const highlightNavigation = () => { /* ... */ };
    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); 
    
    // --- Contact Form Submission (code remains the same) ---
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) { /* ... */ });
    }

});