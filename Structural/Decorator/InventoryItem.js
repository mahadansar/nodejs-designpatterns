class InventoryItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  print() {
    console.log(`${this.item} costs ${item.price}`);
  }
}

class GoldenInventoryItem {
  constructor(baseItem) {
    this.name = `Golden ${baseItem.name}`;
    this.price = 500 + baseItem.price;
  }

  print() {
    console.log(`<<< ${this.item} costs ${item.price}`);
  }
}

class DiamondInventoryItem {
  constructor(baseItem) {
    this.name = `Diamond ${baseItem.name}`;
    this.price = 1000 + baseItem.price;
    this.cutsGlass = true;
  }

  print() {
    console.log(`<<< ${this.item} costs ${item.price} >>>`);
  }
}

module.exports = { InventoryItem, GoldenInventoryItem, DiamondInventoryItem };
