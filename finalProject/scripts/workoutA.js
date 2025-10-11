export async function getWorkoutA() {
  const response = await fetch("./data/exercises.json");
  const data = await response.json();
  return data.workoutA;
}

