const switch1 = document.querySelector('#switch-1');
const inventoryBox = document.querySelector('.i-box');

switch1.addEventListener('click', () => {
    inventoryBox.classList.toggle('show');
});

// TOASTR SHOW FOR RELANCE BTN
$(document).ready(function(){
    $("#relanceToastr").click(function(){
        $('.toast').toast('show');
    });

    $("#relanceToastr2").click(function(){
        $('.toast').toast('show');
    });

    $("#relance-toaster").click(function(){
        $('.toast').toast('show');
    });

    $("#relanceToastr3").click(function(){
        $('.toast').toast('show');
    });

    $("#relanceToastr4").click(function(){
        $('.toast').toast('show');
    });
});

 

// function format ( ) {
//     // `d` is the original data object for the row
//     return 'hello';
// }

/* Formatting function for row details - modify as you need */
// let tr_details_button = document.querySelectorAll('.showdetails');
// for (let i = 0; i < tr_details_button.length; i++) {
//     tr_details_button[i].addEventListener('click', () => {
//         var tr = $(this).closest('tr');
//         console.log(tr);
//     });
// }


// function getClosest(el, tag) {
//     // this is necessary since nodeName is always in upper case
//     tag = tag.toUpperCase();
//     do {
//       if (el.nodeName === tag) {
//         // tag name is found! let's return it. :)
//         return el;
//       }
//     } while (el = el.parentNode);
  
//     // not found :(
//     return null;
//   }
  
//   console.log(getClosest(th, 'tbody'));