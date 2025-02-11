// Patern no 10

for(let i = 5; i >= 1; i--) {
    for(let s=i; s<5; s++)
        {
            document.write("_  ")
        }
    for(let j = i; j >= 1; j--) {
        document.write(j + " ");
    }
    document.write('<br>');
}