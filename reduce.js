// // reduce

// const arr = [10, 20, 30, 40, 50]

// const calback =( acc, rec, index, array) => {
//     console.log (rec, acc)
//     return rec + acc;
// }

// const sum = arr.reduce(
//     calback,
//     0
// )

// console.log(sum)

// function firstNonConsecutive(arr) {
//   const res = arr.find((item, index) => item !== index + arr[0]);
//   return Number.isInteger ? res : null;
// }

// console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));

function firstNonConsecutive(arr) {
  return arr.find((element, index) => element - 1 > arr[index - 1]) ?? null;
}
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
