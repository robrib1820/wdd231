const container = document.getElementById("recipe-container");
const preBtn = document.getElementById("pre-btn");
const postBtn = document.getElementById("post-btn");

async function getRecipes(foods) {
    for (let food of foods) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`);
        const data = await response.json();

        if (data.meals) {
            data.meals.forEach(meal => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <div class="card-content">
                    <h2>${meal.strMeal}</h2>
                    <p><strong>Categorie:</strong> ${meal.strCategory}</p>
                    <p><strong>Origin:</strong> ${meal.strArea}</p>
                    <p>${meal.strInstructions}</p>
                    <a href="${meal.strYoutube}" target="_blank" style="color:#C80036;">See video</a>
                </div>
                `
                container.appendChild(card);
            })
        }
    }
}
const preWorkout = ["oat", "banana", "smoothie", "egg", "avocado"];
const postWorkout = ["chicken", "salmon", "rice", "pasta", "protein"];

preBtn.addEventListener("click", () => {
    preBtn.classList.add("active");
    postBtn.classList.remove("active");
    container.innerHTML = "";
    getRecipes(preWorkout);
});

postBtn.addEventListener("click", () => {
    postBtn.classList.add("active");
    preBtn.classList.remove("active");
    container.innerHTML = "";
    getRecipes(postWorkout);
});


