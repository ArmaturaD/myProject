// slice
const stringS = "Hi there!";
console.log (stringS[0])
console.log(`N${stringS.slice(1)}`)

//replace -заменяет первое значение  HI на HELLO

const string = "HI HI HI HI HI";
console.log (string.replace("HI", "HELLO"))


//replaceALL - заменяет все значения 
 const firstName = "Petro Petro Petro";
 console.log (firstName .replaceAll("Petro","Vasay"))


 // includes -проевряет есть ли в стороке подстрока если есть то будет true если нет то false

 const stringIncludes = " HI HI Stud2ent HI HI";
 console.log(stringIncludes.includes("HI Student"))
 console.log(stringIncludes.includes("HI Stud2ent"))

 // indexOf возвращает индекс где находится первая найденая подстрака если ненайдет то вернет -1 начало строки с 0
 const stringIndexOf = " HI HI HI Student"
 console.log(stringIndexOf.indexOf("HI Student"))
 console.log(stringIndexOf.indexOf("HI Stude8nt")) // вернет -1 так как нет такой подстроки 

 // substring  - выведит  построку от начала до конца  (начальный символ и конечный)
 const stringSubstring = "HI BI RI DI"
 console.log(stringSubstring.substring(2,5)) //2 пробел до 5 ВІ

 // localeCompere для сравнения строк  вернет 1 приритет выше. 0 они не равны. -1 приеритет ниже 

 // slice получение подстраки применяеться так же к массивам 
 const stringSlice = "HI BI RI DI"
 console.log(stringSlice.slice(0,5))

 //toLowerCase нижний регистр все строки становяться маленькими 
 const stringtoLawerCase = "HI BI RI DI"
 console.log(stringtoLawerCase.toLowerCase())

 // toUpperCase  верхний регист све строки становяться с большой буквы 
 const stringtoUpperCase = "hi bi ri di"
 console.log(stringtoUpperCase.toUpperCase())

 // repeat повтаряет строку столько рас сколько надо 
 //trim удаляет пробелы с начало строки и в конце строки 
 console.log("HI " .repeat(10).trim())

 //split разделит строку по какомуто токину преобразование строки в массив 
//join работает обратно от split возвращает массив в строку ()собирает массив в строку и добавляет можно символы между элементами (:,?)
 console.log(
    "HI " 
 .repeat(10)
 .trim()
 .split(" ")
 .map((greeting, index) =>  
 `${greeting} user ${index +1}`).join("\n\t"))// спец символ новая строка "\n"\t табуляция 

 
