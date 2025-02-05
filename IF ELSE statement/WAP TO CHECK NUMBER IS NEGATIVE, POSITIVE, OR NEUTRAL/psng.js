// WAP TO CHECK NUMBER IS NEGATIVE, POSITIVE, OR NEUTRAL.
let x = prompt("Enter a number: ");
x = parseInt(x);

// check if number is greater than 0
if (x > 0) 
{
    document.write("no is positive");
}

// check if number is 0
else if (x == 0) 
{
    document.write("no is neutral");
}

// if number is less than 0
else 
{
    document.write("no is negative");
}