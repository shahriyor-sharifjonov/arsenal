// Header Menu
const headerButton: HTMLButtonElement = document.querySelector(".header__button");
const body = document.querySelector("body");
const headerMenu: HTMLUListElement = document.querySelector(".header__menu");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

headerButton.onclick = menuToggle;

window.onclick = (e: any) => {
  if (menuOpened && !e.composedPath().includes(headerButton) && !e.composedPath().includes(headerMenu)){ 
    menuToggle();
  }
  if(e.target.classList.contains('header__link')){
    menuToggle()
  }
  if(e.target.classList.contains('popup')){
    e.target.classList.remove('active')
    body.classList.remove('ov-hidden')
  }
};

function closePopup(){
  document.querySelector('.popup').classList.remove('active')
  body.classList.remove('ov-hidden')
}

function openPopup(){
  document.querySelector('.popup').classList.add('active')
  body.classList.add('ov-hidden')
}


$(document).ready(function() {
  $(".set > button").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > button i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > button i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > button").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
});
