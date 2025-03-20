const input = document.getElementById("input");
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");
let count = 0;

btn1.addEventListener("click", () => {
  count++;
  input.innerHTML = count;
});

btn2.addEventListener("click", () => {
  if (count <= 0) {
    document.writeln('You are substracting with zero');
  }
  else{
    count--;
    input.innerHTML = count;
  }
});
btn3.addEventListener("click", () => {
  if (count >= 1) {
    count /= 2;
  }
  input.innerHTML = count;
});
btn4.addEventListener("click", () => {
  if (count > 0) {
    count *= 2;
  }
  input.innerHTML = count;
});
