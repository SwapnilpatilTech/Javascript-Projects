
  const input = document.getElementById('input');
  const button1 = document.getElementById('btn1');
  const button2 = document.getElementById('btn2');
  const button3 = document.getElementById('btn3');
  const button4 = document.getElementById('btn4');
  let co = 0;

  button1.addEventListener('click', () =>{
    co++;
    tilte.innerhtml=co;
  });

  button2.addEventListener('click', () =>{
    if(co>0){
        co--;
    }
    tilte.innerhtml=co;
  });
  button3.addEventListener('click', () =>{
    if(co>=1){
        co/=2;
    }
    tilte.innerhtml=co;
  });
  button4.addEventListener('click', () =>{
    if(co>0){
        co*=2;
    }
    tilte.innerhtml=co;
  });
 