 // calback - функция обратного вызова 
  
 // syns istruction 1 выполняются поледовательно это синхроный код
 // syns istruction 2
 // syns istruction 3


  // syns istruction 1 выполняются поледовательно это синхроный код
 // asyns istruction 2 НЕТ  гарантии как пойдут 
 // syns istruction 3
 // syns istruction 4
 

 function output (results){
    console.log(results)
 }

 function outputAsAText (results){
    console.log(results)
    if (results === 6 )
    console.log ("six")
 }
 function calculateSum (a,b, calback) {
    const sumResult = a + b;
    calback(sumResult) 
 }
 calculateSum (1, 5, output)
 calculateSum (1, 5, outputAsAText)