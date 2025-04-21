document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    // Toggle menu when clicking hamburger
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Close menu when clicking on overlay
    overlay.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('menu-open');
    });

    // Close menu when clicking on a menu item
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Responsive video resizing
    function resizeVideo() {
        const videoContainer = document.querySelector('.video-container');
        if (videoContainer) {
            const width = videoContainer.offsetWidth;
            const video = videoContainer.querySelector('video');
            if (width < 500) {
                video.setAttribute('controls', '');
                document.getElementById('controlButton').style.display = 'none';
            } else {
                video.removeAttribute('controls');
                document.getElementById('controlButton').style.display = 'flex';
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
