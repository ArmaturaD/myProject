arrow(1, 2, 5, 5);
function arrow() {
  //console.log("my  fanction", arguments);
}

// arrow-function

const arrowF = () => {
  // console.log("my arrow fanction");
};
arrowF("a, d");
const foo1 = () => ({ a: 2 });

//console.log(foo1);

const foo2 = () => {
  return { b: 3 };
};

//console.log(foo2);
// главные отличия стрелочных функции от классических:

//Отсутствие объекта arguments;

//Отсутствие собственного контекста (this);

//Стрелочную функцию нельзя вызвать до её объявления (так как она анонимная).

//В стрелочных функциях можно получить список всех аргументов воспользовавшись Rest-оператором (rest parameters).
function sayHello() {
  console.log("Hello");
}

const sayHello2 = () => {
  console.log("hello2");
};
// стрілкова функція з аргументом
function sayHelloToPerson(name) {
  console.log("Hello ", `${name}`);
}
const sayHelloToPerson2 = (name) => {
  console.log("Hello ", `${name}`);
};
// якщо один аргумент то дужки можемо опустити
const sayHelloToPerson3 = (name) => {
  console.log("Hello ", `${name}`);
};

// коли два і більше аргументів

function summ(a, b) {
  console.log(arguments); /// псевдомасив
  console.log(a + b);
}
const summ2 = (a, b) => {
  return a + b;
};
const summ3 = (a, b) => a + b; //без return скорочення

//console.log(summ2(10, 5));

//console.log(summ3(10, 10));

//console.log(summ(10, 22));
//скорочення стрілкової функціі
// const adultsUsers = users.filter((item) => {
//   return item.age > 18;
// });
//const adultsUsers = users.filter((item) => item.age > 18);
