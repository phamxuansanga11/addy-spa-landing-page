// js of slider
var elem = document.querySelector(".wrapper__slider");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true,
  autoPlay: 2000,
});

//main js
const navItem = document.querySelectorAll(".header__menu-item");

//get menu mobile
const menuBar = document.querySelector(".icon__bar");
const menuMobile = document.querySelector(".header__menu-mobile");
//close menu
const btnCloseMenu = document.querySelector(".btn__close");

//click menu scroll to section
// const sections = [];
navItem.forEach((tagA, index) => {
  let href = tagA.getAttribute("href");
  let className = href.replace("#", "");
  let classSection = document.querySelector("." + className);
  // sections.push(classSection);
  tagA.addEventListener("click", (e) => {
    e.preventDefault();
    menuMobile.classList.remove("active");
    navItem.forEach((item) => {
      item.classList.remove("active");
    });
    let positionSection = classSection.offsetTop;
    window.scrollTo({
      top: positionSection - 80,
      behavior: "smooth",
    });
    tagA.classList.add("active");
  });
});

const btnContact = document.querySelector(".header__menu-item-contact");

btnContact.addEventListener("click", (e) => {
  e.preventDefault();
  let classSection = document.querySelector(".contact");
  let positionSection = classSection.offsetTop;
  window.scrollTo({
    top: positionSection - 80,
    behavior: "smooth",
  });
});

menuBar.addEventListener("click", () => {
  menuMobile.classList.add("active");
});

btnCloseMenu.addEventListener("click", () => {
  menuMobile.classList.remove("active");
});

const backGroundBlack = document.querySelector(".back__ground-black");

backGroundBlack.addEventListener("click", () => {
  menuMobile.classList.remove("active");
});
