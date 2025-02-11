//paattern no 21

for(let i = 5; i >= 1; i--) {
    for(let s=1; s<=i; s++)
        {
            document.write("_  ")
        }
    for(let j = 5; j >= i; j--) {
        if(j%2==0){
            document.write(0 + " ");
        }
        else{
            document.write(1 + " ");
        }
    }
    document.write('<br>');
}