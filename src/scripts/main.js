document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to My Personal Website!');
    
    const toggleButton = document.getElementById('toggle-theme');
    const themeIcon = document.querySelector('.theme-icon');

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            // Change the icon based on the theme
            if (document.body.classList.contains('dark-theme')) {
                themeIcon.textContent = '🌙'; // Moon icon for dark theme
            } else {
                themeIcon.textContent = '☀️'; // Sun icon for light theme
            }
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});