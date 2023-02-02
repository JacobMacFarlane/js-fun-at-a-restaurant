function nameMenuItem(Pizza) {
return `Delicious ${Pizza}`
}
function createMenuItem(menuItemName, price, type) {
return menuItem = {
name: menuItemName,
price: price,
type: type
}
}
function addIngredients(addFood, ingredients) {
  if (!ingredients.includes(addFood)) {
  ingredients.push(addFood)
  }
  }

function formatPrice(initialPrice) {
  return "$" + initialPrice
}

function decreasePrice() {
  return menuItem.price*.9
}

function createRecipe(title, ingredients, menuItemType) {
  return recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
   formatPrice,
   decreasePrice,
   createRecipe
}


