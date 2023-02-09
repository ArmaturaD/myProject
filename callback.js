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
