
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

//Wayfinding

const navLinks = document.querySelectorAll("#nav-bar a");
const pageTitle = document.getElementById("pageTitle");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        
        document.querySelectorAll("#nav-bar li").forEach(li => {
            li.classList.remove("current");
        });

        link.parentElement.classList.add("current");
        
        pageTitle.textContent = link.textContent;
    })
})