// reduce

const arr = [10, 20, 30, 40, 50]


const calback =( acc, rec, index, array) => {
    console.log (rec, acc)
    return rec + acc;
}

const sum = arr.reduce(
    calback,
    0
)

console.log(sum)