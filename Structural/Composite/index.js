var CatalogItem = require("./CatalogItem");
var CatalogGroup = require("./CatalogGroup");

var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("Big boi", 19.99);

var groupShoes = new CatalogGroup("Shoes", [boots, sneakers, flipFlops]);

var groupFood = new CatalogGroup("Food", [
  new CatalogItem("Milkshake", 5.99),
  new CatalogItem("French Fries", 3.99),
]);

var keyChain = new CatalogItem("Key Chain", 0.99);

var catalog = new CatalogGroup("Clothes & Food", [
  keyChain,
  groupShoes,
  groupFood,
]);

console.log(catalog.total);

catalog.print();
