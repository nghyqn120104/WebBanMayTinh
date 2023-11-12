// Variables
const menuMobile= document.getElementById('menu');
const menu=document.querySelector('.menu-mobile');
const modal= document.querySelector('.modal');
const removeModal= document.getElementById('modal__footer-btn--close');
const closeModal= document.querySelector('.modal__header-close');
const proDuctItems= document.querySelectorAll('.home-product__item');
const lapTopType=document.querySelector('.infor-type');
const lapTopPrice= document.querySelector('.infor-price');

var currentWidth = menu.clientWidth;

function showMenu(){
    menu.classList.add('open');
}

function closeMenu(){
    menu.classList.remove('open')
}

menuMobile.onclick= function(){
    var isClosed=menu.clientWidth===currentWidth;
    if(isClosed){
        showMenu();
    }else{
        closeMenu();
    }
}

const menuItems= document.querySelectorAll('.nav-menu li a[href*="#"]');
for(var i=0; i<menuItems.length;i++){
    const menuItem=menuItems[i];
    menuItem.onclick= function(){
        closeMenu();
    }
}

function showModal(){
    modal.classList.add('appear');
}

function checkshowModal(){
    return modal.classList.contains('appear');
}

function shutDownModal(){
    modal.classList.remove('appear');
}

removeModal.addEventListener('click',function(){
    shutDownModal();
});

closeModal.addEventListener('click',function(){
    shutDownModal();
});

for(let i=0;i<proDuctItems.length;i++){
    proDuctItems[i].addEventListener('click',function(e){
        if(e.target.tagName==='DIV' || e.target.tagName==='H4'){
            e.preventDefault();
            // console.log(e.target.nextElementSibling.textContent);
            // console.log(e.target.nextElementSibling.nextElementSibling.nextElementSibling.children[1].textContent);
            showModal();
            if(checkshowModal()){
                lapTopType.readOnly=true;
                lapTopPrice.readOnly=true;
                lapTopType.value=e.target.nextElementSibling.textContent;
                lapTopPrice.value=e.target.nextElementSibling.nextElementSibling.nextElementSibling.children[1].textContent;
            }
        }
    });
}