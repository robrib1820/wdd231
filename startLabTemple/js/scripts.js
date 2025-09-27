import { temples } from "../data/temples.js";
// console.log(temples);

import { url } from "../data/temples.js";
// console.log(url);

const mydialog = document.querySelector("#mydialog");
const showHere = document.querySelector("#showHere");
const myTitle = document.querySelector("#mydialog h2")
const closeModal = document.querySelector("#mydialog button");
const myInfo = document.querySelector("#mydialog p")


closeModal.addEventListener("click", () => mydialog.close());

function displayItem(data) {
    console.log(data)
    data.forEach(x => {
        console.log(x)
        const photo = document.createElement("img");
        photo.src = `${url} ${x.path}`;
        photo.alt = x.name;
        photo.addEventListener("click", () => showStuff(x))
        showHere.appendChild(photo);
    });
}

displayItem(temples);

function showStuff(x) {
    myTitle.innerHTML = x.name;
    mydialog.showModal();
    myInfo.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}`;

}