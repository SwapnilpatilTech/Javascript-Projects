
for(let i = 1; i <= 7; i++) {
    for(let j = 1; j <= 5; j++) {
        if(i == 1) {
            document.write("* ");
        }
        else if(j == 3) {
            document.write("* ");
        }
        else {
            document.write("_.  ");
        }
    }
    document.write("<br>");
}