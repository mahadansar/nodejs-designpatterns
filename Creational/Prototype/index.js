var scoutPrototype = require("./scoutPrototype");

var alex = scoutPrototype.clone();
alex.name = "Alex Banks";
alex.addItemToList("Slingshot");

var eve = scoutPrototype.clone();
eve.name = "Eve Porcello";
eve.addItemToList("Reading Light");

console.log(`${alex.name}: ${alex.shoppingList}`);
console.log(`${eve.name}: ${eve.shoppingList}`);
