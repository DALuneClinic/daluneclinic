// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        // Allow closing an already open accordion
        const currentlyActive = header.classList.contains('active');
        
        // Close all accordions in the same card (optional, if needed)
        // header.closest('.accordion').querySelectorAll('.accordion-header').forEach(h => {
        //     h.classList.remove('active');
        //     h.nextElementSibling.style.maxHeight = 0;
        // });

        if (!currentlyActive) {
            header.classList.add('active');
            const content = header.nextElementSibling;
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            header.classList.remove('active');
            const content = header.nextElementSibling;
            content.style.maxHeight = 0;
        }
    });
});


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Calculate header height to offset
            const headerOffset = document.querySelector('header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // A smaller value for a quicker effect
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        header.style.padding = '15px 0';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        header.style.padding = '20px 0';
    }
});
