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
    prepTime: "30 minutes",
    cookTime: "30 minutes",
    totalCalories: 450,
    ingredients: [
        { name: "Basmati rice, soaked for 30 minutes and drained", quantity: { amount: 2, unit: "cups" } },
        { name: "Mixed vegetables (carrots, peas, beans, cauliflower, potatoes), chopped", quantity: { amount: 2, unit: "cups" } },
        { name: "Onion, thinly sliced", quantity: { amount: 1, unit: "" } },
        { name: "Tomatoes, finely chopped", quantity: { amount: 2, unit: "" } },
        { name: "Yogurt", quantity: { amount: 0.5, unit: "cup" } },
        { name: "Fresh mint leaves, chopped", quantity: { amount: 0.25, unit: "cup" } },
        { name: "Fresh cilantro leaves, chopped", quantity: { amount: 0.25, unit: "cup" } },
        { name: "Ghee or oil", quantity: { amount: 2, unit: "tablespoons" } },
        { name: "Cumin seeds", quantity: { amount: 1, unit: "teaspoon" } },
        { name: "Bay leaves", quantity: { amount: 2, unit: "" } },
        { name: "Cloves", quantity: { amount: 4, unit: "" } },
        { name: "Green cardamom pods", quantity: { amount: 4, unit: "" } },
        { name: "Cinnamon stick", quantity: { amount: 1, unit: "" } },
        { name: "Ginger-garlic paste", quantity: { amount: 1, unit: "teaspoon" } },
        { name: "Red chili powder", quantity: { amount: 1, unit: "teaspoon" } },
        { name: "Turmeric powder", quantity: { amount: 0.5, unit: "teaspoon" } },
        { name: "Biryani masala", quantity: { amount: 1, unit: "teaspoon" } },
        { name: "Salt", quantity: "To taste" },
        { name: "Saffron strands soaked in warm milk (optional), for garnish", quantity: { amount: "", unit: "" } },
        { name: "Fried onions (optional), for garnish", quantity: { amount: "", unit: "" } }
    ],
    
    

    
    instructions: [
        "Step 1: Heat ghee or oil in a large pot. Add cumin seeds, bay leaves, cloves, cardamom pods, and cinnamon stick. Sauté for a minute until fragrant.",
        "Step 2: Add thinly sliced onions and sauté until golden brown.",
        "Step 3: Add ginger-garlic paste and sauté until the raw smell disappears.",
        "Step 4: Add chopped tomatoes and cook until they turn mushy.",
        "Step 5: Add mixed vegetables, red chili powder, turmeric powder, biryani masala, chopped mint leaves, chopped cilantro leaves, and salt. Mix well.",
        "Step 6: Add soaked and drained basmati rice. Gently mix to combine all the ingredients.",
        "Step 7: Pour yogurt over the rice mixture and gently mix again.",
        "Step 8: Add enough water to cover the rice. Bring to a boil, then reduce the heat to low. Cover and simmer for 15-20 minutes or until the rice is cooked and the vegetables are tender.",
        "Step 9: Once done, fluff up the rice gently with a fork.",
        "Step 10: Garnish with saffron soaked in warm milk and fried onions, if desired.",
        "Step 11: Serve hot Veg Biryani with raita, salad, or your favorite curry."
    ],
    
    
    

    equipment: [
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
