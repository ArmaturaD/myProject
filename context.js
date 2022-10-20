const variableInContext = 1; // global context - browser window
 //global
 // globalThis

function text () {                   // function context
    let someVariblelInTheFunction = 2;
    if (true) {                       // context Blook
        let somveribleItTheBlock = 3;
         console.log("insaid block",
            somveribleItTheBlock,
            someVariblelInTheFunction,
            variableInContext)
    }
    
console.log("insaid function",
           typeof somveribleItTheBlock,
            someVariblelInTheFunction,
            variableInContext)
    
}
text ()
console.log("global",
typeof somveribleItTheBlock,
typeof someVariblelInTheFunction,
 variableInContext)

 function test () {
    b = 4
    const a = b 
 }
 console.log(typeof a, typeof b) // в браузере выведеться что в намбер
 


 (function selfInvokingFunction () {  // само запускающая функция 
    const variableIn = 1;
 } )()
