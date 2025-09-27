const mydialog = document.querySelector("#mydialog");
const closeModal = document.querySelector("#closeModal");
const myButtonList = document.querySelectorAll(".myButton");
const showHere = document.querySelector("#showHere");

closeModal.addEventListener("click", () => mydialog.close());

async function getMembership(index) {
  try {
    const response = await fetch("./data/membershiplvls.json");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    displayInfo(data.memberships[index]);
  } catch (error) {
    console.error("Error to load JSON file:", error);
  }
}

function displayInfo(member) {
  showHere.innerHTML = "";
  const memberShip = document.createElement('div');
  memberShip.classList.add('memberShip');
  memberShip.innerHTML = `
      <h2>${member.name}</h2>
      <p><strong>Fee:</strong> $${member.fee}</p>
      <p>${member.description}</p>
      <ul>
        ${member.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
      </ul>
  `;
  showHere.appendChild(memberShip);
}

myButtonList.forEach((button, index) => {
  button.addEventListener("click", async () => {
    await getMembership(index);
    mydialog.showModal();
  });
});



