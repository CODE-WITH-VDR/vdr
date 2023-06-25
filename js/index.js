// For Add Funcnality of Navbar
burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".nav-list");
rightNav = document.querySelector(".rightNav");

burger.addEventListener("click", () => {
  rightNav.classList.toggle("v-classresp");
  navList.classList.toggle("v-classresp");
  navbar.classList.toggle("h-navresp");
});
// Code Ends

//For Storing Data In Google Form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwyQDZNJx4rirna1Xv_oHnjAD2gFKnAHZOXGe7X9YqudzgLCMJYAomjne1pP6UjLkVyLA/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thanks for Contacting me..! I Will Contact You Soon...")
    )
    .catch((error) => console.error("Error!", error.message));
});

// Code Ends

// For Sccrolling To Top
const btnScrollToTop = document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
// Code Ends
// For Changing Themes
const enableDarkMode = () => {
  $("body").addClass("dark");
  $(".change").text("ON");
  document.cookie = "dark";
};
const disableDarkMode = () => {
  $("body").removeClass("dark");
  $(".change").text("OFF");
  document.cookie = "light";
};
let ele = document.getElementsByClassName("change");
darkMode = document.cookie; //getting cookie data
$(".change").on("click", function () {
  mode = document.body.classList.contains("dark");
  if (mode == true) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});
//Mode Check
if (darkMode === "light") {
  disableDarkMode();
} else if (darkMode === "dark") {
  enableDarkMode();
}
// Code Ends

// For Google Searh
const f = document.getElementById("example");
const q = document.getElementById("query");
const google = "https://www.google.com/search?q=";
const site = "";

function submitted(event) {
  event.preventDefault();
  const url = google + site + "+" + q.value;
  const win = window.open(url, "_blank");
  win.focus();
}

f.addEventListener("submit", submitted);
// Code Ends

try {
  //For Youtube video in support page
  var substack = document.createElement("iframe");
  var loadSubscribe = document.getElementById("load-subscribe");
  substack.src = "https://www.youtube.com/embed/JKUZ_F_65nU";
  let btn1 = document.getElementById("ytvideo");
  let ctr = 0;
  btn1.onclick = () => {
    if (ctr % 2 == 0) {
      loadSubscribe.appendChild(substack);
      btn1.innerHTML = "❌Close";
    } else {
      loadSubscribe.removeChild(substack);
      btn1.innerHTML = "Watch Video";
    }
    ctr++;
  };
} catch (error) {}
// Code Ends
// copyright upgrader
const d = new Date();
let year = d.getFullYear();
let copyright = document.getElementsByClassName("copy")[0];
copyright.innerHTML =
  "Copyright &copy 2020-" + year + " CodeWithVdr , All Rights Reserved";
// Ends
// Removing underline
document.getElementsByTagName("u")[0].style.textDecoration = "none";
document.getElementsByTagName("u")[1].style.textDecoration = "none";

//DISABLE CONTEXT MENU
// document.addEventListener(
//   "keydown",
//   function () {
//     if (event.keyCode == 123) {
//       return false;
//     } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
//       return false;
//     } else if (event.ctrlKey && event.keyCode == 85) {
//       return false;
//     }
//   },
//   false
// );

// if (document.addEventListener) {
//   document.addEventListener(
//     "contextmenu",
//     function (e) {
//       e.preventDefault();
//     },
//     false
//   );
// } else {
//   document.attachEvent("oncontextmenu", function () {
//     window.event.returnValue = false;
//   });
// }
