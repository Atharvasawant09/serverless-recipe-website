// script.js

// Sample instructions (you can replace these with your own data)
const instructions = [
    "Preheat the oven to 350°F.",
    "In a mixing bowl, combine flour, sugar, and baking powder.",
    "Add eggs and milk, then mix until smooth.",
    "Pour the batter into a greased baking dish.",
    "Bake for 25-30 minutes or until golden brown.",
    "Let it cool before serving."

    
];

// Function to add instructions to the instruction list
function addInstructions() {
    const instructionList = document.getElementById('instruction-list');
    instructions.forEach(instruction => {
        const listItem = document.createElement('li');
        listItem.textContent = instruction;
        instructionList.appendChild(listItem);
    });
}

// Call the function when the page loads
window.onload = addInstructions;


