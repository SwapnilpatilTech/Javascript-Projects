//pattern no 22
// -
// | -
// - | -
// | - | -
// - | - | -

for(let i = 1; i <= 5; i++) {
    for(let s= 1; s <= i; s++) {
        document.write('-- ');
    }
    for(let j = 5; j >= i; j--) {
        if(j%2==0) {
            document.write("| ");
        }
        else{
            document.write("_ ");
        }
    }
    document.write('<br>');
}