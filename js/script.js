let navbar=document.querySelector('.header .navbar')

document.querySelector("#menu-btn").onclick = ()=>{
   navbar.classList.add('active')
}

document.querySelector("#close-navbar").onclick = ()=>{
   navbar.classList.remove('active')
};


let registerBtn=document.querySelector(".account-form .register-btn")
let loginBtn=document.querySelector(".account-form .login-btn")

registerBtn.onclick=()=>{
    registerBtn.classList.add('active')
    loginBtn.classList.remove('active')
    document.querySelector('.account-form .login-form').classList.remove('active')
    document.querySelector('.account-form .register-form').classList.add('active')

}
loginBtn.onclick=()=>{
    registerBtn.classList.remove('active')
    loginBtn.classList.add('active')
    document.querySelector('.account-form .login-form').classList.add('active')
    document.querySelector('.account-form .register-form').classList.remove('active')

}

let acoountForm=document.querySelector('.account-form')

document.querySelector("#account-btn").onclick = ()=>{
   acoountForm.classList.add('active')
}

document.querySelector("#close-form").onclick = ()=>{
   acoountForm.classList.remove('active')
};


var swiper = new Swiper(".home-slider", {
   pagination: {
     el: ".swiper-pagination",
     clickable:true,
   },
   loop:true,
   grabCursor:true,

 });


var swiper = new Swiper(".home-coursor-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      0: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
       
      },
      991: {
        slidesPerView: 3,
      
      },
    },
 });

var swiper = new Swiper(".teachers-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      0: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
       
      },
      991: {
        slidesPerView: 3,
      
      },
    },
 });

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      0: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
       
      },
      991: {
        slidesPerView: 3,
      
      },
    },
 });


var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      0: {
        slidesPerView: 2,
      },

      450: {
        slidesPerView: 3,
       
      },
      768: {
        slidesPerView: 4,
       
      },
      991: {
        slidesPerView: 4,
      
      },
      1120: {
        slidesPerView: 5,
      
      },
    },
 });



 let accordion= document.querySelectorAll(".faq .accordion-container .accordion")

 accordion.forEach(acco=>{
  acco.onclick = () =>{
    accordion.forEach(dion => dion.classList.remove("active"))
    acco.classList.toggle("active")
  }
 })

 document.querySelector('.load-more .btn').onclick = () =>{
  document.querySelectorAll('.courses .box-container .hide').forEach(show=>{
     show.style.display='block'
  });

  document.querySelector('.load-more .btn').style.display="none"
};
