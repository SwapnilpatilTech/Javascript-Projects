for(let i = 1; i <= 7; i++) {
    for(let j = 1; j <= 5; j++) {
        if(j == 1) {
            document.write("* ");
        }
        else if((i == 1 || i == 4) && (j == 2 || j == 3 || j == 4)) {
            document.write("* ");
        }
        else if((i == 2 || i == 3) && j == 5) {
            document.write("* ");
        }
        else{
            document.write("_. ");
        }
    }
    document.write("<br>");
}