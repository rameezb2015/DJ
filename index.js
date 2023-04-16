const mobile_nev = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header")
const event = document.querySelector(".events")
const about = document.querySelector(".about")
const contact = document.querySelector(".contact")
const toggleNavbar = () => {
    nav_header.classList.toggle("active");
    // event.classList.toggle("hidden")
    // about.classList.toggle("hidden")
    // contact.classList.toggle("hidden")
    about.classList.toggle("marginAbout")
};

manageMenuHide = () => {
    nav_header.classList.toggle("active");
    about.classList.remove("marginAbout")
}

mobile_nev.addEventListener("click", () => toggleNavbar());



