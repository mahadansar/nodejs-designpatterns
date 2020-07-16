var Store = require("./Store");
var inventory = require("./inventory");

var skiShop = new Store("Steep and Deep", inventory);

var searchItem = "Powder Skis";
var results = skiShop.find(searchItem);

console.log(results);
