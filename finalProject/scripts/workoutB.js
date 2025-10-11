export async function getWorkoutB() {
  const response = await fetch("./data/exercises.json");
  const data = await response.json();
  return data.workoutB;
}

