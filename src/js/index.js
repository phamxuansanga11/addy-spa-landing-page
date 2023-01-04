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
const btnContactOfMenuMobile = document.querySelector(
  ".header .wrapper__header .header__menu-mobile .header__menu-mobile__nav .wrapper__btn .--btn > a "
);

btnContactOfMenuMobile.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(btnContactOfMenuMobile);
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

let d; // Ngày
let h; // Giờ
let m; // Phút
let s; // Giây

function countdownTetNguyenDan() {
  // Lấy ngày hiện tại
  var currentDate = new Date();

  // Lấy ngày bắt đầu Tết Nguyên Đán theo giờ UTC (giờ chuẩn)
  var tetStartDate = new Date(Date.UTC(currentDate.getFullYear(), 1, -9, -7));

  // Nếu ngày hiện tại sau ngày bắt đầu Tết Nguyên Đán,
  // thì lấy ngày bắt đầu Tết Nguyên Đán của năm sau
  if (currentDate > tetStartDate) {
    tetStartDate.setFullYear(tetStartDate.getFullYear() + 1);
  }

  // Tính số milisecond còn lại đến Tết Nguyên Đán
  var timeLeft = tetStartDate - currentDate;

  // Tính số ngày còn lại
  d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  // Tính số giờ còn lại
  h = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // Tính số phút còn lại
  m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

  // Tính số giây còn lại
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
  /*BƯỚC 1: CHUYỂN ĐỔI DỮ LIỆU*/
  // Nếu số giây = -1 tức là đã chạy ngược hết số giây, lúc này:
  //  - giảm số phút xuống 1 đơn vị
  //  - thiết lập số giây lại 59
  if (s === -1) {
    m -= 1;
    s = 59;
  }

  // Nếu số phút = -1 tức là đã chạy ngược hết số phút, lúc này:
  //  - giảm số giờ xuống 1 đơn vị
  //  - thiết lập số phút lại 59
  if (m === -1) {
    h -= 1;
    m = 59;
  }

  // Nếu số giờ = -1 tức là đã hết giờ, lúc này:
  //  - Dừng chương trình
  if (h == -1) {
    d -= 1;
    h = 23;
  }

  // Nếu số ngay = -1 tức là đã giờ khuyến mãi, lúc này:
  //  - Dừng chương trình
  if (d == -1) {
    clearTimeout(timeout);
    return false;
  }
  /*BƯỚC 1: HIỂN THỊ ĐỒNG HỒ*/
  days.innerText = d < 10 ? "0" + d.toString() : d.toString();
  hours.innerText = h < 10 ? "0" + h.toString() : h.toString();
  minutes.innerText = m < 10 ? "0" + m.toString() : m.toString();
  seconds.innerText = s < 10 ? "0" + s.toString() : s.toString();

  /*BƯỚC 1: GIẢM PHÚT XUỐNG 1 GIÂY VÀ GỌI LẠI SAU 1 GIÂY */
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
  PHONE: /((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})\b/i,
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
    textErrorFullName.textContent = "Vui lòng nhập họ và tên.";
    inputFullName.classList.add("error");
    return false;
  } else if (fullName !== "") {
    textErrorFullName.textContent = "";
    inputFullName.classList.remove("error");
  }
  if (email == "") {
    textErrorEmail.textContent = "Vui lòng nhập email.";
    inputEmail.classList.add("error");
    return false;
  } else if (!email.match(PATTERN.EMAIL)) {
    textErrorEmail.textContent = "Email sai định dạng.";
    inputEmail.classList.add("error");
    return false;
  } else if (email !== "") {
    textErrorEmail.textContent = "";
    inputEmail.classList.remove("error");
  }
  if (phoneNumber == "") {
    textErrorPhoneNumber.textContent = "Vui lòng nhập số điện thoại.";
    inputPhoneNumber.classList.add("error");
    return false;
  } else if (!phoneNumber.match(PATTERN.PHONE)) {
    textErrorPhoneNumber.textContent = "Số điện thoại sai định dạng.";
    inputPhoneNumber.classList.add("error");
    return false;
  } else if (phoneNumber !== "") {
    textErrorPhoneNumber.textContent = "";
    inputPhoneNumber.classList.remove("error");
  }
  if (content == "") {
    textErrorContent.textContent = "Vui lòng nhập nội dung liên hệ.";
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
    textErrorFullName.textContent = "Vui lòng nhập họ và tên.";
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
    textErrorEmail.textContent = "Vui lòng nhập email.";
    inputEmail.classList.add("error");
    return false;
  } else if (!email.match(PATTERN.EMAIL)) {
    textErrorEmail.textContent = "Email sai định dạng.";
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
    textErrorPhoneNumber.textContent = "Vui lòng nhập số điện thoại.";
    inputPhoneNumber.classList.add("error");
    return false;
  } else if (!phoneNumber.match(PATTERN.PHONE)) {
    textErrorPhoneNumber.textContent = "Số điện thoại sai định dạng.";
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
    textErrorContent.textContent = "Vui lòng nhập nội dung liên hệ.";
    inputContent.classList.add("error");
    return false;
  } else if (content !== "") {
    textErrorContent.textContent = "";
    inputContent.classList.remove("error");
  }
}
