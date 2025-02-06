// wap to print only odd numbers using for loop.

let n = prompt("Enter a number: ");
n = parseInt(n);

for(let x = 1; x <= n; x++) 
 {
    if(x %2== 0) 
        {
        console.log(x);
        }
  }