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
    cookTime: "40 minutes",
    totalCalories: 450,
    ingredients:[
                { name: "Dried chickpeas, soaked overnight and drained", quantity: { amount: 2, unit: "cups" } },
                { name: "Onions, finely chopped", quantity: { amount: 2, unit: "" } },
                { name: "Tomatoes, finely chopped", quantity: { amount: 2, unit: "" } },
                { name: "Cloves garlic, minced", quantity: { amount: 4, unit: "cloves" } },
                { name: "Ginger, grated", quantity: { amount: 1, unit: "inch" } },
                { name: "Green chilies, slit", quantity: { amount: 2, unit: "" } },
                { name: "Cumin seeds", quantity: { amount: 1, unit: "teaspoon" } },
                { name: "Coriander powder", quantity: { amount: 1, unit: "teaspoon" } },
                { name: "Garam masala", quantity: { amount: 1, unit: "teaspoon" } },
                { name: "Turmeric powder", quantity: { amount: 0.5, unit: "teaspoon" } },
                { name: "Red chili powder", quantity: { amount: 0.5, unit: "teaspoon" } },
                { name: "Salt", quantity: "To taste" },
                { name: "Fresh cilantro leaves for garnish", quantity: { amount: "", unit: "" } },
                { name: "Vegetable oil", quantity: { amount: 2, unit: "tablespoons" } },
                 { name: "All-purpose flour", quantity: { amount: 2, unit: "cups" } },
                    { name: "Plain yogurt", quantity: { amount: 0.5, unit: "cup" } },
                    { name: "Sugar", quantity: { amount: 1, unit: "teaspoon" } },
                    { name: "Baking powder", quantity: { amount: 0.5, unit: "teaspoon" } },
                    { name: "Salt", quantity: "To taste" },
                    { name: "Vegetable oil for frying", quantity: { amount: "", unit: "" } }
            ],
        
        
    instructions: [
                "Step 1: Heat vegetable oil in a pressure cooker. Add cumin seeds and let them splutter.",
                "Step 2: Add chopped onions and sauté until golden brown.",
                "Step 3: Add minced garlic, grated ginger, and slit green chilies. Sauté for a minute.",
                "Step 4: Add chopped tomatoes and cook until they turn mushy.",
                "Step 5: Stir in coriander powder, garam masala, turmeric powder, red chili powder, and salt. Mix well.",
                "Step 6: Add soaked and drained chickpeas to the pressure cooker. Mix until well combined.",
                "Step 7: Pour in enough water to cover the chickpeas and close the pressure cooker lid.",
                "Step 8: Pressure cook for about 4-5 whistles or until the chickpeas are cooked thoroughly.",
                "Step 9: Once the pressure releases naturally, open the lid and simmer the curry for a few minutes until it thickens.",
                "Step 10: Garnish with fresh cilantro leaves.",
                
                    "Step 11: In a mixing bowl, combine all-purpose flour, plain yogurt, sugar, baking powder, and salt. Mix well to form a smooth dough.",
                    "Step 12: Cover the dough and let it rest for about 30 minutes.",
                    "Step 13: Divide the dough into small balls and roll out each ball into a flat, circular shape.",
                    "Step 14: Heat vegetable oil in a deep frying pan over medium heat.",
                    "Step 15: Fry the rolled dough until golden brown and puffed.",
                    "Step 16: Drain the fried dough on paper towels to remove excess oil."
                
            ],
            

    equipment: [
        "Pressure cooker",
        "Deep frying pan",
        "Mixing bowls",
        "Rolling pin",
        "Slotted spoon"
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
