const coin=document.querySelector('#coin');
const head=document.querySelector('.heads');
const tail=document.querySelector('.tails');
const btn=document.querySelector('.btn');
const win=document.querySelector('.win');


btn.addEventListener('click',()=>{

    const result=Math.random();
    if(result<0.5){
        coin.setAttribute('class','animated-head');
    }
    else if(result>0.5){
        coin.setAttribute('class','animated-tail');
    }

   
})