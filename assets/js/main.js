/*show menu*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*menu show*/
/* validate if constant exists */
if(navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add('show-menu')
  })
}

/*menu hidden*/
/*validate if constant exists */


/*show cart*/
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')

/*cart show*/
/*validate if constant exists*/
if(cartShop) {
  cartShop.addEventListener("click", () => {
    cart.classList.add('show-cart')
  })
}


/*cart hidden*/
/*validate if constant exists*/
if(cartClose) {
  cartClose.addEventListener("click", () => {
    cart.classList.remove('show-cart')
  })
}
/*show login*/
const login = document.getElementById('login'),
      loginButton = document.getElementById('login-button'),
      loginClose= document.getElementById('login-close')


/*login show*/
/*validate if constant exists*/
if(loginButton) {
  loginButton.addEventListener("click", () => {
    login.classList.add('show-login')
  })
}
/*login hidden*/
/*validate if constant exists*/
if(loginClose) {
  loginClose.addEventListener("click", () => {
    login.classList.remove('show-login')
  })
}
/*home swiper*/
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    Loop: 'true',

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*change background header*/

//function scrollHeader() { 
 // const header = document.getElementById('header')

  //if(this.scrollY >=50) header/classlist.add('scroll-header');else header.classlist.remove('scroll-header')
//}
//window.addEventListener('scroll', scrollHeader)
/*new swiper*/
var newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 16,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: 'true',

  pagination: {
    el: ".swiper-paagination",
    clickable:true,
  },
});

/*show scroll up*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up')
  //when the scroll is higher than 350 viewport height, add the show-scroll class to a tag with the scroll-top
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*light box*/


/*question accordion*/