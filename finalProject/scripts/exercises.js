import { getWorkoutA } from "./workoutA.js";
import { getWorkoutB } from "./workoutB.js";
import { getWorkoutC } from "./workoutC.js";

const container = document.getElementById("exercise-container");

const btnA = document.getElementById("btn-a");
const btnB = document.getElementById("btn-b");
const btnC = document.getElementById("btn-c");

function showExercises(data) {
  container.innerHTML = "";

  data.forEach(exercise => {
    const card = document.createElement("div");
    card.classList.add("exercise-card");

    card.innerHTML = `
      <h3>${exercise.name}</h3>
      <p><strong>Group:</strong> ${exercise.muscleGroup}</p>
      <p><strong>Series:</strong> ${exercise.sets}</p>
      <p><strong>Rest time:</strong> ${exercise.rest}</p>
      <p>${exercise.description}</p>
      <img src="${exercise.gifUrl}" alt="${exercise.name}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

btnA.addEventListener("click", async () => {
  const workout = await getWorkoutA();
  showExercises(workout);
});

btnB.addEventListener("click", async () => {
  const workout = await getWorkoutB();
  showExercises(workout);
});

btnC.addEventListener("click", async () => {
  const workout = await getWorkoutC();
  showExercises(workout);
});
