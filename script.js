const toggleMenu = document.querySelector(".menu-toggle input");
const navbar = document.querySelector(".main-menu");

toggleMenu.addEventListener("click", function () {
  navbar.classList.toggle("slide");
});

// gallery btn
// let all = document.getElementById("all");
// let computer = document.getElementById("computer");
// let working = document.getElementById("working");
// let pet = document.getElementById("pet");

//gallery image
// let petImg = document.querySelector(".pet");
// let computerImg = document.querySelector(".comuputer");
// let workingImg = document.querySelector(".working");

// function pet(p) {
//   console.log(p);
// }

let petImg1 = document.querySelector(" .pet1");
let petImg2 = document.querySelector(" .pet2");
let petImg3 = document.querySelector(" .pet3");
let computerImg1 = document.querySelector(" .computer1");
let computerImg2 = document.querySelector(" .computer2");
let computerImg3 = document.querySelector(" .computer3");
let workingImg1 = document.querySelector(" .working1");
let workingImg2 = document.querySelector(" .working2");
let workingImg3 = document.querySelector(" .working3");

function semua() {
  // console.log(p);
  // all.style.backgroundColor = "#8f8d8d";
  // all.style.Color = "rgb(32, 33, 46)";

  computerImg1.style.display = "block";
  computerImg2.style.display = "block";
  computerImg3.style.display = "block";
  petImg1.style.display = "block";
  petImg2.style.display = "block";
  petImg3.style.display = "block";
  workingImg1.style.display = "block";
  workingImg2.style.display = "block";
  workingImg3.style.display = "block";
}
function computer() {
  // console.log(p);
  computerImg1.style.display = "block";
  computerImg2.style.display = "block";
  computerImg3.style.display = "block";
  petImg1.style.display = "none";
  petImg2.style.display = "none";
  petImg3.style.display = "none";
  workingImg1.style.display = "none";
  workingImg2.style.display = "none";
  workingImg3.style.display = "none";
}
function working() {
  // console.log(p);
  workingImg1.style.display = "block";
  workingImg2.style.display = "block";
  workingImg3.style.display = "block";
  computerImg1.style.display = "none";
  computerImg2.style.display = "none";
  computerImg3.style.display = "none";
  petImg1.style.display = "none";
  petImg2.style.display = "none";
  petImg3.style.display = "none";
}
function pet() {
  // console.log(p);
  petImg1.style.display = "block";
  petImg2.style.display = "block";
  petImg3.style.display = "block";
  computerImg1.style.display = "none";
  computerImg2.style.display = "none";
  computerImg3.style.display = "none";
  workingImg1.style.display = "none";
  workingImg2.style.display = "none";
  workingImg3.style.display = "none";
}
