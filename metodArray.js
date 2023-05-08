const users = [
  {
    name: "Vitaly",
    age: 25,
    sex: "male",
  },

  {
    name: "Jessica",
    age: 17,
    sex: "female",
  },

  {
    name: "Robert",
    age: 28,
    sex: "male",
  },

  {
    name: "Sarah",
    age: 20,
    sex: "female",
  },

  {
    name: "Boby",
    age: 18,
    sex: "male",
  },

  {
    name: "Anna",
    age: 25,
    sex: "female",
  },
  {
    name: "Mark",
    age: 25,
    sex: "male",
  },
];

const count = {
  men: 0,
  women: 0,
};

//forEach()
users.forEach(function (item) {
  item.sex === "male" ? count.men++ : count.women++;
});

//console.log(count);

//filter()

const adultsUsers = users.filter(function (item) {
  return item.age > 18;
});

//console.log(adultsUsers);

// map()

const misMisterUsers = users.map(function (item) {
  return item.sex == "mail" ? "Mr." + item.name : "Mrs." + item.name;
});

//console.log(misMisterUsers);

// reduce()
const sumAverage = users.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.age;
}, 0);

//console.log(sumAverage / users.length);
// find()
//some() якщо який небудь елемент задовільняє умові вертає true, якщо ні то false.

const some = users.some(function (item) {
  return item.age > 25;
});
//console.log(some);

// every перевіряє чи кожен з єлементів задовільняє задонк умову.
const every = users.every(function (item) {
  return item.age > 20;
});
//console.log(every);

//findeindex() вертає індекс елемента масива. якщо елеиента немає то вертає -1;
const findeindex = users.findIndex(function (item) {
  return item.age === 20;
});
console.log(findeindex);
