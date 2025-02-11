//paattern no 19

for(let i = 1; i <= 5; i++) {
    for(let s=1; s<=i; s++)
        {
            document.write("_  ")
        }
    for(let j = i; j >= 1; j--) {
        if(j%2==0){
            document.write(0 + " ");
        }
        else{
            document.write(1 + " ");
        }
    }
    document.write('<br>');
}