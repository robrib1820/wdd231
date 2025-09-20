const businessCards = document.getElementById("section-business");

async function getBusiness() {
  try {
    const response = await fetch("./data/members.json");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    getBusinessMember(data)
  } catch (error) {
    console.error("Error to load JSON file:", error);
  }
}

function getBusinessMember(business) {

    business.forEach((business, index) => {
        if (index < 3) {
            const card = document.createElement("div");
            const name = document.createElement("h3");
            name.textContent = business.name;

            const logo = document.createElement("img");
            logo.setAttribute("src", business.image);
            logo.setAttribute("alt", `${business.name} logo image`);
            logo.setAttribute("loading", "lazy");

            
            const sector = document.createElement("p");
            sector.textContent = business.sector;

        
            const phone = document.createElement("p");
            phone.textContent = business.phone;

            
            const website = document.createElement("a");
            website.href = business.website;
            website.textContent = "Take a look";

            card.appendChild(name);
            card.appendChild(logo);
            card.appendChild(sector);
            card.appendChild(phone);
            card.appendChild(website);

            businessCards.appendChild(card);
        }
        
    });
}
getBusiness();