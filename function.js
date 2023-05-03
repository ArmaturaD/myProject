function myFunction(a, b = 100) {
  console.log(a + b);
}
myFunction(4, 5);

let y = 100;
myFunction(y, 10);
myFunction(y, y * 2);
myFunction(8);

function showSum(elem, x, y) {
  document.querySelector(elem).textContent = x + y;
}
showSum(".out-2", 5, 6);

function showSum2(elem, x, y) {
  elem.textContent = x + y;
}
const out1 = document.querySelector(".out-1");
showSum2(out1, 70, 30);

function showSum3(x, y, elem = ".out-1") {
  console.log(arguments);
  document.querySelector(elem).textContent = x + y;
}

showSum3(10, 20, ".out-3");

// arguments with a cycle;

function showSumAll() {
  console.log(arguments);
  let sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  console.log(sum);
}
showSumAll(1, 2, 4, 5, 6, 7);

// arguments with a array псевдо массив
function showSumAll2() {
  console.log(arguments);
  let sum = Array.from(arguments).reduce((acum, item) => (acum = acum + item));
  console.log(sum);
}
showSumAll2(2, 5, 4);

//arguments with a array and rest parametrs.должны идти после основных параметров
function showSumAll3(...args) {
  //rest parametrs
  console.log(args);
  let sum = args.reduce((acum, item) => (acum = acum + item));
  console.log(sum);
}
showSumAll3(5, 5, 4);

/// callback

function showSumAll4(result) {
  document.querySelector(".out-1").innerHTML = `<b>${result}</b>`;
}

function showSumAll5(func, ...num) {
  func(num);
}

showSumAll5(showSumAll4, 15, 16, 17);
