const mydialog = document.querySelector("#mydialog");
const closeModal = document.querySelector("#closeModal");
const showHere = document.querySelector("#showHere");
const myPersonalButton = document.getElementById("myPersonalButton");
const myNutriButton = document.getElementById("myNutriButton");

closeModal.addEventListener("click", () => mydialog.close());

function displayPersonalInfo() {
    showHere.innerHTML = "";
    const personalInfo = document.createElement("div");
    personalInfo.classList.add("personal");
    personalInfo.innerHTML = `
        <h2>Energyn Personal Trainer</h2>
        <p>Hire a personal trainer to help you throughout your weekly workouts and receive assistance with exercises types, guidance on quantity, load, repetitions, sets, rest, as well as physical support for using gym equipment.</p>
        <p>Monthly fee: $200</p>
    `
    showHere.appendChild(personalInfo);
}
function displayNutriInfo() {
    showHere.innerHTML = "";
    const nutriInfo = document.createElement("div");
    nutriInfo.classList.add("nutri");
    nutriInfo.innerHTML = `
        <h2>Energyn Nutritionist</h2>
        <p>Make your appointment with a expert nutritionist in weight loss and muscle gain. You can also request diet and menu ideas for your diet.</p>
        <p>Appointment fee: $300</p>
    `
    showHere.appendChild(nutriInfo);
}

myPersonalButton.addEventListener("click", () => {
    displayPersonalInfo();
    mydialog.showModal();
} )
myNutriButton.addEventListener("click", () => {
    displayNutriInfo();
    mydialog.showModal();
})