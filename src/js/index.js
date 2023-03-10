AOS.init();

const tablet = window.matchMedia("(max-width: 993px)");
let cellColumn = 2;
function updateCell() {
  if (tablet.matches) {
    cellColumn = 1;
    return cellColumn;
  } else {
    return;
  }
}
updateCell();

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
  groupCells: cellColumn,
});

//main js
const navItem = document.querySelectorAll(
  ".header .wrapper__header .header__menu li .header__menu-item"
);

const navItemMobile = document.querySelectorAll(
  ".header .wrapper__header .header__menu-mobile .header__menu-mobile__nav .header__nav-mobile li a"
);

//get menu mobile
const menuBar = document.querySelector(".icon__bar");
const menuMobile = document.querySelector(".header__menu-mobile");
//close menu
const btnCloseMenu = document.querySelector(".btn__close");

//click menu scroll to section desktop
const sections = [];
navItem.forEach((tagA, index) => {
  let href = tagA.getAttribute("href");
  let className = href.replace("#", "");
  let classSection = document.querySelector("." + className);
  sections.push(classSection);
  tagA.addEventListener("click", (e) => {
    e.preventDefault();
    let positionSection = classSection.offsetTop;
    window.scrollTo({
      top: positionSection - 80,
      behavior: "smooth",
    });
  });
});

//event scroll to section auto active menu desktop
window.addEventListener("scroll", (e) => {
  e.preventDefault();
  let positionScrollY = window.pageYOffset;
  sections.forEach((section, index) => {
    if (positionScrollY > section.offsetTop - 140) {
      navItem.forEach((removeTagA) => {
        removeTagA.classList.remove("active");
      });
      navItem[index].classList.add("active");
    } else {
      navItem[index].classList.remove("active");
    }
  });
});

//click menu scroll to section mobile
const sectionsMobile = [];
navItemMobile.forEach((tagA) => {
  let href = tagA.getAttribute("href");
  let className = href.replace("#", "");
  let classSection = document.querySelector("." + className);
  sectionsMobile.push(classSection);
  tagA.addEventListener("click", (e) => {
    e.preventDefault();
    menuMobile.classList.remove("active");
    let positionSection = classSection.offsetTop;
    window.scrollTo({
      top: positionSection - 80,
      behavior: "smooth",
    });
  });
});

//event scroll to section auto active menu mobile
window.addEventListener("scroll", (e) => {
  e.preventDefault();
  let positionScrollY = window.pageYOffset;
  sectionsMobile.forEach((section, index) => {
    if (positionScrollY > section.offsetTop - 140) {
      navItemMobile.forEach((removeTagA) => {
        removeTagA.classList.remove("active");
      });
      navItemMobile[index].classList.add("active");
    } else {
      navItemMobile[index].classList.remove("active");
    }
  });
});

const btnContact = document.querySelector(".header__menu-item-contact");
const btnContactOfMenuMobile = document.querySelector(
  ".header .wrapper__header .header__menu-mobile .header__menu-mobile__nav .wrapper__btn .--btn > a "
);

btnContactOfMenuMobile.addEventListener("click", (e) => {
  e.preventDefault();
  let classSection = document.querySelector(".contact");
  let positionSection = classSection.offsetTop;
  window.scrollTo({
    top: positionSection - 80,
    behavior: "smooth",
  });
  menuMobile.classList.remove("active");
});

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

let d; // Ng??y
let h; // Gi???
let m; // Ph??t
let s; // Gi??y

function countdownTetNguyenDan() {
  // L???y ng??y hi???n t???i
  var currentDate = new Date();

  // L???y ng??y b???t ?????u T???t Nguy??n ????n theo gi??? UTC (gi??? chu???n)
  var tetStartDate = new Date(Date.UTC(currentDate.getFullYear(), 1, -9, -7));

  // N???u ng??y hi???n t???i sau ng??y b???t ?????u T???t Nguy??n ????n,
  // th?? l???y ng??y b???t ?????u T???t Nguy??n ????n c???a n??m sau
  if (currentDate > tetStartDate) {
    tetStartDate.setFullYear(tetStartDate.getFullYear() + 1);
  }

  // T??nh s??? milisecond c??n l???i ?????n T???t Nguy??n ????n
  var timeLeft = tetStartDate - currentDate;

  // T??nh s??? ng??y c??n l???i
  d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  // T??nh s??? gi??? c??n l???i
  h = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // T??nh s??? ph??t c??n l???i
  m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

  // T??nh s??? gi??y c??n l???i
  s = Math.floor((timeLeft % (1000 * 60)) / 1000);
}
countdownTetNguyenDan();
//coming soon
const days = document.querySelector(".--days");
const minutes = document.querySelector(".--minutes");
const hours = document.querySelector(".--hours");
const seconds = document.querySelector(".--seconds");

let timeout = null; // Timeout

function start() {
  /*B?????C 1: CHUY???N ?????I D??? LI???U*/
  // N???u s??? gi??y = -1 t???c l?? ???? ch???y ng?????c h???t s??? gi??y, l??c n??y:
  //  - gi???m s??? ph??t xu???ng 1 ????n v???
  //  - thi???t l???p s??? gi??y l???i 59
  if (s === -1) {
    m -= 1;
    s = 59;
  }

  // N???u s??? ph??t = -1 t???c l?? ???? ch???y ng?????c h???t s??? ph??t, l??c n??y:
  //  - gi???m s??? gi??? xu???ng 1 ????n v???
  //  - thi???t l???p s??? ph??t l???i 59
  if (m === -1) {
    h -= 1;
    m = 59;
  }

  // N???u s??? gi??? = -1 t???c l?? ???? h???t gi???, l??c n??y:
  //  - D???ng ch????ng tr??nh
  if (h == -1) {
    d -= 1;
    h = 23;
  }

  // N???u s??? ngay = -1 t???c l?? ???? gi??? khuy???n m??i, l??c n??y:
  //  - D???ng ch????ng tr??nh
  if (d == -1) {
    clearTimeout(timeout);
    return false;
  }
  /*B?????C 1: HI???N TH??? ?????NG H???*/
  days.innerText = d < 10 ? "0" + d.toString() : d.toString();
  hours.innerText = h < 10 ? "0" + h.toString() : h.toString();
  minutes.innerText = m < 10 ? "0" + m.toString() : m.toString();
  seconds.innerText = s < 10 ? "0" + s.toString() : s.toString();

  /*B?????C 1: GI???M PH??T XU???NG 1 GI??Y V?? G???I L???I SAU 1 GI??Y */
  timeout = setTimeout(function () {
    s = s - 1;
    start();
  }, 1000);
}

