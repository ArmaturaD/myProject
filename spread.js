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
console.log(myUpdatedVehicle);
