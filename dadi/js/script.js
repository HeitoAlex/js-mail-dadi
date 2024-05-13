const numbers = [1,2,3,4,5,6]

let userNumber = Math.floor(Math.random() * numbers.length) + 1;
let computerNumber = Math.floor(Math.random() * numbers.length) + 1;

if (userNumber > computerNumber){
    console.log(userNumber, computerNumber, userNumber)
} else {
    console.log(userNumber, computerNumber, computerNumber)
}

                              // OPPURE

const min = 1
const max = 6

let userNumber = parseInt(Math.random() * (max - min) + min);
let computerNumber = parseInt(Math.random() * (max - min) + min);

if (userNumber > computerNumber){
    console.log(userNumber, computerNumber, userNumber)
} else {
    console.log(userNumber, computerNumber, computerNumber)
}