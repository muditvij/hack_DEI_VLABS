AOS.init({ duration: 800, once: true, offset: 50 });
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Add shadow and background when scrolled
    if (currentScrollY > 20) { 
        navbar.classList.add('shadow-lg', 'bg-black/90'); 
    } else { 
        navbar.classList.remove('shadow-lg', 'bg-black/90'); 
    }
    
    // Hide navbar when scrolling down, show when scrolling up
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollY = currentScrollY;
});
const deadline = new Date("Jan 30, 2026 23:59:59").getTime();
const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = deadline - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = (days < 10 ? "0" : "") + days;
    document.getElementById("hours").innerHTML = (hours < 10 ? "0" : "") + hours;
    document.getElementById("minutes").innerHTML = (minutes < 10 ? "0" : "") + minutes;
    document.getElementById("seconds").innerHTML = (seconds < 10 ? "0" : "") + seconds;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").parentElement.parentElement.innerHTML = "<div class='text-red-500 font-bold text-2xl'>REGISTRATION CLOSED</div>";
    }
}, 1000);

// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    mobileMenu.classList.toggle('translate-x-full');

    // Optional: Prevent scrolling when menu is open
    document.body.classList.toggle('overflow-hidden');
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMenu);
}

if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', toggleMenu);
}

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
    });
});
