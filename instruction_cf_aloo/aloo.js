document.querySelector(".serving-input").addEventListener("input", updateRecipe);

document.querySelector(".save-recipe").addEventListener("click", toggleSaveRecipe);

function toggleSaveRecipe() {
    let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    let recipeName = document.querySelector(".recipe-title").textContent;

    let recipeIndex = savedRecipes.indexOf(recipeName);
    if (recipeIndex === -1) {
       
        savedRecipes.push(recipeName);
        localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
        updateSaveButton();
        alert("Recipe saved!");
    } else {
       
        savedRecipes.splice(recipeIndex, 1);
        localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
        updateSaveButton();
        alert("Recipe unsaved!");
    }
}


function updateSaveButton() {
    let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    let recipeName = document.querySelector(".recipe-title").textContent;

    let saveButton = document.querySelector(".save-recipe");
    if (savedRecipes.includes(recipeName)) {
        saveButton.textContent = "Unsave Recipe";
    } else {
        saveButton.textContent = "Save Recipe";
    }
}


updateSaveButton();


let recipeData = {
    servings: 1,
    prepTime: "20 minutes",
    cookTime: "20 minutes",
    totalCalories: 450,
    ingredients: [
        { name: "Whole wheat flour", quantity: { amount: 2, unit: "cups" } },
        { name: "Potatoes, boiled and mashed", quantity: { amount: 2, unit: "large" } },
        { name: "Onion, finely chopped", quantity: { amount: 1, unit: "" } },
        { name: "Green chilies, finely chopped", quantity: { amount: 2, unit: "" } },
        { name: "Cumin seeds", quantity: { amount: 1, unit: "teaspoon" } },
        { name: "Coriander powder", quantity: { amount: 1, unit: "teaspoon" } },
        { name: "Turmeric powder", quantity: { amount: 0.5, unit: "teaspoon" } },
        { name: "Red chili powder", quantity: { amount: 0.5, unit: "teaspoon" } },
        { name: "Salt", quantity: "To taste" },
        { name: "Fresh cilantro leaves, chopped", quantity: { amount: "", unit: "" } },
        { name: "Ghee or oil for cooking", quantity: { amount: "", unit: "" } }
    ],
    
    

    
    instructions: [
        "Step 1: In a mixing bowl, combine whole wheat flour and a pinch of salt. Gradually add water and knead into a soft dough. Cover and let it rest for 15 minutes.",
        "Step 2: In another bowl, mix mashed potatoes, chopped onion, green chilies, cumin seeds, coriander powder, turmeric powder, red chili powder, salt, and chopped cilantro leaves to make the stuffing.",
        "Step 3: Divide the dough into 6 equal portions and roll each portion into a ball.",
        "Step 4: Take one dough ball and roll it out into a small circle. Place a portion of the potato stuffing in the center.",
        "Step 5: Gather the edges of the dough and seal the stuffing inside, then gently flatten the ball.",
        "Step 6: Dust with flour and roll out the stuffed dough into a paratha, ensuring the stuffing is evenly distributed.",
        "Step 7: Heat a griddle or tawa over medium heat. Place the rolled paratha on the griddle and cook until golden brown spots appear on both sides, brushing with ghee or oil as needed.",
        "Step 8: Repeat the process with the remaining dough and stuffing to make more parathas.",
        "Step 9: Serve hot Aloo Parathas with yogurt, pickle, or your favorite chutney."
    ],
    
    

    equipment: [
        "Rolling pin",
        "Griddle or tawa",
        "Spatula"
    ],
    
    
};


function updateEquipment(equipment) {
    let equipmentList = document.querySelector(".equipment-list");
    equipmentList.innerHTML = "";

    equipment.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        equipmentList.appendChild(li);
    });
}


function updateInstructions(instructions) {
    let instructionsList = document.querySelector(".instructions-list");
    instructionsList.innerHTML = "";

    instructions.forEach(instruction => {
        let li = document.createElement("li");
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });
}


function updateIngredients(ingredients, servings) {
    let ingredientsList = document.querySelector(".ingredients-list");
    ingredientsList.innerHTML = "";

    ingredients.forEach(ingredient => {
        let li = document.createElement("li");
        let totalQuantity = "";

        
        if (typeof ingredient.quantity === "string") {
            
            totalQuantity = ingredient.quantity;
        } else if (typeof ingredient.quantity === "object") {
           
            totalQuantity = `${ingredient.quantity.amount * servings} ${ingredient.quantity.unit}`;
        } else if (!isNaN(ingredient.quantity)) {
           
            totalQuantity = `${ingredient.quantity * servings}`;
        } else {
            
            totalQuantity = ingredient.quantity;
        }

       
        li.textContent = `${totalQuantity} - ${ingredient.name}`;
        ingredientsList.appendChild(li);
    });
}


function updateRecipe() {
    let servings = parseInt(document.querySelector(".serving-input").value);


    recipeData.servings = servings;

    
    let totalTime = calculateTotalTime(recipeData.prepTime, recipeData.cookTime);
    document.querySelector(".total-time").textContent = totalTime;

    
    updateIngredients(recipeData.ingredients, servings);

 
    updateInstructions(recipeData.instructions);

   
    updateEquipment(recipeData.equipment);
}


function calculateTotalTime(prepTime, cookTime) {
    let prepTimeInMinutes = parseInt(prepTime);
    let cookTimeInMinutes = parseInt(cookTime);
    return prepTimeInMinutes + cookTimeInMinutes + " minutes";
}


document.querySelector(".serving-input").addEventListener("input", updateRecipe);


updateRecipe();
