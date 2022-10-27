
const arrays = [5, 5, 8, 3, 1, 8, 3];

const arrays2 = [...arrays, 1000,500] // создание нового массива с добавлением новых элементов  не мутированный массив

console.log(arrays.length) // длина масива
console.log(arrays[0]) // индекс первого єлемента в массиве 
console.log(arrays[arrays.length -1]) //выбор последнего элемента массива

console.log(arrays2.length)



//Пример создания массива из 100 элементов, каждый из которых содержит значение типа null:Значения переданные в fill могут быть любыми
const newArray = new Array(100).fill(0).map((item, index) => {
    return index;  // выводим 100 значений с индексами 
})

console.log(newArray)

console.log( typeof newArray)  // тип массива  объект 
 
console.log( Array.isArray(newArray))  //метод isArray  массив это или нет возвращает true fals 