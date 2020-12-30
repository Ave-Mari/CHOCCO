// //SLIDER

// const left = document.querySelector('#left');
// const right = document.querySelector('#right');
// const itemsList = document.querySelector('#items');


// right.addEventListener("click", e => {
//     e.preventDefault(); 
    
//     itemsList.appendChild(itemsList.firstElementChild); 
// });

// left.addEventListener("click", e => {
//     e.preventDefault(); 
    
//     itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild); 
// });



//BURGER MENU main

// const fixedMenu = document.querySelector('#hamburger');
// const overlay = document.querySelector('#overlay');
// // const body = document.body;

// fixedMenu.addEventListener("click", (e) => {
//     e.preventDefault(); 

//     if (overlay.classList.contains('overlay--active')) {
//         overlay.classList.remove("overlay--active")
//     } else {
//         overlay.classList.add("overlay--active");
//        }     
    
// });


///SLIDER JQUERY 

$(document).ready(function(){
    $('.slider__list').bxSlider();
  });


