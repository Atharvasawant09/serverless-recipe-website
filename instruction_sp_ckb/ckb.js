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
    cookTime: "60 minutes",
    totalCalories: 450,
    ingredients:[
        { name: "Basmati rice", quantity: { amount: 2, unit: "cups" } },
        { name: "Chicken, cut into pieces", quantity: { amount: 500, unit: "g" } },
        { name: "Onions, thinly sliced", quantity: { amount: 2, unit: "" } },
        { name: "Tomatoes, chopped", quantity: { amount: 4, unit: "" } },
        { name: "Plain yogurt", quantity: { amount: 0.5, unit: "cup" } },
        { name: "Vegetable oil", quantity: { amount: 0.25, unit: "cup" } },
        { name: "Ghee (clarified butter)", quantity: { amount: 2, unit: "tablespoons" } },
        { name: "Ginger-garlic paste", quantity: { amount: 2, unit: "tablespoons" } },
        { name: "Green chilies, slit", quantity: { amount: 2, unit: "" } },
        { name: "Mint leaves, chopped", quantity: { amount: 0.5, unit: "cup" } },
        { name: "Coriander leaves, chopped", quantity: { amount: 0.5, unit: "cup" } },
        { name: "Red chili powder", quantity: { amount: 1, unit: "teaspoon" } },
        { name: "Turmeric powder", quantity: { amount: 1, unit: "teaspoon" } },
        { name: "Ground coriander", quantity: { amount: 1, unit: "teaspoon" } },
        { name: "Ground cumin", quantity: { amount: 1, unit: "teaspoon" } },
        { name: "Garam masala", quantity: { amount: 1, unit: "teaspoon" } },
        { name: "Salt", quantity: "To taste" },
        { name: "Saffron strands, soaked in warm milk", quantity: { amount: "", unit: "" } },
        { name: "Fried onions, for garnish", quantity: { amount: "", unit: "" } },
        { name: "Chopped coriander leaves, for garnish", quantity: { amount: "", unit: "" } }
    ],
    
        
        
    instructions: [
        "Step 1: Rinse the basmati rice under cold water until the water runs clear. Soak the rice in water for 30 minutes, then drain and set aside.",
        "Step 2: In a large skillet, heat the vegetable oil over medium heat. Add the sliced onions and fry until golden brown. Remove half of the fried onions and set aside for garnish.",
        "Step 3: To the remaining onions in the skillet, add the ginger-garlic paste and green chilies. Cook for 2 minutes, stirring frequently.",
        "Step 4: Add the chopped tomatoes to the skillet and cook until they turn soft and pulpy.",
        "Step 5: Stir in the red chili powder, turmeric powder, ground coriander, ground cumin, and garam masala. Cook for another 2 minutes.",
        "Step 6: Add the chicken pieces to the skillet and cook until they are browned on all sides.",
        "Step 7: In a separate bowl, whisk together the plain yogurt with some salt. Pour this yogurt mixture into the skillet with the chicken. Stir to combine.",
        "Step 8: Reduce the heat to low, cover the skillet, and let the chicken simmer for 15-20 minutes, or until cooked through.",
        "Step 9: In a large pot, bring water to a boil. Add the soaked and drained rice to the boiling water along with salt. Cook the rice until it's 70% done, then drain and set aside.",
        "Step 10: In a deep baking dish, layer the cooked chicken masala and partially cooked rice alternatively. Sprinkle chopped mint and coriander leaves between the layers.",
        "Step 11: Drizzle the saffron-infused milk over the layered biryani. Cover the baking dish tightly with aluminum foil.",
        "Step 12: Preheat your oven to 180°C (350°F). Place the covered baking dish in the preheated oven and bake for 20-25 minutes.",
        "Step 13: Once done, remove the biryani from the oven and let it rest for 5 minutes. Garnish with fried onions and chopped coriander leaves before serving."
    ],
    
            

    equipment: [
        "Large skillet",
        "Chopping board",
        "Knife",
        "Mixing bowls",
        "Large pot",
        "Baking dish",
        "Aluminum foil"
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
