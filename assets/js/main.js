const navbarList = document.querySelector('.navbar-list');
const navbarTogglerBtn = document.querySelector('.navbar-toggler-btn');
navbarTogglerBtn.addEventListener('click',()=>{
    navbarList.classList.toggle('open');
})

const contactInputs = document.querySelectorAll('.input-wrapper textarea, .input-wrapper input');
contactInputs.forEach(contactInput=>{
    contactInput.addEventListener('blur',(e)=>{
        const value = e.target.value;
        if (value !== "")e.target.classList.add('hasValue');
        else e.target.classList.remove('hasValue');
    })
})
