const box = document.querySelector('.box');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');


registerlink.addEventListener('click' , ()=>{
    box.classList.add('active')
});

loginlink.addEventListener('click' , ()=>{
    box.classList.remove('active')
});




