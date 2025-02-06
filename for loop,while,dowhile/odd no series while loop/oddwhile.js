// wap to print only odd numbers using while loop.

let n = prompt("Enter the value : ");
n = parseInt(n);

let x = 1;
while(x <= n) 
    {
    if(x %2== 0) 
        {
        console.log(x);
        }

    x++;
    }