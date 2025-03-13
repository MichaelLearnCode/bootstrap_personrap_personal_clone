const navbarList = document.querySelector('.navbar-list');
const navbarTogglerBtn = document.querySelector('.navbar-toggler-btn');
navbarTogglerBtn.addEventListener('click',()=>{
    navbarList.classList.toggle('open');
})

