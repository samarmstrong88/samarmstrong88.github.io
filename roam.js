var menu_toggle = document.getElementsByClassName('menu-toggle')[0];
var nav_bar = document.getElementsByClassName('nav-bar')[0];

var handleMenuToggle = function () {
  menu_toggle.classList.toggle('open');
  nav_bar.classList.toggle('open');
}

window.addEventListener('click', handleMenuToggle)





// 1window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }
// const bio = document.getElementsByClassName('bio')[0];





// function debounce(func, wait, immediate) {
//   var timeout;
//   return function () {
//     var context = this, args = arguments;
//     var later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// };

// var handleInitialScroll = debounce(function () {
//   if (!this.oldScroll) this.oldScroll = 0;
//   if (this.oldScroll < this.scrollY) {
//     window.scrollTo(0, document.body.scrollHeight)
//   }
//   else console.log('up')
//   this.oldScroll = this.scrollY;


// }, 200);



// // window.addEventListener('scroll', handleInitialScroll)
