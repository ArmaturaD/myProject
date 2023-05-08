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

// функція що приймає масив даних і виводить на екраню
// за допомогою alert() привітанняб фкщо у вас більше ніж 100 users
function congratsIfMoreThan100(arr) {
  if (arr.length >= 10005) {
    return "hello";
  }
  return "bad";
}

//console.log(congratsIfMoreThan100(newArr));
//Цикли    for
const subscriders = [
  { name: "Andrew", isClouseFriend: true },
  { name: "Sasha", isClouseFriend: false },
  { name: "Peter", isClouseFriend: false },
  { name: "Vitaly", isClouseFriend: false },
  { name: "Sara", isClouseFriend: true },
  { name: "Bob", isClouseFriend: false },
  { name: "Anna", isClouseFriend: false },
  { name: "Inna", isClouseFriend: true },
];
// console.log(subscriders);

// for (let i = 0; i < subscriders.length; i++) {
//   console.log(subscriders[i]);
// }

//for of для елементів масиву item це єлемент масиву
for (const item of subscriders) {
  // console.log(item);
}
// for in для елементів об'єкту
const obj = {
  name: "Bob",
  age: 25,
  sex: "male",
  nation: "Ukrainian",
  hobby: "football",
};

for (const key in obj) {
  // console.log(key); // виводимо ключи и перебераємо
  //  console.log(obj[key]); //виводимо значення ключа (obj.key не працюе)
}

// while

let i = 0;
while (i < subscriders.length) {
  i++;
  // console.log(subscriders[i]);
}

// while do обовязково виконається один раз
let j = 0;
do {
  // console.log(subscriders[j]);
  i++;
} while (j > 0);

// написати функцію яка приймає масив чисел i підносить до квадрату кожен з них

function square(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  return arr;
}
const myArr = [2, 4, 6, 8];
//console.log(square(myArr));

const pow = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = Math.pow(arr[i], 2);
  }
  return arr;
};
//console.log(square(myArr));

//написати ф-цію яка прифмає масив об'єктів.
// пробгається по ньоиу і додає прикметники,
// які описують зовнішню кпасу людини
// відповідають до її статі  beautiful, Handsome

const people = [
  {
    name: "Ross",
    sex: "male",
  },
  {
    name: "Monica",
    sex: "female",
  },
  {
    name: "Chandler",
    sex: "male",
  },
  {
    name: "Phoebe",
    sex: "female",
  },
  {
    name: "Joey",
    sex: "female",
  },
  {
    name: "Ross",
    sex: "male",
  },
  {
    name: "Rachel",
    sex: "female",
  },
  {
    name: "Bob",
    sex: "male",
  },
];

function addArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    const elemet = arr[i];
    if (elemet.sex === "mail") {
      elemet.name += " Handsome";
    } else {
      elemet.name += " Beautifule";
    }
  }
  return arr;
}
//console.log(addArr(people));

// Замикання (Closures)

let firstName = "Vitaly";

function sayHello() {
  return firstName;
}

//firstName = 12346;

//console.log(sayHello());

firstName = " Andrew";
//console.log(sayHello());

// написати ф-цію яка приймає  2 аргумента масив чисел і число
// функція повертає кількість повторюваності переданого числа в масиві.
// Якщо данного числа там немає, функція повертає текс 'Даного числа в масиві немає!'

//const number = [1, 2, 3, 5, 6, 7, 1, 3, 5, 8, 9, 9];

function getRepetitionOfNumber(numberArr, number) {
  let counter = 0;
  for (item of numberArr) {
    if (item === number) {
      counter++;
    }
  }
  return counter > 0 ? counter : "Даного числа в масиві немає!";
}

console.log(getRepetitionOfNumber([1, 2, 3, 5, 6, 7, 1, 3, 5, 8, 9, 9], 1));
