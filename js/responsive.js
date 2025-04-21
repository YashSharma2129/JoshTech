document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.overlay');
    const body = document.body;
    const logo = document.querySelector('.logo');

    // Toggle menu when clicking hamburger
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Adjust logo position for mobile
        if (window.innerWidth <= 768) {
            logo.classList.toggle('mobile-active');
        }
    });

    // Close menu when clicking on overlay
    overlay.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('menu-open');
        
        // Reset logo position
        if (window.innerWidth <= 768) {
            logo.classList.remove('mobile-active');
        }
    });

    // Close menu when clicking on a menu item
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('menu-open');
            
            // Reset logo position
            if (window.innerWidth <= 768) {
                logo.classList.remove('mobile-active');
            }
        });
    });

    // Responsive video resizing
    function resizeVideo() {
        const videoContainer = document.querySelector('.video-container');
        if (videoContainer) {
            const width = videoContainer.offsetWidth;
            const video = videoContainer.querySelector('video');
            if (video) {
                if (width < 500) {
                    video.setAttribute('controls', '');
                    const controlButton = document.getElementById('controlButton');
                    if (controlButton) {
                        controlButton.style.display = 'none';
                    }
                } else {
                    video.removeAttribute('controls');
                    const controlButton = document.getElementById('controlButton');
                    if (controlButton) {
                        controlButton.style.display = 'flex';
                    }
                }
            }
        }
    }

    // Run on page load and window resize
    resizeVideo();
    window.addEventListener('resize', resizeVideo);

    // Add a class when the window is scrolled
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
