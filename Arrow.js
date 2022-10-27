  
  arrow(1, 2, 5, 5)
  function arrow  () {
    console.log("my  fanction",arguments);
  } 


  // arrow-function
  
  const arrowF = () =>{
    console.log("my arrow fanction");
  }
  arrowF("a, d")
  const foo1 = () => ({ a: 2 }) 

  console.log(foo1)

  const foo2 = () => {  
    return { b: 3 }  
  }  

  console.log(foo2)
// главные отличия стрелочных функции от классических:

//Отсутствие объекта arguments;

//Отсутствие собственного контекста (this);

//Стрелочную функцию нельзя вызвать до её объявления (так как она анонимная).

//В стрелочных функциях можно получить список всех аргументов воспользовавшись Rest-оператором (rest parameters).