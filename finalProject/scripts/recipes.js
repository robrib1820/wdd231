const container = document.getElementById("recipe-container");
const preBtn = document.getElementById("pre-btn");
const postBtn = document.getElementById("post-btn");

async function getRecipes(foods) {
    for (let food of foods) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`);
            
            if (!response.ok) {
                throw new Error(`Error to search for recipes: ${response.status}`);
            }

            const data = await response.json();

            if (data.meals) {
                data.meals.forEach(meal => {
                    const card = document.createElement("div");
                    card.classList.add("card");

                    card.innerHTML = `
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" loading="lazy">
                    <div class="card-content">
                        <h2>${meal.strMeal}</h2>
                        <p><strong>Category:</strong> ${meal.strCategory}</p>
                        <p><strong>Origin:</strong> ${meal.strArea}</p>
                        <p>${meal.strInstructions}</p>
                        <a href="${meal.strYoutube}" target="_blank" style="color:#C80036;">See video</a>
                    </div>
                    `;
                    container.appendChild(card);
                });
            } else {
                const msg = document.createElement("p");
                msg.textContent = `No recipes found for "${food}".`;
                container.appendChild(msg);
            }
        } catch (error) {
            console.error("Error to load recipes:", error);
            const msg = document.createElement("p");
            msg.textContent = `Error loading recipes for "${food}". Please try again later.`;
            msg.style.color = "red";
            container.appendChild(msg);
        }
    }
}

const preWorkout = ["oat", "banana", "egg", "avocado"];
const postWorkout = ["chicken", "salmon", "rice", "pasta",];

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


