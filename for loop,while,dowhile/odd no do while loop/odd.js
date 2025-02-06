// wap to print only odd numbers using do while loop.

let n = prompt("Enter the value : ");
n = parseInt(n);

let x = 1;
do {
    if(x %2== 0) 
        {
        console.log(x);
        }

    x++;
    } while(x <= n);