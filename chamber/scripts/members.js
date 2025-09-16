async function getMembersData() {
  try {
    const response = await fetch("./data/members.json");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // This function is called to show the members data. The data comes from a JSON and is passed as an argument where it is handled in the displayMembers function
    displayMembers(data);

  } catch (error) {
    console.error("Error to load JSON file:", error);
  }
}

const display = document.querySelector("article");

function displayMembers(members) {
  display.innerHTML = ""; // cleaning the variable

  members.forEach(member => {
    // Create the card
    const card = document.createElement("section");

    // Name
    const name = document.createElement("h4");
    name.textContent = member.name;

    // logo image
    const logo = document.createElement("img");
    logo.setAttribute("src", member.image);
    logo.setAttribute("alt", `${member.name} logo image`);
    logo.setAttribute("loading", "lazy");

    // Address
    const address = document.createElement("p");
    address.textContent = member.address;

    // Phone
    const phone = document.createElement("p");
    phone.textContent = member.phone;

    // Website
    const website = document.createElement("a");
    website.href = member.website;
    website.textContent = "Take a look";

   //Adding to the card
    
    card.appendChild(name);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
   

    //Putting the card on the article(variable created as "display")
    display.appendChild(card);
  });
}

// Button to switch between grid and list view on the browser
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");


gridbutton.addEventListener("click", showGrid);
listbutton.addEventListener("click", showList);

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
  getMembersData();
}
function showGrid() {
  display.classList.add("grid");
  display.classList.remove("list");
  getMembersData();
}