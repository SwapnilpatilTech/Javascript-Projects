//pattern no 23


for(let i = 1; i <= 5; i++) {
    for(let s = i; s <= 5; s++) {
        document.write('-- ');
    }
    for(let j = 1; j <= i; j++) {
        if(j%2==0) {
            document.write("| ");
        }
        else {
            document.write("_ ");
        }
    }
    document.write('<br>');
}