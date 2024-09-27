let menuOpen = document.querySelector("#menu-open-icon");
let menuClose = document.querySelector("#menu-close-icon");
let navbar = document.querySelector(".navbar2");
let navLinks = document.querySelectorAll(".navbar2 a");
let background = document.querySelector(".navbar2-backgrnd");
let backgroundClose = document.querySelector(".navbar2-backgrnd");

// CODE FOR NAVBAR
for (i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    navbar.style.transform = "translateX(500px)";
  });
}

menuClose.addEventListener("click", () => {
  navbar.style.transform = "translateX(500px)";
});

menuOpen.addEventListener("click", () => {
  navbar.style.transform = "translateX(0px)";
});

// Code for scroll arrow
const element = document.getElementById("scroll-up-arrow");
const scrollLength = 550;

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= scrollLength) {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
});

// var tablinks = document.getElementsByClassName("tab-links");
// var tabcontents = document.getElementsByClassName("tab-contents");

// function opentab(tabname) {
//   for (tablink of tablinks) {
//     tablink.classList.remove("active-link");
//   }
//   for (tabcontent of tabcontents) {
//     tabcontent.classList.remove("active-tab");
//   }
//   event.currentTarget.classList.add("active-link");
//   document.getElementById(tabname).classList.add("active-tab");
// }

// -------------------TYPEWRITER ANIMATION FOR SPAN TAG NAMED:"#TYPING"-----------------
var options = {
  strings: ["Web Developer.", "Software Engineer."],
  typeSpeed: 100,
  startDelay: 100,
  backSpeed: 100,
  backDelay: 500,
  // startDelay: 1000,
  loop: true,
};

var typed = new Typed("#typing", options);

// document.addEventListener("keydown", function (e) {
//   console.log(e.key);

//   // if (e.key === "Escape") {
//   //   closeModal();
//   // }
// });

const modals = document.querySelectorAll(".popup");
const btnCloseModals = document.querySelectorAll(".close-modal");
const btnsOpenModals = document.querySelectorAll(".show-modal");
const popupBg = document.querySelectorAll(".pop_bg");

const openModal = function (modal) {
  modal.classList.add("active");
};

const closeModal = function (modal) {
  modal.classList.remove("active");
};

btnsOpenModals.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    openModal(modals[index]);
  });
  // btnCloseModal.addEventListener("click", closeModal);

  btnCloseModals[index].addEventListener("click", () => {
    closeModal(modals[index]);
  });

  popupBg[index].addEventListener("click", () => {
    closeModal(modals[index]);
  });
});
