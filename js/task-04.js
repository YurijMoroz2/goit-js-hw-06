const btnDec=document.querySelector('button[data-action="decrement"]');
const btnInc=document.querySelector('button[data-action="increment"]');
// console.log(btnDec)
const number=document.querySelector('#value');

let counterValue=0;
btnDec.addEventListener("click",()=>{
     counterValue-=1;
     number.textContent=counterValue;
});
btnInc.addEventListener("click",()=>{
     counterValue+=1;
     number.textContent=counterValue;
});
