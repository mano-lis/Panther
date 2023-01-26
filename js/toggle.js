const btn = document.querySelector('#nav-toggle');
const navBar = document.querySelector('.navbar-1');

btn.addEventListener('click', () => {
    console.log('here');
    navBar.classList.toggle('in'); 
});