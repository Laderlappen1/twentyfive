document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const overlay = document.querySelector(".overlay");

    function toggleMenu() {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
        overlay.classList.toggle("active");
    }

    hamburger.addEventListener("click", toggleMenu);

    overlay.addEventListener("click", toggleMenu);
});
