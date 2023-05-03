// const car = {
//     model : "Audi",
//     color : "green",
//     driver : {
//         name: " Vasay",
//         age: 18
//     },
// }

// git commit
// const carWithPassengers = {...car, model: "BMW",
// passengers : ["PUPEL"],
// driver : {
//     ...car.driver, name : "Ivan", age: 25
// }

// }
// console.log(car)
// console.log(carWithPassengers)

// module.exports = {
//     car,
//     carWithPassengers
// }

// const shoppingList = [
//   'diapers',
//   'kleenex',
//   'trash bags',
//   'paper towels',
//   'milk',
// ]

//   module.exports ={
//     shoppingList

//   }

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  sss: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
//console.log(myUpdatedVehicle);

const newArr = [
  { name: "user1", age: 25, height: 180 },
  { name: "user2", age: 28, height: 170 },
  { name: "user3", age: 28, height: 170 },
  { name: "user4", age: 28, height: 170 },
  { name: "user5", age: 28, height: 170 },
  { name: "user6", age: 28, height: 170 },
  { name: "user7", age: 28, height: 170 },
  { name: "user8", age: 28, height: 170 },
  { name: "user8", age: 28, height: 170 },
  { name: "user8", age: 28, height: 170 },
  { name: "user8", age: 28, height: 170 },
  { name: "user8", age: 28, height: 170 },
  { name: "user8", age: 28, height: 170 },
  { name: "user8", age: 28, height: 170 },
];
function congratsIfMoreThan100(arr) {
  if (arr.length >= 1005) {
    return "hello";
  }
  return "bad";
}

console.log(congratsIfMoreThan100(newArr));
