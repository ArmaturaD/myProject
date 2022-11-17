//На входе два одномерных массива. В каждом массиве всегда по два элемента. Верните третий массив результат которого будет сумма элементов предыдущих
function test(arr1, arr2) { 
    const arr3 = [arr1[0] + arr2[0], arr1[1] + arr2[1]]
    return arr3
  }
  console.log(test([2,4], [1,3]))
 // Напишите функцию, которая принимает массив чисел и возвращает массив этих чисел умноженных на два
function test2 (arr) {
const dbl = (numb) => numb * 2;
return arr.map(dbl)
  }
  console.log(test2([1,2,3,4,5]))

 // Напишите функцию, которая принимает массив объектов с полем id. Например [{id: '100'}, {id: 2}] и возвращает массив этих id
  const test3 = (arr) => {
    return arr.map((obj) =>{
        return obj.id;
      })
    }
      console.log(test3([{id: 1},{id: 2},{id: 3},{id: 4}]))
      console.log(test3 ([{id: true}]))

      //Напишите функцию, которая принимает массив чисел и возвращает массив строк по шаблону <div>{number}</div>
      const test4 = (arr) => { 
        return arr.map((item) => {
         return `<div>${item}</div>`
       })
       }
       console.log(test4([1,2]))
       console.log(test4(["Petro"]))

       //Напишите функцию, которая принимает массив строк и возвращает массив строк с четным количеством букв 
       //Input: ['ab','abc','abcd']
       //Output: ['ab','abcd']
       //Input: ['abc','abcde']
       //Output: []

       const test5 = (arr) =>{
        return arr.filter((str)=> {         
            // const callback = (str) => {    // второй вариант 
            // if (str. length % 2 === 0){   // return str.lenght % 2 ===0; третий вариант тогда не надо писать true false
            // return true 
            //}
            // return false
            //}
            //return arr.filter (callback)
           if  (str.length % 2 === 0){
            return true
           }
       return false
    })
}
    console.log (test5(['abc','abcde']))
    console.log (test5(['ab','abc','abcd']))


    //Напишите функцию, которая принимает массив чисел и возвращает массив чисел умноженных на два, которые делятся на 10 без остатка
    //Input: [1,2,3,7,10,5]
    //Output: [20,10]
    //Input: [1,2,3,7,9,4]
     //Output: []

     const task6 =(arr) =>{
        const arr1 = arr.map((num) => {
            return num *2
        })
    const arr2 = arr1.filter ((num) => {
        return num % 10 === 0
    }) 
    return arr2
    }
    console.log(task6([1,2,3,7,10,5]))
    console.log(task6([1,2,3,7,9,4]))

    //Напишите функцию, которая принимает массив булевых значений и возвращает массив только со значениями true

//Input: [true,false,true,true]
//Output: [true,true,true]
//Input: [false,true]
//Output: [true]

const task7 = (arr) =>{
    return arr.filter((bool) => bool)
}
         
        
       
       console.log(task7([true,false,true,true]))
       console.log(task7( [false,true]))
// task 8
       //Напишите функцию, которая принимает массив значений в тч и значения undefined и возвращает массив только без значений undefined
       //Input: [true, false, true,true, undefined, true, undefined]
       //Output: [true, false, true, true, true]
       //Input: [undefined, true, undefined]
       //Output: [true]

       const task8 =(arr) =>{
        return arr.filter ((item) =>{
            return typeof item !== "undefined"
        })
       }
       console.log(task8([true, false, true,true, undefined, true, undefined]))
       console.log(task8( [undefined, true, undefined]))
// task 9
// Напишите функцию, которая принимает массив чисел и возвращает их сумму. Использовать reduce
//Input: [1,2,3,4,5]
//Output: 15
//Input: [2, 11, 5]
//Output: 18
 const task9 =(arr) =>{
    return arr.reduce ((acc, num) =>{
        return acc + num
    }, 0)

 }

 console.log(task9([2, 11, 5]))
 console.log(task9([1, 2, 3, 4 ,5]))