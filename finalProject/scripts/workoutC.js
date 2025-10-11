export async function getWorkoutC() {
  const response = await fetch("./data/exercises.json");
  const data = await response.json();
  return data.workoutC;
}
