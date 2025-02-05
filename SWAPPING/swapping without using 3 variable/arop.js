//JavaScript program to swap two variables

//take input from the users
let a = parseInt(prompt('Enter the first variable: '));
let b = parseInt(prompt('Enter the second variable: '));


a = a + b;
b = a - b;
a = a - b;

document.write(a);
document.write(b);