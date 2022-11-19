let dishes = [
    { dish: "Italian pasta", price: 9.55 },
    { dish: "Rice with veggies", price: 8.65 },
    { dish: "Chicken with potatoes", price: 15.55 },
    { dish: "Vegetarian Pizza", price: 6.45 }
]

function getDishList(tax, disharr) {
    if (tax) {
        disharr.forEach(element => {
            console.log(`Dish: ${element.dish} Price(incl.tax):$ ${element.price + (20 * element.price) / 100}`);
        })
    } else {
        disharr.forEach(element => {
            console.log(`Dish: ${element.dish} Price(incl.tax):$ ${element.price}`);
        })
    }
}

getDishList(false, dishes);