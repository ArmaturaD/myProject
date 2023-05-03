function sum(num) {
  let result = num;
  function f(s) {
    result = result + s;
    console.log(result);
    return f;
  }
  console.log(result);
  return f;
}
sum(3)();
sum(3)(5)();
sum(2)(0)(3)(4);
//https://www.youtube.com/watch?v=VAjqIAaDRSg
