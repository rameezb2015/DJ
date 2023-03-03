const mobile_nev = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header")
const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};

mobile_nev.addEventListener("click", () => toggleNavbar());