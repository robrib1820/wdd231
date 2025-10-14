
const messageCard = document.getElementById("visit-message");

const lastVisit = localStorage.getItem("lastVisit");

const now = Date.now();
console.log(now);


if (!lastVisit) {
    messageCard.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const lastTime = parseInt(lastVisit, 10);
    const difference = now - lastTime;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (days < 1) {
        messageCard.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        messageCard.textContent = "You last visited 1 day ago.";
    } else {
        messageCard.textContent = `You last visited ${days} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);

