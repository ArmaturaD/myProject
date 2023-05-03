// function greetingGenration() {
//   let names = "";
//   function greetings(name) {
//     names = `${names}, ${name}`;
//     return `Hello ${names}`;
//   }
//   return greetings;
// }
// const greet = greetingGenration();
// console.log(greet("Student"));
/////////////////////////////////////////////////
// let START_AGE = 20;
// let ageStart = 6;
// let jubilee = 0;

// function findJubilee(age, START_AGE) {
//   return START_AGE + age + 5 - ((age + 5) % 5);
// }

// jubilee = findJubilee(ageStart, START_AGE);
// console.log(jubilee);
///////////////////////////////////////////////////
// const MAX_DISCOUNT_AGE = 32;
// const age = 35;
// let message = " ";

// if (age <= MAX_DISCOUNT_AGE) {
//   message = `your age ${age}. You are eligible for discount`;
// } else {
//   message = `your age ${age}. You are not eligibal for discount. Because dicount can get users with age under ${MAX_DISCOUNT_AGE}`;
// }
////////////////////////////////////////////////////

//const process = (a, b, func) => {
// return { operationResult: func(a, b) };};
//выводы
// console.log(process(1, 2, (a, b) => a + b));
// console.log(process(1, 2, (a, b) => a - b));
// console.log(process(1, 2, (a, b) => (a + b) * 2));
// //усложним - выведем всё в одном объекте
// console.log({
//   add: process(1, 2, (a, b) => {
//     return a + b;
//   }),
//   sub: process(1, 2, (a, b) => a - b),
//   dblAdd: process(1, 2, (a, b) => (a + b) * 2),
// });

// const person = {
//   name: "Oleksii",
//   age: 30,
//   height: 175,
//   hair: "black",
//   home: {
//     street: 45,
//   },
// };
// person.home.street = person.home.street + 5;
// const newPerson = {
//   ...person,
//   home: {
//     ...person.home,
//   },
// };
// person.home.street = person.home.street + 5;
// console.log(newPerson);
// console.log(person);

// // Setup
// // Setup
// function compareEquality(a, b) {
//   if (a === b) {
//     // Change this line
//     return "Equal";
//   }
//   return "Not Equal";
// }

// console.log(compareEquality(10, 10));

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      console.log("Alpha");
      break;
    case "beta":
      console.log(2);
      break;
    case "gamma":
      console.log(3);
      break;
    case "delta":
      console.log(4);
  }

  // Only change code above this line
  return answer;
}

console.log(caseInSwitch(1));
