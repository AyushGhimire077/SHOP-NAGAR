const bar = document.getElementById('bar');
const nav = document.getElementById('nav-menu');
const cart =document.getElementById('cart');
const close = document.getElementById('close')

if (bar){  
bar.addEventListener('click', ()=>{
    nav.classList.add('active');
    cart.style.display = 'none';
})
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
        cart.style.display = 'flex';
    })
}


function gotoShop(){
    location.href = 'shop.html';
}