//pure function
// side effect


function greetingsGeneration() {
    let names = "";

function greetings (name) {
    names = `${names}, ${name}`
    return `Hello${names}`
}
return greetings;
}

const greet =greetingsGeneration ()

console.log (greet("Student"))
console.log (greet("Vasay"))



let ageStart = 6;
let jubilee = 0;

function findJubilee(age) {
    return age + 5 - ((age + 5) % 5)
}
jubilee = findJubilee(ageStart)

console.log (jubilee)