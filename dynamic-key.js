// const name = "Audi"
// const key = " helloy world Audy"

// const obj = {
//     key2: " value2",
//    [ key] : name

// }
// console.log(obj)
// console.log(obj[key])
// console.log(obj["Porshe"])

// const myCity = {
//   city: "New-York",
// };
// myCity["popular"] = true;

// console.log(myCity);

// const country = "country";
// myCity[country] = "USA";
// console.log(myCity);

const param = {
  isActive: false,
  balance: "$3,380.22",
  picture: "http://placehold.it/32x32",
  age: 27,
};

// const animalSounds = { cat: "meow", dog: "bark" };
// const animal = "lion";

// const sound = "roar";

// const result = { ...animalSounds, [animal]: sound };
// console.log(result);

const fieldName = "Name";
const animalName = "Surname";
const obj = { ...param, [fieldName]: animalName };

console.log(obj);

// console.log(data);
// const key = "Denis";
// const key1 = " hello !! !! ";

// const obj1 = {
//   [key]: key1,
// };
// console.log(obj1[key]);
// console.log(obj1);

// symbol & dynamic key
const user = {
  id: 26,
  age: 15,
  date: 18,
};
const id = "new id";
user[id] = 27;
console.log(user);
