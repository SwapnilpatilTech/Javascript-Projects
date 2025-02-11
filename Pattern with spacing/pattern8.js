
// Pattern no 8

for(let i = 1; i <= 5; i++) {
    for(let s=1; s<=i; s++)
        {
            document.write("_  ")
        }    
    for(let j = i; j <= 5; j++) {
        document.write(j + " ");
    }
    document.write('<br>');
}