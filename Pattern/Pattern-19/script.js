// Pattern no 19 
//with count statement

let count = 0;

for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <= i; j++) {
        count++;
        document.write(count + " ");
    }
    document.write('<br>');
}