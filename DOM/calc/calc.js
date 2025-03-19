const main = document.getElementsByClassName('main')[0];
//all values 1 to 10
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
//all opretors+,-,*,/
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multi = document.getElementById('multi');
const division = document.getElementById('division');
const equal = document.getElementById('equal');
const dele = document.getElementById('delete');

let value1;
let value2;
let symbol;
let calc;
let sequal = [];

function display(n) {
    main.innerHTML+=n;
}

function extract(n) {
    for(let i = 0; i < sequal.length; i++) {
        if(sequal[i] == '*') {
            value1 = parseInt(sequal.slice(0, i));
            value2 = parseInt(sequal.slice(i+1));
            symbol = sequal.slice(i, i+1);
        } else if(sequal[i] == '+') {
            value1 = parseInt(sequal.slice(0, i));
            value2 = parseInt(sequal.slice(i+1));
            symbol = sequal.slice(i, i+1);
        } else if(sequal[i] == '-') {
            value1 = parseInt(sequal.slice(0, i));
            value2 = parseInt(sequal.slice(i+1));
            symbol = sequal.slice(i, i+1);
        } else if(sequal[i] == '/') {
            value1 = parseInt(sequal.slice(0, i));
            value2 = parseInt(sequal.slice(i+1));
            symbol = sequal.slice(i, i+1);
        } 
    }

    if(symbol == "*"){
        calc = num1*num2;
    } else if(symbol == '/') {
        calc = num1/num2;
    } else if(symbol == '+') {
        calc = num1+num2;
    }else{
        calc = num1-num2;
    }

    return calc;
}

equal.addEventListener('click', () => {
    box.innerHTML = extract(sequal);
});

dele.addEventListener('click', () => {
    box.innerHTML = '';
});

plus.addEventListener('click', () => {
    sequal+=plus.innerHTML;
    console.log(sequal);
});

minus.addEventListener('click', () => {
    sequal+=minus.innerHTML;
    console.log(sequal);
});

division.addEventListener('click', () => {
    sequal+=division.innerHTML;
    console.log(sequal);
});

multi.addEventListener('click', () => {
    sequal+=multi.innerHTML;
    console.log(sequal);
});

one.addEventListener('click', () => {
    sequal+=one.innerHTML;
    console.log(sequal);
});

two.addEventListener('click', () => {
    sequal+=two.innerHTML;
    console.log(sequal);
});

three.addEventListener('click', () => {
    sequal+=three.innerHTML;
    console.log(sequal);
});

four.addEventListener('click', () => {
    sequal+=four.innerHTML;
    console.log(sequal);
});

five.addEventListener('click', () => {
    sequal+=five.innerHTML;
    console.log(sequal);
});

six.addEventListener('click', () => {
    sequal+=six.innerHTML;
    console.log(sequal);
});

seven.addEventListener('click', () => {
    sequal+=seven.innerHTML;
    console.log(sequal);
});

eight.addEventListener('click', () => {
    sequal+=eight.innerHTML;
    console.log(sequal);
});

nine.addEventListener('click', () => {
    sequal+=nine.innerHTML;
    console.log(sequal);
});

zero.addEventListener('click', () => {
    sequal+=zero.innerHTML;
    console.log(sequal);
});

