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

//click menu scroll to section
// const sections = [];
navItem.forEach((tagA, index) => {
  let href = tagA.getAttribute("href");
  let className = href.replace("#", "");
  let classSection = document.querySelector("." + className);
  // sections.push(classSection);
  tagA.addEventListener("click", (e) => {
    e.preventDefault();
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

//get menu mobile
const menuBar = document.querySelector(".icon__bar");
const menuMobile = document.querySelector(".header__menu-mobile");

menuBar.addEventListener("click", () => {
  menuMobile.classList.add("active");
});

//close menu
const btnCloseMenu = document.querySelector(".btn__close");

btnCloseMenu.addEventListener("click", () => {
  menuMobile.classList.remove("active");
});

const backGroundBlack = document.querySelector(".back__ground-black");

backGroundBlack.addEventListener("click", () => {
  menuMobile.classList.remove("active");
});
