
for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <= 5; j++) {
        if(i == 1 && (j == 1 | j == 5)) {
            document.write("* ");
        }
        else if(i == 2 && (j == 2 || j == 4)){
            document.write("* ");
        }
        else if((i == 3 || i == 4 || i == 5) && j == 3) {
            document.write("* ");
        }
        else{
            document.write("_. ");
        }
    }
    document.write("<br>");
}