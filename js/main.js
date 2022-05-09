//header==========================================================
const headerBurger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");
const headerList = document.querySelector(".header__list");

headerBurger.onclick = function () {
	headerBurger.classList.toggle('active');
	headerMenu.classList.toggle('active');
	document.body.classList.toggle('lock')
}

headerList.addEventListener("click", function(event) {
   if( event.target.closest(".header__link")) {
      headerBurger.classList.remove('active');
      headerMenu.classList.remove('active');
      document.body.classList.remove('lock');
   }
});

window.onscroll = function() {
   const header = document.querySelector('.header');

   let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

   if (posTop > 50) {
      header.classList.add("changeBgc");
      header.classList.remove("marginHeader");
   } else {
      header.classList.remove("changeBgc");
      header.classList.add("marginHeader");
   }
}
