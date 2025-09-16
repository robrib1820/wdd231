
const navButtom = document.querySelector("#ham-btn");
const navBar = document.getElementById("nav-bar");
//Toggle the show class off and on
navButtom.addEventListener("click", () => {
    navButtom.classList.toggle("show");
    navBar.classList.toggle("show");
});