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
    cookTime: "45 minutes",
    totalCalories: 450,
    ingredients: [
        { name: "Rajma (red kidney beans), soaked overnight and drained", quantity: { amount: 2, unit: "cups" } },
        { name: "Basmati rice", quantity: { amount: 1, unit: "cup" } },
        { name: "Onions, finely chopped", quantity: { amount: 2, unit: "" } },
        { name: "Tomatoes, finely chopped", quantity: { amount: 2, unit: "" } },
        { name: "Garlic cloves, minced", quantity: { amount: 3, unit: "" } },
        { name: "Ginger, grated", quantity: { amount: 1, unit: "inch" } },
        { name: "Green chilies, slit lengthwise", quantity: { amount: 2, unit: "" } },
        { name: "Cumin seeds", quantity: { amount: 1, unit: "teaspoon" } },
        { name: "Turmeric powder", quantity: { amount: 1, unit: "teaspoon" } },
        { name: "Red chili powder", quantity: { amount: 1, unit: "teaspoon" } },
        { name: "Coriander powder", quantity: { amount: 1, unit: "teaspoon" } },
        { name: "Garam masala", quantity: { amount: 1, unit: "teaspoon" } },
        { name: "Salt", quantity: "To taste" },
        { name: "Fresh cilantro leaves for garnish", quantity: { amount: "", unit: "" } },
        { name: "Cooking oil", quantity: { amount: 2, unit: "tablespoons" } }
    ],
    

    
    instructions: [
        "Step 1: Heat oil in a pressure cooker. Add cumin seeds and let them splutter.",
        "Step 2: Add chopped onions and sauté until golden brown.",
        "Step 3: Add minced garlic, grated ginger, and slit green chilies. Sauté for a minute.",
        "Step 4: Add chopped tomatoes and cook until they turn mushy.",
        "Step 5: Add turmeric powder, red chili powder, coriander powder, and salt. Mix well.",
        "Step 6: Add soaked and drained rajma (red kidney beans) to the cooker. Mix until well combined.",
        "Step 7: Pour in enough water to cover the rajma and close the pressure cooker lid.",
        "Step 8: Pressure cook for about 4-5 whistles or until the rajma is cooked thoroughly.",
        "Step 9: Once the pressure releases naturally, open the lid and sprinkle garam masala. Stir well.",
        "Step 10: Garnish with freshly chopped cilantro leaves.",
        "Step 11: In a separate pot, cook basmati rice as per package instructions.",
        "Step 12: Serve hot rajma with steamed basmati rice."
    ],
    

    equipment: [
        "Pressure cooker",
        "Pot for cooking rice",
        "Wooden spoon"
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
