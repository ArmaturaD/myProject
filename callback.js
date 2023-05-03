// calback - функция обратного вызова

// syns istruction 1 выполняются поледовательно это синхроный код
// syns istruction 2
// syns istruction 3

// syns istruction 1 выполняются поледовательно это синхроный код
// asyns istruction 2 НЕТ  гарантии как пойдут
// syns istruction 3
// syns istruction 4

//  function output (results){
//     console.log(results)
//  }

//  function outputAsAText (results){
//     console.log(results)
//     if (results === 10 )
//     console.log ("ten")
//  }
//  function calculateSum (a, b, calback) {
//     const sumResult = a + b;
//     calback(sumResult)
//  }
//  calculateSum (1, 5, output)
//  calculateSum (5, 5, outputAsAText)

//  const process = (a, b, func) => {
//    return  {operationResult : func(a, b)}
//  }
//  console.log({
//    add: process(1, 2, (a, b) => a + b),
//    sub: process(1, 2, (a, b) => a - b),
//    dblAdd: process(1, 2, (a, b) => (a + b) * 2),
// })

// const arr1 = [4, 6, 7, 8, 9, 10];

// function squad(item) {
//   return item ** 2;
// }

// //const arr2 = arr1.map(squad);
// const arr2 = arr1.map((item) => item ** 2); // стрелочная запись
// console.log(arr2);

let min = 117;
let max = 132;
function getRanom() {
  // const max = 132;
  // const min = 117;
  const rand = Math.floor(min + Math.random() * (max + 1 - min));
  console.log(rand);
}
getRanom();
