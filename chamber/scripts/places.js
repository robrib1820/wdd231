import { places } from "../data/places.mjs";

const showHere = document.getElementById("allplaces");

function displayPlaces(places) {
    places.forEach(place => {

        const card = document.createElement("div");
        const photo = document.createElement("img");
        photo.src = `images/${place.photo_url}`;
        photo.alt = place.name;

        card.appendChild(photo);

        const title = document.createElement("h2");
        title.innerText = place.name;

        card.appendChild(title);

        const address = document.createElement("address");
        address.innerText = place.address;

        card.appendChild(address);

        const cost = document.createElement("span");
        cost.innerText = place.cost

        card.appendChild(cost);

        const description = document.createElement("p");
        description.innerText = place.description;

        card.appendChild(description);
        
        showHere.appendChild(card);

    });
}

displayPlaces(places);