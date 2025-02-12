for(let i = 1; i <= 7; i++) {
    for(let j = 1; j <= 5; j++) {
        if(j == 1 || i == 1 || j == 5 || i == 4) {
            document.write("* ");
        }
        else{
            document.write("_    ");
        }
    }
    document.write('<br>');
}