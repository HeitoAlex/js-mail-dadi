const evenNumbers = [];

for (let i = 0; i < 6; i++){
    const userNumber = parseInt(prompt('Scrivi un numero'), 10);

    if (userNumber % 2 === 0){
        evenNumbers.push(userNumber)
    }
}

console.log(evenNumbers)