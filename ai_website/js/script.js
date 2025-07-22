// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple scroll animation for elements (example)
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.feature-card, #product, #contact');

    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('active'); // Add a class to trigger animation
        } else {
            element.classList.remove('active');
        }
    });
});

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
