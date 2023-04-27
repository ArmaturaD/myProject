const fruits = ["apple", "orange", "apple", "pineapple", "orange", "kiwi"];

const newArray = fruits.reduce((acc, rec) => {
  return {
    ...acc,
    [rec]: (acc[rec] ?? 0) + 1,
  };
}, {});
console.log(newArray);
