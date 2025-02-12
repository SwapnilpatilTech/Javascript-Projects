for(let i = 5; i >= 1; i--) {
    for(let j = 1; j <= i; j++) {
        document.write(j + " ");
    }
    for(let k = 5; k > i; k--){
        document.write('_ ');
    }
    for(let k = 5; k > i; k--){
        document.write('_ ');
    }
    for(let l = i; l >= 1; l--) {
        document.write(l+ " ");
    }
    document.write('<br>');
}