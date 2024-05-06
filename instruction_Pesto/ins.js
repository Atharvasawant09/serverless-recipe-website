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
    prepTime: "10 minutes",
    cookTime: "35 minutes",
    totalCalories: 450,
    ingredients: [
        { name: "Pasta", quantity: { amount: 12, unit: "ounces" } },
        { name: "Basil leaves", quantity: { amount: 2, unit: "cups" } },
        { name: "Grated Parmesan cheese", quantity: { amount: 0.5, unit: "cup" } },
        { name: "Extra virgin olive oil", quantity: { amount: 0.5, unit: "cup" } },
        { name: "Pine nuts (or walnuts)", quantity: { amount: 0.5, unit: "cup" } },
        { name: "Garlic cloves, minced", quantity: { amount: 3, unit: "cloves" } },
        { name: "Salt", quantity: "To taste" },
        { name: "Pepper", quantity: "To taste" }
    ],
    
    instructions: [
        "Step 1: Cook the pasta according to package instructions until al dente. Drain and set aside.",
        "Step 2: In a food processor, combine the basil leaves, Parmesan cheese, pine nuts, garlic, salt, and pepper. Pulse until finely chopped.",
        "Step 3: With the food processor running, slowly pour in the olive oil until the mixture is well combined and forms a smooth paste.",
        "Step 4: In a large skillet, heat a tablespoon of olive oil over medium heat. Add the cooked pasta and pesto sauce, tossing until the pasta is evenly coated.",
        "Step 5: Serve hot, garnished with extra Parmesan cheese and fresh basil leaves if desired."
    ],

    equipment: [
        "Food processor",
        "Large skillet",
        "Pot for boiling pasta",
        "Colander"
    ]
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
