for(let i = 1; i <= 7; i++) {
    for(let j = 1; j <= 5; j++) {
        if(j == 1) {
            document.write('* ');
        }
        else if((i == 1 && j <= 3) || (i == 7 && j <= 3)) {
            document.write("* ");
        }
        else if((i == 2 && j == 4) || (i == 3 && j == 3)) {
            document.write("* ");
        }
        else if(i == 4 && j <=2) {
            document.write("* ");
        }
        else if((i == 5 && j == 3) || (i == 6 && j == 4)){
            document.write("* ");
        }
        else{
            document.write("_ ");
        }
    }
    document.write('<br>');
}