
for(let i = 1; i <= 7; i++) {
    for(let j = 1; j <= 5; j++) {
        if(i == 1 || i == 7) {
            document.write("* ");
        }
        else if(j == 1 || j == 5) {
            document.write("* ");
        }
        else {
            document.write("_. ");
        }
    }
    document.write("<br>");
}