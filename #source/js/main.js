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