/*
 * JavaScript interactions for MRP Solutions website
 * Handles mobile navigation toggling, scroll reveal animations and dynamic
 * year display in the footer. It uses the IntersectionObserver API to
 * animate elements into view as they enter the viewport.
 */

// Toggle mobile navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close the menu when a link is clicked (mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Update footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Intersection Observer for scroll reveal
const revealElements = document.querySelectorAll('.feature, .benefit, .about-text, .about-image, .contact-content');

const observerOptions = {
    threshold: 0.15
};

const revealOnIntersect = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(revealOnIntersect, observerOptions);

revealElements.forEach(element => {
    observer.observe(element);
});