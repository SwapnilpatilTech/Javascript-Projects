// WAP to Print the Fibonacci Sequence.

let s3;

let s1 = prompt("Enter the value : ");
s1 = parseInt(s1);

let s2 = prompt("Enter the value : ");
s2 = parseInt(s2);

console.log(s1);
console.log(s2);

for(let x= 1; x<= 10; x++) 
    {

    s3 = s1 + s2;
    s1 = s2;
    s2 = s3;

    console.log(s3);

    }