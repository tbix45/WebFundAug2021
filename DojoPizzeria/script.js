function pizzaOven(crustType, sauceType, cheeses, toppings) {

    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
// var pizza = {
//     crustType: "deep dish"
//         sauceType:
//     cheeses:
//         toppings:
var p1 = pizzaOven("deep dish", "traditional", "mozzarella", "pepperoni", "sausage")