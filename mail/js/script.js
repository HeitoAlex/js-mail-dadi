const guestMail = ['gino@gmail.com', 'gina@gmail.com','ginetto@gmail.com', 'ginetta@gmail.com','ginopino@gmail.com', 'ginapina@gmail.com','ginuzzo@gmail.com', 'ginuzza@gmail.com','ginovaalmare@gmail.com', 'ginavaalmare@gmail.com','ginoelaspesa@gmail.com', 'ginaelaspesa@gmail.com'];

let userMail = prompt('Inserisci la tua mail');

if (guestMail.includes (userMail)){
    console.log('Welcome, you\'re great! Take a seat and enjoy!')
} else{
    console.log('Welcome for everyone... NOT FOR YOU!')
}