let body = document.querySelector('body');
let colorr = document.querySelector('#color');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let color = Math.floor(Math.random() * 16777216).toString(16);

    body.style.backgroundColor = `#${color}`;
    colorr.innerHTML = `#${color}`;
});

colorr.addEventListener('click',() => {
    navigator.clipboard.writeText(colorr.innerHTML);
});