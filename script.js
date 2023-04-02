const coin=document.querySelector('#coin');
const head=document.querySelector('.heads');
const tail=document.querySelector('.tails');
const btn=document.querySelector('.btn');
const win=document.querySelector('.win');

function dsum(callback,ms){
    setTimeout(callback,ms);
}
btn.addEventListener('click',()=>{
    coin.setAttribute('class','');
    const random=Math.floor(Math.random()*2);
    console.log(random);
    const result=random<1?'head':'tail';
   
    dsum(function(){
        coin.setAttribute('class','animated'+result);
    },100);
    console.log(result);
    setTimeout(()=>{
        win.innerText='Loding...';
    },1000)
    setTimeout(function(){
        win.innerText=result+'!';
    },2500)
   
})