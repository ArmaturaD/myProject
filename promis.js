// const personOn = {
//     name : "Denys",
//     age : 25
// }

// function newPerson (person) {
//     const objectPerson = {...person}
//     objectPerson.ageage = objectPerson.ageage  + 1;
//     return objectPerson
// }

// const objectPersonOne = newPerson (personOn)
// console.log(personOn.age)
// console.log(objectPersonOne.age)

//  const myFnError = () => {
//     throw new Error("Some error")
//  }

//  try {
//       myFnError()
//  }catch (error) {
//     console.error(error)
//    // console.log(error.messege)
//  }
//  console.log("Continue....")

// const myArray = [1, 2, 5, 8, 9, 10];
// console.log(myArray);
// const newArray = myArray.map((el) => {
//   return el * 3;
// });
// console.log(newArray);

// ДЕСТРУКТУРИЗАЦИЯ
const newObj = {
  //ПОРЯДОВ В ОБЪЕКТЕ НЕ ВАЖЕН
  name: "Kolya",
  age: 25,
  bool: true,
};
const { first, second } = newObj;
const { bool } = newObj;
console.log(first);
console.log(bool);

const array = ["Apple", "Banana"]; //ПОРЯДОК В ЭЛЕМЕНТАХ МАССИВА ВАЖЕН
const [arrayOne, arraytwo] = array;
const number = [1, 2, 3, 5, 8, 20];
const [a, b] = number;
console.log(arrayOne);
console.log(arraytwo);
console.log(a, b);

// ДЕСТРУКТУРИЗАЦИЯ В ФУНКЦИЯХ
const people = {
  name: "Vadim",
  commets: 0,
  work: true,
};
const userInfo = ({ name, comments }) => {
  if (!comments) {
    return `User ${name} has no comments`;
  }
  return `User ${name} has ${comments} no comments`;
};
console.log(userInfo(people));
