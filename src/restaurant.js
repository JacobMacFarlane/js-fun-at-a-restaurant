function createRestaurant(pizzaRestaurant) {
return pizzaRestaurant = {
name: pizzaRestaurant,
menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
} 
} 

function addMenuItem(restaurant, foodType) {
  // read the var.type to c which menu it is "uploaded" to
  //create a conditional that will read the object.type
 if (foodType.type === "lunch" && !restaurant.menus.lunch.includes(foodType)) {
  return restaurant.menus.lunch.push(foodType)
 } else if (foodType.type === "breakfast" && !restaurant.menus.breakfast.includes(foodType)) {
    return restaurant.menus.breakfast.push(foodType)
  } else if (foodType.type === "dinner" && !restaurant.menus.breakfast.includes(foodType)) {
    return restaurant.menus.dinner.push(foodType)
  }
 }
function removeMenuItem(pizzaRestaurant, name, type) {
  //console.log(pizzaRestaurant.menus.type[type]) 
  if (pizzaRestaurant.menus[type].length === 0) {
    return `Sorry, we don't sell ${name}, try adding a new recipe!`
  }
  // console.log(pizzaRestaurant.menus[type].length, 'line 24')
  for (i = 0; i < pizzaRestaurant.menus[type].length; i ++) {
    if (pizzaRestaurant.menus[type][i].name === name) {
    pizzaRestaurant.menus[type].splice([i], 1)
    }
    return `No one is eating our ${name} - it has been removed from the ${type} menu!`
} 
  
  // console.log(result, 'line 27')
  // console.log(pizzaRestaurant[i].item, item, 'line 24')
// pizzaRestaurant = object which means i need for loops
  //it wants this function to be able to go into the object and remove from a whole menuItem
// to get to that we have to call forth the object in question
// item[i].splice(0,1)
}



module.exports = {
   createRestaurant, 
   addMenuItem,
   removeMenuItem
}