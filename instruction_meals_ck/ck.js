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
    cookTime: "30 minutes",
    totalCalories: 450,
    ingredients: [
        { name: "Boneless chicken, cut into bite-sized pieces", quantity: { amount: 500, unit: "g" } },
        { name: "Onion, finely chopped", quantity: { amount: 1, unit: "" } },
        { name: "Tomatoes, finely chopped", quantity: { amount: 2, unit: "" } },
        { name: "Vegetable oil", quantity: { amount: 2, unit: "tablespoons" } },
        { name: "Plain yogurt", quantity: { amount: 0.5, unit: "cup" } },
        { name: "Heavy cream", quantity: { amount: 0.25, unit: "cup" } },
        { name: "Ginger-garlic paste", quantity: { amount: 2, unit: "tablespoons" } },
        { name: "Ground almonds", quantity: { amount: 1, unit: "tablespoon" } },
        { name: "Ground cashews", quantity: { amount: 1, unit: "tablespoon" } },
        { name: "Ground coriander", quantity: { amount: 1, unit: "teaspoon" } },
        { name: "Ground cumin", quantity: { amount: 1, unit: "teaspoon" } },
        { name: "Turmeric powder", quantity: { amount: 0.5, unit: "teaspoon" } },
        { name: "Garam masala", quantity: { amount: 0.5, unit: "teaspoon" } },
        { name: "Ground cardamom", quantity: { amount: 0.25, unit: "teaspoon" } },
        { name: "Salt", quantity: "To taste" },
        { name: "Fresh cilantro leaves, chopped, for garnish", quantity: { amount: "", unit: "" } },
        { name: "Slivered almonds, for garnish", quantity: { amount: "", unit: "" } }
    ],
    
    

    
    instructions: [
        "Step 1: Heat vegetable oil in a large skillet over medium heat. Add chopped onions and sauté until golden brown.",
        "Step 2: Add ginger-garlic paste and sauté for another minute until fragrant.",
        "Step 3: Add chopped tomatoes and cook until they soften and release their juices.",
        "Step 4: Stir in ground almonds, ground cashews, ground coriander, ground cumin, turmeric powder, garam masala, ground cardamom, and salt. Cook for 2-3 minutes.",
        "Step 5: Add the chicken pieces to the skillet and coat them evenly with the spice mixture.",
        "Step 6: Pour in plain yogurt and heavy cream. Mix well to combine.",
        "Step 7: Cover the skillet and simmer for 20-25 minutes, stirring occasionally, until the chicken is cooked through and the sauce thickens.",
        "Step 8: Once done, garnish with chopped cilantro leaves and slivered almonds.",
        "Step 9: Serve hot Chicken Korma with steamed rice, naan bread, or roti."
    ],
    
    
    

    equipment: [
        "Large skillet",
        "Wooden spoon",
        "Large Pot",
        "Spoon",
        "Knives and basic kitchen tools"
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
