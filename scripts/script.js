const navLinks = document.querySelectorAll(".nav-link");
const mainMenu = document.getElementById("main-menu")


for (let i = 0; i < navLinks.length; i++) {
    let tempMenu = document.getElementById(`menu_${i}`);

    navLinks[i].addEventListener("mouseover", () => {
        navLinks[i].classList.add("hovered");
        tempMenu.classList.add("open");
    })
    navLinks[i].addEventListener("mouseout", () => {
        navLinks[i].classList.remove("hovered");
        tempMenu.classList.remove("open");
    })
}