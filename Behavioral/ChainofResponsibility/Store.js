var Storage = require("./Storage");

class Store {
  constructor(name, inventory = []) {
    this.name = name;

    var floor = new Storage("Store Floor", inventory.floor);
    var backroom = new Storage("Store Backroom", inventory.backroom);
    var localStore = new Storage("Nearby Store", inventory.localStore, 1);
    var warehouse = new Storage("Warehouse", inventory.warehouse, 5);

    floor.setNext(backroom);
    backroom.setNext(localStore);
    localStore.setNext(warehouse);

    this.storage = floor;
  }

  find(itemName) {
    return this.storage.find(itemName);
  }
}

module.exports = Store;
