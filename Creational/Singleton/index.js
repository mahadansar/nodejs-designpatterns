var logger = require("./Logger");
var Shopper = require("./Shopper");
var Store = require("./Store");

logger.log("App Starting...");

var alex = new Shopper("alex", 800);
var ski_shop = new Store("Big O", [
  {
    item: "A",
    qty: 5,
    price: 567,
  },
  {
    item: "BB",
    qty: 3,
    price: 313,
  },
]);

logger.log("App Config Finished...");

console.log(`${logger.count} logs total.`);
logger.logs.map((log) => console.log(`${log.message}`));
