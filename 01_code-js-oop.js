/**
 * Code along for the lesson on JS Objects methods
 */

// The class syntax
class Order {
  constructor(customer, beverage, price, sugar, extraFoam) {
    this.customer = customer;
    this.beverage = beverage;
    this.price = price;
    this.sugar = sugar;
    this.extraFoam = extraFoam;
  }

  baristaCallCustomer(barista) {
    console.log(
      `${barista} says: "Hey ${this.customer} your order of ${this.beverage} is ready!"`
    );
  }
}

const order1 = new Order("Ironhack", "cappucino", 10, false, true);

const order2 = new Order("Marco", "cappucino", 10, false, true);

const order3 = new Order("Fede", "espresso", 8, true, false);

order1.baristaCallCustomer("Miki");
order2.baristaCallCustomer("Danny");
order3.baristaCallCustomer("John");

/*
// The reason why we need classes

const order1 = {
  customer: "Ironhack",
  beverage: "cappucino",
  price: 10,
  sugar: false,
  extraFoam: true,

  callCustomer: function (barista) {
    console.log(
      `${barista} says: "Hey ${this.customer} your cappucino is ready!"` // THis string is what was originally written
    );
  },
};

const order2 = {
  customer: "Marco",
  beverage: "cappucino",
  price: 10,
  sugar: false,
  extraFoam: true,

  callCustomer: function (barista) {
    console.log(`${barista} says: "Hey ${customer} your order is ready!"`); // This string is changed by hand
  },
};

order1.callCustomer("Miki"); // This is lame, doesn't solve the problem
order2.callCustomer("Danny"); // This is lame, doesn't solve the problem
*/

/*
// From the losson about objects -> The reason for objects
const customer = "Ironhack";
let beverage = "cappucino";
const price = 10;
const sugar = false;
const extraFoam = true;

beverage = "caffé"; // this is not possible because it will overwrite the first one
*/