function stop() {
  clearTimeout(timeout);
}

start();

const textErrorFullName = document.querySelector(".text-error-fullName");
const textErrorEmail = document.querySelector(".text-error-email");
const textErrorPhoneNumber = document.querySelector(".text-error-phoneNumber");
const textErrorContent = document.querySelector(".text-error-content");

const inputFullName = document.getElementById("fullName");
const inputEmail = document.getElementById("email");
const inputPhoneNumber = document.getElementById("phoneNumber");
const inputContent = document.getElementById("content");

const PATTERN = {
  EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
  PHONE: /((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$\b/i,
  VARIABLE_NAME: /^[a-zA-Z_$][a-zA-Z_$0-9]*$/i,
  ONLY_NUMBER: /^[0-9]*$/,
};

inputFullName.addEventListener("input", validateFullName);
inputEmail.addEventListener("input", validateEmail);
inputPhoneNumber.addEventListener("input", validatePhoneNumber);
inputContent.addEventListener("input", validateContent);

function validateForm() {
  let fullName = document.forms["myForm"]["fullName"].value;
  let email = document.forms["myForm"]["email"].value;
  let phoneNumber = document.forms["myForm"]["phoneNumber"].value;
  let content = document.forms["myForm"]["content"].value;
  if (fullName == "") {
    textErrorFullName.textContent = "Vui l??ng nh???p h??? v?? t??n.";
    inputFullName.classList.add("error");
    return false;
  } else if (fullName !== "") {
    textErrorFullName.textContent = "";
    inputFullName.classList.remove("error");
  }
  if (email == "") {
    textErrorEmail.textContent = "Vui l??ng nh???p email.";
    inputEmail.classList.add("error");
    return false;
  } else if (!email.match(PATTERN.EMAIL)) {
    textErrorEmail.textContent = "Email sai ?????nh d???ng.";
    inputEmail.classList.add("error");
    return false;
  } else if (email !== "") {
    textErrorEmail.textContent = "";
    inputEmail.classList.remove("error");
  }
  if (phoneNumber == "") {
    textErrorPhoneNumber.textContent = "Vui l??ng nh???p s??? ??i???n tho???i.";
    inputPhoneNumber.classList.add("error");
    return false;
  } else if (!phoneNumber.match(PATTERN.PHONE)) {
    textErrorPhoneNumber.textContent = "S??? ??i???n tho???i sai ?????nh d???ng.";
    inputPhoneNumber.classList.add("error");
    return false;
  } else if (phoneNumber !== "") {
    textErrorPhoneNumber.textContent = "";
    inputPhoneNumber.classList.remove("error");
  }
  if (content == "") {
    textErrorContent.textContent = "Vui l??ng nh???p n???i dung li??n h???.";
    inputContent.classList.add("error");
    return false;
  } else if (content !== "") {
    textErrorContent.textContent = "";
    inputContent.classList.remove("error");
  }
}
function validateFullName() {
  let fullName = document.forms["myForm"]["fullName"].value;
  if (fullName == "") {
    textErrorFullName.textContent = "Vui l??ng nh???p h??? v?? t??n.";
    inputFullName.classList.add("error");
    return false;
  } else if (fullName !== "") {
    textErrorFullName.textContent = "";
    inputFullName.classList.remove("error");
  }
}
function validateEmail() {
  let email = document.forms["myForm"]["email"].value;
  if (email == "") {
    textErrorEmail.textContent = "Vui l??ng nh???p email.";
    inputEmail.classList.add("error");
    return false;
  } else if (!email.match(PATTERN.EMAIL)) {
    textErrorEmail.textContent = "Email sai ?????nh d???ng.";
    inputEmail.classList.add("error");
    return false;
  } else if (email !== "") {
    textErrorEmail.textContent = "";
    inputEmail.classList.remove("error");
  }
}
function validatePhoneNumber() {
  let phoneNumber = document.forms["myForm"]["phoneNumber"].value;
  if (phoneNumber == "") {
    textErrorPhoneNumber.textContent = "Vui l??ng nh???p s??? ??i???n tho???i.";
    inputPhoneNumber.classList.add("error");
    return false;
  } else if (!phoneNumber.match(PATTERN.PHONE)) {
    textErrorPhoneNumber.textContent = "S??? ??i???n tho???i sai ?????nh d???ng.";
    inputPhoneNumber.classList.add("error");
    return false;
  } else if (phoneNumber !== "") {
    textErrorPhoneNumber.textContent = "";
    inputPhoneNumber.classList.remove("error");
  }
}
function validateContent() {
  let content = document.forms["myForm"]["content"].value;
  if (content == "") {
    textErrorContent.textContent = "Vui l??ng nh???p n???i dung li??n h???.";
    inputContent.classList.add("error");
    return false;
  } else if (content !== "") {
    textErrorContent.textContent = "";
    inputContent.classList.remove("error");
  }
}
