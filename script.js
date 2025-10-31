document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    
    hamburger.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.remove('active');
        }
    });
});