let i = 0;
let out = " ";
function f3() {
  i++;
  out = out + i + " ";
  if (i >= 30) return;
  f3();
}
//f3();
//console.log(out);
function randomIntenger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
let s1 = 0;
function moneyRecursion() {
  let m = randomIntenger(0, 100);
  console.log("add: " + m);
  s1 = s1 + m;
  console.log("sum: " + s1);
  if (s1 >= 300) return;
  moneyRecursion();
}
moneyRecursion();
