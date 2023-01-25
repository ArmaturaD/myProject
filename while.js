

const arrays = [    // нульовий елемент масива
    [1, 4, 5, 6], //  початкови елемент масиву [1, 4, 5, 6],
    [1, 20],      //перший елемент масиву 

    //  [-1000, 90]
]

function counter() {
    i = 1 + 1
    return i < 10
}

let currentArray = arrays[0]   //нулювий елемен масиву 
let currentArrayToMergeIndex = 1 // перший елемент масиву  [1, 20], індек масивая який  будемо Merge обєднювати 

while (currentArrayToMergeIndex < arrays.length) {
    const arr1 = currentArray
    const arr2 = arrays[currentArrayToMergeIndex]
    let index1Array = 0;
    let index2Array = 0;
    let newArray = []

    while (index1Array + index2Array !== arr1.length + arr2.length) {
        console.log({ index1Array, index2Array })

        if (index1Array >= arr1.length) {
            newArray = [...newArray, arr2[index2Array]]
            index2Array = index2Array + 1
            continue
        }
        if (index2Array >= arr2.length) {
            newArray = [...newArray, arr1[index2Array]]
            index1Array = index1Array + 1
            continue
        }

        if (arr1[index1Array] < arr2[index2Array]) {
            newArray = [...newArray, arr1[index1Array]]
            index1Array = index1Array + 1
        } else {
            newArray = [...newArray, arr2[index2Array]]
            index2Array = index2Array + 1
        }
    }
    currentArray = newArray
    currentArrayToMergeIndex = currentArrayToMergeIndex + 1
}
console.log(currentArray)