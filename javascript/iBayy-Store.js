//toggle class active hamburger menu
const navbarContent = document.querySelector('.navbar-content');
//ketika humburger menu di click
document.querySelector('#hamburger-menu').onclick = (e) =>{
    navbarContent.classList.toggle('active');
    e.preventDefault();
};
//click diluar side bar untuk menghilangkan nav//
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const cb = document.querySelector('#cart-button');

document.addEventListener('click',function(e){
    if(!hm.contains(e.target) && !navbarContent.contains(e.target)){
    navbarContent.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)){
    searchForm.classList.remove('active');
    }
 
    if(!cb.contains(e.target) && !cart.contains(e.target) && !addItem.contains(e.target) && !addTwo.contains(e.target) && !addTree.contains(e.target)){
    cart.classList.remove('active');
    }
 
});
//toggle class active for class form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-boxx');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};
const cart = document.querySelector('.shoping-cart');
   document.querySelector('#cart-button').onclick = (e) => {
    cart.classList.toggle('active');
    e.preventDefault();
};
const itemsDetailModal = document.querySelector('#items-detail-modal');
const itemsDetailButton = document.querySelectorAll('.items-detail-button');
itemsDetailButton.forEach((btn) => {
    btn.onclick = (e) =>{
    itemsDetailModal.style.display = 'flex';
    e.preventDefault();
    };
})


//klik close//
document.querySelector('.modal .close-icons').onclick = (e) =>{
    itemsDetailModal.style.display = 'none';
    e.preventDefault();
};
//klik diluar modal//
const modal = document.querySelector('#items-detail-modal');
window.onclick = (e) => {
    if (e.target === modal){
        modal.style.display = 'none';
    }
}

const cartItem = document.querySelector('.cart-item');
const hapusItem = document.querySelector('.button-remove');
const addItem = document.querySelector('.add-button');

hapusItem.onclick = (e) =>{
    cartItem.style.display = 'none';
    e.preventDefault();
};
addItem.onclick = (e) =>{
    cartItem.style.display = 'flex';
   
    e.preventDefault();
}; 
 const removeTwo = document.querySelector('#button-remove-two');
 const addTwo = document.querySelector('#add-button-two');
 const cartTwo = document.querySelector('#cart-items-two');

 removeTwo.onclick = (e) =>{
    cartTwo.style.display = 'none';
    e.preventDefault();

};
addTwo.onclick = (e) =>{
    cartTwo.style.display = 'flex';
    e.preventDefault();
}; 
 const removeTree = document.querySelector('#button-remove-tree');
 const addTree = document.querySelector('#add-button-tree');
 const cartTree = document.querySelector('#cart-items-tree');

 removeTree.onclick = (e) =>{
    cartTree.style.display = 'none';
    e.preventDefault();

};
addTree.onclick = (e) =>{
    cartTree.style.display = 'flex';
    e.preventDefault();
}; 