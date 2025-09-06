
const navButtom = document.querySelector("#ham-btn");

//Toggle the show class off and on
navButtom.addEventListener("click", () => {
    navButtom.classList.toggle("show");
    navBar.classList.toggle("show");
});

/************************NAVBAR************************/

const navBar = document.querySelector("#nav-bar");

    const name = "robson";
    let lastName = "Ribeiro"
    var age = 25
    
function teste(){
    console.log(age)
}
t