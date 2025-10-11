const button = document.getElementById("ham-btn");
const navigation = document.getElementById("nav-bar");

button.addEventListener("click", () => {
    button.classList.toggle("show");
    navigation.classList.toggle("show");
})