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
        { name: "Cooked quinoa", quantity: { amount: 2, unit: "cups" } },
        { name: "Cooked chicken breast, diced", quantity: { amount: 1, unit: "cup" } },
        { name: "Cherry tomatoes, halved", quantity: { amount: 1, unit: "cup" } },
        { name: "Cucumber, diced", quantity: { amount: 1, unit: "cup" } },
        { name: "Red onion, finely chopped", quantity: { amount: 0.5, unit: "cup" } },
        { name: "Fresh parsley, chopped", quantity: { amount: 0.25, unit: "cup" } },
        { name: "Feta cheese, crumbled", quantity: { amount: 0.25, unit: "cup" } },
        { name: "Almonds, sliced", quantity: { amount: 0.25, unit: "cup" } },
        { name: "Salt", quantity: "To taste" },
        { name: "Pepper", quantity: "To taste" }
    ],

    
    instructions: [
        "Step 1: In a large mixing bowl, combine the cooked quinoa, diced chicken breast, cherry tomatoes, cucumber, red onion, and fresh parsley.",
        "Step 2: Gently toss the ingredients until well combined.",
        "Step 3: Sprinkle the crumbled feta cheese and sliced almonds over the salad.",
        "Step 4: Season with salt and pepper to taste.",
        "Step 5: Serve immediately or refrigerate until ready to serve."
    ],
    

    equipment: [
        "Large mixing bowl",
        "Cutting board",
        "Knife",
        "Measuring cups and spoons"
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
