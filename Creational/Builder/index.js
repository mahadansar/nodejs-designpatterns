var PersonBuilder = require("./PersonBuilder");

// Employees
var sue = new PersonBuilder("Sue").makeEmployee().makeManager(60).build();
var bill = new PersonBuilder("Bill").makeEmployee().makePartTime().build();
var phill = new PersonBuilder("Phill").makeEmployee().build();

// Shoppers
var charles = new PersonBuilder("Charles")
  .withMoney(600)
  .withList(["Jeans", "Glasses"])
  .build();
var Tabitha = new PersonBuilder("Tabitha").withMoney(2312).build();

console.log(sue.toString());
console.log(charles.toString());
