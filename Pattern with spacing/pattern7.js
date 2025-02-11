// Pattern no 7

for(let i = 5; i >= 1; i--) {
    for(let s=i; s<5; s++)
        {
            document.write("_  ")
        }
    for(let j = 1; j <= i; j++) {
        document.write(j + " ");
    }
    document.write('<br>');
}