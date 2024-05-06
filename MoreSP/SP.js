var bookmarkButtons = document.querySelectorAll('.bookmark');
bookmarkButtons.forEach(function (bookmarkButton) {
    bookmarkButton.addEventListener('click', function (event) {
        var recipeBox = event.target.closest('.box');
        if (recipeBox) {
            var recipeId = recipeBox.id;
            var recipeName = recipeBox.querySelector('.box-content').innerText;

            if (bookmarkButton.classList.contains('bookmarked')) {
                bookmarkButton.classList.remove('bookmarked');
                removeBookmarkedRecipe(recipeId);
                alert('Recipe unbookmarked: ' + recipeName); 
            } else {
                bookmarkButton.classList.add('bookmarked');
                saveBookmarkedRecipe(recipeId, recipeName);
                alert('Recipe bookmarked: ' + recipeName); 
            }
        }
    });
});

function saveBookmarkedRecipe(recipeId, recipeName) {
    var bookmarkedRecipes = JSON.parse(localStorage.getItem('bookmarkedRecipes')) || [];
    bookmarkedRecipes.push({ id: recipeId, name: recipeName });
    localStorage.setItem('bookmarkedRecipes', JSON.stringify(bookmarkedRecipes));
}

function removeBookmarkedRecipe(recipeId) {
    var bookmarkedRecipes = JSON.parse(localStorage.getItem('bookmarkedRecipes')) || [];
    var updatedRecipes = bookmarkedRecipes.filter(function (recipe) {
        return recipe.id !== recipeId;
    });
    localStorage.setItem('bookmarkedRecipes', JSON.stringify(updatedRecipes));
}

document.addEventListener('DOMContentLoaded', function () {
    var boxes = document.querySelectorAll('.box');
    var bookmarkedRecipes = JSON.parse(localStorage.getItem('bookmarkedRecipes')) || [];
    boxes.forEach(function (box) {
        var recipeId = box.id;
        var bookmarkButton = box.querySelector('.bookmark');
        if (bookmarkedRecipes.some(function (recipe) { return recipe.id === recipeId; })) {
            bookmarkButton.classList.add('bookmarked');
        }
    });
});
