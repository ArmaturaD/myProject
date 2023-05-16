// const age = 7;

// if (age >= 18) {
//   console.log("Is abult");
// }
// if (age >= 12 && age < 18) {
//   console.log("Is teenager");
// }
// if (age < 12) {
//   console.log("Is child");
// }

// const sumPositive = (a, b) => {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "One of the arguments is not a number";
//   }
//   if (a <= 0 || b <= 0) {
//     return "Number is not positive";
//   }
//   return a + b;
// };

// console.log(sumPositive("dd", 8));

const newArray = [
  "FC Arsenal England",
  "FC Milan Italy",
  "FC Dynamo Kyev",
  "FC BVB Germani",
  "FC Real Madrid Spain",
];

function grup(array) {
  array.forEach((item, index) => {
    const onlyClubName = item.split(" ")[1];
    array[index] = onlyClubName;
    console.log(onlyClubName);
  });
  return array;
}
//grup(newArray);
//console.log(newArray);

function grup2(array) {
  return array.map((item) => item.split(" ")[1]);
}

console.log(grup2(newArray));

console.log(newArray);
